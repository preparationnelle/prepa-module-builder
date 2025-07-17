
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface TeamContactOptionProps {
  onBack: () => void;
}

const TeamContactOption = ({ onBack }: TeamContactOptionProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name,
          email,
          question,
          recipient: 'preparationnelle@gmail.com',
          subject: 'Nouvelle question via le widget de chat'
        },
      });

      if (error) throw new Error(error.message);

      setIsSubmitted(true);
      toast({
        title: "Message envoyé",
        description: "Nous avons bien reçu ta question. Notre équipe te répondra sous 24h.",
      });
    } catch (err) {
      console.error('Error sending contact email:', err);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du formulaire. Merci de réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center p-4 text-center">
        <h3 className="text-xl font-medium mb-2">Merci !</h3>
        <p className="mb-4">Nous avons bien reçu ta question et te répondrons par email sous 24h.</p>
        <Button onClick={onBack}>Retour aux options</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h3 className="font-medium ml-2">Contact avec l'équipe</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Input 
            placeholder="Ton nom" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Input 
            type="email" 
            placeholder="Ton adresse email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Textarea 
            placeholder="Ta question" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            rows={4} 
            required 
            disabled={isSubmitting}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer ma question"}
        </Button>
      </form>
    </div>
  );
};

export default TeamContactOption;
