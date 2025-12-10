import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('logs')
    .insert([{ payload: req.body }]);

  res.status(200).json({ ok: true });
}
