export type Source={label:string;url:string};export type Visual={assetId:string;src:string;width:number;height:number;alt:string;caption:string};export type Section={heading:string;paragraphs:string[];visual?:Visual};export type Guide={slug:string;category:string;title:string;description:string;quickAnswer:string;updated:string;sources:Source[];sections:Section[];evidenceClass:string};
export const guides:Guide[]=[
  {
    "slug": "travel-merge-beginner-route",
    "category": "Beginner Progression",
    "title": "Travel Merge Beginner Guide and First Progression Route",
    "description": "A first-board Travel Merge route covering identical-item merges, blocked-cell unlocks, customer orders, coins, and safe board management.",
    "quickAnswer": "Follow the tutorial's dependency order: merge the identical pair it highlights, use new matches to open blocked cells, then connect the resulting inventory to customer orders before spending coins on the next destination.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Official Travel Merge Poki page",
        "url": "https://poki.com/en/g/travel-merge"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and scope",
        "paragraphs": [
          "Follow the tutorial's dependency order: merge the identical pair it highlights, use new matches to open blocked cells, then connect the resulting inventory to customer orders before spending coins on the next destination. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route.",
          "This page is for one task: solve the player task described by Travel Merge Beginner Guide and First Progression Route It applies to the version checked on September 4, 2026. If the current screen differs, stop at the first mismatch and use the troubleshooting section instead of forcing the route. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route."
        ]
      },
      {
        "heading": "What the accepted sources actually prove",
        "paragraphs": [
          "The official Poki page identifies Potato Jam's game as a merge puzzle where players take items from a picnic basket, combine matching items into upgrades, fill customer orders, earn coins, and unlock travel destinations. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route.",
          "That evidence supports the game's identity and the named systems, but it does not make every neighboring value true. Exact chain names, levels, cooldowns, deletion rules, and destination requirements are not published on the official page. Travel Town and Travel Merge Family are different games and are excluded. This page keeps that boundary visible so an unknown field cannot silently become a confident recommendation. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route."
        ],
        "visual": {
          "assetId": "travel-merge-guide-official-01",
          "src": "/images/official/travel-merge-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Travel Merge official game context",
          "caption": "Official public media used for recognition; verify current values in game."
        }
      },
      {
        "heading": "The route map for this task",
        "paragraphs": [
          "This page adds a bounded route map, a current-version evidence boundary, and a recovery path for Travel Merge Beginner Guide and First Progression Route. It is designed to answer the named task without importing unsupported details from a similar game or an older build. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route.",
          "Use the route map as a decision aid, not as decoration. Read the required input, choose the next action, note the expected visible output, and keep the fallback beside it. If any required input is unknown, the safe action is to gather that evidence before spending currency or committing progress. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route."
        ]
      },
      {
        "heading": "Run the route without mixing variables",
        "paragraphs": [
          "Start by naming the current bottleneck in one sentence. Then follow this bounded answer: Follow the tutorial's dependency order: merge the identical pair it highlights, use new matches to open blocked cells, then connect the resulting inventory to customer orders before spending coins on the next destination. Change only the element, item, unit position, ship choice, or progression action directly tied to that bottleneck. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route.",
          "After the action, return to the same screen or encounter and compare the result. A successful outcome without a stable baseline is useful for play but weak as evidence. A failed outcome with a clean baseline is valuable because it tells the next player which assumption not to repeat. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route."
        ]
      },
      {
        "heading": "Decision table",
        "paragraphs": [
          "Use four columns: current state, available choice, expected benefit, and stop condition. Current state must come from the live game. Available choice must be visible or explicitly documented. Expected benefit may be a hypothesis, but it must be labelled as one. Stop condition prevents an open-ended upgrade or experiment from consuming resources without solving the original task. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route.",
          "Verify identity and system boundaries with the cited first-party source, then confirm version-sensitive conditions in the current client or with two independent current sources. A repeatable current observation may be labelled verified. One clean observation is partial. A missing label, result, or repeat remains unknown; none of those states should be converted into zero. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route."
        ],
        "visual": {
          "assetId": "travel-merge-guide-editorial-01",
          "src": "/images/editorial/travel-merge-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Travel Merge editorial decision framework",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Read the tutorial as a dependency chain",
        "paragraphs": [
          "The live tutorial first asks the player to merge two identical bowl-like items into the next basket-like stage, then continues with progressively changed item stages. It also displays the instruction to match the same item to unlock a cell. The exact item names were not readable in our check, so this guide describes the visible rule without inventing a chain label.",
          "Follow the highlighted pair before generating extra items. The tutorial is teaching three dependencies at once: identical objects produce the next stage, higher stages create useful inventory, and some matches open blocked board space. Completing the requested merge with a clean board preserves room for the next instruction and makes the result easy to identify."
        ]
      },
      {
        "heading": "Connect the board to customer orders",
        "paragraphs": [
          "The official Poki description says items come from a picnic basket, matching items are merged into upgrades, customer orders are filled, coins are earned, and destinations are unlocked. That establishes the outer loop. Before merging beyond the tutorial, check visible orders and identify which current or next-stage item they request. Build toward an order rather than creating the highest object simply because a pair is available.",
          "Keep one readable path from generator output to the active order. If several unrelated branches fill the board, pause generation and complete the nearest achievable request. Coins are a result of finishing orders in the official loop; they should be assigned to the next visible travel dependency, not spent according to an unsupported universal rule."
        ]
      },
      {
        "heading": "Protect board space",
        "paragraphs": [
          "Separate active pairs, order-critical singles, and unknown objects into distinct zones. Merge obvious pairs promptly when they either advance an order or unlock a cell. Keep a single unmatched item only when its next partner is plausible and the object is tied to a visible request. This is a board-management heuristic, not a claim about a hidden deletion or storage system.",
          "When the board feels stuck, count actionable pairs and blocked cells before creating anything. If an existing pair opens space, resolve it first. If the next order can be completed with current items, finish it. If neither is possible, use the picnic basket only enough to create a new actionable pair, then reassess. This stop-and-check loop limits clutter."
        ]
      },
      {
        "heading": "Handle unknown chains safely",
        "paragraphs": [
          "Do not rely on guides for Travel Town or Travel Merge Family; they are different games despite similar names. A valid Travel Merge chain row needs two identical inputs, one visible output, a capture or repeat observation, and the current date. Until the interface provides readable names, label stages by a neutral visual description and keep them out of the permanent item database.",
          "If a merge produces an unexpected stage, preserve both input images and the output before continuing. If an order changes after completion, record the new request separately rather than assuming a fixed sequence. The beginner route remains useful without a complete chain because it teaches how to choose the next merge from visible board dependencies."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Confirm the exact game, platform, current version, task, prerequisite, chosen action, expected visible result, recovery option, and evidence state. If all nine are clear, execute the smallest useful action. If one is missing, collect it before committing a scarce resource. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route.",
          "The short rule remains: Follow the tutorial's dependency order: merge the identical pair it highlights, use new matches to open blocked cells, then connect the resulting inventory to customer orders before spending coins on the next destination. Verify the visible result, save the date, and leave unsupported precision unknown. This claim is scoped specifically to Travel Merge Beginner Guide and First Progression Route."
        ]
      }
    ],
    "evidenceClass": "claim_bounded_core_page"
  },
  {
    "slug": "item-chains-and-sources",
    "category": "Data Tool Decision Table",
    "title": "Travel Merge Item Chains and Source Guide",
    "description": "A current, source-checked guide to travel merge item chains and source guide, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Build a partial chain only from two identical visible inputs and the single visible output; keep unreadable item names as neutral stage descriptions.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Official Travel Merge Poki page",
        "url": "https://poki.com/en/g/travel-merge"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Build a partial chain only from two identical visible inputs and the single visible output; keep unreadable item names as neutral stage descriptions. This is the direct answer for Travel Merge Item Chains and Source Guide, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: The chain is deliberately partial. It excludes cooldowns, deletion rules, and names that were not readable in the current game. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Travel Merge Item Chains and Source Guide: Poki confirms that matching items upgrade into better inventory. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Travel Merge Item Chains and Source Guide: The live tutorial showed two identical bowl-like items becoming a basket-like next stage. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Travel Merge Item Chains and Source Guide: The tutorial also instructed matching the same item to unlock a cell. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Travel Merge Item Chains and Source Guide: No official complete chain names or level counts are published. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "travel-merge-guide-official-01",
          "src": "/images/official/travel-merge-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Travel Merge official public media for Travel Merge Item Chains and Source Guide",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Capture both identical inputs before merging. For Travel Merge Item Chains and Source Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Capture the immediate output and its board position. For Travel Merge Item Chains and Source Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Copy a readable label or use a neutral visual stage name. For Travel Merge Item Chains and Source Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Repeat before assigning a permanent chain row. For Travel Merge Item Chains and Source Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Travel Merge Item Chains and Source Guide starts with the current state that makes this action relevant: Capture both identical inputs before merging. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Travel Merge Item Chains and Source Guide starts with the current state that makes this action relevant: Capture the immediate output and its board position. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Travel Merge Item Chains and Source Guide starts with the current state that makes this action relevant: Copy a readable label or use a neutral visual stage name. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Travel Merge Item Chains and Source Guide starts with the current state that makes this action relevant: Repeat before assigning a permanent chain row. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Travel Town and Travel Merge Family search results can contaminate research. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Tutorial highlighting can obscure item art. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: An order icon may be mistaken for a chain label. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: A later update may change artwork while preserving the merge rule. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "travel-merge-guide-editorial-01",
          "src": "/images/editorial/travel-merge-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Travel Merge Item Chains and Source Guide evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Travel Merge Item Chains and Source Guide is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Travel Merge Item Chains and Source Guide, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Travel Merge Item Chains and Source Guide is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Travel Merge Item Chains and Source Guide. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Travel Merge Item Chains and Source Guide",
        "paragraphs": [
          "Field note 1 for Travel Merge Item Chains and Source Guide connects three page-specific signals. Baseline: Poki confirms that matching items upgrade into better inventory. Operational move: Capture both identical inputs before merging. Confounder to exclude: Travel Town and Travel Merge Family search results can contaminate research. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Travel Merge Item Chains and Source Guide connects three page-specific signals. Baseline: The live tutorial showed two identical bowl-like items becoming a basket-like next stage. Operational move: Capture the immediate output and its board position. Confounder to exclude: Tutorial highlighting can obscure item art. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Travel Merge Item Chains and Source Guide connects three page-specific signals. Baseline: The tutorial also instructed matching the same item to unlock a cell. Operational move: Copy a readable label or use a neutral visual stage name. Confounder to exclude: An order icon may be mistaken for a chain label. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Travel Merge Item Chains and Source Guide connects three page-specific signals. Baseline: No official complete chain names or level counts are published. Operational move: Repeat before assigning a permanent chain row. Confounder to exclude: A later update may change artwork while preserving the merge rule. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Travel Merge Item Chains and Source Guide, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Travel Merge Item Chains and Source Guide, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "order-priority",
    "category": "Build Choice Comparison",
    "title": "Travel Merge Order Priority Guide",
    "description": "A current, source-checked guide to travel merge order priority guide, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Prioritize the order that can be completed from existing inventory with the fewest new merges, while protecting items needed to open blocked cells.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Official Travel Merge Poki page",
        "url": "https://poki.com/en/g/travel-merge"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Prioritize the order that can be completed from existing inventory with the fewest new merges, while protecting items needed to open blocked cells. This is the direct answer for Travel Merge Order Priority Guide, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: Order priority is a board-state heuristic, not a claimed universal queue or payout formula. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Travel Merge Order Priority Guide: The official loop says players serve customer orders and earn coins. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Travel Merge Order Priority Guide: Matching identical items upgrades inventory. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Travel Merge Order Priority Guide: The tutorial links certain matches to unlocking cells. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Travel Merge Order Priority Guide: The official page does not publish a fixed order sequence or reward table. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "travel-merge-guide-official-01",
          "src": "/images/official/travel-merge-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Travel Merge official public media for Travel Merge Order Priority Guide",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Read every visible order before generating more items. For Travel Merge Order Priority Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Mark exact matches already on the board. For Travel Merge Order Priority Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Choose the shortest visible dependency path. For Travel Merge Order Priority Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Reassess after delivery because the next request may differ. For Travel Merge Order Priority Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Travel Merge Order Priority Guide starts with the current state that makes this action relevant: Read every visible order before generating more items. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Travel Merge Order Priority Guide starts with the current state that makes this action relevant: Mark exact matches already on the board. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Travel Merge Order Priority Guide starts with the current state that makes this action relevant: Choose the shortest visible dependency path. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Travel Merge Order Priority Guide starts with the current state that makes this action relevant: Reassess after delivery because the next request may differ. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Building the highest item can bypass a nearer order. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Filling the board can block required matches. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: An icon from a similar merge game can be misidentified. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Coin value may change and cannot be inferred from an old screenshot. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "travel-merge-guide-editorial-01",
          "src": "/images/editorial/travel-merge-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Travel Merge Order Priority Guide evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Travel Merge Order Priority Guide is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Travel Merge Order Priority Guide, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Travel Merge Order Priority Guide is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Travel Merge Order Priority Guide. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Travel Merge Order Priority Guide",
        "paragraphs": [
          "Field note 1 for Travel Merge Order Priority Guide connects three page-specific signals. Baseline: The official loop says players serve customer orders and earn coins. Operational move: Read every visible order before generating more items. Confounder to exclude: Building the highest item can bypass a nearer order. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Travel Merge Order Priority Guide connects three page-specific signals. Baseline: Matching identical items upgrades inventory. Operational move: Mark exact matches already on the board. Confounder to exclude: Filling the board can block required matches. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Travel Merge Order Priority Guide connects three page-specific signals. Baseline: The tutorial links certain matches to unlocking cells. Operational move: Choose the shortest visible dependency path. Confounder to exclude: An icon from a similar merge game can be misidentified. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Travel Merge Order Priority Guide connects three page-specific signals. Baseline: The official page does not publish a fixed order sequence or reward table. Operational move: Reassess after delivery because the next request may differ. Confounder to exclude: Coin value may change and cannot be inferred from an old screenshot. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Travel Merge Order Priority Guide, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Travel Merge Order Priority Guide, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "fix-a-full-board",
    "category": "Blocker Walkthrough",
    "title": "How to Fix a Full Board in Travel Merge",
    "description": "A current, source-checked guide to how to fix a full board in travel merge, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "When the board is full, stop generating, merge order-relevant pairs first, use matches that open cells, and keep unmatched items only when a near-term partner is visible.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Official Travel Merge Poki page",
        "url": "https://poki.com/en/g/travel-merge"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "When the board is full, stop generating, merge order-relevant pairs first, use matches that open cells, and keep unmatched items only when a near-term partner is visible. This is the direct answer for How to Fix a Full Board in Travel Merge, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: The recovery path uses only verified matching, orders, basket generation, and cell unlocking; unsupported disposal mechanics are omitted. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for How to Fix a Full Board in Travel Merge: The current tutorial explicitly says matching the same item can unlock a cell. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for How to Fix a Full Board in Travel Merge: Items originate from a picnic basket in the official description. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for How to Fix a Full Board in Travel Merge: Orders convert inventory into coins. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for How to Fix a Full Board in Travel Merge: No deletion, storage, or sell rule was verified in the current session. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "travel-merge-guide-official-01",
          "src": "/images/official/travel-merge-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Travel Merge official public media for How to Fix a Full Board in Travel Merge",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Count existing identical pairs. For How to Fix a Full Board in Travel Merge, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Mark pairs tied to current orders. For How to Fix a Full Board in Travel Merge, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Resolve any pair that visibly unlocks space. For How to Fix a Full Board in Travel Merge, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Use the basket only after no actionable pair remains. For How to Fix a Full Board in Travel Merge, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for How to Fix a Full Board in Travel Merge starts with the current state that makes this action relevant: Count existing identical pairs. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for How to Fix a Full Board in Travel Merge starts with the current state that makes this action relevant: Mark pairs tied to current orders. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for How to Fix a Full Board in Travel Merge starts with the current state that makes this action relevant: Resolve any pair that visibly unlocks space. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for How to Fix a Full Board in Travel Merge starts with the current state that makes this action relevant: Use the basket only after no actionable pair remains. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Generating into the last free cell can remove maneuvering room. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Merging unrelated pairs may create another unmatched item. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: Assuming a delete button exists can strand the route. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Following advice from Travel Town can introduce nonexistent storage rules. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "travel-merge-guide-editorial-01",
          "src": "/images/editorial/travel-merge-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "How to Fix a Full Board in Travel Merge evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of How to Fix a Full Board in Travel Merge is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For How to Fix a Full Board in Travel Merge, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on How to Fix a Full Board in Travel Merge is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind How to Fix a Full Board in Travel Merge. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for How to Fix a Full Board in Travel Merge",
        "paragraphs": [
          "Field note 1 for How to Fix a Full Board in Travel Merge connects three page-specific signals. Baseline: The current tutorial explicitly says matching the same item can unlock a cell. Operational move: Count existing identical pairs. Confounder to exclude: Generating into the last free cell can remove maneuvering room. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for How to Fix a Full Board in Travel Merge connects three page-specific signals. Baseline: Items originate from a picnic basket in the official description. Operational move: Mark pairs tied to current orders. Confounder to exclude: Merging unrelated pairs may create another unmatched item. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for How to Fix a Full Board in Travel Merge connects three page-specific signals. Baseline: Orders convert inventory into coins. Operational move: Resolve any pair that visibly unlocks space. Confounder to exclude: Assuming a delete button exists can strand the route. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for How to Fix a Full Board in Travel Merge connects three page-specific signals. Baseline: No deletion, storage, or sell rule was verified in the current session. Operational move: Use the basket only after no actionable pair remains. Confounder to exclude: Following advice from Travel Town can introduce nonexistent storage rules. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on How to Fix a Full Board in Travel Merge, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for How to Fix a Full Board in Travel Merge, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "coins-and-spending",
    "category": "Core System Explainer",
    "title": "Travel Merge Coins and Spending Priority",
    "description": "A current, source-checked guide to travel merge coins and spending priority, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Treat coins as destination progress: finish visible orders, inspect the next travel requirement, and spend only when that requirement is shown in the current interface.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Official Travel Merge Poki page",
        "url": "https://poki.com/en/g/travel-merge"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Treat coins as destination progress: finish visible orders, inspect the next travel requirement, and spend only when that requirement is shown in the current interface. This is the direct answer for Travel Merge Coins and Spending Priority, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: The guide does not publish destination costs or a fixed savings target without current-client evidence. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Travel Merge Coins and Spending Priority: Poki says every completed order earns coins. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Travel Merge Coins and Spending Priority: Coins are spent to unlock travel destinations. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Travel Merge Coins and Spending Priority: The more players merge, the better their inventory becomes. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Travel Merge Coins and Spending Priority: Exact destination prices and alternative coin sinks are not published. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "travel-merge-guide-official-01",
          "src": "/images/official/travel-merge-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Travel Merge official public media for Travel Merge Coins and Spending Priority",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Complete the nearest viable order. For Travel Merge Coins and Spending Priority, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Record the coin change on the result screen. For Travel Merge Coins and Spending Priority, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Open the visible destination requirement. For Travel Merge Coins and Spending Priority, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Delay optional spending until the next route is funded. For Travel Merge Coins and Spending Priority, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Travel Merge Coins and Spending Priority starts with the current state that makes this action relevant: Complete the nearest viable order. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Travel Merge Coins and Spending Priority starts with the current state that makes this action relevant: Record the coin change on the result screen. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Travel Merge Coins and Spending Priority starts with the current state that makes this action relevant: Open the visible destination requirement. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Travel Merge Coins and Spending Priority starts with the current state that makes this action relevant: Delay optional spending until the next route is funded. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: A promotional screenshot may show a different coin balance. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Similar games use coins for different systems. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: Spending before reading the next destination can create a delay. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: One order reward cannot establish a permanent payout table. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "travel-merge-guide-editorial-01",
          "src": "/images/editorial/travel-merge-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Travel Merge Coins and Spending Priority evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Travel Merge Coins and Spending Priority is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Travel Merge Coins and Spending Priority, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Travel Merge Coins and Spending Priority is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Travel Merge Coins and Spending Priority. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Travel Merge Coins and Spending Priority",
        "paragraphs": [
          "Field note 1 for Travel Merge Coins and Spending Priority connects three page-specific signals. Baseline: Poki says every completed order earns coins. Operational move: Complete the nearest viable order. Confounder to exclude: A promotional screenshot may show a different coin balance. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Travel Merge Coins and Spending Priority connects three page-specific signals. Baseline: Coins are spent to unlock travel destinations. Operational move: Record the coin change on the result screen. Confounder to exclude: Similar games use coins for different systems. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Travel Merge Coins and Spending Priority connects three page-specific signals. Baseline: The more players merge, the better their inventory becomes. Operational move: Open the visible destination requirement. Confounder to exclude: Spending before reading the next destination can create a delay. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Travel Merge Coins and Spending Priority connects three page-specific signals. Baseline: Exact destination prices and alternative coin sinks are not published. Operational move: Delay optional spending until the next route is funded. Confounder to exclude: One order reward cannot establish a permanent payout table. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Travel Merge Coins and Spending Priority, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Travel Merge Coins and Spending Priority, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "basket-generator-cooldown",
    "category": "Blocker Walkthrough",
    "title": "Travel Merge Basket, Generator, and Cooldown Guide",
    "description": "A current, source-checked guide to travel merge basket, generator, and cooldown guide, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Use the picnic basket only to create the next actionable pair, then stop and reassess; any cooldown must be timed in the current session before it is stated.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Official Travel Merge Poki page",
        "url": "https://poki.com/en/g/travel-merge"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Use the picnic basket only to create the next actionable pair, then stop and reassess; any cooldown must be timed in the current session before it is stated. This is the direct answer for Travel Merge Basket, Generator, and Cooldown Guide, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: The page explains how to measure the basket. It leaves cooldown, refill, and energy fields unknown until captured. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Travel Merge Basket, Generator, and Cooldown Guide: The official page identifies the picnic basket as the source of items. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Travel Merge Basket, Generator, and Cooldown Guide: Matching items upgrades them. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Travel Merge Basket, Generator, and Cooldown Guide: Orders and destinations form the progression loop. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Travel Merge Basket, Generator, and Cooldown Guide: The current research did not verify energy, tap limits, or cooldown duration. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "travel-merge-guide-official-01",
          "src": "/images/official/travel-merge-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Travel Merge official public media for Travel Merge Basket, Generator, and Cooldown Guide",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Record the board before using the basket. For Travel Merge Basket, Generator, and Cooldown Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Generate only until a useful pair or order path appears. For Travel Merge Basket, Generator, and Cooldown Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — If the basket stops, preserve the exact timer or message. For Travel Merge Basket, Generator, and Cooldown Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Resume only when the visible condition is met and record the elapsed time. For Travel Merge Basket, Generator, and Cooldown Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Travel Merge Basket, Generator, and Cooldown Guide starts with the current state that makes this action relevant: Record the board before using the basket. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Travel Merge Basket, Generator, and Cooldown Guide starts with the current state that makes this action relevant: Generate only until a useful pair or order path appears. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Travel Merge Basket, Generator, and Cooldown Guide starts with the current state that makes this action relevant: If the basket stops, preserve the exact timer or message. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Travel Merge Basket, Generator, and Cooldown Guide starts with the current state that makes this action relevant: Resume only when the visible condition is met and record the elapsed time. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Travel Town producer rules are not evidence for Travel Merge. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Repeated taps can fill the board before the stop condition appears. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: A device pause can distort elapsed time. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: An ad or connection interruption can be mistaken for a generator cooldown. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "travel-merge-guide-editorial-01",
          "src": "/images/editorial/travel-merge-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Travel Merge Basket, Generator, and Cooldown Guide evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Travel Merge Basket, Generator, and Cooldown Guide is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Travel Merge Basket, Generator, and Cooldown Guide, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Travel Merge Basket, Generator, and Cooldown Guide is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Travel Merge Basket, Generator, and Cooldown Guide. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Travel Merge Basket, Generator, and Cooldown Guide",
        "paragraphs": [
          "Field note 1 for Travel Merge Basket, Generator, and Cooldown Guide connects three page-specific signals. Baseline: The official page identifies the picnic basket as the source of items. Operational move: Record the board before using the basket. Confounder to exclude: Travel Town producer rules are not evidence for Travel Merge. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Travel Merge Basket, Generator, and Cooldown Guide connects three page-specific signals. Baseline: Matching items upgrades them. Operational move: Generate only until a useful pair or order path appears. Confounder to exclude: Repeated taps can fill the board before the stop condition appears. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Travel Merge Basket, Generator, and Cooldown Guide connects three page-specific signals. Baseline: Orders and destinations form the progression loop. Operational move: If the basket stops, preserve the exact timer or message. Confounder to exclude: A device pause can distort elapsed time. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Travel Merge Basket, Generator, and Cooldown Guide connects three page-specific signals. Baseline: The current research did not verify energy, tap limits, or cooldown duration. Operational move: Resume only when the visible condition is met and record the elapsed time. Confounder to exclude: An ad or connection interruption can be mistaken for a generator cooldown. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Travel Merge Basket, Generator, and Cooldown Guide, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Travel Merge Basket, Generator, and Cooldown Guide, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  }
];
export function getGuide(slug:string){return guides.find((guide)=>guide.slug===slug)}
