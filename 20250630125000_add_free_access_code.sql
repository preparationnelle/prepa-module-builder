
-- Insert free access code for direct access
INSERT INTO public.access_codes (code, active, created_at) 
VALUES ('PRDIMITAR', true, now())
ON CONFLICT (code) DO NOTHING;
