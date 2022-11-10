import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";
import { NavCube } from "./NavCube/NavCube";

const container = document.getElementById("viewer-container");
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();
var model;
async function loadIfc(url) {
	await viewer.IFC.setWasmPath("../../../");
	model = await viewer.IFC.loadIfcUrl(url);
	viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc("../../../IFC/01.ifc");

//Nave cube
viewer.container = container;
const navCube = new NavCube(viewer);
navCube.onPick(model);
window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
viewer.clipper.active = true;

window.onkeydown = (event) => {
	if (event.code === "KeyP") {
		viewer.clipper.createPlane();
	} else if (event.code === "KeyO") {
		viewer.clipper.deletePlane();
	}
};

window.onclick = async () => {
    const {modelID, id} = await viewer.IFC.selector.pickIfcItem(true);
    const props = await viewer.IFC.getProperties(modelID, id, true, false);
    console.log(props);
}

window.ondblclick = () => viewer.IFC.selector.highlightIfcItem();

window.onkeydown = (event) => {
    if(event.code === 'KeyC') {
        viewer.IFC.selector.unpickIfcItems();
        viewer.IFC.selector.unHighlightIfcItems();
    }
}

document.getElementById('express_22492')
.addEventListener('click', () => {
    viewer.IFC.selector.pickIfcItemsByID(0, [22492], true);
})