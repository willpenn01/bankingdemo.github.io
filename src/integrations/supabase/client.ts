// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lambbuxlwdiopsfpdkct.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhbWJidXhsd2Rpb3BzZnBka2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNDI3OTIsImV4cCI6MjA1NzgxODc5Mn0.prmEdMb-8W5BQn7DvWRNPacbyCpIcUIGVKAWgdacCf0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);