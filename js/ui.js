var getFilteredShips = function() {
    var ships = Database.ships;
    var result = [];
    for (var key in ships) {
        var ship = ships[key];
        if (UI.browseFaction !== 'All' && ship.faction !== UI.browseFaction && ship.faction !== ShipFaction.Universal) continue;
        if (UI.browseRole !== 'All' && ship.role !== UI.browseRole) continue;
        if (UI.browseTier !== 'All' && ship.tier.value !== parseInt(UI.browseTier)) continue;
        if (UI.browseRarity !== 'All' && ship.rarity !== UI.browseRarity) continue;
        if (UI.browseFilter) {
            var search = UI.browseFilter.toLowerCase();
            if (ship.name.toLowerCase().indexOf(search) === -1 &&
                ship.faction.toLowerCase().indexOf(search) === -1) continue;
        }
        result.push(ship);
    }
    result.sort(function(a, b) { return a.compareTo(b); });
    return result;
};

var isShipInCategory = function(shipId, category) {
    var adm = UI.currentAdmiral;
    if (!adm) return false;
    if (category === 'active') return adm.active.indexOf(shipId) !== -1;
    if (category === 'maintenance') {
        for (var i = 0; i < adm.maintenance.length; i++) {
            if (adm.maintenance[i].id === shipId) return true;
        }
        return false;
    }
    if (category === 'one-time') return adm.oneTime.indexOf(shipId) !== -1;
    return false;
};

var renderShipList = function(containerId, ships, type) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    if (!ships || ships.length === 0) {
        container.innerHTML = '<div style="padding:8px;color:#666;font-style:italic;font-size:12px">No ships</div>';
        return;
    }
    for (var i = 0; i < ships.length; i++) {
        var ship = ships[i];
        var div = document.createElement('div');
        div.className = 'ship-item';

        if (type === 'maintenance') {
            var maintShip = getMaintenanceEntry(ship.id);
            var countdown = '';
            var title = '';
            if (maintShip && maintShip.readyTime) {
                var readyDate = new Date(maintShip.readyTime);
                title = 'Ready at: ' + readyDate.toLocaleTimeString();
                countdown = ' | <span class="maint-timer" data-ready="' + maintShip.readyTime + '" style="color:#ff9800">Calculating...</span>';
            }
            div.innerHTML = '<span class="ship-name" style="color:' + getRarityColor(ship.rarity) + '">' +
                ship.getDisplayName() + '</span>' +
                '<span class="ship-stats">' + ship.eng + '/' + ship.tac + '/' + ship.sci + '</span>' +
                countdown;
            if (title) div.title = title;
        } else {
            div.innerHTML = '<span class="ship-name" style="color:' + getRarityColor(ship.rarity) + '">' +
                ship.getDisplayName() + '</span>' +
                '<span class="ship-stats">' + ship.eng + '/' + ship.tac + '/' + ship.sci + '</span>';
        }

        div.addEventListener('click', (function(s, t) {
            return function() { UI.handleShipClick(s, t); };
        })(ship, type));

        if (type === 'active') {
            div.addEventListener('dblclick', (function(s) {
                return function() {
                    UI.currentAdmiral.removeActive(s.id);
                    var readyTime = calculateReadyTime(s, { duration: 30, maintenanceReduction: 0 });
                    UI.currentAdmiral.addMaintenance(s.id, readyTime);
                    Persistence.saveAdmirals(UI.admirals);
                    UI.render();
                };
            })(ship));
        }

        container.appendChild(div);
    }
};

var getMaintenanceEntry = function(shipId) {
    var adm = UI.currentAdmiral;
    if (!adm) return null;
    for (var i = 0; i < adm.maintenance.length; i++) {
        if (adm.maintenance[i].id.toLowerCase() === shipId.toLowerCase()) {
            return adm.maintenance[i];
        }
    }
    return null;
};

var formatCountdown = function(readyTime) {
    var diff = readyTime - Date.now();
    if (diff <= 0) return 'Ready!';
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    if (hours > 0) return hours + 'h ' + minutes + 'm';
    return minutes + 'm';
};

var updateMaintenanceTimers = function() {
    var timers = document.querySelectorAll('.maint-timer');
    for (var i = 0; i < timers.length; i++) {
        var readyTime = parseInt(timers[i].getAttribute('data-ready'));
        if (!isNaN(readyTime)) {
            timers[i].textContent = formatCountdown(readyTime);
        }
    }
};

