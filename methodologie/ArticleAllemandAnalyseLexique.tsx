
import React from "react";

export default function ArticleAllemandAnalyseLexique() {
  return (
    <section>
      <h2 className="text-lg font-bold text-primary mb-4">ANALYSE D’ARTICLE — LEXIQUE UTILE</h2>

      <div className="mb-4">
        <b className="block mb-1">EINLEITUNG / INTRODUCTION</b>
        <div className="mb-2">
          <b>Présenter les documents</b>
          <ul className="ml-4 list-disc space-y-1">
            <li>Diese Dokumente geben einen Überblick über...</li>
            <li>Diese beiden Texte beschäftigen sich mit...</li>
            <li>Beide Texte thematisieren...</li>
            <li>In den vorliegenden Artikeln geht es um...</li>
          </ul>
        </div>
        <div className="mb-2">
          <b>Situer le débat / la question</b>
          <ul className="ml-4 list-disc space-y-1">
            <li>Die Frage, ob... wird hier unterschiedlich beantwortet.</li>
            <li>In diesem Kontext stellt sich die Frage, ob / inwiefern / warum… ?</li>
            <li>Die Texte werfen die Frage auf, ob… ?</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <b className="block mb-1">VERGLEICH DER POSITIONEN / COMPARAISON DES POINTS DE VUE</b>
        <div className="mb-2">
          <b>Accord entre les auteurs</b>
          <ul className="ml-4 list-disc space-y-1">
            <li>Die Autoren sind sich darüber einig, dass...</li>
            <li>Beide Autoren vertreten die Meinung, dass...</li>
            <li>Ihre Meinungen sind sehr ähnlich.</li>
            <li>Beide Artikel betrachten ... als...</li>
            <li>Beide Texte unterstreichen / betonen / heben hervor, dass...</li>
            <li>Sowohl X als auch Y meinen, dass...</li>
            <li>... wird auf die gleiche Weise dargestellt wie in Dokument 2.</li>
          </ul>
        </div>
        <div className="mb-2">
          <b>Désaccord entre les auteurs</b>
          <ul className="ml-4 list-disc space-y-1">
            <li>Die Autoren der beiden Texte sind über die Frage (+G) [...] nicht völlig einverstanden.</li>
            <li>Die Meinungen gehen über die Frage (+G)... auseinander.</li>
            <li>Die Meinungen gehen auseinander, was (+Akk)... betrifft.</li>
            <li>Während X großen Wert auf ... legt, vertritt Y eine ganz andere Meinung über...</li>
            <li>Der Autor legt Wert auf ..., aber er äußert eine ganz entgegengesetzte Meinung über...</li>
            <li>X widerspricht Y, indem er sagt, dass...</li>
            <li>Für X hingegen ist es keine gute Idee, ... zu +Inf.</li>
            <li>Auch wenn X meint, dass..., glaubt Y, dass...</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <b className="block mb-1">AUFBAU / STRUCTURE (par paragraphes)</b>
        <div className="mb-2">
          <b>Paragraphe 1 : introduction de la première thèse</b>
          <ul className="ml-4 list-disc space-y-1">
            <li>Zuerst wird die Frage (+G)... berücksichtigt.</li>
            <li>Zunächst wird auf die Frage (+G)... eingegangen.</li>
            <li>Der Autor betrachtet... / zieht eine Parallele mit...</li>
            <li>Als Hauptargumente führt (Name) an, dass...</li>
            <li>Dokument 1 warnt also vor...</li>
            <li>(Name) zufolge sollte man...</li>
            <li>X erwähnt, dass... / Laut X...</li>
            <li>Er selbst behauptet, dass...</li>
            <li>In dieser Hinsicht hat er Recht / Unrecht.</li>
          </ul>
        </div>
        <div className="mb-2">
          <b>Transition vers le deuxième texte (opposition ou nuance)</b>
          <ul className="ml-4 list-disc space-y-1">
            <li>Auch wenn X meint, dass...</li>
            <li>Jedoch ist es eine Bedingung für... laut der...</li>
            <li>Im Gegensatz dazu erklärt Y, dass...</li>
            <li>Y widerspricht X, indem er behauptet, dass...</li>
            <li>Y vertritt eine entgegengesetzte Meinung: ...</li>
            <li>Es besteht ein starker Unterschied zwischen... und...</li>
            <li>Hingegen hebt Y hervor, dass...</li>
          </ul>
        </div>
        <div className="mb-2">
          <b>Ajouter un second argument</b>
          <ul className="ml-4 list-disc space-y-1">
            <li>Darüber hinaus wird... betrachtet.</li>
            <li>Wegen... wird... betont.</li>
            <li>Außerdem bedeutet auch [etwas], dass...</li>
            <li>Ebenso ist zu erwähnen, dass...</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <b className="block mb-1">VERBINDUNGEN / LIAISONS UTILES</b>
        <ul className="ml-4 list-disc space-y-1">
          <li>aufgrund von (+D) = en raison de</li>
          <li>es liegt daran, dass... = cela est dû au fait que</li>
          <li>deshalb / folglich = par conséquent</li>
          <li>hingegen / im Gegensatz dazu = en revanche</li>
          <li>ebenso = de même</li>
          <li>zwar..., aber... = certes..., mais...</li>
          <li>nämlich / in der Tat = en effet</li>
          <li>trotzdem / dennoch = néanmoins</li>
          <li>darüber hinaus = en outre</li>
          <li>nicht nur..., sondern auch... = non seulement..., mais aussi...</li>
        </ul>
      </div>

      <div className="mb-4">
        <b className="block mb-1">SCHLUSS / CONCLUSION</b>
        <ul className="ml-4 list-disc space-y-1">
          <li>Durch den Vergleich dieser Dokumente kann gezeigt werden, dass...</li>
          <li>Zusammenfassend lässt sich sagen, dass...</li>
          <li>Zusammenfassend kann festgestellt werden, dass...</li>
          <li>Alles in allem lässt sich sagen, dass...</li>
          <li>Letztendlich zeigt sich, dass...</li>
        </ul>
      </div>
    </section>
  );
}
