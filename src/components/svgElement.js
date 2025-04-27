export default function createSVGElement(svgNS, viewBox, d) {
    const svgElement = document.createElementNS(svgNS, "svg");
    svgElement.setAttribute("viewBox", viewBox);

    const pathElement = document.createElementNS(svgNS, "path");
    pathElement.setAttribute("d", d);
    svgElement.appendChild(pathElement);
    
    return svgElement;
}