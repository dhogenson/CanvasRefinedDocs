---
title: Privacy and Permissions
description: Understand website access, saved settings and notes, Canvas requests, and external resources.
---

This page is a practical guide to the public 7.2.0 source, not a replacement for the developer's [privacy policy](https://github.com/GuySandler/CanvasRefined/blob/main/PRIVACY_POLICY.md). Installed store versions may differ.

## Why does it need website access?

Schools host Canvas at different addresses, including custom domains. The extension declares content scripts for HTTPS websites so it can recognize Canvas and apply its features. Broad website access is a capability granted by the browser; it is not limited to a single school's address in the manifest.

You can review site access in your browser's extension manager. Restricting it can prevent automatic detection or features from working. Only add known Canvas sites using **+ Add canvas**.

## Permissions in the reviewed source

| Permission or capability | Purpose |
| --- | --- |
| `storage` | Save extension preferences, notes, and other extension state. |
| `unlimitedStorage` | Allow larger local storage for data such as caches; it does not remove sync-storage limits. |
| HTTPS content scripts | Detect Canvas sites and modify their interface. |
| Host access to `science.nasa.gov` | Retrieve NASA daily-background information. |
| Host access to `stoic.tekloon.net` | Retrieve daily quotes for the optional widget. |

The extension also uses a background script for extension operations. Review the actual permission prompt and installed version rather than assuming this table covers every future release.

## What is saved?

| Information | Storage behavior |
| --- | --- |
| Most preferences, card customizations, GPA settings, and Dashboard Notes text | Browser extension sync storage. Syncing depends on your browser, profile, and sync configuration. |
| Search indexes, planner caches, local errors, saved themes, and custom CSS | Local extension storage in the reviewed source. |
| Changes made through Canvas planner features | Sent to your school's Canvas service; they are not just local display settings. |

Browser sync can send synced information to your browser provider. “Stored by the extension” does not always mean “only on this device.” Do not assume settings or notes transfer between different browsers or unrelated profiles.

## Canvas data and requests

The extension requests course, assignment, grade, and dashboard information directly from your Canvas instance using your existing access. It processes that information in your browser to provide its features.

The upstream policy states that Canvas data is not sent to the developer's servers. That does not mean the extension makes no network requests: Canvas API calls, browser sync, and external resources have different destinations and purposes.

Some actions, such as creating a custom to-do task or changing planner completion state, write back to Canvas. Disabling or uninstalling the extension does not undo those changes.

## External resources

The reviewed source includes requests beyond Canvas:

- **Google Fonts:** Fonts used by the popup and selected custom fonts.
- **Background and theme image hosts:** URLs in presets or supplied by you.
- **Picsum:** Daily background images.
- **NASA:** Daily astronomy background information and associated images.
- **Stoic quote service:** Quotes for the optional Daily Quotes widget.
- **Icon and favicon hosts:** Icons for certain links or integrations.

Providers receive normal network request information, such as your IP address, and apply their own policies. Choosing a theme or remote image can load resources from its host. This list describes notable examples, not a guarantee that every theme uses the same providers.

For fewer external resources, avoid remote backgrounds, custom web fonts, image-based themes, and optional online widgets. The popup itself references Google Fonts, so this is not an offline-only guarantee.

## Resetting or removing data

- Copy important notes somewhere else before resetting or uninstalling.
- **Storage reset** restores default sync settings, including empty notes, but does not erase every local cache or export.
- Uninstalling normally removes the browser's local extension storage. It does not delete downloaded exports, information already saved in Canvas, or necessarily every copy managed by browser sync.
- For browser-sync retention and removal, consult your browser provider's controls and policy.

See [Customization](/CanvasRefinedDocs/customization/#restore-defaults) for a safer way to undo appearance changes, or [temporarily disable the extension](/CanvasRefinedDocs/help/troubleshooting/#temporarily-disable-canvas-refined) to troubleshoot without intentionally deleting its storage.

## Questions or concerns

Read the [developer's privacy policy](https://github.com/GuySandler/CanvasRefined/blob/main/PRIVACY_POLICY.md) and use its private contact information for sensitive questions. Do not include private school records in a public [support report](/CanvasRefinedDocs/help/support/).
