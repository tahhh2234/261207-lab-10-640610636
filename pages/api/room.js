import { readDB } from "../../backendLibs/dbLib";

export default function roomRoute(req, res) {
  if (req.method === "GET") {
    const rooms = readDB();
    const room = [];
    for (const room of rooms) {
      result.push({
        roomId: room.roomId,
        roomName: room.roomName,
      });
    }
    return res.json({
      ok: true,
      room,
    });
  }
}