var renderAssignments = function(adm) {
    var container = document.getElementById('assignments-container');
    if (!container) return;
    container.innerHTML = '';

    var allEvents = Database.getEvents();

    for (var i = 0; i < 1; i++) {
        var a = adm.assignments[i];
        if (!a) continue;

        var card = document.createElement('div');
        card.className = 'assignment-card';

        var assignSelectHtml = '<select id="assign-select-' + i + '" class="assign-select">';
        assignSelectHtml += '<option value="">~~ Select Assignment ~~</option>';
        var allAssignments = Database.getAssignments();
        for (var key in allAssignments) {
            var aa = allAssignments[key];
            if (!aa || !aa.name) continue;
            var selected = (a.name === aa.name) ? 'selected' : '';
            assignSelectHtml += '<option value="' + key + '" ' + selected + '>' + aa.name + '</option>';
        }
        assignSelectHtml += '</select>';

        var eventSelectHtml = '<select id="event-select-' + i + '" class="event-select">';
        eventSelectHtml += '<option value="">No Event</option>';
        for (var eKey in allEvents) {
            var ev = allEvents[eKey];
            if (!ev || !ev.name) continue;
            var eventSelected = (a.eventSelected === ev.name) ? 'selected' : '';
            eventSelectHtml += '<option value="' + eKey + '" ' + eventSelected + '>' + ev.name + '</option>';
        }
        eventSelectHtml += '</select>';

        card.innerHTML =
            '<div class="assignment-header">' +
                '<span class="assignment-name">' + assignSelectHtml + eventSelectHtml + '</span>' +
                '<span class="assignment-rarity" style="color:' + getRarityColor(a.rarity) + '">' + a.rarity + '</span>' +
            '</div>' +
            '<div class="assignment-stats">' +
                '<div class="stat-box"><div class="stat-label">Required ENG</div><div class="stat-value">' + a.requiredEng + '</div></div>' +
                '<div class="stat-box"><div class="stat-label">Required TAC</div><div class="stat-value">' + a.requiredTac + '</div></div>' +
                '<div class="stat-box"><div class="stat-label">Required SCI</div><div class="stat-value">' + a.requiredSci + '</div></div>' +
                '<div class="stat-box"><div class="stat-label">Duration</div><div class="stat-value">' + formatDuration((a.hours || 0) * 60 + (a.minutes || 0)) + '</div></div>' +
            '</div>';

        var eventEng = a.eventEng || 0;
        var eventTac = a.eventTac || 0;
        var eventSci = a.eventSci || 0;
        var eventCrit = a.eventCritRate || 0;

        if (eventEng !== 0 || eventTac !== 0 || eventSci !== 0 || eventCrit !== 0) {
            card.innerHTML +=
                '<div class="assignment-stats" style="margin-top:6px">' +
                    '<div class="stat-box"><div class="stat-label">Event ENG</div><div class="stat-value" style="color:var(--accent)">' + (eventEng > 0 ? '+' : '') + eventEng + '</div></div>' +
                    '<div class="stat-box"><div class="stat-label">Event TAC</div><div class="stat-value" style="color:var(--accent)">' + (eventTac > 0 ? '+' : '') + eventTac + '</div></div>' +
                    '<div class="stat-box"><div class="stat-label">Event SCI</div><div class="stat-value" style="color:var(--accent)">' + (eventSci > 0 ? '+' : '') + eventSci + '</div></div>' +
                    '<div class="stat-box"><div class="stat-label">Crit Rate</div><div class="stat-value" style="color:#ff9800">' + eventCrit + '</div></div>' +
                '</div>';
        }

        var totalEng = a.eng();
        var totalTac = a.tac();
        var totalSci = a.sci();
        var mantRed = a.eventMaintenanceReduction || 0;

        card.innerHTML +=
            '<div class="assignment-stats" style="margin-top:6px;border-top:1px solid var(--border-color);padding-top:6px">' +
                '<div class="stat-box"><div class="stat-label">Total ENG</div><div class="stat-value" style="color:var(--success)">' + totalEng + '</div></div>' +
                '<div class="stat-box"><div class="stat-label">Total TAC</div><div class="stat-value" style="color:var(--success)">' + totalTac + '</div></div>' +
                '<div class="stat-box"><div class="stat-label">Total SCI</div><div class="stat-value" style="color:var(--success)">' + totalSci + '</div></div>' +
                '<div class="stat-box"><div class="stat-label">Mant. Red.</div><div class="stat-value" style="color:var(--danger)">' + Math.round(mantRed * 100) + '%</div></div>' +
            '</div>';

        container.appendChild(card);
    }

    for (var i = 0; i < 1; i++) {
        (function(idx) {
            var assignSel = document.getElementById('assign-select-' + idx);
            var eventSel = document.getElementById('event-select-' + idx);
            if (!assignSel) return;

            assignSel.addEventListener('change', function() {
                var a = adm.assignments[idx];
                if (!a) return;
                if (!this.value) {
                    a.name = '';
                    a.rarity = Rarity.Common;
                    a.requiredEng = 0;
                    a.requiredTac = 0;
                    a.requiredSci = 0;
                    a.hours = 0;
                    a.minutes = 0;
                    a.duration = 0;
                    Persistence.saveAdmirals(UI.admirals);
                    UI.render();
                    return;
                }
                var assignment = Database.getAssignment(this.value);
                if (assignment) {
                    a.name = assignment.name;
                    a.rarity = assignment.rarity;
                    a.requiredEng = assignment.eng;
                    a.requiredTac = assignment.tac;
                    a.requiredSci = assignment.sci;
                    a.hours = assignment.hours;
                    a.minutes = assignment.minutes;
                    a.duration = (assignment.hours || 0) * 60 + (assignment.minutes || 0);
                    if (!a.eventSelected) {
                        a.eventEng = 0;
                        a.eventTac = 0;
                        a.eventSci = 0;
                        a.eventCritRate = 0;
                        a.eventMaintenanceReduction = 0;
                    }
                    Persistence.saveAdmirals(UI.admirals);
                    UI.render();
                }
            });

            if (eventSel) {
                eventSel.addEventListener('change', function() {
                    var a = adm.assignments[idx];
                    if (!a) return;
                    if (!this.value) {
                        a.eventSelected = '';
                        a.eventEng = 0;
                        a.eventTac = 0;
                        a.eventSci = 0;
                        a.eventCritRate = 0;
                        a.eventMaintenanceReduction = 0;
                    } else {
                        var event = Database.getEvent(this.value);
                        if (event) {
                            a.eventSelected = event.name;
                            a.eventEng = event.eng || 0;
                            a.eventTac = event.tac || 0;
                            a.eventSci = event.sci || 0;
                            a.eventCritRate = event.critRate || 0;
                            a.eventMaintenanceReduction = event.getMaintenanceReduction ? event.getMaintenanceReduction() : 0;
                        }
                    }
                    Persistence.saveAdmirals(UI.admirals);
                    UI.render();
                });
            }
        })(i);
    }
};

