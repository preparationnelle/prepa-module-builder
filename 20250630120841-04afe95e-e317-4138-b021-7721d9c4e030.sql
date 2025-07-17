
-- Create table for access codes
CREATE TABLE public.access_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_session_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  used_at TIMESTAMPTZ,
  active BOOLEAN NOT NULL DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.access_codes ENABLE ROW LEVEL SECURITY;

-- Create policies for access_codes
CREATE POLICY "Users can view their own access codes" 
ON public.access_codes 
FOR SELECT 
USING (user_id = auth.uid());

CREATE POLICY "Insert access codes" 
ON public.access_codes 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Update access codes" 
ON public.access_codes 
FOR UPDATE 
USING (true);

-- Create table for course purchases
CREATE TABLE public.course_purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_type TEXT NOT NULL DEFAULT 'python_formation',
  stripe_session_id TEXT UNIQUE,
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'eur',
  status TEXT NOT NULL DEFAULT 'pending',
  access_code_id UUID REFERENCES access_codes(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.course_purchases ENABLE ROW LEVEL SECURITY;

-- Create policies for course_purchases
CREATE POLICY "Users can view their own purchases" 
ON public.course_purchases 
FOR SELECT 
USING (user_id = auth.uid());

CREATE POLICY "Insert purchases" 
ON public.course_purchases 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Update purchases" 
ON public.course_purchases 
FOR UPDATE 
USING (true);
