# Version 1.1 - 07-04-2021

-   Updated : bug Fixed in backup
-   Added : Support IE

# Version 1.2 - 08-04-2021

-   Added : Footer Dynamic
-   Added : Instruction Installation In Localhost
-   Updated : Changing the Database Structure
-   Updated : bug Fixed in dark mode
-   Updated : bug Fixed in Edit Payment

# Version 1.3 - 10-04-2021

-   Updated : Improve Code
-   Updated : Improve security

# Version 1.4 - 12-04-2021

-   Added : Updated Guide
-   Updated : Fixed dropdown in purchases
-   Updated : Fixed Import Products by csv

# Version 2.0 - 21-04-2021

-   Updated : Improve security
-   Added : Integration Payment Gateway ( Stripe)
-   Updated : Upgrade to laravel 8 (Support php 8)
-   Updated : The new minimum PHP version is now 7.3.0.
-   Added : Filter By Date for all reports

# Version 2.1.0 - 22-04-2021

-   Updated : Improve security
-   Updated : Fix bug Duplicate User & Customer & Product Code

# Version 2.2.0 - 02-05-2021

-   Added : SMS API (Twilio)
-   Added : Footer Dynamic
-   Updated : Fix bug in Password Database
-   Updated : Fix bug in Stock Alert

# Version 2.3.0 - 18-05-2021

-   Added : Default Customer & Warehouse in POS
-   Updated : Fix bug in editing Variants Product

# Version 2.4.0 - 02-06-2021

-   Added : Add Sale Date in invoice
-   Updated :  Fix Duplicated product in import
-   Updated :  Fix Minor bugs

# Version 2.5.0 - 08-06-2021

-   Updated :  Fix POS Receipt Printer

# Version 3.0.0 - 25-06-2021

-   Added  :  Barcode Scanner in POS
-   Updated :  Fix bug in Import Product
-   Updated :  Fix bug in download file
-   Updated :  Updated Iconsmind

# Version 3.1.0 - 28-06-2021

-   Updated :  Minor bug fixes

# Version 3.2.0 - 30-06-2021

-   Updated : Fix bug in download pdf (Support php 8)
-   Added  : Clearing cache with a click of a button
-   Updated : Fix bug in Import Product (without create warehouse)
-   Updated : Change currency symbol from the right to the left
-   Added  : Video in documentation showing you the steps on how to upgrade stocky
-   Updated : Minor bug fixes

# Version 3.3.0 - 06-07-2021

-   Added  :  Add the ability to enter the BarCode manually
-   Added  :  Barcode Scanner (All Operations)
-   Updated :  Fix bug in barcode printing
-   Added  :  Paper Size for printing barcode labels
-   Updated :  Correct some words in Spanish translation
-   Updated :  Fix bug in Editing Variants
-   Updated :  Fix bug in generate backup
-   Updated :  Improve security
-   Updated :  Documentation Updated
-   Updated :  Minor bug fixes

# Version 3.3.1 - 06-07-2021

-   Fixed  :  Fix bug in pos

# Version 3.3.2 - 12-07-2021

-   Fixed  :  bug in pos
-   Fixed  :  Design & Size receipt pos for thermal receipt printer
-   Fixed  :  Currency symbol Dynamic in input fields
-   Fixed  :  Bug Duplicate save data when click more than one times

# Version 3.4.0 - 29-07-2021

-   Added    :  Server requirements in Installation
-   Added    :  Automatically increase quantity in POS when scanning items
-   Added    :  option to choose unit when create Transaction
-   Added    :  Paid Amount & due Amount in pos receipt
-   Fixed    :  Show Items in dashboard with permissions
-   Fixed    :  if Transaction deleted the stock return to previous status
-   Fixed    :  Profit Calculation based by (price & cost)
-   Fixed    :  Report Profit And Loss
-   Fixed    :  Bug in editing Transaction 
-   Fixed    :  Bug in Units
-   Updated  :  Improve security
-   Updated  :  Documentation Updated

# Version 3.5.0 - 02-08-2021

-   Added    :  Cost of goods sold formula implemented to calculate profit
-   Added    :  received & paying Amount & change
-   Fixed    :  bug in calculate Due Amount
-   Fixed    :  migration database
-   Fixed    :  Minor bug fixes
-   Updated  :  pos receipt

# Version 3.6.0 - 08-08-2021

-   Fixed    :  Minor bug fixes
-   Updated  :  Documentation Updated

