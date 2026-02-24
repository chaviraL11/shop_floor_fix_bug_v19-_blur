{
    "name": "MRP SearchBar Blur Fix",
    "version": "19.0.1.0.0",
    "depends": ["mrp_workorder","web"],
    "assets": {
        "web.assets_backend": [
            "shop_floor_patch/static/src/js/mrp_display_searchbar_patch.js",
        ],
    },
    "installable": True,
    "application": False,
} 