var renderSolutions = function(solutions, assignment) {
    var container = document.getElementById('solutions-container');
    if (!solutions || solutions.length === 0) {
        container.innerHTML = '<div class="no-solution">Unable to find a solution. Try different assignments.</div>';
        return;
    }

    if (UI.currentSolutionIndex >= solutions.length) {
        UI.currentSolutionIndex = 0;
    }

    var currentSol = solutions[UI.currentSolutionIndex];
    var html = '<div class="solutions-header">';
    html += '<span>Score: ' + currentSol.getScore().toFixed(2) + '</span>';
    html += '<div class="solution-nav">';
    html += '<button id="prev-solution" class="btn-small">Prev</button>';
    html += '<span id="solution-index">' + (UI.currentSolutionIndex + 1) + '/' + solutions.length + '</span>';
    html += '<button id="next-solution" class="btn-small">Next</button>';
    html += '<button id="assign-solution" class="btn-small btn-primary" style="margin-left:8px">Assign</button>';
    html += '</div></div>';

    var assignName = assignment ? (assignment.name || '~~ Select Assignment ~~') : '';
    var eventLabel = assignment && assignment.eventSelected ? ' + ' + assignment.eventSelected : '';

    html += '<div class="solution-card best">';
    var score = currentSol.getScore();
    var scoreColor = score === 0 ? 'var(--success)' : (score < 2 ? 'var(--accent)' : (score < 10 ? 'var(--warning)' : 'var(--danger)'));
    html += '<div class="solution-score" style="color:' + scoreColor + '">Score: ' + score.toFixed(2) + ' <span style="font-size:12px;font-weight:400;">(' + (score === 0 ? 'Perfect fit' : (score < 2 ? 'Excellent' : (score < 10 ? 'Good' : 'Poor fit'))) + ')</span></div>';

      var sols = currentSol.getSolutions();
    for (var j = 0; j < sols.length; j++) {
        var s = sols[j];
        var reqEng = s.effectiveReqEng != null ? s.effectiveReqEng : (assignment ? assignment.requiredEng + (assignment.eventEng || 0) : 0);
        var reqTac = s.effectiveReqTac != null ? s.effectiveReqTac : (assignment ? assignment.requiredTac + (assignment.eventTac || 0) : 0);
        var reqSci = s.effectiveReqSci != null ? s.effectiveReqSci : (assignment ? assignment.requiredSci + (assignment.eventSci || 0) : 0);
        var reqCrit = s.effectiveReqCrit != null ? s.effectiveReqCrit : (assignment ? assignment.getTargetCritRate() : 0);

        html += '<div class="assignment-solution">';
        html += '<div class="assignment-header">Assignment ' + (j + 1) + ': ' + assignName + eventLabel;
        html += ' - ENG: ' + (s.engForDisplay || s.eng) + ' TAC: ' + (s.tacForDisplay || s.tac) + ' SCI: ' + (s.sciForDisplay || s.sci);
        html += ' - Crit: ' + (s.critRateForDisplay || s.critRate);
        html += '</div>';
        html += '<div class="assignment-stats" style="margin-bottom:8px;">';
        html += '<div class="stat-box"><div class="stat-label">Req ENG</div><div class="stat-value" style="font-size:12px;">' + reqEng + '</div></div>';
        html += '<div class="stat-box"><div class="stat-label">Req TAC</div><div class="stat-value" style="font-size:12px;">' + reqTac + '</div></div>';
        html += '<div class="stat-box"><div class="stat-label">Req SCI</div><div class="stat-value" style="font-size:12px;">' + reqSci + '</div></div>';
        html += '<div class="stat-box"><div class="stat-label">Req Crit</div><div class="stat-value" style="font-size:12px;">' + reqCrit + '</div></div>';
        html += '</div>';

        for (var k = 0; k < s.ships.length; k++) {
            var ship = s.ships[k];
            if (ship) {
                html += '<div class="solution-ship">';
                html += '<span style="color:' + getRarityColor(ship.rarity) + '">' + ship.name + '</span>';
                html += '<span>' + ship.eng + '/' + ship.tac + '/' + ship.sci + '</span>';
                html += '</div>';
            }
        }

        if (s.shipBonuses && s.shipBonuses.length > 0) {
            html += '<div class="ship-bonuses">';
            html += '<div style="font-size:11px;font-weight:600;margin-bottom:4px;color:var(--accent);">Ship Bonuses Applied:</div>';
            for (var b = 0; b < s.shipBonuses.length; b++) {
                var bonus = s.shipBonuses[b];
                var effects = [];

                if (bonus.abilityDesc) {
                    effects.push(bonus.abilityDesc);
                }

                if (bonus.bonusAfter.ignoreEventEng && !bonus.bonusBefore.ignoreEventEng) {
                    effects.push('Ignores event ENG');
                }
                if (bonus.bonusAfter.ignoreEventTac && !bonus.bonusBefore.ignoreEventTac) {
                    effects.push('Ignores event TAC');
                }
                if (bonus.bonusAfter.ignoreEventSci && !bonus.bonusBefore.ignoreEventSci) {
                    effects.push('Ignores event SCI');
                }
                if (bonus.bonusAfter.eventCritMultiplier > bonus.bonusBefore.eventCritMultiplier) {
                    effects.push('Event crit: ' + bonus.bonusBefore.eventCritMultiplier + 'x → ' + bonus.bonusAfter.eventCritMultiplier + 'x');
                }
                if (bonus.bonusAfter.engCritMultiplier > bonus.bonusBefore.engCritMultiplier) {
                    effects.push('ENG crit: ' + bonus.bonusBefore.engCritMultiplier + 'x → ' + bonus.bonusAfter.engCritMultiplier + 'x');
                }
                if (bonus.bonusAfter.tacCritMultiplier > bonus.bonusBefore.tacCritMultiplier) {
                    effects.push('TAC crit: ' + bonus.bonusBefore.tacCritMultiplier + 'x → ' + bonus.bonusAfter.tacCritMultiplier + 'x');
                }
                if (bonus.bonusAfter.sciCritMultiplier > bonus.bonusBefore.sciCritMultiplier) {
                    effects.push('SCI crit: ' + bonus.bonusBefore.sciCritMultiplier + 'x → ' + bonus.bonusAfter.sciCritMultiplier + 'x');
                }

                if (effects.length > 0) {
                    html += '<div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px;padding-left:8px;">';
                    html += '<span style="color:' + getRarityColor(ship.rarity) + '">' + bonus.shipName + '</span>: ' + effects.join(' | ');
                    html += '</div>';
                }
            }
            html += '</div>';
        }

        html += '</div>';
    }
    html += '</div>';

    html += '<div class="score-explanation">';
    html += '<strong>Score Guide:</strong> Lower is better. Score of 0 = perfect fit (all stats met). ';
    html += 'Shortfalls below requirements are penalized ×10. Crit rate shortfall penalized ×1. ';
    html += 'Normalized by total requirement sum.';
    html += '</div>';
    html += '<div style="margin-top:8px;color:var(--text-secondary);font-size:12px;">Showing ' + solutions.length + ' solutions. Click "Assign" to apply this solution to the plan.</div>';

    container.innerHTML = html;

    var prevBtn = document.getElementById('prev-solution');
    var nextBtn = document.getElementById('next-solution');
    var assignBtn = document.getElementById('assign-solution');
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            UI.currentSolutionIndex = Math.max(0, UI.currentSolutionIndex - 1);
            renderSolutions(solutions, assignment);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            UI.currentSolutionIndex = Math.min(solutions.length - 1, UI.currentSolutionIndex + 1);
            renderSolutions(solutions, assignment);
        });
    }
    if (assignBtn) {
        assignBtn.addEventListener('click', function() {
            applySolution(currentSol);
        });
    }
};

