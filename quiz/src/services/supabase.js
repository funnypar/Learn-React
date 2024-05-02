import { createClient } from "@supabase/supabase-js";
const pass = "b2NalXzDLElcuORz";

const supabaseUrl = "https://xfcjgrynmlorcykgatzs.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmY2pncnlubWxvcmN5a2dhdHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2Mzk3NDgsImV4cCI6MjAzMDIxNTc0OH0.TtetnDjraaTZSbFvT1e9NVs_q1HFv2BGVuXtx_1yWBY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
