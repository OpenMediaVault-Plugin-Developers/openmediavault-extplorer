/**
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    OpenMediaVault Plugin Developers
 * @copyright Copyright (c) 2013 OpenMediaVault Plugin Developers
 *
 * OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with OpenMediaVault. If not, see <http://www.gnu.org/licenses/>.
 */
// require("js/omv/WorkspaceManager.js")
// require("js/omv/workspace/form/Panel.js")

Ext.define("OMV.module.admin.service.extplorer.Link", {
	extend: "Ext.panel.Panel",
	
	initComponent: function() {
		var me = this;
		window.open("/extplorer/","blank");
		me.callParent(Ext.panel.panel);
	}
});

OMV.WorkspaceManager.registerNode({
	id: "extplorer",
	path: "/service",
	text: _("eXtplorer"),
	icon16: "images/extplorer.png",
	iconSvg: "images/extplorer.svg"
});

OMV.WorkspaceManager.registerPanel({
	id: "link",
	path: "/service/extplorer",
	text: _("Link"),
	position: 10,
	className: "OMV.module.admin.service.extplorer.Link"
});