var applySolution = function(solution) {
    var adm = UI.currentAdmiral;
    if (!adm) return;

    var sols = solution.getSolutions();
       for (var i = 0; i < sols.length && i < 1; i++) {
        var s = sols[i];
        var assignment = adm.assignments[i];
        if (!assignment) continue;

        for (var j = 0; j < s.ships.length; j++) {
            var ship = s.ships[j];
            if (ship) {
                if (!adm.isActive(ship.id) && !adm.isMaintenance(ship.id)) {
                    adm.addActive(ship.id);
                }
                var readyTime = calculateReadyTime(ship, s);
                adm.addMaintenance(ship.id, readyTime);
            }
        }
    }

    Persistence.saveAdmirals(UI.admirals);
    UI.render();

    var solutionsContainer = document.getElementById('solutions-container');
    solutionsContainer.innerHTML = '<div style="color:#4caf50;padding:8px;">Solution applied to plan! Ships added to maintenance with calculated ready times.</div>';
};

var calculateReadyTime = function(ship, solution) {
    var now = Date.now();
    var assignmentDurationMs = solution.duration * 60 * 1000;
    var tierMaintenanceMs = (ship.tier ? ship.tier.getMaintenanceTimeMinutes() : 0) * 60 * 1000;
    var reduction = Math.min(Math.max(solution.maintenanceReduction || 0, 0), 1);
    tierMaintenanceMs = tierMaintenanceMs - (tierMaintenanceMs * reduction);
    return now + assignmentDurationMs + tierMaintenanceMs;
};

