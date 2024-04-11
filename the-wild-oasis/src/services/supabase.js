import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ljfhafwluvbjjdsaueni.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqZmhhZndsdXZiampkc2F1ZW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3NDA0OTUsImV4cCI6MjAyODMxNjQ5NX0.KkIKDFoWsoFVS52q1fsM3NZmg0B4ycLeD2TH0HZgKyk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
