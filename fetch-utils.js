const SUPABASE_URL = 'https://kmhqgenaissywlajjynm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttaHFnZW5haXNzeXdsYWpqeW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTMyNzAsImV4cCI6MTk2Nzg2OTI3MH0.yCD3SIn98ENixn-CMEd0ji60cOH51uEXLQIEhjqddDI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getInsects() {
    
}