var renderShipBrowser = function() {
    var existing = document.getElementById('ship-browser-overlay');
    if (existing) {
        existing.remove();
        return;
    }

    getFilteredShips();

    var modal = document.createElement('div');
    modal.id = 'ship-browser-overlay';

    var html = '<div class="browser-modal">';
    html += '<div class="browser-modal-header">';
    html += '<h3>Browse Ships</h3>';
    html += '<button id="close-browser" class="btn btn-danger" style="padding:4px 12px">Close</button>';
    html += '</div>';

    html += '<div class="browser-filters">';
    html += '<input type="text" id="browser-search" placeholder="Search ships...">';
    html += '<select id="browser-faction">';
    html += '<option value="All">All Factions</option>';
    html += '<option value="Federation">Federation</option>';
    html += '<option value="Klingon">Klingon</option>';
    html += '<option value="Romulan">Romulan</option>';
    html += '<option value="JemHadar">JemHadar</option>';
    html += '</select>';
    html += '<select id="browser-role">';
    html += '<option value="All">All Roles</option>';
    html += '<option value="Eng">Engineering</option>';
    html += '<option value="Tac">Tactical</option>';
    html += '<option value="Sci">Science</option>';
    html += '<option value="Smc">Small Craft</option>';
    html += '</select>';
    html += '<select id="browser-tier">';
    html += '<option value="All">All Tiers</option>';
    html += '<option value="0">Tier 0</option>';
    html += '<option value="1">Tier 1</option>';
    html += '<option value="2">Tier 2</option>';
    html += '<option value="3">Tier 3</option>';
    html += '<option value="4">Tier 4</option>';
    html += '<option value="5">Tier 5</option>';
    html += '<option value="6">Tier 6</option>';
    html += '</select>';
    html += '<select id="browser-rarity">';
    html += '<option value="All">All Rarities</option>';
    html += '<option value="Common">Common</option>';
    html += '<option value="Uncommon">Uncommon</option>';
    html += '<option value="Rare">Rare</option>';
    html += '<option value="VeryRare">Very Rare</option>';
    html += '<option value="UltraRare">Ultra Rare</option>';
    html += '<option value="Epic">Epic</option>';
    html += '</select>';
    html += '</div>';

    html += '<div class="browser-actions">';
    html += '<button class="btn btn-small" id="add-active">Add to Active</button>';
    html += '<button class="btn btn-small" id="add-maintenance">Add to Maintenance</button>';
    html += '<button class="btn btn-small" id="add-one-time">Add to One-Time</button>';
    html += '</div>';
    html += '<div class="browser-actions">';
    html += '<button class="btn btn-small" id="export-active">Export Active</button>';
    html += '<button class="btn btn-small" id="import-active">Import Active</button>';
    html += '<input type="file" id="import-file" accept=".txt" style="display:none;">';
    html += '</div>';

    html += '<div id="browser-ship-list" class="browser-ship-list">';

    var ships = getFilteredShips();
    for (var i = 0; i < ships.length; i++) {
        var ship = ships[i];
        var inActive = isShipInCategory(ship.id, 'active');
        var inMaint = isShipInCategory(ship.id, 'maintenance');
        var inOneTime = isShipInCategory(ship.id, 'one-time');
        var status = inActive ? 'Active' : (inMaint ? 'Maint' : (inOneTime ? '1T' : ''));

        html += '<div class="browser-ship-item" data-id="' + ship.id + '" onclick="toggleShipSelect(this)">';
        html += '<input type="checkbox" class="ship-checkbox" data-id="' + ship.id + '" onclick="event.stopPropagation();" ' + (inActive || inMaint || inOneTime ? 'checked disabled' : '') + '>';
        html += '<span class="ship-name" style="color:' + getRarityColor(ship.rarity) + '">' + ship.name + '</span>';
        html += '<span class="ship-stats">' + getFactionString(ship.faction) + ' | ' + getRoleString(ship.role) + ' | ' + getTierString(ship.tier) + '</span>';
        html += '<span class="ship-stats">' + ship.eng + '/' + ship.tac + '/' + ship.sci + '</span>';
        if (status) html += '<span class="ship-stats" style="color:var(--accent)">' + status + '</span>';
        html += '</div>';
    }

    html += '</div>';
    html += '<div class="browser-footer">Showing ' + ships.length + ' ships</div>';
    html += '</div>';

    modal.innerHTML = html;
    document.body.appendChild(modal);

    document.getElementById('close-browser').addEventListener('click', function() {
        modal.remove();
    });

    document.getElementById('add-active').addEventListener('click', function() { addShipsToCategory('active'); });
    document.getElementById('add-maintenance').addEventListener('click', function() { addShipsToCategory('maintenance'); });
    document.getElementById('add-one-time').addEventListener('click', function() { addShipsToCategory('one-time'); });

    document.getElementById('export-active').addEventListener('click', function() { exportActiveShips(); });
    document.getElementById('import-active').addEventListener('click', function() {
        document.getElementById('import-file').click();
    });
    document.getElementById('import-file').addEventListener('change', function(e) {
        importActiveShips(e);
    });

    document.getElementById('browser-search').addEventListener('input', function() {
        UI.browseFilter = this.value;
        renderBrowserList();
    });

    document.getElementById('browser-faction').addEventListener('change', function() {
        UI.browseFaction = this.value;
        renderBrowserList();
    });

    document.getElementById('browser-role').addEventListener('change', function() {
        UI.browseRole = this.value;
        renderBrowserList();
    });

    document.getElementById('browser-tier').addEventListener('change', function() {
        UI.browseTier = this.value;
        renderBrowserList();
    });

    document.getElementById('browser-rarity').addEventListener('change', function() {
        UI.browseRarity = this.value;
        renderBrowserList();
    });
};

