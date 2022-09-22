import { writeDB, readDB } from "../../../../../backendLibs/dbLib";

export default function roomIdMessageIdRoute(req, res) {
  //read value from URL

  if (req.method === "DELETE") {
    const rooms = readDB();
    const roomId = req.query.roomId;
    const messageId = req.query.messageId;
    const roomIdx = rooms.findIndex((x) => x.roomId === roomId);
    if (roomIdx === -1)
      return res.status(404).json({ ok: false, message: "Invalid room id" });
    const mes = rooms[roomIdx].messages;
    const messageIdx = mes.findIndex((x) => x.messageId === messageId);
    if (messageIdx === -1)
      return res.status(404).json({ ok: false, message: "Invalid message id" });

    mes.splice(messageIdx, 1);
    writeDB(rooms);

    return res.json({ ok: true });
  }
}
