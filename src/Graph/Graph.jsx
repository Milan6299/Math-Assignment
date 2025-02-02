import React, { useState } from "react";
import { ForceGraph2D } from "react-force-graph";
import { dijkstra } from "./dijkstra";
import universities from "./universities";

const Graph = () => {
  const [shortestPath, setShortestPath] = useState([]);
  const [highlightedLinks, setHighlightedLinks] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  // Transform data into graphData
  const graphData = {
    nodes: universities.map((uni) => ({ id: uni.name })),
    links: universities.flatMap((uni) =>
      uni.neighbors.map((neighbor) => ({
        source: uni.name,
        target: neighbor.name,
        distance: neighbor.distance,
      }))
    ),
  };

  const handleFindShortestPath = (start, end) => {
    const { path } = dijkstra(universities, start, end);
    setShortestPath(path);

    console.log("Shortest Path:", path);

    // Highlight links in the shortest path
    const links = [];
    for (let i = 0; i < path.length - 1; i++) {
      links.push({
        source: path[i],
        target: path[i + 1],
      });
    }
    setHighlightedLinks(links);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="fixed top-0 z-[100000] p-5 text-4xl bg-blue-500 text-white font-bold mb-4">
        PG Colleges - Network
      </h1>

      <div className="mb-4 fixed bottom-10 flex w-full z-10 px-20 justify-center items-center gap-20">
        <div className="flex gap-10 items-center">
          <div className="text-xl font-semibold">Source:</div>
          <div className="relative">
            <input
              className="border-2 px-2"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Select Source"
            />
            <select
              className="absolute left-0 top-10 w-full border-2"
              onChange={(e) => setSource(e.target.value)}
              value=""
            >
              <option value="" disabled>
                Select Source
              </option>
              {universities.map((uni) => (
                <option key={uni.name} value={uni.name}>
                  {uni.name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xl font-semibold">Destination:</div>
          <div className="relative">
            <input
              className="border-2 px-2"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Select Destination"
            />
            <select
              className="absolute left-0 top-10 w-full border-2"
              onChange={(e) => setDestination(e.target.value)}
              value=""
            >
              <option value="" disabled>
                Select Destination
              </option>
              {universities.map((uni) => (
                <option key={uni.name} value={uni.name}>
                  {uni.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={() => handleFindShortestPath(source, destination)}
          className=" px-4 py-2 cursor-pointer bg-blue-500 font-semibold text-white rounded-md shadow-md"
        >
          Find Shortest Path
        </button>
      </div>
      <div className=" bg-yellow-200 flex flex-col h-screen overflow-scroll w-96 fixed z-[999999] left-0 inset-0">
        <h2 className="text-4xl w-full bg-red-500 text-white font-semibold p-5">
          List of Colleges:
        </h2>
        <div className="p-4">
          {universities.map((ele, key) => (
            <div key={key} className="text-2xl flex gap-2">
              <div className="w-8  ">{key + 1}.</div>
              <div>{ele.name}</div>
            </div>
          ))}
        </div>
      </div>
      <ForceGraph2D
        graphData={graphData}
        nodeAutoColorBy="id"
        linkDirectionalArrowLength={2}
        linkDirectionalArrowRelPos={1}
        linkWidth={(link) =>
          highlightedLinks.some(
            (hl) =>
              (hl.source === link.source.id && hl.target === link.target.id) ||
              (hl.source === link.target.id && hl.target === link.source.id)
          )
            ? 4
            : 2
        }
        linkColor={(link) =>
          highlightedLinks.some(
            (hl) =>
              (hl.source === link.source.id && hl.target === link.target.id) ||
              (hl.source === link.target.id && hl.target === link.source.id)
          )
            ? "red"
            : "gray"
        }
        linkLabel={(link) => `${link.distance} km`}
        nodeLabel={(node) => node.id}
        width={1900}
        height={1000}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 12 / globalScale; // Adjust font size based on zoom level
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "black"; // Text color
          ctx.fillText(label, node.x, node.y + 6);
        }}
        nodeCanvasObjectMode={() => "before"}
        linkCanvasObject={(link, ctx, globalScale) => {
          const fontSize = 14 / globalScale; // Adjust font size based on zoom level
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.fillStyle = "blue"; // Text color
          ctx.textAlign = "center";

          // Get the midpoint of the link
          const startX = link.source.x;
          const startY = link.source.y;
          const endX = link.target.x;
          const endY = link.target.y;
          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;

          // Draw the distance text
          ctx.fillText(`${link.distance} km`, midX, midY);
        }}
        linkCanvasObjectMode={() => "after"}
        // cameraPosition={{ x: 0, y: 0, z: 900 }}
      />
    </div>
  );
};

export default Graph;