var renderBrowserList = function() {
    var list = document.getElementById('browser-ship-list');
    if (!list) return;
    list.innerHTML = '';
    var ships = getFilteredShips();
    for (var i = 0; i < ships.length; i++) {
        var ship = ships[i];
        var inActive = isShipInCategory(ship.id, 'active');
        var inMaint = isShipInCategory(ship.id, 'maintenance');
        var inOneTime = isShipInCategory(ship.id, 'one-time');
        var status = inActive ? 'Active' : (inMaint ? 'Maint' : (inOneTime ? '1T' : ''));

        var div = document.createElement('div');
        div.className = 'browser-ship-item';
        div.setAttribute('data-id', ship.id);
        div.setAttribute('onclick', 'toggleShipSelect(this)');

        div.innerHTML =
            '<input type="checkbox" class="ship-checkbox" data-id="' + ship.id + '" onclick="event.stopPropagation();" ' + (inActive || inMaint || inOneTime ? 'checked disabled' : '') + '>' +
            '<span class="ship-name" style="color:' + getRarityColor(ship.rarity) + '">' + ship.name + '</span>' +
            '<span class="ship-stats">' + getFactionString(ship.faction) + ' | ' + getRoleString(ship.role) + ' | ' + getTierString(ship.tier) + '</span>' +
            '<span class="ship-stats">' + ship.eng + '/' + ship.tac + '/' + ship.sci + '</span>' +
            (status ? '<span class="ship-stats" style="color:var(--accent)">' + status + '</span>' : '');

        list.appendChild(div);
    }
};

