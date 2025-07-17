
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Copy, Book, Code, Star, List } from 'lucide-react';

interface ProgrammeModuleProps {
  programmeName: string;
  videoUrl: string;
  corrige: string;
  explication: string;
  autresVersions: string[];
  outils: string[];
}

export const ProgrammeModule: React.FC<ProgrammeModuleProps> = ({
  programmeName,
  videoUrl,
  corrige,
  explication,
  autresVersions,
  outils,
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const formatCodeContent = (content: string) => {
    const sections = content.split('\n\n').filter(section => section.trim());
    
    return sections.map((section, index) => {
      const lines = section.split('\n');
      const title = lines[0].startsWith('#') ? lines[0].replace('#', '').trim() : null;
      const code = title ? lines.slice(1) : lines;
      
      return (
        <div key={index} className="mb-6">
          {title && (
            <h4 className="text-sm font-semibold text-green-400 mb-3 border-b border-green-400/30 pb-1">
              {title}
            </h4>
          )}
          <div className="space-y-1">
            {code.map((line, lineIndex) => {
              if (!line.trim()) return null;
              
              const isComment = line.trim().startsWith('#');
              const isFunction = line.includes('()') || line.includes('(');
              const isImport = line.trim().startsWith('import');
              
              return (
                <div key={lineIndex} className="flex items-center group">
                  <code className={`text-xs font-mono flex-1 ${
                    isComment 
                      ? 'text-gray-400 italic' 
                      : isImport 
                      ? 'text-purple-400' 
                      : isFunction 
                      ? 'text-blue-300' 
                      : 'text-slate-200'
                  }`}>
                    {line}
                  </code>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0 ml-2"
                          onClick={() => copyToClipboard(line.trim(), `line-${index}-${lineIndex}`)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Copier cette commande</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <Card className="w-full bg-gradient-to-br from-slate-50 to-blue-50/30 border border-blue-200/50 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-primary to-orange-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Code className="text-2xl h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{programmeName}</h2>
            <p className="text-sm opacity-90 mt-1">Formation Python spécialisée ECG</p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-8 p-8">
        {/* Video Section */}
        <div className="w-full">
          <div className="relative w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              title={`Formation - ${programmeName}`}
            />
          </div>
        </div>

        {/* Enhanced Accordion Sections */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Corrigé Section */}
          <AccordionItem value="corrige" className="border border-green-200 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 shadow-md">
            <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500 rounded-lg">
                  <Book className="h-5 w-5 text-white" />
                </div>
                <div>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 font-semibold px-3 py-1">
                    Référence Complète des Commandes
                  </Badge>
                  <p className="text-sm text-green-700 mt-1">Toutes les commandes Python ECG</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="bg-slate-950 text-slate-50 rounded-xl p-6 overflow-x-auto shadow-inner relative">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-slate-400 font-mono">Python ECG Commands</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(corrige, 'corrige')}
                    className="bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                  >
                    {copiedSection === 'corrige' ? '✓ Copié' : <><Copy className="h-4 w-4 mr-2" />Copier tout</>}
                  </Button>
                </div>
                <div className="text-sm">
                  {formatCodeContent(corrige)}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Explication Section */}
          <AccordionItem value="explication" className="border border-blue-200 rounded-lg bg-gradient-to-r from-blue-50 to-sky-50 shadow-md">
            <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300 font-semibold px-3 py-1">
                    Guide d'Utilisation Détaillé
                  </Badge>
                  <p className="text-sm text-blue-700 mt-1">Explications et conseils d'usage</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-blue-600 font-semibold">Guide Python ECG</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(explication, 'explication')}
                    className="bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200"
                  >
                    {copiedSection === 'explication' ? '✓ Copié' : <><Copy className="h-4 w-4 mr-2" />Copier</>}
                  </Button>
                </div>
                <pre className="whitespace-pre-wrap text-sm text-slate-700 leading-relaxed">
                  {explication}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Autres Versions Section */}
          <AccordionItem value="versions" className="border border-purple-200 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 shadow-md">
            <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <List className="h-5 w-5 text-white" />
                </div>
                <div>
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300 font-semibold px-3 py-1">
                    Ressources Supplémentaires
                  </Badge>
                  <p className="text-sm text-purple-700 mt-1">Formats alternatifs disponibles</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {autresVersions.map((version, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-sm text-slate-700 flex-1">{version}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Boîte à Outils Section */}
          <AccordionItem value="outils" className="border border-orange-200 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 shadow-md">
            <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500 rounded-lg">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div>
                  <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300 font-semibold px-3 py-1">
                    Boîte à Outils Terminal
                  </Badge>
                  <p className="text-sm text-orange-700 mt-1">Commandes système essentielles</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-3">
                {outils.map((outil, index) => (
                  <div key={index} className="bg-slate-900 p-4 rounded-lg border border-slate-700 shadow-sm group hover:border-orange-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <code className="text-sm font-mono text-green-400 flex-1">
                        {outil}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0 text-slate-400 hover:text-orange-400"
                        onClick={() => copyToClipboard(outil, `tool-${index}`)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
