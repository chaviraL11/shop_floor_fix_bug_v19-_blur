/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
// Eliminamos el /static/src/ y el .js al final
import { MrpDisplaySearchBar } from "@mrp_workorder/mrp_display/search_bar";
import { SearchBar } from "@web/search/search_bar/search_bar";

patch(MrpDisplaySearchBar.prototype, {
    setup() {
        // Ejecutamos el setup de la clase base (SearchBar)
        // Esto ignora el setTimeout con error de MrpDisplaySearchBar
        SearchBar.prototype.setup.call(this);
    },
});