var toggleShipSelect = function(el) {
    var checkbox = el.querySelector('.ship-checkbox');
    if (checkbox && !checkbox.disabled) {
        checkbox.checked = !checkbox.checked;
        el.classList.toggle('selected', checkbox.checked);
    }
};

var addShipsToCategory = function(category) {
    var checkboxes = document.querySelectorAll('.ship-checkbox:checked');
    var adm = UI.currentAdmiral;
    var added = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        var shipId = checkboxes[i].getAttribute('data-id');
        if (category === 'active') {
            if (adm.addActive(shipId)) added++;
        } else if (category === 'maintenance') {
            adm.addMaintenance(shipId, null);
            added++;
        } else if (category === 'one-time') {
            if (adm.addOneTime(shipId)) added++;
        }
    }

    Persistence.saveAdmirals(UI.admirals);
    var overlay = document.getElementById('ship-browser-overlay');
    if (overlay) overlay.remove();
    UI.render();
    if (added > 0) {
        alert('Added ' + added + ' ships to ' + category);
    }
};

var exportActiveShips = function() {
    var adm = UI.currentAdmiral;
    if (!adm) return;
    var activeShips = adm.getActiveShips();
    var lines = [];
    for (var i = 0; i < activeShips.length; i++) {
        lines.push(activeShips[i].name + ' [' + activeShips[i].id + ']');
    }
    if (lines.length === 0) {
        alert('No active ships to export.');
        return;
    }
    var blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'sto-aso-active-ships-' + adm.name.replace(/[^a-z0-9]/gi, '_') + '.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

var importActiveShips = function(event) {
    var file = event.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        var adm = UI.currentAdmiral;
        var added = 0;
        var ignored = 0;
        var lines = text.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (!line) continue;
            var idMatch = line.match(/\[(.+?)\]/);
            var shipId = idMatch ? idMatch[1].toLowerCase() : null;
            var dbShip = shipId ? Database.getShip(shipId) : null;
            if (!dbShip) {
                dbShip = Database.getShipByName(line);
            }
            if (!dbShip) {
                ignored++;
                continue;
            }
            if (adm.addActive(dbShip.id)) {
                added++;
            } else {
                ignored++;
            }
        }
        Persistence.saveAdmirals(UI.admirals);
        var overlay = document.getElementById('ship-browser-overlay');
        if (overlay) overlay.remove();
        UI.render();
        alert('Imported ' + added + ' ships' + (ignored > 0 ? ', ' + ignored + ' ignored (not found or already owned)' : ''));
        event.target.value = '';
    };
    reader.readAsText(file);
};

