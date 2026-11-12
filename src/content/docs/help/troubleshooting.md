---
title: Troubleshooting
description: Fix missing changes, undetected Canvas sites, missing coursework, and display problems.
---

Start with the section that matches what you see. Avoid resetting settings or reinstalling until you have tried the non-destructive checks.

## Nothing changes on Canvas

1. Confirm you are using Canvas in the browser where Canvas Refined is installed, not the Canvas mobile app or another browser profile.
2. Open your browser's extension manager and check that **Canvas Refined** is enabled.
3. Check the extension's website-access settings and allow access to your school's Canvas site.
4. Refresh Canvas.
5. Open the popup and check that the feature you expect is enabled.

If installation or access is blocked on a school-managed browser, contact your school's IT team.

## My school's Canvas site is not detected

1. Confirm you are on the actual Canvas website, not a school login portal.
2. Open the popup and select **+ Add canvas**.
3. Enter the Canvas site's base address, such as `https://canvas.example.edu`.
4. Confirm browser site access and refresh Canvas.

Do not add unrelated sites. If detection still fails, [report the problem](/CanvasRefinedDocs/help/support/) with a redacted URL pattern; do not include login links or session tokens.

## I changed a setting, but nothing happened

1. Check whether you changed an extension setting or a Canvas setting.
2. Make sure the parent feature is enabled. Some options only appear or apply when their feature is on.
3. Return to the affected Canvas page and refresh it if safe.
4. For dashboard cards and widgets, try Canvas's **Card View**.
5. For dark mode, check whether a schedule or your device preference is controlling it.

A background image, card style, and dark-mode color preset are separate settings. Changing one does not necessarily undo the others.

## An assignment or grade is missing

1. Open the original course or assignment in Canvas.
2. Confirm the item or grade is available to you there.
3. For the to-do list, widen **Time frame** and increase **Max items to show**.
4. For card assignments, review completed and past-due filters and the card item limit.
5. For GPA, check course visibility, inclusion, credits, and grading settings.
6. For global search, allow indexing to finish, then use **Refresh** in the search window.

If Canvas itself does not show the data, contact your instructor or school's Canvas support. The extension cannot release grades or grant course access.

The [Better Todo List](/CanvasRefinedDocs/features/better-todo-list/), [Dashboard Cards](/CanvasRefinedDocs/features/dashboard-cards/), and [GPA calculator](/CanvasRefinedDocs/features/grades-and-gpa/) each have different filters and assumptions.

## A page looks broken

1. If you are in an active quiz or submission, avoid refreshing until you know it is safe.
2. Turn off the most recently changed feature.
3. Try a built-in color preset and remove custom CSS or backgrounds from the comparison.
4. Temporarily disable other Canvas styling or dashboard extensions, one at a time.
5. Compare the page with Canvas Refined disabled, then restore the extensions you normally use.

If the problem only happens with Canvas Refined enabled, [report it](/CanvasRefinedDocs/help/support/) with the page type, reproduction steps, and redacted screenshots.

## Temporarily disable Canvas Refined

- **Chrome:** Open `chrome://extensions` and switch Canvas Refined off.
- **Firefox:** Open `about:addons`, choose **Extensions**, and switch Canvas Refined off.
- **Other compatible browsers:** Use their extension manager.

Refresh the affected Canvas page when safe. Re-enable the extension and refresh again when you are ready. Disabling is a better first test than uninstalling because it avoids intentionally removing extension storage.

To disable only one feature, use its toggle in the popup.

## My notes or settings disappeared

Check that you are in the same browser profile and that the feature is still enabled. Sync availability differs by browser and account settings.

Do not reset storage as a first step: a reset can replace saved note text with an empty value. Restore a settings export if you have one, and recover notes from your separate copy. See [Dashboard Notes](/CanvasRefinedDocs/features/dashboard-notes/#where-notes-are-saved).

## Still need help?

Use [Support and Feedback](/CanvasRefinedDocs/help/support/) for a report checklist. Do not post passwords, API tokens, private course content, or unredacted grades.
