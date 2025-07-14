"use client"

import { Book } from "lucide-react"

const chapitre4Latex = String.raw`% chapitre4_trigonometrie.tex
\documentclass[11pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{lmodern}
\usepackage{amsmath,amssymb}
\usepackage[a4paper,margin=2.5cm]{geometry}
\usepackage{microtype}

\begin{document}

\title{Chapitre 4 — Trigonométrie}
\maketitle

\subsection*{Formules d’addition}
Pour tous réels $a,b$ :
\[
\cos(a+b)=\cos a\,\cos b-\sin a\,\sin b,
\qquad
\sin(a+b)=\sin a\,\cos b+\sin b\,\cos a.
\]
En remplaçant $b$ par $-b$ :
\[
\cos(a-b)=\cos a\,\cos b+\sin a\,\sin b,
\qquad
\sin(a-b)=\sin a\,\cos b-\sin b\,\cos a.
\]

\subsection*{Formules de duplication}
Par spécialisation $b=a$ et grâce à $\cos^{2}a+\sin^{2}a=1$ :
\[
\cos(2a)=\cos^{2}a-\sin^{2}a
        =2\cos^{2}a-1
        =1-2\sin^{2}a,
\qquad
\sin(2a)=2\sin a\,\cos a.
\]

\subsection*{Formules de linéarisation}
\[
\cos^{2}a=\frac{1+\cos(2a)}{2},
\qquad
\sin^{2}a=\frac{1-\cos(2a)}{2}.
\]

\subsection*{Valeurs trigonométriques remarquables}
\[
\renewcommand{\arraystretch}{1.3}
\begin{tabular}{c|cccccc}
$x$ & $0$ & $\pi/6$ & $\pi/4$ & $\pi/3$ & $\pi/2$ & $\pi$\\ \hline
$\sin x$ & $0$ & $1/2$ & $\sqrt2/2$ & $\sqrt3/2$ & $1$ & $0$\\
$\cos x$ & $1$ & $\sqrt3/2$ & $\sqrt2/2$ & $1/2$ & $0$ & $-1$\\
$\tan x$ & $0$ & $\sqrt3/3$ & $1$ & $\sqrt3$ & --- & $0$
\end{tabular}
\]

\end{document}
`;

const Chapitre4 = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-formation-orange/10 rounded-full flex items-center justify-center">
          <Book className="w-6 h-6 text-formation-orange" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">
          Chapitre 4 – Trigonométrie
        </h1>
      </div>
      <div className="prose max-w-none text-lg">
        <pre className="overflow-x-auto bg-muted p-4 rounded text-base">
          {chapitre4Latex}
        </pre>
        <p className="text-muted-foreground mt-2 text-sm">
          (Contenu affiché tel quel : fichier LaTeX original, non rendu en mathématiques. Si tu veux un vrai rendu mathématique et PDF, demande-moi l’intégration d’un composant LaTeX.)
        </p>
      </div>
    </div>
  </div>
)

export default Chapitre4