var UI = {
    currentAdmiral: null,
    admirals: null,
    currentSolutionIndex: 0,
    browseFilter: '',
    browseFaction: 'All',
    browseRole: 'All',
    browseTier: 'All',
    browseRarity: 'All',
    theme: 'dark',

    init: function() {
        if (!Database.loaded) Database.init();
        var savedData = Persistence.loadAdmirals();
        if (savedData) {
            this.admirals = createAdmirals();
            this.admirals.deserialize(savedData);
        } else {
            this.admirals = createAdmirals();
        }
        this.currentAdmiral = this.admirals.admirals[0];
        
        var savedTheme = localStorage.getItem('sto-aso-theme') || 'dark';
        this.setTheme(savedTheme);
        
        this.render();
        this.setupEventListeners();
        setInterval(updateMaintenanceTimers, 10000);
    },

    setTheme: function(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('sto-aso-theme', theme);
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
        }
    },

    render: function() {
        this.renderAdmiralList();
        this.renderAdmiralPanel();
    },

    renderAdmiralList: function() {
        var listEl = document.getElementById('admiral-list');
        if (!listEl) return;
        listEl.innerHTML = '';
        for (var i = 0; i < this.admirals.admirals.length; i++) {
            var adm = this.admirals.admirals[i];
            var div = document.createElement('div');
            div.className = 'admiral-item' + (this.currentAdmiral === adm ? ' active' : '');
            div.textContent = adm.name;
            div.addEventListener('click', (function(a) {
                return function() {
                    UI.currentAdmiral = a;
                    UI.currentSolutionIndex = 0;
                    UI.render();
                };
            })(adm));
            listEl.appendChild(div);
        }
    },

    renderAdmiralPanel: function() {
        var adm = this.currentAdmiral;
        if (!adm) return;

        document.getElementById('admiral-name').textContent = adm.name;
        document.getElementById('faction-select').value = adm.faction;

        var activeShips = adm.getActiveShips();
        var maintenanceShips = adm.getMaintenanceShips();
        var oneTimeShips = adm.getOneTimeShips();

        document.getElementById('active-count').textContent = activeShips.length;
        document.getElementById('maintenance-count').textContent = maintenanceShips.length;
        document.getElementById('one-time-count').textContent = oneTimeShips.length;
         document.getElementById('assignment-count').textContent = '1';

        renderShipList('active-ships', activeShips, 'active');
        renderShipList('maintenance-ships', maintenanceShips, 'maintenance');
        renderShipList('one-time-ships', oneTimeShips, 'one-time');

        renderAssignments(adm);

        var assignShips = adm.getDeployableShips();
        if (assignShips.length > 0) {
            var solutions = adm.solveAssignments(assignShips);
            renderSolutions(solutions, adm.assignments[0]);
        } else {
            document.getElementById('solutions-container').innerHTML =
                '<div class="no-solution">No ships assigned yet. Click "Browse Ships to Add" to get started.</div>';
        }
    },

    handleShipClick: function(ship, type) {
        var adm = this.currentAdmiral;
        if (type === 'active') {
            adm.removeActive(ship.id);
        } else if (type === 'maintenance') {
            adm.removeMaintenance(ship.id);
        } else if (type === 'one-time') {
            adm.removeOneTime(ship.id);
        }
        Persistence.saveAdmirals(this.admirals);
        this.render();
    },

    setupEventListeners: function() {
        document.getElementById('theme-toggle').addEventListener('click', function() {
            UI.setTheme(UI.theme === 'dark' ? 'light' : 'dark');
        });

        document.getElementById('create-admiral').addEventListener('click', function() {
            var name = prompt('Enter admiral name:');
            if (name && name.trim()) {
                var adm = createAdmiral(name.trim(), UI.currentAdmiral.faction);
                UI.admirals.addAdmiral(adm);
                UI.currentAdmiral = adm;
                Persistence.saveAdmirals(UI.admirals);
                UI.render();
            }
        });

        document.getElementById('delete-admiral').addEventListener('click', function() {
            if (UI.admirals.admirals.length <= 1) {
                alert('Cannot delete the last admiral.');
                return;
            }
            if (confirm('Delete ' + UI.currentAdmiral.name + '?')) {
                UI.admirals.removeAdmiral(UI.currentAdmiral);
                UI.currentAdmiral = UI.admirals.admirals[0];
                UI.currentSolutionIndex = 0;
                Persistence.saveAdmirals(UI.admirals);
                UI.render();
            }
        });

        document.getElementById('faction-select').addEventListener('change', function() {
            UI.currentAdmiral.faction = this.value;
            Persistence.saveAdmirals(UI.admirals);
        });

        document.getElementById('ship-priority').addEventListener('change', function() {
            UI.currentAdmiral.shipPriority = ShipPriority[this.value];
            Persistence.saveAdmirals(UI.admirals);
        });

  

        document.getElementById('browse-ships').addEventListener('click', function() {
            UI.browseFilter = '';
            UI.browseFaction = 'All';
            UI.browseRole = 'All';
            UI.browseTier = 'All';
            UI.browseRarity = 'All';
            var searchInput = document.getElementById('browser-search');
            if (searchInput) searchInput.value = '';
            var factionSelect = document.getElementById('browser-faction');
            if (factionSelect) factionSelect.value = 'All';
            var roleSelect = document.getElementById('browser-role');
            if (roleSelect) roleSelect.value = 'All';
            var tierSelect = document.getElementById('browser-tier');
            if (tierSelect) tierSelect.value = 'All';
            var raritySelect = document.getElementById('browser-rarity');
            if (raritySelect) raritySelect.value = 'All';
            renderShipBrowser();
        });

        document.getElementById('plan-assignments').addEventListener('click', function() {
            UI.currentAdmiral.validateShips();
            var assignShips = UI.currentAdmiral.getDeployableShips();
            if (assignShips.length === 0) {
                alert('No ships to assign. Add ships first using "Browse Ships to Add".');
                return;
            }
            UI.currentAdmiral.solveAssignments(assignShips);
            UI.render();
        });

        document.getElementById('clear-assignments').addEventListener('click', function() {
            for (var i = 0; i < UI.currentAdmiral.numAssignments; i++) {
                UI.currentAdmiral.assignments[i].clear();
            }
            Persistence.saveAdmirals(UI.admirals);
            UI.render();
        });

        document.getElementById('about-btn').addEventListener('click', function() {
            alert('STO Admiralty System Optimizer v1.0\nBrowser port by AI');
        });

        document.getElementById('stats-btn').addEventListener('click', function() {
            var totalShips = Object.keys(Database.ships).length;
            var totalAssignments = Object.keys(Database.assignments).length;
            var totalEvents = Object.keys(Database.events).length;
            alert('Database:\n' + totalShips + ' ships\n' + totalAssignments + ' assignments\n' + totalEvents + ' events\n' +
                Object.keys(Database.traits).length + ' traits');
        });
    }
};