# Version 3.7.0 - 26-09-2021

-   Added    :  Choose default language from area settings
-   Added    :  Pos Settings
-   Fixed    :  bug in twillio SMS
-   Updated  :  Hide Documentation from sidebar
-   Updated  :  Improve performance
-   Updated  :  Documentation Updated
-   Fixed    :  bug fixes



### Frontend development workflow (Vue + Laravel Mix)

If you change any Vue files (for example resources/src/views/app/pages/pos.vue), you need to recompile frontend assets so the browser can load your updated code. Choose one of these options:

- During active development (recommended):
  - npm run watch — watches files and rebuilds automatically on save.
  - npm run watch-poll — same as watch, but uses polling; useful inside Docker/VMs or network shares where file change events don’t fire.

- Rebuild on demand:
  - npm run dev — performs a one-time development build. Run this after your edits, then refresh the page.

- Hot Module Replacement (HMR):
  - npm run hot — starts webpack-dev-server with HMR. Note: this project’s layout currently includes a static script tag (<script src="/js/main.min.js?v=3.3.2"></script>). To fully leverage HMR, you would typically switch to Laravel’s mix() helper in Blade and enable Mix versioning. If you’re not set up for that, prefer watch/watch-poll/dev instead.

Tips:
- Do a hard refresh in the browser (Cmd/Ctrl+Shift+R) if caching hides changes.
- If you’re editing inside a VM/Container and watch doesn’t rebuild, use npm run watch-poll.
- Assets output go to public/js/main.min.js and dynamic chunks under public/js/bundle/ by default (see webpack.mix.js).


### Frontend build troubleshooting

- node-sass build failures on modern Node (e.g., Node 18/20/22/23): we replaced node-sass with the pure JS sass (Dart Sass) implementation to avoid native compilation and Python/node-gyp requirements. Additionally, package.json now contains overrides/resolutions to alias node-sass → sass so transitive installs won’t try to compile node-sass.
- ERESOLVE errors mentioning css-loader@7 and webpack@5: this project uses Laravel Mix 5 (Webpack 4). We pinned css-loader to ^5.2.7 and added overrides to keep webpack at ^4.46.0 to avoid accidental Webpack 5 pulls by transitive deps.
- Vue packages version mismatch (vue vs vue-template-compiler): both packages must be the exact same version for Vue 2 projects. We pinned vue and vue-template-compiler to 2.6.14 and added npm overrides so the resolver can’t pull a different compiler version. After pulling these changes, do a clean install (see steps below).
- Module not found: Can't resolve 'file-loader' (icons/images in CSS like flag-icon-css or vue-image-lightbox-carousel): for Laravel Mix 5 (Webpack 4), file-loader and url-loader must be present. We added file-loader ^6.2.0 and url-loader ^4.1.1 and pinned them via overrides so assets referenced in CSS/JS resolve correctly.
- TypeError: text.forEach is not a function (from extract-text-webpack-plugin during SCSS/CSS build): this occurs when css-loader is too new for the ExtractTextPlugin version bundled with Laravel Mix 5. We pinned css-loader to ^3.6.0 (and added an override) to restore compatibility.

How to clean-install after pulling these changes:
1. rm -rf node_modules package-lock.json
2. npm install
3. npm run dev (or npm run watch / watch-poll)

If you still encounter issues:
- Prefer an active LTS version of Node (Node 18 or 20). Very new Node releases can occasionally break older toolchains.
- Delete public/mix-manifest.json if assets look out of sync and rebuild.
- If using Yarn, run yarn install after deleting node_modules and yarn.lock; the package.json includes a resolutions alias for node-sass.


### Additional SCSS troubleshooting

- Ambiguous import between globals.scss and _globals.scss: Some theme files imported `../globals/globals.scss` while there were two files: `globals.scss` (empty) and `_globals.scss` (actual content). This caused Sass to error with "It's not clear which file to import" and css-loader to throw `TypeError: text.forEach is not a function` when compiling the empty file as an entry. We updated theme imports to point explicitly to `../globals/_globals.scss` and changed Mix to compile the main theme stylesheet, preventing ambiguity.
- If you maintain custom themes, prefer importing the partial without extension (e.g., `@import "../globals"`) or point directly to `_globals.scss`.
- After pulling, do a clean install and rebuild:
  1. rm -rf node_modules package-lock.json
  2. npm install
  3. npm run dev (or npm run watch / watch-poll)
