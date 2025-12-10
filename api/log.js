export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const logs = req.body;  // 接收小程序传来的 log buffer

  // 📝 你可以做三件事：
  // 1. 保存到 Vercel KV / Upstash Redis
  // 2. 写到 Supabase / DynamoDB
  // 3. 发 email / Slack / 存文件

  console.log("Received logs:", logs);

  return res.status(200).json({ ok: true });
}
