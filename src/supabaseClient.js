import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hesdrjctszxmpdjxnrdl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlc2RyamN0c3p4bXBkanhucmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc2NzMzMzgsImV4cCI6MTk5MzI0OTMzOH0.8CELThKOxhLtsAdjJxUqPTD7SyZjx2ij4W6NHamzni0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

