var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-ens",
  "level": "1",
  "url": "sec-ens.html",
  "type": "Section",
  "number": "1.1",
  "title": "Les ensembles",
  "body": "  Les ensembles    L'objet fondamental à la base des mathématiques discrètes (voire même des mathématiques en général) est une structure appelée ensemble . Un ensemble est une structure qui regroupe des objets. On peut parler de l'ensemble des étudiants du programme Sciences informatiques et mathématiques, de l'ensemble des arbres sur le terrain du cégep ou encore l'ensemble des nombres naturels compris entre et .  Le terme est pris dans son sens intuitif et large. Au début de la théorie des ensembles, plusieurs paradoxes furent relevés, le plus célèbre par Bertrand Russel. On peut pallier à ces paradoxes en donnant une définition axiomatique de la théorie des ensembles. Pour ce qui suit, ce n'est pas nécessaire. On utilisera plutôt l'approche naïve de la théorie des ensembles. Un ensemble sera donc bien défini si, étant donné tout objet, on peut déterminer sans aucun doute son appartenance ou non à l'ensemble.  Dans cette section, on définit la notion d'ensemble, la description en extension et en compréhension d'un ensemble, la relation d'appartenance d'un objet à un ensemble, la relation entre deux ensembles et la cardinalité d'un ensemble. On donne aussi des exemples importants d'ensembles, dont l'ensemble vide.     Définitions et exemples  On commence avec la définition d'un ensemble. Un ensemble sera bien défini si on peut toujours déterminer l'appartenance ou non appartenance d'un objet à cet ensemble sans aucun doute. Pour voir un exemple d'ensemble qui n'est pas bien défini, on pourra consulter l'exercice .   Un ensemble   Un ensemble est une collection non ordonnée d'objets. On appelle aussi les objets des éléments ou des membres. Typiquement, on dénote un ensemble par une lettre majuscule du début de l'alphabet.  Bien que les ensembles soient normalement utilisés pour regrouper des objets avec des propriétés similaires, rien n'oblige que ce soit le cas. On peut même avoir un ensemble dont les éléments sont eux-mêmes des ensembles.    On peut décrire un ensemble de plusieurs manières. La plus simple, mais pas toujours pratique ou même possible, est d'énumérer ses éléments. On dit alors que l'ensemble est décrit en extension . On utilisera les accolades pour encadrer les éléments d'un ensemble. Ceci est cohérent avec la notion d'ensemble de plusieurs langages de programmation, dont Python\/Sage, qui sera utilisé à plusieurs reprises dans ces notes.   Des ensembles décrits en extension   On veut décrire les ensembles suivants en extension.   L'ensemble des entiers compris entre et , inclusivement.    L'ensemble des lettres de l'alphabet qui composent le nom de famille de l'auteur, sans distinguer majuscule et minuscule.    L'ensemble des entiers strictement positifs et inférieurs à qui sont aussi des carrés parfaits.   L'ensemble dont les éléments sont les trois ensembles précédents.     Il peut y avoir plus d'une manière valide pour décrire chacun de ces ensembles. En voici une:    ;     ;     .        Répétition d'éléments   Tel que mentionné dans la définition , un ensemble est une collection non ordonnée d'objets. Cela signifie que l'ordre n'est pas important dans la description de l'ensemble. Ainsi, l'ensemble est en fait le même ensemble que l'ensemble de l'exemple . De plus, comme c'est l'appartenance d'un objet à l'ensemble qui est important, la répétition n'est pas nécessaire. L'ensemble est le même ensemble que l'ensemble de l'exemple .    Dans la description en extension de l'ensemble des carrés parfaits inférieurs à , on a utilisé les « » afin de limiter l'écriture. On comprend que la suite définie par les premiers termes de la description continue de manière naturelle dans cette omission. Souvent, pour décrire un ensemble contenant beaucoup d'éléments, même une infinité, on utilisera la description en compréhension de l'ensemble. On énonce alors la (ou les) propriété que possèdent les éléments de l'ensemble à l'intérieur même de la description. Dans ce cas, on utilisera souvent pour dénoter un élément arbitraire de l'ensemble une lettre minuscule analogue à celle utilisée pour le nom de l'ensemble ou encore ayant un sens particulier dans le contexte.   Des ensembles décrits en compréhension  On veut décrire les ensembles suivants en compréhension.      Il peut y avoir plus d'une manière valide pour décrire chacun de ces ensembles. En voici une pour chacun:     ;     .     Dans la description en compréhension, on sépare la variable utilisée de la condition avec une barre verticale. Cette barre devrait se lire comme l'expression « tel que ». On voit souvent le «deux points (:) » comme autre possibilité de notation.    Relation entre deux ensembles  Étant donné un objet quelconque et un ensemble , on écrit (se lit est dans ou encore appartient à ) si est un élément de l'ensemble et ( n'appartient pas à ) sinon. Puisque plusieurs descriptions sont possibles pour un même ensemble, il peut être pratique de déterminer si deux ensembles sont égaux. On définit ci-dessous deux relations possibles entre deux ensembles, celle d'inclusion et celle d'égalité.   Relation d'inclusion  Soit et deux ensembles avec la propriété que, pour tout élément , on a aussi . On dit alors que est un sous-ensemble de et on écrit . Si on est certain que les ensembles sont différents, on pourra utiliser le symbole d'inclusion stricte, . Ces symboles font penser aux symboles pour les inégalités. Ainsi, bien que d'usage beaucoup moins répandu, on peut aussi écrire .  Ces symboles existent aussi dans leur version «négative» ( ), utilisés pour la non inclusion d'un ensemble dans un autre. De plus, une variante souvent utilisée pour mettre l'emphase sur un sous-ensemble stricte est le symbole .    On peut évidemment vérifier qu'un ensemble est un sous-ensemble d'un autre, mais on peut aussi créer les sous-ensembles à partir d'un ensemble.   Les sous-ensembles d'un ensemble  On considère l'ensemble . On cherche tous les sous-ensembles de possibles contenant au moins un élément.  L'ensemble contient trois éléments. Un sous-ensemble pourrait donc potentiellement contenir un, deux ou même trois éléments. On énumère les possibilités ci-dessous.  et , qui ne contiennent qu'un élément.  et qui en contiennent deux.  lui-même, qui contient trois éléments.    Plus tard, on verra comment compter tous les sous-ensembles possibles à partir d'un ensemble ayant éléments. Avec une petite précision, on reparlera de l'ensemble de tous les sous-ensembles possibles à la définition .    Relation d'égalité   Soit et deux ensembles. On dit que les ensembles sont égaux, et on écrit , si et seulement s'ils sont formés des mêmes éléments.  Une manière pratique de déterminer si deux ensembles sont égaux est de montrer qu'à la fois et .    On regarde des exemples de sous-ensembles et d'ensembles égaux.   Sous-ensemble et égalité   On considère les ensembles suivants:  On peut remarquer les relations suivantes: , , , , . On aurait pu noter sans problème que (équivalent à , ou même (moins strict, mais quand même vrai), mais pas que .    Le nombre d'éléments dans un ensemble est appelé la cardinalité de l'ensemble. Pour un ensemble , on la note . Les ensembles de l'exemple ont respectivement comme cardinalité et .  La cardinalité d'un ensemble peut être n'importe quel nombre naturel ou même infini. Un ensemble est dit fini si sa cardinalité est un nombre naturel et infini sinon.    Représentation graphique d'ensembles  Il peut être utile d'avoir une représentation graphique de la notion d'ensemble et des concepts associés. Pour cela on peut utiliser un diagramme de Venn. Dans un tel diagramme, on identifie l'ensemble des tous les objets étudiés par un rectangle. On le notera (la lettre grecque omega, majuscule). On l'appelle souvent le référentiel ou encore l'ensemble univers. Dans ce rectangle, un certain nombre d'ensembles peuvent être illustrés, souvent par des cercles.  À titre d'exemple, on prend comme ensemble univers les chiffres arabes et on considère les deux sous-ensembles suivants: . La figure suivante illustre un diagramme de Venn de ces ensembles.   Un diagramme de Venn  Le diagramme de Venn des ensembles Omega, A et B est illustré. On voit les éléments à l'intérieur de chaque ensemble.    On peut remarquer dans la figure que les éléments sont à la fois dans et dans . C'est un cas particulier de l'intersection de deux ensembles, qui sera défini dans la section .   Diagramme de Venn: dynamique  On peut voir un diagramme de Venn associé à trois ensembles .   Diagramme de Venn interactif        Ensembles particuliers    On donne maintenant la définition de certains ensembles importants. L'un deux, l'ensemble univers a déjà été mentionné. Un autre ensemble d'une grande importance est l'ensemble vide. On le note par ou encore . Sa cardinalité est de . C'est le seul ensemble qui possède cette propriété. Il possède aussi la propriété d'être un sous-ensemble de tous les ensembles, incluant lui-même. .  Un autre sous-ensemble a été évoqué à l'exemple . On en donne une définition plus précise ci-bas.   L'ensemble des puissances  Étant donné un ensemble , l'ensemble de tous les ensembles formés des éléments de , c'est-à-dire tous les sous-ensembles de , est appelé l'ensemble des puissances (ou des parties) de . On le note par .   Si on ajoute l'ensemble vide au sous-ensembles trouvés à l'exemple , on obtient l'ensemble des puissances de : .  On termine avec la liste des principaux ensembles de nombres qui seront utilisés dans ces notes.  L'ensemble des nombres naturels, noté . En passant Il n'y a pas de consensus quant à l'inclusion de l'élément dans l'ensemble des nombres naturels. Certains auteurs vont l'inclure, d'autres non. L'important est la cohérence à même un texte. Parce qu'on fera une utilisation du langage informatique python\/Sage et que ceux-ci commencent leur numérotation à , on a choisit de l'inclure ici. Si on veut parler des naturels en excluant , on le mentionnera explicitement et on dénotera l'ensemble par ou encore (l'opération sera définie dans la section ).  L'ensemble des entiers, noté .  L'ensemble des nombres rationnels, noté .  L'ensemble des nombres réels, noté . Pour cet ensemble, on se fie à l'intuition de ce que sont les nombres réels, par exemple les nombres situé sur une droite infinie, car donner une définition précise est difficile. Cet ensemble sera peu utilisé, sa nature étant davantage du côté continu que discret.    Dans la description d'un ensemble en compréhension, lorsque les éléments sont des nombres, il est de bon usage de spécifier dans quel ensemble ces nombres se trouvent. Il n'y a pas de manière unique de le faire, en voici deux:  ;  .  On pourrait traduire ces deux écritures respectivement par  L'ensemble est composé des entiers tels que leur carré est inférieur ou égal à ;  L'ensemble est composé d'éléments tels que est un entier dont le carré est inférieur ou égal à .    La précision de l'ensemble permet de déterminer avec certitude les éléments de l'ensemble. Par exemple, l'ensemble ci-dessus est , mais l'ensemble ne contient que les éléments .   Les intervalles  On délimite les ensembles par les paires d'accolades, soit en énumérant les éléments ou en donnant une description des membres. Pour les ensembles dont la cardinalité est infinie, il peut être difficile ou impossible d'énumérer les éléments. En particulier, certains sous-ensembles des nombres réels sont assez importants pour qu'on leur donne une notation propre à eux. Ce sont les intervalles. Voici quatre exemples de cette notation: .  De plus, lorsque l'inégalité est stricte, on admet la possibilité que soit remplacé par et par .     En résumé  Les points importants de cette section sont:  La définition d'un ensemble .  Les écritures en extension et en compréhension d'un ensemble.  La relation d'inclusion , de sous-ensemble.  La notion d'égalité entre deux ensembles.  L'ensemble univers et l'ensemble vide .          Exercices    À faire en classe  Ces exercices servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.   Écrire les ensembles suivants en extension et dire si et font partie de ces ensembles:  ;  On a . Ainsi, , mais .  ;  On a . Ainsi, et .  ;  On a . Ainsi, , mais .    Écrire les ensembles suivants en compréhension:           Est-ce que est un sous-ensemble de ? Justifier Oui, car pour tout , on a aussi que .  Donner le diagramme de Venn correspondant aux ensembles suivants : .    Un diagramme de Venn des ensembles , et .  Le diagramme de Venn des ensembles Omega, A et B est illustré.      Soit deux ensembles quelconques. Dessiner toutes les configurations relatives possibles que peuvent avoir et dans un diagramme de Venn (en supposant que si un sous-ensemble est vide, il est absent).   Différentes configurations de et .    Le diagramme de Venn si est illustré.     Le diagramme de Venn si est illustré.       Le diagramme de Venn si est illustré.     Le diagramme de Venn si est illustré.       Le diagramme de Venn de base est illustré.     Le diagramme de Venn lorsque est illustré.       Le diagramme de Venn lorsque est illustré.       Donner si .    Donner la cardinalité des ensembles suivants:    On définit comme l'ensemble de tous les ensembles qui ne se contiennent pas eu même. Ainsi, pour un ensemble , on a si et seulement si . Déterminer si est un ensemble bien défini.  Est-ce que est un élément de ? Est-ce que ?  Non, n'est pas bien défini.  Exprimer en mots la différence entre les ensembles des exercices et . Les deux ensemlbes ont une cardinalité de deux. L'un de leurs éléments, l'élément , est un élément en commun. Par contre, le deuxième élément est différent. En effet, l'ensemble contient l'élément , alors que l'ensemble contient l'élément , c'est-à-dire l'ensemble contenant .  Exprimer pourquoi la cardinalité des ensembles des exercices et est différente. Car l'ensemble ne contient qu'un seul élément, c'est-à-dire . De l'autre côté, l'ensemble contient deux éléments, l'élément ainsi que l'élément .     "
},
{
  "id": "def-ensemble",
  "level": "2",
  "url": "sec-ens.html#def-ensemble",
  "type": "Définition",
  "number": "1.1.1",
  "title": "Un ensemble.",
  "body": " Un ensemble   Un ensemble est une collection non ordonnée d'objets. On appelle aussi les objets des éléments ou des membres. Typiquement, on dénote un ensemble par une lettre majuscule du début de l'alphabet.  Bien que les ensembles soient normalement utilisés pour regrouper des objets avec des propriétés similaires, rien n'oblige que ce soit le cas. On peut même avoir un ensemble dont les éléments sont eux-mêmes des ensembles.   "
},
{
  "id": "ex-ensext",
  "level": "2",
  "url": "sec-ens.html#ex-ensext",
  "type": "Exemple",
  "number": "1.1.2",
  "title": "Des ensembles décrits en extension.",
  "body": " Des ensembles décrits en extension   On veut décrire les ensembles suivants en extension.   L'ensemble des entiers compris entre et , inclusivement.    L'ensemble des lettres de l'alphabet qui composent le nom de famille de l'auteur, sans distinguer majuscule et minuscule.    L'ensemble des entiers strictement positifs et inférieurs à qui sont aussi des carrés parfaits.   L'ensemble dont les éléments sont les trois ensembles précédents.     Il peut y avoir plus d'une manière valide pour décrire chacun de ces ensembles. En voici une:    ;     ;     .      "
},
{
  "id": "sec-ens-3-6",
  "level": "2",
  "url": "sec-ens.html#sec-ens-3-6",
  "type": "Remarque",
  "number": "1.1.3",
  "title": "Répétition d’éléments.",
  "body": " Répétition d'éléments   Tel que mentionné dans la définition , un ensemble est une collection non ordonnée d'objets. Cela signifie que l'ordre n'est pas important dans la description de l'ensemble. Ainsi, l'ensemble est en fait le même ensemble que l'ensemble de l'exemple . De plus, comme c'est l'appartenance d'un objet à l'ensemble qui est important, la répétition n'est pas nécessaire. L'ensemble est le même ensemble que l'ensemble de l'exemple .   "
},
{
  "id": "sec-ens-3-8",
  "level": "2",
  "url": "sec-ens.html#sec-ens-3-8",
  "type": "Exemple",
  "number": "1.1.4",
  "title": "Des ensembles décrits en compréhension.",
  "body": " Des ensembles décrits en compréhension  On veut décrire les ensembles suivants en compréhension.      Il peut y avoir plus d'une manière valide pour décrire chacun de ces ensembles. En voici une pour chacun:     ;     .    "
},
{
  "id": "def-ssens",
  "level": "2",
  "url": "sec-ens.html#def-ssens",
  "type": "Définition",
  "number": "1.1.5",
  "title": "Relation d’inclusion.",
  "body": " Relation d'inclusion  Soit et deux ensembles avec la propriété que, pour tout élément , on a aussi . On dit alors que est un sous-ensemble de et on écrit . Si on est certain que les ensembles sont différents, on pourra utiliser le symbole d'inclusion stricte, . Ces symboles font penser aux symboles pour les inégalités. Ainsi, bien que d'usage beaucoup moins répandu, on peut aussi écrire .  Ces symboles existent aussi dans leur version «négative» ( ), utilisés pour la non inclusion d'un ensemble dans un autre. De plus, une variante souvent utilisée pour mettre l'emphase sur un sous-ensemble stricte est le symbole .   "
},
{
  "id": "ex-enspuiss",
  "level": "2",
  "url": "sec-ens.html#ex-enspuiss",
  "type": "Exemple",
  "number": "1.1.6",
  "title": "Les sous-ensembles d’un ensemble.",
  "body": " Les sous-ensembles d'un ensemble  On considère l'ensemble . On cherche tous les sous-ensembles de possibles contenant au moins un élément.  L'ensemble contient trois éléments. Un sous-ensemble pourrait donc potentiellement contenir un, deux ou même trois éléments. On énumère les possibilités ci-dessous.  et , qui ne contiennent qu'un élément.  et qui en contiennent deux.  lui-même, qui contient trois éléments.    Plus tard, on verra comment compter tous les sous-ensembles possibles à partir d'un ensemble ayant éléments. Avec une petite précision, on reparlera de l'ensemble de tous les sous-ensembles possibles à la définition .  "
},
{
  "id": "def-ensegaux",
  "level": "2",
  "url": "sec-ens.html#def-ensegaux",
  "type": "Définition",
  "number": "1.1.7",
  "title": "Relation d’égalité.",
  "body": " Relation d'égalité   Soit et deux ensembles. On dit que les ensembles sont égaux, et on écrit , si et seulement s'ils sont formés des mêmes éléments.  Une manière pratique de déterminer si deux ensembles sont égaux est de montrer qu'à la fois et .   "
},
{
  "id": "ex-relens",
  "level": "2",
  "url": "sec-ens.html#ex-relens",
  "type": "Exemple",
  "number": "1.1.8",
  "title": "Sous-ensemble et égalité.",
  "body": " Sous-ensemble et égalité   On considère les ensembles suivants:  On peut remarquer les relations suivantes: , , , , . On aurait pu noter sans problème que (équivalent à , ou même (moins strict, mais quand même vrai), mais pas que .   "
},
{
  "id": "fig-Venn1",
  "level": "2",
  "url": "sec-ens.html#fig-Venn1",
  "type": "Figure",
  "number": "1.1.9",
  "title": "",
  "body": " Un diagramme de Venn  Le diagramme de Venn des ensembles Omega, A et B est illustré. On voit les éléments à l'intérieur de chaque ensemble.   "
},
{
  "id": "ex-Venn",
  "level": "2",
  "url": "sec-ens.html#ex-Venn",
  "type": "Exemple",
  "number": "1.1.10",
  "title": "Diagramme de Venn: dynamique.",
  "body": " Diagramme de Venn: dynamique  On peut voir un diagramme de Venn associé à trois ensembles .   Diagramme de Venn interactif     "
},
{
  "id": "def-enspuiss",
  "level": "2",
  "url": "sec-ens.html#def-enspuiss",
  "type": "Définition",
  "number": "1.1.12",
  "title": "L’ensemble des puissances.",
  "body": " L'ensemble des puissances  Étant donné un ensemble , l'ensemble de tous les ensembles formés des éléments de , c'est-à-dire tous les sous-ensembles de , est appelé l'ensemble des puissances (ou des parties) de . On le note par .  "
},
{
  "id": "sec-ens-6-10",
  "level": "2",
  "url": "sec-ens.html#sec-ens-6-10",
  "type": "Remarque",
  "number": "1.1.13",
  "title": "Les intervalles.",
  "body": " Les intervalles  On délimite les ensembles par les paires d'accolades, soit en énumérant les éléments ou en donnant une description des membres. Pour les ensembles dont la cardinalité est infinie, il peut être difficile ou impossible d'énumérer les éléments. En particulier, certains sous-ensembles des nombres réels sont assez importants pour qu'on leur donne une notation propre à eux. Ce sont les intervalles. Voici quatre exemples de cette notation: .  De plus, lorsque l'inégalité est stricte, on admet la possibilité que soit remplacé par et par .  "
},
{
  "id": "exo-ens-2-3",
  "level": "2",
  "url": "sec-ens.html#exo-ens-2-3",
  "type": "Exercice",
  "number": "1.1.5.1",
  "title": "",
  "body": " Écrire les ensembles suivants en extension et dire si et font partie de ces ensembles:  ;  On a . Ainsi, , mais .  ;  On a . Ainsi, et .  ;  On a . Ainsi, , mais .  "
},
{
  "id": "exo-ens-2-4",
  "level": "2",
  "url": "sec-ens.html#exo-ens-2-4",
  "type": "Exercice",
  "number": "1.1.5.2",
  "title": "",
  "body": " Écrire les ensembles suivants en compréhension:          "
},
{
  "id": "exo-ens-2-5",
  "level": "2",
  "url": "sec-ens.html#exo-ens-2-5",
  "type": "Exercice",
  "number": "1.1.5.3",
  "title": "",
  "body": "Est-ce que est un sous-ensemble de ? Justifier Oui, car pour tout , on a aussi que . "
},
{
  "id": "exo-ens-2-6",
  "level": "2",
  "url": "sec-ens.html#exo-ens-2-6",
  "type": "Exercice",
  "number": "1.1.5.4",
  "title": "",
  "body": "Donner le diagramme de Venn correspondant aux ensembles suivants : .    Un diagramme de Venn des ensembles , et .  Le diagramme de Venn des ensembles Omega, A et B est illustré.     "
},
{
  "id": "exo-ABconfrel",
  "level": "2",
  "url": "sec-ens.html#exo-ABconfrel",
  "type": "Exercice",
  "number": "1.1.5.5",
  "title": "",
  "body": "Soit deux ensembles quelconques. Dessiner toutes les configurations relatives possibles que peuvent avoir et dans un diagramme de Venn (en supposant que si un sous-ensemble est vide, il est absent).   Différentes configurations de et .    Le diagramme de Venn si est illustré.     Le diagramme de Venn si est illustré.       Le diagramme de Venn si est illustré.     Le diagramme de Venn si est illustré.       Le diagramme de Venn de base est illustré.     Le diagramme de Venn lorsque est illustré.       Le diagramme de Venn lorsque est illustré.      "
},
{
  "id": "exo-ens-2-8",
  "level": "2",
  "url": "sec-ens.html#exo-ens-2-8",
  "type": "Exercice",
  "number": "1.1.5.6",
  "title": "",
  "body": "Donner si .   "
},
{
  "id": "exo-ens-2-9",
  "level": "2",
  "url": "sec-ens.html#exo-ens-2-9",
  "type": "Exercice",
  "number": "1.1.5.7",
  "title": "",
  "body": "Donner la cardinalité des ensembles suivants:  "
},
{
  "id": "exo-Russel",
  "level": "2",
  "url": "sec-ens.html#exo-Russel",
  "type": "Exercice",
  "number": "1.1.5.8",
  "title": "",
  "body": " On définit comme l'ensemble de tous les ensembles qui ne se contiennent pas eu même. Ainsi, pour un ensemble , on a si et seulement si . Déterminer si est un ensemble bien défini.  Est-ce que est un élément de ? Est-ce que ?  Non, n'est pas bien défini. "
},
{
  "id": "exo-ens-2-11",
  "level": "2",
  "url": "sec-ens.html#exo-ens-2-11",
  "type": "Exercice",
  "number": "1.1.5.9",
  "title": "",
  "body": "Exprimer en mots la différence entre les ensembles des exercices et . Les deux ensemlbes ont une cardinalité de deux. L'un de leurs éléments, l'élément , est un élément en commun. Par contre, le deuxième élément est différent. En effet, l'ensemble contient l'élément , alors que l'ensemble contient l'élément , c'est-à-dire l'ensemble contenant . "
},
{
  "id": "exo-ens-2-12",
  "level": "2",
  "url": "sec-ens.html#exo-ens-2-12",
  "type": "Exercice",
  "number": "1.1.5.10",
  "title": "",
  "body": "Exprimer pourquoi la cardinalité des ensembles des exercices et est différente. Car l'ensemble ne contient qu'un seul élément, c'est-à-dire . De l'autre côté, l'ensemble contient deux éléments, l'élément ainsi que l'élément . "
},
{
  "id": "sec-opens",
  "level": "1",
  "url": "sec-opens.html",
  "type": "Section",
  "number": "1.2",
  "title": "Opérations sur les ensembles",
  "body": "  Opérations sur les ensembles    Introduction  Il est possible de combiner des ensembles de différentes manières. On pourrait vouloir créer à partir de deux ensembles et un nouvel ensemble qui contiendrait tous les éléments qui sont dans ou , ceux qui sont à la fois dans et et ainsi de suite. On verra que ces opérations obéissent à des propriétés particulières, qui reviendront aussi dans le chapitre  Dans cette section, on définit l'union, l'intersection, le produit cartésien et la différence de deux ensembles. On définit aussi le complément d'un ensemble par rapport à un ensemble univers .    Opérations élémentaires sur les ensembles  La première opération que l'on considère est celle qui, à partir de deux ensembles, crée un nouvel ensemble dont les éléments sont dans au moins l'un des deux ensembles. On l'appelle l'union.   L'union de deux ensembles  Soit et des ensembles quelconques. L'union de et , notée est l'ensemble qui contient tous les éléments qui sont dans ou dans , potentiellement les deux: .  Le mot « ou » n'a pas la même signification ici que dans la langue usuelle. On parle d'un « ou » inclusif. L'opération qui crée un ensemble dont les éléments sont dans ou dans , mais pas les deux est appelée la différence symétrique (voir exercice ). C'est l'équivalent d'un « ou » exclusif.     L'union de deux ensembles  Soit et deux ensembles. On cherche à écrire en extension.   L'union est . À remarquer qu'on ne met qu'une fois les éléments, comme le veut la définition d'un ensemble.    La deuxième opération est celle qui, à partir de deux ensembles, crée un nouvel ensemble dont les éléments sont simultanément dans et . On l'appelle l'intersection.   L'intersection de deux ensembles   Soit et des ensembles quelconques. L'intersection de et , notée est l'ensemble qui contient tous les éléments qui sont dans et dans : .  Deux ensembles dont l'intersection est vide sont dits disjoints .     L'intersection de deux ensembles   On reprend les ensembles et . On cherche à écrire en extension.    L'intersection est .    L'union et l'intersection de deux ensembles sont illlustrées à la figure .   L'union (à gauche) et l'intersection (à droite) de deux ensembles et    Le diagramme de Venn de deux ensembles est illustré, avec l'union de A et B colorée.     Le diagramme de Venn de deux ensembles est illustré, avec l'intersection de A et B colorée.      L'union de deux ensembles est en quelque sorte une addition sur ces ensembles et l'intersection est une sorte de multiplication. Il y a quelques subtilités et différences, mais les propriétés de ces opérations, énoncées à la sous-section iront dans ce sens. On définit maintenant la différence entre deux ensembles.   La différence de deux ensembles  Soit et deux ensembles. La différence entre et , notée ( moins ) est un ensemble dont les éléments sont tous dans , mais pas dans : .  La différence est parfois aussi notéé et on dit aussi sauf . On préfèrera la notation , car elle se conforme avec celle utilisée par Sage.     La différence de deux ensembles   Soit et . On cherche à décrire en extension les ensembles et (vont-ils être égaux?)   Pour l'ensemble , on retranche les éléments de qui sont aussi dans . Il reste .  Pour ce qui est de , on obtient .   Lorsqu'un ensemble est vu comme un sous-ensemble d'un ensemble univers , on donne un nom particulier aux éléments qui sont dans , mais pas dans . C'est le complément de .   Le complément d'un ensemble  Soit un ensemble à l'intérieur d'un ensemble univers . On apelle le complément de l'ensemble des éléments de qui ne sont pas dans et on le note: .  On utilise parfois aussi la notion ou pour désigner le complément.     Le complément d'ensembles  On considère les ensembles et . On cherche à décrire les compléments de et par rapport aux ensembles et .   On commence par trouver les compléments par rapport à l'ensemble univers . Pour , on remarque que les éléments sont les nombres pairs plus petit ou égaux à . Dans , son complément sera alors . Pour , on cherche tous les nombres naturels qui sont inférieurs ou égaux à (donc dans ), mais pas inférieurs ou égaux à (donc dans ). Il reste donc .  Maintenant pour , on observe que l'ensemble est infini. On pourrait écrire , mais comme la suite logique est en deux parties (d'abord, les impairs inférieurs à , puis tous les nombres naturels plus grand que ), on pourrait préférer l'écrire en deux partie: .  Pour l'ensemble , on peut utiliser une description en compréhension assez clair: .    Une dernière opération sur les ensembles que l'on considère est le produit cartésien. Celle-ci sera particulièrement utile pour définir d'autres concepts de manières adéquates. On introduit dans un premier temps la notion de paires ordonnées.   Paire ordonnée   Une paire ordonnée, ou couple, est une collection de deux objets dont l'ordre est important. On la note avec des objets quelconques. Pour deux paires ordonnées , on a si et seulement si et .     Le produit cartésien  Soit et deux ensembles. Le produit cartésien de par , noté est l'ensemble de toutes les paires ordonnées formées à partir des éléments des ensemble : .      Le produit cartésien de deux ensembles  On considère les ensembles et . On cherche à décrire le produit cartésien en extension.   On doit énumérer toutes les paires ordonnées possibles. On verra au chapitre comment compter le nombre de paires. Voici une méthode simple pour les énumérer sans en oublier lorsque les ensembles sont finis.  On prend le premier élément de et on crée toutes les paires ordonnées possibles contenant cet élément.  On répète avec les autres éléments de jusqu'à épuisement de l'ensemble .   On a donc .      Propriétés des opérations élémentaires  Les opérations définies à la sous-section précédente peuvent interagir de plusieurs manières entre elles et être combinées. On peut les démontrer de plusieurs manières. On en présente deux ci-dessous. On donne la liste des propriétés dans un premier temps et on effectue la démonstration de deux d'entre elles par la suite. Les exercices complèteront les preuves. Pour chaque propriété, sont des ensembles quelconques et est un ensemble univers avec .   Propriétés des opérations sur les ensembles   Les propriétés d'identité:    Ajouter le vide à ne change pas , et comme , l'intersection avec redonne .  Les propriétés d'idempotence:      Les propriétés de domination:      Les propriétés de complémentarité et de complétude:         Les propriétés d'absorption:      Les propriétés de commutativité:      Les propriétés d'associativité:    Ceci fait en sorte qu'on peut écrire ou sans aucun souci de clarté, l'ordre n'étant pas important.  Les propriétés de distributivité     Ici par contre, les parenthèses sont importantes pour préciser quelles des deux opérations on veut effectuer en premier.   Les lois de De Morgan:       Beaucoup de ces propriétés sont intuitives quand on prend le temps d'y réfléchir un instant. L'analogie de l'addition et de la multiplication mentionnée plus tôt faisait référence aux propriétés de commutativité, d'associativité et de distributivité avec une subtilité\/différence à trouver! On démontre la propriété ci-dessous afin d'illustrer deux techniques de preuves utilisées dans la théorie des ensembles.   L'union et l'intersection ont la propriété d'associativité  Soit trois ensembles quelconques. Alors .  Pour démontrer l'identité de l'union, on utilise une table d'appartenance. Ce type de table reviendra dans la section (sous le nom de table de vérité). Voici comment remplir une telle table.  Sur la première ligne, on met tous les ensembles pertinents à notre égalité, en commençant par les ensembles les plus simples à la gauche.  En fonction du nombre d'ensembles seuls, on remplit les lignes sous les premières colonnes (ne contenant qu'un ensemble seul) avec des « non » (signifiant que l'élément n'est pas dans l'ensemble) ou « oui » (signifiant l'appartenance de l'élément à l'ensemble) afin d'obtenir toutes les combinaisons possibles.  On remplit le reste de la table en utilisant la définition des opérations utilisées.  L'égalité est vrai si les colonnes correspondant aux membres de part et d'autre de l'égalité sont identiques.  Voici la table pour l'identité    Table d'appartenance pour                           oui  non  non  oui  non  oui  oui    oui  non  oui  oui  oui  oui  oui    oui  oui  non  oui  oui  oui  oui    oui  oui  oui  oui  oui  oui  oui    non  non  non  non  non  non  non    non  non  oui  non  oui  oui  oui    non  oui  non  oui  oui  oui  oui    non  oui  oui  oui  oui  oui  oui      On démontre l'identité de l'intersection avec le concept de sous-ensemble et d'égalité: si sont des ensembles tels que et , alors . Pour ce faire, on commence par montrer que .  On veut montrer qu'un élément arbitraire de sera aussi dans . Pour cela, il peut-être utile de transposer l'ensemble en mots. Soit . Alors l'élément est dans l'intersection de et de (en résolvant l'intersection extérieure à la parenthèse) et donc, et . Puisqu'on sait maintenant que , on peut aussi dire que et . Donc est dans chacun des trois ensembles (sous l'hypothèse initiale que ).  En particulier, puisque est dans et , on obtient que . Finalement, en utilisant le fait que , on a que et et donc, . On a bel et bien .  L'idée pour montrer l'autre direction, soit que est identique.  Soit un élément arbitraire de . Alors est dans l'intersection de et de . En particulier, est dans . Puisque est dans l'intersection de et , on voit que est à la fois dans et dans (et dans !). Comme est à la fois dans et dans , il est dans leur intersection. En combinant cela avec le fait que , on obtient que est dans l'intersection de et . Ainsi .  Comme et , on conclut finalement que .       En résumé  Les points importants de cette section sont:  L'opération union de deux ensembles;  L'opération intersection de deux ensembles;  L'opération différence de deux ensembles;  L'opération complément d'un ensemble par rapport à l'ensemble univers;  L'opération produit cartésien de deux ensembles;  Les propriétés de ces opérations.         Ces questions sont à faire avant de venir en classe et à remettre au début du cours.   Soit et vivant dans l'ensemble univers . Déterminer:          Dessiner l'ensemble sur le diagramme de Venn de la figure suivante.   Un diagramme de Venn vide  Un diagramme de Venn contenant des ensembles A et B quelconques est illustré.     Déterminer le produit cartésien de et . Quel est votre élément favori de ?  On considère l'ensemble . Donner . Trouver un ensemble tel que Trouver un ensemble tel que Un étudiant affirme avoir trouvé tel que . Donner un exemple d'un tel ensemble ou expliquer pourquoi ce n'est pas possible. Un étudiant affirme avoir trouvé tel que . Donner un exemple d'un tel ensemble ou expliquer pourquoi ce n'est pas possible.  Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.     Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Soit , et . Déterminer:                          On a vu les propriétés de distributivité pour combiner l'union et l'intersection. Cet exercice vise à montrer d'une autre manière que les parenthèses sont importantes.  Un diagramme de Venn vide  Un diagramme de Venn contenant des ensembles A, B et C quelconques est illustré.    Sur des diagrammes de Venn comme celui de la figure , illustrer les ensembles suivants:     Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.         Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.      Expliquer pourquoi, à partir du résultat de la partie précédente, il n'est pas nécessaire de montrer que . Interchanger les rôles de et et utiliser la commutativité .  Sur un diagramme de Venn comme celui de la figure , illustrer les ensembles suivants.    Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.        Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.       Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.     Utiliser les parties précédentes et un argument de symétrie pour illustrer:  et .  Ici, on remarque qu ces expressions sont les mêmes que l'expression si on intervertit l'ensemble avec l'ensemble ou . Ainsi, on peut obtenir les diagrammes de Venn en inversant les lettres.    Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.        Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.       et .  Encore une fois, on remarque qu ces expressions sont les mêmes que l'expression si on intervertit l'ensemble ou l'ensemble avec l'ensemble . Ainsi, on peut obtenir les diagrammes de Venn en inversant les lettres.    Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.        Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.       Pour chaque diagramme de Venn ci-dessous, décrire l'ensemble ombragée en fonction des ensembles et des opérations élémentaires d'union, d'intersection et de complément.   Le diagramme de Venn d'un ensemble   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.     .   Le diagramme de Venn d'un ensemble   Un diagramme de Venn à trois ensembles dans lequel C est ombragé, sauf la partie commune avec uniquement A .     .  Soit et deux ensembles quelconques. On définit la différence symétrique de et , note  En effet, l'utilisation du symbole d'addition ne semble pas compatible avec le nom. , comme l'ensemble des éléments qui sont dans ou , mais pas les deux. Donner la différence symétrique des ensembles de l'exercice .   Sur un diagramme de Venn comme celui de la figure , illustrer l'ensemble .    Le diagramme de Venn de      Sans faire une preuve complète (pour l'instant), expliquer intuitivement pourquoi Finalement, c'est peut-être le nom « différence » qui est mal choisi, pas le symbole . .  Car de dire qu'un élément est dans ou est équivalent à dire qu'un élément est dans ou .  De même, de dire qu'un élément est dans et est équivalent à dire qu'un élément est dans et .  Sans faire une preuve complète (pour l'instant), expliquer intuitivement pourquoi Il peut être utile de revoir le diagramme de Venn de la partie .  L'union de avec est , alors que l'intersection de avec est .  Ainsi, est l'ensemble contenant les éléments de , sans les élément de .   Dans cet exercice, on s'intéresse à la cardinalité de l'union de deux ensembles. Donner deux ensembles et tels que et . Que vaut ? Il y a une infinité de solutions. L'une d'elle est et . On a alors . Ceci est vrai pour toutes les solutions. Donner deux ensembles et tels que et . Que vaut ? Il y a une infinité de solutions. L'une d'elle est et . On a alors . Ceci est vrai pour toutes les solutions. Si et que , quelles sont les valeurs possibles pour ? Donner des exemples d'ensembles tel que est égale à la plus petite valeur possible et est égale à la plus grande valeur possible. Les cas possibles pour sont . On peut prendre et . Pour chaque cas de la partie précédente, que vaut ? On a:   Le principe d'inclusion-exclusion Soit et deux ensembles. Donner un argument justifiant le fait que . Lorsqu'on calcul , on compte les éléments de deux fois (une fois dans la valeur de et une fois dans la valeur de ). On doit donc soustraire à . pour obtenir  Au Cégep Gérald-Godin à l'automne , il y a présentement étudiants inscrits en mathématiques discrètes et étudiants inscrits en chimie générale. De plus, étudiants suivent les deux cours. Combien d'étudiants sont inscrits dans au moins l'un de ces cours? Par le principe d'inclusion-exclusion, le nombre d'étudiants inscrits dans au moins l'un des cours est .   On s'intéresse aux propriétés de distributivité et à leur justification. On s'inspire des démonstrations de la proposition .  À l'aide d'une table d'appartenance, démontrer que .   Table d'appartenance pour                              oui  non  non  non  oui  oui  oui  oui    oui  non  oui  non  oui  oui  oui  oui    oui  oui  non  non  oui  oui  oui  oui    oui  oui  oui  oui  oui  oui  oui  oui    non  non  non  non  non  non  non  non    non  non  oui  non  non  non  oui  non    non  oui  non  non  non  oui  non  non    non  oui  oui  oui  oui  oui  oui  oui     Puisque la colonne de l'expression est la même que celle de l'expressions , on a bien que  À l'aide d'un argument d'inclusion, démontrer que .  On commence par montrer que . On considère un élément . Ainsi, par la définition de l'intersection, et . Par la définition de l'union, on a que ou .  Si , alors . Si , alors . Par ce qui précède, . On a donc montré que .  On montre ensuite que . On considère un élément . Ainsi, par la définition de l'union, ou . Dans les deux cas, par la définition de l'intersection, on a que .  Si , alors , et donc . Si , alors et donc . Dans les deux cas, on a . On a donc montré que .  Puisque qu'on a montré que et , on a que .    Soit et de ensembles. En utilisant des arguments d'inclusion, démontrer les relations suivantes:  Si , alors , mais . Puisque , alors . Ainsi, , mais . Par définition, . On sait que .  Soit , alors et . Puisque , alors , mais puisque , alors . Puisque ne peut pas être à la fois un élément de et ne pas être un élément de , un tel ne peut pas exister.  Par ce qui précède, on a que , et donc .  Si , alors ou . Si , alors et . Ainsi, , et donc . De la même manière, si , on peut montrer que , d'où .  Si , alors et . Ainsi, ou . Si , alors . Si , alors . Dans les deux cas, on a , d'où .  Par ce qui précède, on a    Deux ensembles et sont donnés. Que peut-on dire sur leur relation si:   ?  Considérer un élément . Utiliser l'égaliter pour conclure que .  ?  Considérer un élément . Utiliser l'égalité pour montrer que .  ?  Considérer un élément . Utiliser l'égalité pour montrer que Conclure que l'élément ne peut pas exister.  ?   Montrer d'abord que . Ceci est équivalent à montrer que . Considérer un élément , et utiliser l'égalité pour montrer que . Conclure qu'un tel élément ne peut pas exister, et donc que .  Utiliser un argument similaire pour montrer que  .  Montrer à l'aide d'une table d'appartenance les identités   Table d'appartenance pour                        oui  non  oui  oui  non  oui    oui  oui  non  oui  oui  non    non  non  non  non  non  non    non  oui  oui  oui  non  oui       Table d'appartenance pour                        oui  non  oui  oui  non  oui    oui  oui  non  non  non  non    non  non  non  non  non  non    non  oui  oui  non  oui  oui      Démontrer les identités des exercices et  On considère . Par la définition de , il y a deux cas possibles. Soit et ou bien et . Dans les deux cas, . Ainsi, .  De la même manière, on montre que . On conclut donc que .   D'une part, si , alors soit ou . Si alors . Ainsi , car c'est un élément de , mais pas de . Si , alors . Ainsi , car c'est un élément de , mais pas de . Ainsi, on a montré que .  D'autre part, si , alors soit ou , mais pas les deux en même temps. Si et , alors est un élément de ou de , mais on sait que , donc est un élément de . Si et , alors doit être un élément de . En effet, si on avait et , on aurait , ce qui n'est pas le cas. Ainsi, on a montré que .  Puisqu'on a montré que et que , on a montrer que que      Exercices supplémentaires  On considère l'ensemble des étudiants du programme Sciences informatique et mathématiques à Gérald-Godin et l'ensemble des étudiants de Gérald-Godin qui sont inscrits en calcul différentiel. Exprimer les ensembles suivants en fonction de et . Au besoin, considérer l'ensemble univers de tous les étudiants inscrits à Gérald-Godin. Les étudiants de Sciences informatiques et mathématiques qui suivent le cours de calcul différentiel. Les étudiants du cours de calcul différentiel qui ne sont pas en Sciences informatiques et mathématiques. Les étudiants de Sciences informatiques et mathématiques ou inscrits dans le cours de calcul différentiel. Les étudiants du cégep Gérald-Godin qui ne sont pas en calcul différentiel ni en Sciences informatiques et mathéamtiques. Les étudiants de Sciences informatiques et mathématiques ou ceux qui suivent le cours de calcul différentiel, mais qui ne sont pas en Sciences informatiques et mathématiques. Cet exercice peut paraître bidon, mais on peut imaginer un gestionnaire informatique d'une école qui doit gérer une liste de courriels. Peut-être qu'un message précis doit être communiqué à un ensemble spécifique de personnes. On veut alors être certain de ne pas oublier quelqu'un et en même temps, on ne veut pas envoyer le message à quelqu'un qui n'a pas à le recevoir.  Déterminer des ensembles tels que et ou expliquer pourquoi c'est impossible. Dans le cas où c'est possible, est-ce que la réponse est unique? Faire un diagramme de Venn pour voir qu'une réponse unique existe.   Déterminer des ensembles tels que et ou expliquer pourquoi c'est impossible. Dans le cas où c'est possible, est-ce que la réponse est unique?  Déterminer des ensembles tels que et ou expliquer pourquoi c'est impossible. Dans le cas où c'est possible, est-ce que la réponse est unique?  On va donner les démonstrations des propriétés de la liste qui n'ont pas été faites dans le texte . Démontrer les propriétés d'identité , à savoir et . Démontrer les propriétés d'idempotence , à savoir et . Démontrer les propriétés de domination , à savoir et . Démontrer les propriétés de complémentarité et complétude , à savoir que , et Démontrer les propriétés d'absorption , à savoir et . Démontrer les propriétés de commutativité , à savoir et .  Soit un ensemble arbitraire. Démontrer les propriétés suivantes:  Dans l'exercice , on a vu que . Expliquer pourquoi si , alors nécessairement on doit avoir . Il peut être utile de considérer les quatre configuations relatives que peuvent prendre deux ensembles.  On sait que l'union est une opération associative . Est-ce le cas pour la différence symétrique, c'est-à-dire est-ce que ?  L'union et l'intersection généralisée Les opérations d'union et d'intersection sont des opérations binaires, qui demandent deux ensembles qui agissent à titre d'opérandes. Parce qu'elle sont associatives, on peut généraliser ces opérations à plus de deux ensembles, possiblement même une infinité. Ainsi, si sont des ensembles, on note l'union de ces ensembles et par leur intersection. La lettre est appelée l'indice d'union (ou d'intersection). On aurait pu commencer à ou à n'importe quel autre entier. Soit défini pour tout . Pour un entier quelconque, déterminer quel est l'ensemble ; . Soit défini pour tout . Pour un entier quelconque, déterminer quel est l'ensemble ; .    "
},
{
  "id": "def-union",
  "level": "2",
  "url": "sec-opens.html#def-union",
  "type": "Définition",
  "number": "1.2.1",
  "title": "L’union de deux ensembles.",
  "body": " L'union de deux ensembles  Soit et des ensembles quelconques. L'union de et , notée est l'ensemble qui contient tous les éléments qui sont dans ou dans , potentiellement les deux: .  Le mot « ou » n'a pas la même signification ici que dans la langue usuelle. On parle d'un « ou » inclusif. L'opération qui crée un ensemble dont les éléments sont dans ou dans , mais pas les deux est appelée la différence symétrique (voir exercice ). C'est l'équivalent d'un « ou » exclusif.   "
},
{
  "id": "sssec-opens-4",
  "level": "2",
  "url": "sec-opens.html#sssec-opens-4",
  "type": "Exemple",
  "number": "1.2.2",
  "title": "L’union de deux ensembles.",
  "body": " L'union de deux ensembles  Soit et deux ensembles. On cherche à écrire en extension.   L'union est . À remarquer qu'on ne met qu'une fois les éléments, comme le veut la définition d'un ensemble.   "
},
{
  "id": "def-intersection",
  "level": "2",
  "url": "sec-opens.html#def-intersection",
  "type": "Définition",
  "number": "1.2.3",
  "title": "L’intersection de deux ensembles.",
  "body": " L'intersection de deux ensembles   Soit et des ensembles quelconques. L'intersection de et , notée est l'ensemble qui contient tous les éléments qui sont dans et dans : .  Deux ensembles dont l'intersection est vide sont dits disjoints .   "
},
{
  "id": "sssec-opens-7",
  "level": "2",
  "url": "sec-opens.html#sssec-opens-7",
  "type": "Exemple",
  "number": "1.2.4",
  "title": "L’intersection de deux ensembles.",
  "body": " L'intersection de deux ensembles   On reprend les ensembles et . On cherche à écrire en extension.    L'intersection est .   "
},
{
  "id": "fig-unionintersection",
  "level": "2",
  "url": "sec-opens.html#fig-unionintersection",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": " L'union (à gauche) et l'intersection (à droite) de deux ensembles et    Le diagramme de Venn de deux ensembles est illustré, avec l'union de A et B colorée.     Le diagramme de Venn de deux ensembles est illustré, avec l'intersection de A et B colorée.     "
},
{
  "id": "def-differenceens",
  "level": "2",
  "url": "sec-opens.html#def-differenceens",
  "type": "Définition",
  "number": "1.2.6",
  "title": "La différence de deux ensembles.",
  "body": " La différence de deux ensembles  Soit et deux ensembles. La différence entre et , notée ( moins ) est un ensemble dont les éléments sont tous dans , mais pas dans : .  La différence est parfois aussi notéé et on dit aussi sauf . On préfèrera la notation , car elle se conforme avec celle utilisée par Sage.   "
},
{
  "id": "sssec-opens-12",
  "level": "2",
  "url": "sec-opens.html#sssec-opens-12",
  "type": "Exemple",
  "number": "1.2.7",
  "title": "La différence de deux ensembles.",
  "body": " La différence de deux ensembles   Soit et . On cherche à décrire en extension les ensembles et (vont-ils être égaux?)   Pour l'ensemble , on retranche les éléments de qui sont aussi dans . Il reste .  Pour ce qui est de , on obtient .  "
},
{
  "id": "def-compens",
  "level": "2",
  "url": "sec-opens.html#def-compens",
  "type": "Définition",
  "number": "1.2.8",
  "title": "Le complément d’un ensemble.",
  "body": " Le complément d'un ensemble  Soit un ensemble à l'intérieur d'un ensemble univers . On apelle le complément de l'ensemble des éléments de qui ne sont pas dans et on le note: .  On utilise parfois aussi la notion ou pour désigner le complément.   "
},
{
  "id": "sssec-opens-15",
  "level": "2",
  "url": "sec-opens.html#sssec-opens-15",
  "type": "Exemple",
  "number": "1.2.9",
  "title": "Le complément d’ensembles.",
  "body": " Le complément d'ensembles  On considère les ensembles et . On cherche à décrire les compléments de et par rapport aux ensembles et .   On commence par trouver les compléments par rapport à l'ensemble univers . Pour , on remarque que les éléments sont les nombres pairs plus petit ou égaux à . Dans , son complément sera alors . Pour , on cherche tous les nombres naturels qui sont inférieurs ou égaux à (donc dans ), mais pas inférieurs ou égaux à (donc dans ). Il reste donc .  Maintenant pour , on observe que l'ensemble est infini. On pourrait écrire , mais comme la suite logique est en deux parties (d'abord, les impairs inférieurs à , puis tous les nombres naturels plus grand que ), on pourrait préférer l'écrire en deux partie: .  Pour l'ensemble , on peut utiliser une description en compréhension assez clair: .   "
},
{
  "id": "sssec-opens-17",
  "level": "2",
  "url": "sec-opens.html#sssec-opens-17",
  "type": "Définition",
  "number": "1.2.10",
  "title": "Paire ordonnée.",
  "body": " Paire ordonnée   Une paire ordonnée, ou couple, est une collection de deux objets dont l'ordre est important. On la note avec des objets quelconques. Pour deux paires ordonnées , on a si et seulement si et .   "
},
{
  "id": "def-prodcart",
  "level": "2",
  "url": "sec-opens.html#def-prodcart",
  "type": "Définition",
  "number": "1.2.11",
  "title": "Le produit cartésien.",
  "body": " Le produit cartésien  Soit et deux ensembles. Le produit cartésien de par , noté est l'ensemble de toutes les paires ordonnées formées à partir des éléments des ensemble : .    "
},
{
  "id": "sssec-opens-19",
  "level": "2",
  "url": "sec-opens.html#sssec-opens-19",
  "type": "Exemple",
  "number": "1.2.12",
  "title": "Le produit cartésien de deux ensembles.",
  "body": " Le produit cartésien de deux ensembles  On considère les ensembles et . On cherche à décrire le produit cartésien en extension.   On doit énumérer toutes les paires ordonnées possibles. On verra au chapitre comment compter le nombre de paires. Voici une méthode simple pour les énumérer sans en oublier lorsque les ensembles sont finis.  On prend le premier élément de et on crée toutes les paires ordonnées possibles contenant cet élément.  On répète avec les autres éléments de jusqu'à épuisement de l'ensemble .   On a donc .   "
},
{
  "id": "li-opensprop",
  "level": "2",
  "url": "sec-opens.html#li-opensprop",
  "type": "Liste",
  "number": "1.2.13",
  "title": "Propriétés des opérations sur les ensembles",
  "body": " Propriétés des opérations sur les ensembles   Les propriétés d'identité:    Ajouter le vide à ne change pas , et comme , l'intersection avec redonne .  Les propriétés d'idempotence:      Les propriétés de domination:      Les propriétés de complémentarité et de complétude:         Les propriétés d'absorption:      Les propriétés de commutativité:      Les propriétés d'associativité:    Ceci fait en sorte qu'on peut écrire ou sans aucun souci de clarté, l'ordre n'étant pas important.  Les propriétés de distributivité     Ici par contre, les parenthèses sont importantes pour préciser quelles des deux opérations on veut effectuer en premier.   Les lois de De Morgan:      "
},
{
  "id": "prop-opensass",
  "level": "2",
  "url": "sec-opens.html#prop-opensass",
  "type": "Proposition",
  "number": "1.2.14",
  "title": "L’union et l’intersection ont la propriété d’associativité.",
  "body": " L'union et l'intersection ont la propriété d'associativité  Soit trois ensembles quelconques. Alors .  Pour démontrer l'identité de l'union, on utilise une table d'appartenance. Ce type de table reviendra dans la section (sous le nom de table de vérité). Voici comment remplir une telle table.  Sur la première ligne, on met tous les ensembles pertinents à notre égalité, en commençant par les ensembles les plus simples à la gauche.  En fonction du nombre d'ensembles seuls, on remplit les lignes sous les premières colonnes (ne contenant qu'un ensemble seul) avec des « non » (signifiant que l'élément n'est pas dans l'ensemble) ou « oui » (signifiant l'appartenance de l'élément à l'ensemble) afin d'obtenir toutes les combinaisons possibles.  On remplit le reste de la table en utilisant la définition des opérations utilisées.  L'égalité est vrai si les colonnes correspondant aux membres de part et d'autre de l'égalité sont identiques.  Voici la table pour l'identité    Table d'appartenance pour                           oui  non  non  oui  non  oui  oui    oui  non  oui  oui  oui  oui  oui    oui  oui  non  oui  oui  oui  oui    oui  oui  oui  oui  oui  oui  oui    non  non  non  non  non  non  non    non  non  oui  non  oui  oui  oui    non  oui  non  oui  oui  oui  oui    non  oui  oui  oui  oui  oui  oui      On démontre l'identité de l'intersection avec le concept de sous-ensemble et d'égalité: si sont des ensembles tels que et , alors . Pour ce faire, on commence par montrer que .  On veut montrer qu'un élément arbitraire de sera aussi dans . Pour cela, il peut-être utile de transposer l'ensemble en mots. Soit . Alors l'élément est dans l'intersection de et de (en résolvant l'intersection extérieure à la parenthèse) et donc, et . Puisqu'on sait maintenant que , on peut aussi dire que et . Donc est dans chacun des trois ensembles (sous l'hypothèse initiale que ).  En particulier, puisque est dans et , on obtient que . Finalement, en utilisant le fait que , on a que et et donc, . On a bel et bien .  L'idée pour montrer l'autre direction, soit que est identique.  Soit un élément arbitraire de . Alors est dans l'intersection de et de . En particulier, est dans . Puisque est dans l'intersection de et , on voit que est à la fois dans et dans (et dans !). Comme est à la fois dans et dans , il est dans leur intersection. En combinant cela avec le fait que , on obtient que est dans l'intersection de et . Ainsi .  Comme et , on conclut finalement que .   "
},
{
  "id": "rq-opens-2",
  "level": "2",
  "url": "sec-opens.html#rq-opens-2",
  "type": "Question de compréhension",
  "number": "1.2.3.1",
  "title": "",
  "body": "Soit et vivant dans l'ensemble univers . Déterminer:         "
},
{
  "id": "rq-opens-3",
  "level": "2",
  "url": "sec-opens.html#rq-opens-3",
  "type": "Question de compréhension",
  "number": "1.2.3.2",
  "title": "",
  "body": "Dessiner l'ensemble sur le diagramme de Venn de la figure suivante.   Un diagramme de Venn vide  Un diagramme de Venn contenant des ensembles A et B quelconques est illustré.    "
},
{
  "id": "rq-opens-4",
  "level": "2",
  "url": "sec-opens.html#rq-opens-4",
  "type": "Question de compréhension",
  "number": "1.2.3.3",
  "title": "",
  "body": "Déterminer le produit cartésien de et . Quel est votre élément favori de ? "
},
{
  "id": "rq-opens-5",
  "level": "2",
  "url": "sec-opens.html#rq-opens-5",
  "type": "Question de compréhension",
  "number": "1.2.3.4",
  "title": "",
  "body": "On considère l'ensemble . Donner . Trouver un ensemble tel que Trouver un ensemble tel que Un étudiant affirme avoir trouvé tel que . Donner un exemple d'un tel ensemble ou expliquer pourquoi ce n'est pas possible. Un étudiant affirme avoir trouvé tel que . Donner un exemple d'un tel ensemble ou expliquer pourquoi ce n'est pas possible. "
},
{
  "id": "rq-opens-6",
  "level": "2",
  "url": "sec-opens.html#rq-opens-6",
  "type": "Question de compréhension",
  "number": "1.2.3.5",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-ens1",
  "level": "2",
  "url": "sec-opens.html#exo-ens1",
  "type": "Exercice",
  "number": "1.2.4.1",
  "title": "",
  "body": "Soit , et . Déterminer:                         "
},
{
  "id": "exo-opens-2-4",
  "level": "2",
  "url": "sec-opens.html#exo-opens-2-4",
  "type": "Exercice",
  "number": "1.2.4.2",
  "title": "",
  "body": "On a vu les propriétés de distributivité pour combiner l'union et l'intersection. Cet exercice vise à montrer d'une autre manière que les parenthèses sont importantes.  Un diagramme de Venn vide  Un diagramme de Venn contenant des ensembles A, B et C quelconques est illustré.    Sur des diagrammes de Venn comme celui de la figure , illustrer les ensembles suivants:     Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.         Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.      Expliquer pourquoi, à partir du résultat de la partie précédente, il n'est pas nécessaire de montrer que . Interchanger les rôles de et et utiliser la commutativité . "
},
{
  "id": "exo-opens-2-5",
  "level": "2",
  "url": "sec-opens.html#exo-opens-2-5",
  "type": "Exercice",
  "number": "1.2.4.3",
  "title": "",
  "body": "Sur un diagramme de Venn comme celui de la figure , illustrer les ensembles suivants.    Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.        Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.       Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.     Utiliser les parties précédentes et un argument de symétrie pour illustrer:  et .  Ici, on remarque qu ces expressions sont les mêmes que l'expression si on intervertit l'ensemble avec l'ensemble ou . Ainsi, on peut obtenir les diagrammes de Venn en inversant les lettres.    Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.        Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.       et .  Encore une fois, on remarque qu ces expressions sont les mêmes que l'expression si on intervertit l'ensemble ou l'ensemble avec l'ensemble . Ainsi, on peut obtenir les diagrammes de Venn en inversant les lettres.    Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.        Le diagramme de Venn de   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.      "
},
{
  "id": "exo-opens-2-6",
  "level": "2",
  "url": "sec-opens.html#exo-opens-2-6",
  "type": "Exercice",
  "number": "1.2.4.4",
  "title": "",
  "body": "Pour chaque diagramme de Venn ci-dessous, décrire l'ensemble ombragée en fonction des ensembles et des opérations élémentaires d'union, d'intersection et de complément.   Le diagramme de Venn d'un ensemble   Un diagramme de Venn à trois ensembles dans lequel A et C sont ombragés, sauf pour leur intersection.     .   Le diagramme de Venn d'un ensemble   Un diagramme de Venn à trois ensembles dans lequel C est ombragé, sauf la partie commune avec uniquement A .     . "
},
{
  "id": "exo-diffsym",
  "level": "2",
  "url": "sec-opens.html#exo-diffsym",
  "type": "Exercice",
  "number": "1.2.4.5",
  "title": "",
  "body": "Soit et deux ensembles quelconques. On définit la différence symétrique de et , note  En effet, l'utilisation du symbole d'addition ne semble pas compatible avec le nom. , comme l'ensemble des éléments qui sont dans ou , mais pas les deux. Donner la différence symétrique des ensembles de l'exercice .   Sur un diagramme de Venn comme celui de la figure , illustrer l'ensemble .    Le diagramme de Venn de      Sans faire une preuve complète (pour l'instant), expliquer intuitivement pourquoi Finalement, c'est peut-être le nom « différence » qui est mal choisi, pas le symbole . .  Car de dire qu'un élément est dans ou est équivalent à dire qu'un élément est dans ou .  De même, de dire qu'un élément est dans et est équivalent à dire qu'un élément est dans et .  Sans faire une preuve complète (pour l'instant), expliquer intuitivement pourquoi Il peut être utile de revoir le diagramme de Venn de la partie .  L'union de avec est , alors que l'intersection de avec est .  Ainsi, est l'ensemble contenant les éléments de , sans les élément de .  "
},
{
  "id": "exo-opens-2-8",
  "level": "2",
  "url": "sec-opens.html#exo-opens-2-8",
  "type": "Exercice",
  "number": "1.2.4.6",
  "title": "",
  "body": "Dans cet exercice, on s'intéresse à la cardinalité de l'union de deux ensembles. Donner deux ensembles et tels que et . Que vaut ? Il y a une infinité de solutions. L'une d'elle est et . On a alors . Ceci est vrai pour toutes les solutions. Donner deux ensembles et tels que et . Que vaut ? Il y a une infinité de solutions. L'une d'elle est et . On a alors . Ceci est vrai pour toutes les solutions. Si et que , quelles sont les valeurs possibles pour ? Donner des exemples d'ensembles tel que est égale à la plus petite valeur possible et est égale à la plus grande valeur possible. Les cas possibles pour sont . On peut prendre et . Pour chaque cas de la partie précédente, que vaut ? On a:  "
},
{
  "id": "exo-incexc",
  "level": "2",
  "url": "sec-opens.html#exo-incexc",
  "type": "Exercice",
  "number": "1.2.4.7",
  "title": "Le principe d’inclusion-exclusion.",
  "body": "Le principe d'inclusion-exclusion Soit et deux ensembles. Donner un argument justifiant le fait que . Lorsqu'on calcul , on compte les éléments de deux fois (une fois dans la valeur de et une fois dans la valeur de ). On doit donc soustraire à . pour obtenir "
},
{
  "id": "exo-opens-2-10",
  "level": "2",
  "url": "sec-opens.html#exo-opens-2-10",
  "type": "Exercice",
  "number": "1.2.4.8",
  "title": "",
  "body": "Au Cégep Gérald-Godin à l'automne , il y a présentement étudiants inscrits en mathématiques discrètes et étudiants inscrits en chimie générale. De plus, étudiants suivent les deux cours. Combien d'étudiants sont inscrits dans au moins l'un de ces cours? Par le principe d'inclusion-exclusion, le nombre d'étudiants inscrits dans au moins l'un des cours est . "
},
{
  "id": "exo-opens-2-11",
  "level": "2",
  "url": "sec-opens.html#exo-opens-2-11",
  "type": "Exercice",
  "number": "1.2.4.9",
  "title": "",
  "body": " On s'intéresse aux propriétés de distributivité et à leur justification. On s'inspire des démonstrations de la proposition .  À l'aide d'une table d'appartenance, démontrer que .   Table d'appartenance pour                              oui  non  non  non  oui  oui  oui  oui    oui  non  oui  non  oui  oui  oui  oui    oui  oui  non  non  oui  oui  oui  oui    oui  oui  oui  oui  oui  oui  oui  oui    non  non  non  non  non  non  non  non    non  non  oui  non  non  non  oui  non    non  oui  non  non  non  oui  non  non    non  oui  oui  oui  oui  oui  oui  oui     Puisque la colonne de l'expression est la même que celle de l'expressions , on a bien que  À l'aide d'un argument d'inclusion, démontrer que .  On commence par montrer que . On considère un élément . Ainsi, par la définition de l'intersection, et . Par la définition de l'union, on a que ou .  Si , alors . Si , alors . Par ce qui précède, . On a donc montré que .  On montre ensuite que . On considère un élément . Ainsi, par la définition de l'union, ou . Dans les deux cas, par la définition de l'intersection, on a que .  Si , alors , et donc . Si , alors et donc . Dans les deux cas, on a . On a donc montré que .  Puisque qu'on a montré que et , on a que .  "
},
{
  "id": "exo-opens-2-12",
  "level": "2",
  "url": "sec-opens.html#exo-opens-2-12",
  "type": "Exercice",
  "number": "1.2.4.10",
  "title": "",
  "body": " Soit et de ensembles. En utilisant des arguments d'inclusion, démontrer les relations suivantes:  Si , alors , mais . Puisque , alors . Ainsi, , mais . Par définition, . On sait que .  Soit , alors et . Puisque , alors , mais puisque , alors . Puisque ne peut pas être à la fois un élément de et ne pas être un élément de , un tel ne peut pas exister.  Par ce qui précède, on a que , et donc .  Si , alors ou . Si , alors et . Ainsi, , et donc . De la même manière, si , on peut montrer que , d'où .  Si , alors et . Ainsi, ou . Si , alors . Si , alors . Dans les deux cas, on a , d'où .  Par ce qui précède, on a  "
},
{
  "id": "exo-opens-2-13",
  "level": "2",
  "url": "sec-opens.html#exo-opens-2-13",
  "type": "Exercice",
  "number": "1.2.4.11",
  "title": "",
  "body": " Deux ensembles et sont donnés. Que peut-on dire sur leur relation si:   ?  Considérer un élément . Utiliser l'égaliter pour conclure que .  ?  Considérer un élément . Utiliser l'égalité pour montrer que .  ?  Considérer un élément . Utiliser l'égalité pour montrer que Conclure que l'élément ne peut pas exister.  ?   Montrer d'abord que . Ceci est équivalent à montrer que . Considérer un élément , et utiliser l'égalité pour montrer que . Conclure qu'un tel élément ne peut pas exister, et donc que .  Utiliser un argument similaire pour montrer que  . "
},
{
  "id": "exo-opens-2-14",
  "level": "2",
  "url": "sec-opens.html#exo-opens-2-14",
  "type": "Exercice",
  "number": "1.2.4.12",
  "title": "",
  "body": "Montrer à l'aide d'une table d'appartenance les identités   Table d'appartenance pour                        oui  non  oui  oui  non  oui    oui  oui  non  oui  oui  non    non  non  non  non  non  non    non  oui  oui  oui  non  oui       Table d'appartenance pour                        oui  non  oui  oui  non  oui    oui  oui  non  non  non  non    non  non  non  non  non  non    non  oui  oui  non  oui  oui     "
},
{
  "id": "exo-diffsymprop",
  "level": "2",
  "url": "sec-opens.html#exo-diffsymprop",
  "type": "Exercice",
  "number": "1.2.4.13",
  "title": "",
  "body": "Démontrer les identités des exercices et  On considère . Par la définition de , il y a deux cas possibles. Soit et ou bien et . Dans les deux cas, . Ainsi, .  De la même manière, on montre que . On conclut donc que .   D'une part, si , alors soit ou . Si alors . Ainsi , car c'est un élément de , mais pas de . Si , alors . Ainsi , car c'est un élément de , mais pas de . Ainsi, on a montré que .  D'autre part, si , alors soit ou , mais pas les deux en même temps. Si et , alors est un élément de ou de , mais on sait que , donc est un élément de . Si et , alors doit être un élément de . En effet, si on avait et , on aurait , ce qui n'est pas le cas. Ainsi, on a montré que .  Puisqu'on a montré que et que , on a montrer que que   "
},
{
  "id": "exo-opens-3-2",
  "level": "2",
  "url": "sec-opens.html#exo-opens-3-2",
  "type": "Exercice",
  "number": "1.2.4.14",
  "title": "",
  "body": "On considère l'ensemble des étudiants du programme Sciences informatique et mathématiques à Gérald-Godin et l'ensemble des étudiants de Gérald-Godin qui sont inscrits en calcul différentiel. Exprimer les ensembles suivants en fonction de et . Au besoin, considérer l'ensemble univers de tous les étudiants inscrits à Gérald-Godin. Les étudiants de Sciences informatiques et mathématiques qui suivent le cours de calcul différentiel. Les étudiants du cours de calcul différentiel qui ne sont pas en Sciences informatiques et mathématiques. Les étudiants de Sciences informatiques et mathématiques ou inscrits dans le cours de calcul différentiel. Les étudiants du cégep Gérald-Godin qui ne sont pas en calcul différentiel ni en Sciences informatiques et mathéamtiques. Les étudiants de Sciences informatiques et mathématiques ou ceux qui suivent le cours de calcul différentiel, mais qui ne sont pas en Sciences informatiques et mathématiques. Cet exercice peut paraître bidon, mais on peut imaginer un gestionnaire informatique d'une école qui doit gérer une liste de courriels. Peut-être qu'un message précis doit être communiqué à un ensemble spécifique de personnes. On veut alors être certain de ne pas oublier quelqu'un et en même temps, on ne veut pas envoyer le message à quelqu'un qui n'a pas à le recevoir. "
},
{
  "id": "exo-opens-3-3",
  "level": "2",
  "url": "sec-opens.html#exo-opens-3-3",
  "type": "Exercice",
  "number": "1.2.4.15",
  "title": "",
  "body": "Déterminer des ensembles tels que et ou expliquer pourquoi c'est impossible. Dans le cas où c'est possible, est-ce que la réponse est unique? Faire un diagramme de Venn pour voir qu'une réponse unique existe.  "
},
{
  "id": "exo-opens-3-4",
  "level": "2",
  "url": "sec-opens.html#exo-opens-3-4",
  "type": "Exercice",
  "number": "1.2.4.16",
  "title": "",
  "body": "Déterminer des ensembles tels que et ou expliquer pourquoi c'est impossible. Dans le cas où c'est possible, est-ce que la réponse est unique? "
},
{
  "id": "exo-opens-3-5",
  "level": "2",
  "url": "sec-opens.html#exo-opens-3-5",
  "type": "Exercice",
  "number": "1.2.4.17",
  "title": "",
  "body": "Déterminer des ensembles tels que et ou expliquer pourquoi c'est impossible. Dans le cas où c'est possible, est-ce que la réponse est unique? "
},
{
  "id": "exo-opens-3-6",
  "level": "2",
  "url": "sec-opens.html#exo-opens-3-6",
  "type": "Exercice",
  "number": "1.2.4.18",
  "title": "",
  "body": "On va donner les démonstrations des propriétés de la liste qui n'ont pas été faites dans le texte . Démontrer les propriétés d'identité , à savoir et . Démontrer les propriétés d'idempotence , à savoir et . Démontrer les propriétés de domination , à savoir et . Démontrer les propriétés de complémentarité et complétude , à savoir que , et Démontrer les propriétés d'absorption , à savoir et . Démontrer les propriétés de commutativité , à savoir et . "
},
{
  "id": "exo-opens-3-7",
  "level": "2",
  "url": "sec-opens.html#exo-opens-3-7",
  "type": "Exercice",
  "number": "1.2.4.19",
  "title": "",
  "body": "Soit un ensemble arbitraire. Démontrer les propriétés suivantes: "
},
{
  "id": "exo-opens-3-8",
  "level": "2",
  "url": "sec-opens.html#exo-opens-3-8",
  "type": "Exercice",
  "number": "1.2.4.20",
  "title": "",
  "body": "Dans l'exercice , on a vu que . Expliquer pourquoi si , alors nécessairement on doit avoir . Il peut être utile de considérer les quatre configuations relatives que peuvent prendre deux ensembles. "
},
{
  "id": "exo-opens-3-9",
  "level": "2",
  "url": "sec-opens.html#exo-opens-3-9",
  "type": "Exercice",
  "number": "1.2.4.21",
  "title": "",
  "body": "On sait que l'union est une opération associative . Est-ce le cas pour la différence symétrique, c'est-à-dire est-ce que ? "
},
{
  "id": "exo-opens-3-10",
  "level": "2",
  "url": "sec-opens.html#exo-opens-3-10",
  "type": "Exercice",
  "number": "1.2.4.22",
  "title": "L’union et l’intersection généralisée.",
  "body": "L'union et l'intersection généralisée Les opérations d'union et d'intersection sont des opérations binaires, qui demandent deux ensembles qui agissent à titre d'opérandes. Parce qu'elle sont associatives, on peut généraliser ces opérations à plus de deux ensembles, possiblement même une infinité. Ainsi, si sont des ensembles, on note l'union de ces ensembles et par leur intersection. La lettre est appelée l'indice d'union (ou d'intersection). On aurait pu commencer à ou à n'importe quel autre entier. Soit défini pour tout . Pour un entier quelconque, déterminer quel est l'ensemble ; . Soit défini pour tout . Pour un entier quelconque, déterminer quel est l'ensemble ; . "
},
{
  "id": "sec-fonctions",
  "level": "1",
  "url": "sec-fonctions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Les fonctions",
  "body": "  Les fonctions    Dans un cours de mathématiques discrètes, on étudie les fonctions d'un point de vue différent à celui auquel on est habitué. Pour ce faire, on commence par parler de relations. Étant donné deux ensembles , potentiellement égaux, on peut s'intéresser aux relations qui existent entre les éléments de ces ensembles. Par exemple, on peut parler d'un lien de famille entre ensembles de personnes, une catégorisation de produits (un ensemble d'aliments et un ensemble contenant des identifiants comme fruit, légume, viande, etc.) etc.     Définitions et exemples  Soit et deux ensembles. Une relation est un sous-ensemble . On dit parfois que est une relation de vers . Deux éléments et sont dits en relation si . On écrit aussi ou pour dire que les éléments sont en relation.   Un exemple de relation  On considère l'ensemble formé des provinces canadiennes. On pose . On cherche trois éléments de qui sont en relation et deux qui ne le sont pas.  On considère le Québec. La province possède une frontière commune avec l'Ontario à l'ouest, avec le Nouveau-Brunswick au sud-est et avec Terre-Neuve par le biais du Labrador à l'est. Ainsi .  Par contre, le Québec n'a pas de frontière terrestre avec l'Alberta ou la Colombie-Britannique alors .    Le type de relation le plus important et utile en mathématique est certainement la fonction. Une relation est une fonction si elle respecte des conditions additionnelles.   Une fonction  Soit deux ensembles et une relation. On dit que est une fonction si chaque élément fait partie d'exactement un élément de . En d'autres mots, un élément de ne peut être en relation qu'avec un seul élément de .  Traditionnellement, on dénote les fonctions par les lettres . On écrit alors .  Chaque élément possède un et un seul élément tel que , mais un élément de peut ne pas être atteint par un élément de . Dans la définition d'une fonction, on spécifie souvent les trois ensembles suivants:  Le domaine: L'ensemble est appelé le domaine de la fonction.  Le codomaine: L'ensemble est appelé le codomaine de la fonction.  L'image: L'image est l'ensemble des qui sont atteints par au moins une valeur : .  Si , on dit aussi que est l'image de et que est une préimage de . L'ensemble de toutes les préimages de est parfois noté . On laisse parfois de côté les accolades, mais il faut alors faire attention de ne pas confondre , qui est un ensemble, avec la fonction inverse de , dont il sera question dans la sous-section .       Une fonction est une machine qui associe à chaque entrée exactement une sortie. Le processus par lequel s'effectue la transformation peut souvent être explicite, mais parfois implicite ou inconnu.  Si est un sous-ensemble du domaine d'une fonction et qu'on souhaite considérer la fonction restreinte sur ce sous-ensemble, on écrira (voir l'exercice ).   Des fonctions  On cherche parmi les relations suivantes lesquelles sont des fonctions:  La relation définie à l'exemple .  La relation qui associe à chaque étudiant d'un cours une note à la fin de la session.  La relation qui associe à un étudiant les langages de programmation qu'il connait.  La relation de vers qui associe à un nombre son carré .  La relation de vers qui associe à un nombre les nombres tels .  La relation définie par .  La relation définie par .  La relation de vers qui associe à le nombre premier.       La relation entre les provinces de Canada n'est pas une fonction. Une province peut être en relation avec plusieurs autres, comme le Québec. Une province peut aussi ne pas être en relation avec aucune autre, comme l'Île-du-Prince-Édouard.   À la fin de la session, chaque étudiant aura une note. Deux étudiants auront peut-être la même note, mais ce n'est pas contre l'idée d'une fonction. Par contre, un étudiant aura une et une seule note. C'est donc une fonction.  Parce qu'un étudiant pourrait connaitre plus d'un langage de programmation, ce n'est pas une fonction. De même, peut-être qu'un étudiant ne sait même pas programmer. Il ne serait donc en relation avec aucun language de programmation.  Cette relation est une fonction, car à tout nombre , il existe une seule valeur pour . Par exemple, si on note cette fonction par , alors etc.  Ce n'est pas une fonction car, étant donné , il existe deux nombres dans pour lesquels cela est possible, soit . Par exemple, le naturel serait associé à la fois à et à par cette relation.  Si on changeait le codomaine par l'ensemble des rééls positifs, , alors on aurait une fonction.   Cette relation n'est pas une fonction, car certaines valeurs du domaine ne possèdent pas d'image. C'est le cas pour , puisque .  Cette fois-ci, le codomaine est adéquat et on a une fonction puisque la valeur est unique pour chaque .  Cette relation est une fonction, car il n'existe qu'un seul nombre premier et qu'il en existe une infinité. Toutefois, contrairement aux autres fonctions ci-dessus, il n'y a pas de formule explicite pour déterminer . La liste des premiers nombres premiers est .     Étant donné deux ensembles et , combien y a-t-il de fonctions différentes qui vont de vers ? Si les ensembles ont une cardinalité finie, il sera possible de les compter.  Toutes le fonctions entre deux ensembles  Soit et . On cherche à faire la liste de toutes les fonctions possibles partant de vers .  Il y aura fonctions. Avant de poursuivre, tenter de voir pourquoi.    On sait que chaque élément du domaine doit être envoyé sur exactement un élément du codomaine. Comme on a deux éléments dans le domaine et que pour chacun on a trois choix dans le codomaine, on devrait trouver fonctions. Elles sont dans la table . L'ordre n'est évidemment pas important, mais remarquer comment elles ont été listées. On est parti avec pour ensuite faire toutes les valeurs possibles pour . Ensuite, on prend la deuxième option et on répète, pour finalement arriver avec et ses variantes pour .  Les fonctions de vers                                                                                                                       Représentation d'une fonction  Pour aider à comprendre une fonction, il peut être pratique de la visualiser à l'aide de différents outils. Selon le domaine et\/ou le codomaine, certains sont plus appropriés que d'autres. À titre d'exemple, on considère les ensembles et et la fonction définie comme suit: .  Une première représentation est celle d'un diagramme sagittal. Cette représentation n'est pratique que si le nombre d'éléments de chaque ensemble est relativement petit. Le diagramme sagittal de la fonction est illustré à la figure ci-dessous .   Un diagramme sagittal de      Les ellipses autour des éléments sont parfois omis dans cette représentation.  Une autre méthode est en effectuant tout simplement une représentation graphique des valeurs. Cette méthode ne fonctionne que si les ensembles sont numériques bien sûr. Ci-dessous, la représentation de la fonction ainsi que d'une fonction sinusoïdale. C'est surtout dans un contexte continue qu'on utilise ce type de représentation, mais à l'occasion aussi dans un contexte discret.    Un graphique pour       Une fonction sinusoïdale       Une autre manière que l'on considère est de donner une table de valeurs. Celle-ci est utile dans un contexte discret, même lorsque le domaine possède une infinité d'éléments. On peut parfois y déceler une suite logique. Voici la table de valeurs de la fonction .   La table de valeurs pour la fonction    n  f(n)    0  1    1  3    2  1    3  2     Une telle table pourrait aussi être horizontale.  Finalement, une fonction peut-être représentée par une règle algébrique. Selon les cas et en fonction des outils disponibles, cela permet de faire une analyse approfondie du comportement de la fonction. La règle de la fonction sinusoïdale de la figure est .      La composition de fonctions  On considère trois ensembles , où représente les élèves d'un cours à l'université, représente la note de ces élèves (en pourcentage) et représente les cotes possibles ( ). On peut imaginer une fonction qui à chaque élève associe une note puis, pour chaque note est associée une cote selon un barême préétablit par l'enseignant. Peut-on directement avoir une fonction qui à chaque élève retourne la cote? C'est un exemple de composition de fonctions.   La composition de deux fonctions  Soit et deux fonctions. La composition de et , notée est une fonction de vers définie par pour tout élément .   Cette relation est bel et bien une fonction, car tous les éléments de possèdent une image et celle-ci est unique puisque les relations sont des fonctions. L'image de par est donc unique, tout comme l'image de par . La figure représente la composition de deux fonctions.   La composition   Trois ensembles A,B,C sont dessinés contenant respectivement les éléments a,g de a et f de g de a. Des flèches illustrant la fonction g partent de l'ensemble A à gauche vers l'ensemble B au centre, des flèches illustrant la fonction f partent de l'ensemble B au centre vers l'ensemble C à droite et des flèches illustrant la composition f rong g partent de l'ensemble A vers l'ensemble C.      Composition de deux fonctions  Soit trois ensembles et des fonctions telles qu'illustrés à la figure . On veut déterminer  Le domaine, le codomaine et l'image de et .  Les valeurs, si possible de .  Les préimages, si possible, .     Un diagramme sagittal de et leur composition   Un graphique sagittal à trois ensembles est illustré. À gauche, les éléments a,b,c de l'ensemble A sont envoyés respectivement sur 1,3 et 1 dans l'ensemble B au centre. L'ensemble B contient les éléments 1,2,3 qui sont envoyés dans l'ensemble C respectivement sur -4,-1,-2. L'ensemble C contient aussi l'élément -3.        On commence par la fonction . Son domaine est l'ensemble , son codomaine est l'ensemble et son image est le sous-ensemble de contenant les éléments .  Pour la fonction , son domaine est l'ensemble , son codomaine est l'ensemble et son image est le sous-ensemble de contenant les éléments .  Finalement pour la composition , son domaine est l'ensemble , son codomaine est l'ensemble et son image est le sous-ensemble de contenant les éléments .  Comme , on ne peut pas déterminer l'image de par . Par contre , on a et  La ou les préimage de par la fonction est l'ensemble des valeurs telles que . On a Pour la composition, on cherche l'ensemble des telle que . On trouve .       Fonctions injectives et surjectives  On a vu dans l'exemple que certaines fonctions envoient plusieurs éléments sur une même image. On a aussi vu que certaines fonctions n'atteignent pas toutes les valeurs de leur codomaine. Ce sont souvent des propriétés qu'il est souhaitable d'avoir ou du moins, elles entrainent d'heureuses conséquences.   Fonction injective  Soit une fonction. On dit que est injective si et seulement si les éléments de l'image ne sont atteints par que par exactement un élément du domaine. En langage mathématique, on écrit que si , alors nécessairement .   Avec une fonction injective, il n'y a pas de collision dans le codomaine, c'est-à-dire deux valeurs du domaine qui sont envoyées sur le même éléments. Dans ce cas, la préimage d'un élément du codomaine est soit l'ensemble vide, soit un élément unique du domaine.   Des fonctions injectives  On considère les fonctions suivantes et on cherche celles qui sont injectives:  La fonction de définie par .  La fonction de Par , on veut dire l'ensemble définie par .  La fonction d'un ensemble quelconque vers ce même ensemble qui associe chaque élément à lui-même.  Soit . On pose . On définit comme étant la fonction qui associe à chaque élément de sa cardinalité.    Cette fonction n'est pas injective puisque pour tout , on a . En particulier, si , on obtient deux valeurs différentes du domaine qui donne la même image, par exemple .  Cette fois, comme le domaine est restreint aux réels positifs, il n'y a plus de possible. Chaque nombre réel positif possède une unique racine carrée et donc, chaque élément de l'image n'est atteint que par un seul élément du domaine. C'est une fonction injective.  Parce que est un ensemble, on sait qu'il n'y a pas de répétitions dans ses éléments. Chaque membre de l'image est atteint par son unique homologue du domaine. C'est donc une injection (on utilise parfois ce terme plutôt que fonction injective).  On essaie de décortiquer un peu la fonction. L'ensemble de puissances contient éléments. La cardinalité de ces éléments varie de pour l'ensemble vide à pour l'ensemble lui-même. On comprend maintenant pourquoi le codomaine ne pouvait être que l'ensemble . On a dû lui ajoute l'élément afin que puisse associer à chaque valeur de une réponse.  On peut évidemment exhiber plusieurs sous-ensembles qui ont la même cardinalité, par exemple et ou et . Cette fonction n'est donc pas injective.      Fonction surjective  Soit une fonction. On dit que est surjective si et seulement si tous les éléments du codomaine sont atteints par par au moins une valeur du domaine .Ceci est équivalent à dire que le codomaine de la fonction est l'image de celle-ci. En lagange mathématique, on écrit que pour tout , il existe au moins un tel que .   Avec une fonction surjective, personne n'est laissé de côté dans le codomaine. Chaque valeur doit être atteinte.   Des fonctions surjectives  On considère les fonctions suivantes et on cherche celles qui sont surjective:  La fonction de définie par .  La fonction de Par , on veut dire l'ensemble définie par .  La fonction d'un ensemble quelconque vers ce même ensemble qui associe chaque élément à lui-même.  Soit . On pose . On définit comme étant la fonction qui associe à chaque élément de sa cardinalité.    Cette fonction n'est pas surjective puisque pour tout , il n'existe pas de réel qui, mis au carré, donnera . Par exemple, l'équation n'a pas de solutions dans les réels.  Cette fois, comme le codomaine est restreint aux réels positifs, il n'y a plus de nombres négatifs. Chaque nombre réel positif possède une unique racine carrée et donc, chaque élément de l'image n'est atteint que par un seul élément du domaine. C'est une fonction surjective.  Dans la définition de la fonction, on dit que chaque membre du domaine est associé à son homologue du codomaine. C'est donc une surjection (on utilise parfois ce terme plutôt que fonction surjective).  La cardinalité des éléments de varie de pour l'ensemble vide à pour l'ensemble lui-même, passant par et avec les sous-ensembles et et et . Cette fonction est donc surjective.     La définition de surjection dit que chaque valeur du codomaine est atteinte par au moins un élément du domaine. On peut reformuler la définition de fonction injective en parlant de codomaine aussi de la manière suivante: chaque valeur du codomaine est atteinte par au plus un élément du domaine. Que se passe-t-il lorsqu'une fonction est à la fois injective et surjective?   Fonction bijective  Une fonction est dite bijective si elle est à la fois injective et surjective. Une fonction bijective atteint chaque élément du codomaine exactement une fois.   Parmi les fonctions des exemples , la fonction est une bijection, tout comme la fonction de vers associant chaque élément à son homologue. Ce dernier exemple est ce qu'on appelle une fonction identité.  La figure donne des exemples des différentes combinaisons possibles des propriétés d'injectivité, surjectivité et bijectivité qu'une fonction peut avoir.   Différents cas possible d'injectivité, surjectivité et bijectivité    Fonction ni injective ni surjective   Un ensemble A, à gauche contenant les éléments a,b,c est envoyé vers un ensemble B à droite contenant les éléments 1,2,3. L'élément 1 possède deux préimages et l'élément 2 n'est pas atteint.      Fonction injective, mais pas surjective   Un ensemble A, à gauche contenant les éléments a,b est envoyé vers un ensemble B à droite contenant les éléments 1,2,3. Les éléments a et 1 correspondent, tout comme b et 2. L'élément 3 n'est pas atteint.      Fonction surjective, mais pas injective   Un ensemble A, à gauche contenant les éléments a,b,c est envoyé vers un ensemble B à droite contenant les éléments 1,2. L'élément 1 possède deux préimages.      Fonction bijective   Un ensemble A, à gauche contenant les éléments a,b,c est envoyé vers un ensemble B à droite contenant les éléments 1,2,3. À chaque élément correspond un et un seul élément.       On considère une fonction qui est bijective. Chaque élément du domaine est envoyé vers exactement un élément du codomaine et chaque élément du codomaine est atteint. Il est donc possible de défaire le travail effectué par la fonction et de partir des éléments de pour revenir sur les éléments de .   Fonction inverse   Soit une bijection. La fonction inverse de , notée est la fonction qui associe à chaque un élément tels que . On écrira alors .  De manière équivalente, la fonction est l'unique fonction telle que pour tout élément , on a , et pour tout élémemt , on a .    La fonction des exemples est bijective. On peut la définir par la règle . Son inverse est . La fonction identité de ces mêmes exemples était aussi bijective. Elle est son propre inverse.    En résumé   Les points importants de cette section sont:  La définition d'une fonction ;  Les notions de domaine, codomaine et image et la différence entre ces deux derniers ensembles, à savoir que l'image est un sous-ensemble du codomaine, mais que celui-ci peut être plus grand;  La notion de fonction injective ;  La notion de fonction surjective ;  La notion de fonction bijective .      Ces questions sont à faire avant de venir en classe et à remettre au début du cours.   Soit , . Déterminer quelles relations ci-dessous sont des fonctions. Expliquer pourquoi. où ; où ; où ; où ; où .  Soit les nombres naturels représentés par ou chiffres. On définit comme la fonction qui associe à la somme des chiffres qui composent . Par exemple, . Déterminer où est le jour de votre anniversaire. Trouver l'image de cette fonction. Trouver . Trouver  Soit l'ensemble de tous les chiens. Donner un ensemble et une relation tels que n'est pas une fonction. est une fonction.  Soit et . Représenter dans un diagramme sagittal la fonction qui associe à la première lettre de son écriture dans la langue française.  Quels énoncés parmi les suivants sont équivalent à dire que est injective? Justifier.  Le codomaine est égal à l'image.  Pour tout on a .  Si alors .      Quels énoncés parmi les suivants sont équivalent à dire que est surjective? Justifier.  Le codomaine est égal à l'image.  Pour tout , on a .  Pour tout où , on a .      Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.       Exercices    À faire en classe durant le premier cours de la semaine  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Soit , et . On considère les fonctions et définies comme suit:                   Déterminer   L'image de par ;  L'image de par est . C'est-à-dire que . La préimage de par ; La préimage de par est . C'est-à-dire que . La préimage de par ; La préimage de par est . C'est-à-dire que . Le domaine, le codomaine et l'image de Le domaine de est , le codomaine de est , et l'image de est . Le domaine, le codomaine et l'image de Le domaine de est , le codomaine de est et l'image de est . Le domaine, le codomaine et l'image de Le domaine de est , le codomaine de est et l'image de est . L'image de par la composition ; L'image de par est . C'est-à-dire que . La préimage de par la composition ; La préimage de par est . C'est-à-dire que .  Quel est l'image de la fonction ? Pouvez-vous trouver un élément dans l'image de ? Quel est l'ensemble qui ne contient aucun élément? L'image de est .  On montre qu'il est impossible de trouver une élément dans l'image à partir de la définition de l'image d'une fonction.  On suppose que . Par la définition de l'image, on sait que possède une préimage, c'est-à-dire qu'il y a un tel que . Or, un tel ne peut pas exister, car il serait élément de l'ensemble .  Il ne peut donc pas y avoir un élément , c'est-à-dire que . Ceci est un exemple par contradiction. On étudiera cette méthode de preuve en plus de détails plus tard.   Soit une fonction et un sous-ensemble de . On définit la restriction de sur comme étant le sous-ensemble de donné par . On écrit parfois aussi . C'est le sous-ensemble des images provenant de . On considère à nouveau les fonctions de l'exercice . Déterminer ; . Déterminer ; . Déterminer . .  Soit et trois fonctions quelconques. Montrer que , soit que le composition est associative.  Pour montrer que deux fonctions sont égales, on doit montrer que si on applique les deux fonctions à n'importe quel élément du domaine, on obtient la même image.  Soit un élément quelconque de , on doit montrer que .  En utilisant la définition de la composition de fontions à plusieurs reprises, on a    Parmi les énoncées suvants, lesquels représentent une définition équivalente du concept de fonction allant de vers .:  Une relation qui satisfait la propriété que si , alors pour tous les .  Un ensemble .  Un ensemble , si pour chaque , est un élément de .   L'énoncés c. est une définition équivalente du concept de fonction.  Pour chacune des fonctions suivantes, déterminer L'image de ;  L'image de la fonction;  La préimage de .   La fonction qui associe à son dernier chiffre (de gauche à droite).   L'image de par est .  L'image de est .  La préimage de par , est l'ensemble des entiers relatifs ayant comme dernier chiffre.   La fonction qui associe à son premier chiffre (de gauche à droite).   L'image de par est .  L'image de est .  La préimage de par , est l'ensemble des entiers naturels ayant comme premier chiffre.   La fonction qui associe à un nombre le plus petit entier supérieur ou égal à .   L'image de par est .  L'image de est .  La préimage de par est .   La fonction qui associe à un nombre le plus grand entier inférieur ou égal à .   L'image de par est  L'image de est .  La préimage de par est .    Soit des fonctions définies de vers par et . Donner une formule pour les compositons suivantes. . . .  Soit deux ensembles et une fonction. Soit deux sous-ensembles de . Montrer que ;  On montre que , et ensuite que .  Soit , on veut montrer que . Puisque , il existe tel que . Puisque , alors soit , ou bien . Si , alors . Si , alors . Ainsi, on a montré que ou bien , c'est-à-dire que . On a donc .  Soit , on veut montrer que . Puisque , alors soit , ou bien . Si , alors pour un , et donc . Sinon, , et alors pour un , et donc . ON a donc montré que .  Puisqu'on a que et que , on a montré que .  ; Soit , alors il existe tel que . Puisque et , on a que et . On a donc , d'où . Trouver deux ensembles et des sous-ensembles tels que ,  ,  pour lesquels Soit et avec . On prend , , et , avec définie par . Ainsi, , , , et donc . Soit et avec . On prend , , et , avec définie par . Ainsi, , , , et donc .  Soit un ensemble et soit un sous-ensemble. La fonction caractéristique de , notée est une fonction de vers définie par . À titre d'exemple, on considère l'ensemble et le sous-ensemble . Quels sont les éléments de ? . Ainsi, on a , et  Pour des ensembles quelconques, montrer que . Soit , on veut comparer à .  Si , alors . De plus, on a que et . Ainsi,   Si , alors . De plus, on a que (c'est-à-dire que ) ou (c'est-à-dire que ). Dans les deux cas, on a . Pour des ensembles quelconques, montrer que . Soit , on veut comparer à .  Si , alors . On veut montrer que . Pour ce faire, on doit séparer le cas où du cas où .  Par la partie précédente, on sait que . Ainsi, si , alors .  Si on a plutôt , alors puisqu'on sait que , on a que ou bien . Dans les deux cas, on a   Finalement, si , alors . De plus, on a que et . Ainsi, .  On peut aussi montrer l'égalité à l'aide d'une table d'appartenance, à laquelle on ajoutes des colones pour les valeurs des fonctions.   Table d'appartenance pour                                 oui  non  oui  non  1  0  1  0  1    oui  oui  oui  oui  1  1  1  1  1    non  non  non  non  0  0  0  0  0    non  oui  oui  non  0  1  1  0  1     Trouver une expression pour la fonction caractéristique du complément de en fonction de celle de . .  On considère les ensembles et . Dans le chapitre , nous verrons des méthodes plus générales pour compter des objtes. Pour l'instnant, vous pouvez utiliser un argument intuitif ou énumérer les fonctions demandées. On considère les fonctions de vers . Combien y a-t-il de fonctions possibles? Il y a fonctions de vers . Combien sont injectives? Si possible, donner un exemple. Il y a fonctions injectives de vers . Une telle fonction est la fonction définie par et . Combien sont surjectives? Si possible, donner un exemple. Il n'y a aucune fonction surjective de vers . Combien sont bijectives? Si possible, donner un exemple. Il n'y a aucune fonction bijective de vers . Répondre aux mêmes questions, mais avec les fonctions de vers . Il y a fonctions de vers . Il n'y a aucune fonction injective de vers . Il y a fonctions surjectives de vers . Une telle fonction est la fonction définie par et . Il n'y a aucune fonction bijective de vers .  Que peut-on dire de la cardinalité des ensembles s'il existe une fonction qui est injective? Justifier Si est injective, alors . En effet, pour chaque élément , il existe un élément . De plus, tous ces éléments sont différents, puisque si , alors , par l'injectivité de . surjective? Justifier Si est surjective, alors . En effet, puisque est surjective, pour chaque élément , il existe un , différent pour chaque , tel que . bijective? Justifier Si est bijective, alors . En effet, si est bijective, alors est injective et surjective. Par , on a que , alors que par , on a que . Les deux innégalités nous donnent que .  Donner une fonction de vers qui est injective, mais pas surjective; surjective, mais pas injective; . bijective;  .  . ni injective ni surjective. .  Soit et des fonctions. Montrer que si sont injectives, alors l'est aussi. Pour montrer que est injective, on doit montrer que, soit deux éléments quelconques de tels que , alors . Par définition de , si , on a que Ainsi, est injective. Montrer que si sont surjectives, alors l'est aussi. Pour montrer que est surjective, on doit montrer que pour tout élélément , on peut trouver un élément tel que . Soit , puisque est surjective, il existe tel que . De plus, puisque est surjective, il existe tel que . Ainsi, , et donc est surjective.  Montrer que si et sont deux fonctions inversibles, alors la composition est inversible et .  Par l'exercice , on sait que est injective et surjective, et donc inversible. Il ne reste qu'à montrer que pour tout , et pour tout  et  Par définition, on a De façon similaire, on a      Exercices supplémentaires  Dans cet exercice, fait référence à la préimage de , pas nécessairment à l'inverse.  Soit une fonction et soit et des sous-ensembles. Analyser les égalités suivantes. Sont-elles toujours\/jamais vraies ou seulement parfois? Si c'est parfois, quelle propriété doit avoir pour garantir qu'elles soient vraies.  Si , et , alors et . Ainsi, l'égalité ne peut pas être toujours vraie.  On peut montrer que l'inclusion est vérifiée. En effet, si , alors par définition, , et donc .  Supposons maintenant que est une fonction injective. On veut montrer que . Soit , alors , par définition de . Puisque , il existe tel que . Mais on a supposé que est injective, d'où , et donc . On a donc bien montré que .  Ainsi, l'égalité est parfois vraie, parfois fausse. Elle sera toujours vraie si est injective.   Si , et , alors et . Ainsi, l'égalité ne peut pas être toujours vraie.  On peut montrer que l'inclusion . En effet, si , alors par définition, il existe un élément tel que . Par définition de , on a que , et donc .  Supposons maintenant que est une fonction surjective. On veut montrer que . Soit , puisque est une fonction surjective, il existe un élément tel que . Ainsi, on a que , et donc . On a donc bien montré que .  Ainsi, l'égalité est parfois vraie, parfois fausse. Elle sera toujours vraie si est surjective.   La cardinalité et l'infini Y a-t-il plus de nombres naturels que de nombres naturles pairs? À priori, cela peut sembler évident puisque les nombres pairs sont inclus dans les naturels et que certains naturels ne sont pas pais. Dénontant les nombres pairs par , on a donc . Or les deux ensembles contiennent une infinité d'éléments. Ont-ils donc la même cardinalité? Comment la cardinalité de ces deux ensembles se compare-elle par rapport à la cardinalité des nombres réels compris entre et ?  Ces questions ont longtemps embêté les mathématiciens et c'est la notion de bijection qui est venue trancher le débat.  On dit que deux ensembles ont la même cardinalité s'il existe une bijection entre et . Le principe est évident et anodin pour les ensembles de cardinalité finie, mais apporte son lot de surprise pour les ensembles infinis.  Trouver une bijection entre les nombres naturels et les nombres naturels pairs. Ceci montre que , même si .  Un ensemble qui a la même cardinalité que ou qui est de cardinalité finie est dit dénombrable.  On considère la fonction définie par . Trouver une bijection entre et . Ceci montre que , même si . Penser à la fonction . La fonction définie par est une bijection. On considère maintenant l'ensemble et l'ensemble des nombres réels compris entre et (exclusivement, mais ce n'est pas important). On suppose qu'il existe une bijection entre ces deux ensembles. En particulier, on peut déterminer l'image de chaque naturel et lui associer un réel. On peut donc lister les nombres réels. Voici à quoi ressemblerait cette liste: .  Chaque représente un chiffre correspondant à la position décimale. Par exemple, si , alors et ainsi de suite.  Donc on prétend avoir cette bijection entre les deux ensembles. On considère le nombre réel formé de la manière suivante: si et si . Que peut-on conclure grâce à ce nombre?  Quel nombre naturel a pour image ? On peut remarquer que le nombre , mais n'est pas dans l'image de , c'est-à-dire que pour tout . En effet, a été construit en prenant la diagonale de la liste , pour ensuite changer chacun des termes, c'est- a-dire que . Ainsi, ne peut pas être une bijection, ce qui est en contradiction avec notre hypothèse initiale. Il n'existe donc pas de bijection entre et . Par , il ne peut pas y avoir de bijection entre et . En fait .  Soit et . On définit la relation qui associe à le plus grand commun diviseur de et . Montrer que cette relation est une fonction. Déterminer l'image de . Déterminer la préimage de . Est-ce que la fonction est injective? Surjective?  On considère la fonction caractéristique définie à l'exercice et la différence symétrique de l'exercice . Montrer que .  Dans l'exercice , on a analysé le comportement de et de . Montrer que . Donner un exemple où et un exemple où . Montrer que . Donner un exemple où et un exemple où .  Soit deux ensembles de cardinalité infinie dénombrable. Trouver une bijection entre et pour montrer que l'union est aussi dénombrable.  Soit des ensembles avec de cardinalité infinie dénombrable. Montrer que est aussi dénombrable.  Considérer l'ensemble des nombres entre et dont le développement décimal ne contient de que des ou des , par exemple . Montrer que cet ensemble est non dénombrable en modifiant l'argument présenté à l'exercice .  Considérer la table infinie suivante, dans laquelle des nombres rationnels strictement positifs apparaissent.   Énumération des rationnels    Numérateur\\Dénominateur                                                                                                                                                                                                                Est-ce que tous les rationnels strictement positifs apparaissent? Justifier Créer une bijection de vers l'ensemble des rationnels strictement positifs afin de montrer que cet ensemble est aussi dénombrable.    "
},
{
  "id": "ex-rel",
  "level": "2",
  "url": "sec-fonctions.html#ex-rel",
  "type": "Exemple",
  "number": "1.3.1",
  "title": "Un exemple de relation.",
  "body": " Un exemple de relation  On considère l'ensemble formé des provinces canadiennes. On pose . On cherche trois éléments de qui sont en relation et deux qui ne le sont pas.  On considère le Québec. La province possède une frontière commune avec l'Ontario à l'ouest, avec le Nouveau-Brunswick au sud-est et avec Terre-Neuve par le biais du Labrador à l'est. Ainsi .  Par contre, le Québec n'a pas de frontière terrestre avec l'Alberta ou la Colombie-Britannique alors .   "
},
{
  "id": "def-fonction",
  "level": "2",
  "url": "sec-fonctions.html#def-fonction",
  "type": "Définition",
  "number": "1.3.2",
  "title": "Une fonction.",
  "body": " Une fonction  Soit deux ensembles et une relation. On dit que est une fonction si chaque élément fait partie d'exactement un élément de . En d'autres mots, un élément de ne peut être en relation qu'avec un seul élément de .  Traditionnellement, on dénote les fonctions par les lettres . On écrit alors .  Chaque élément possède un et un seul élément tel que , mais un élément de peut ne pas être atteint par un élément de . Dans la définition d'une fonction, on spécifie souvent les trois ensembles suivants:  Le domaine: L'ensemble est appelé le domaine de la fonction.  Le codomaine: L'ensemble est appelé le codomaine de la fonction.  L'image: L'image est l'ensemble des qui sont atteints par au moins une valeur : .  Si , on dit aussi que est l'image de et que est une préimage de . L'ensemble de toutes les préimages de est parfois noté . On laisse parfois de côté les accolades, mais il faut alors faire attention de ne pas confondre , qui est un ensemble, avec la fonction inverse de , dont il sera question dans la sous-section .      "
},
{
  "id": "sec-fonctions-3-8",
  "level": "2",
  "url": "sec-fonctions.html#sec-fonctions-3-8",
  "type": "Exemple",
  "number": "1.3.3",
  "title": "Des fonctions.",
  "body": " Des fonctions  On cherche parmi les relations suivantes lesquelles sont des fonctions:  La relation définie à l'exemple .  La relation qui associe à chaque étudiant d'un cours une note à la fin de la session.  La relation qui associe à un étudiant les langages de programmation qu'il connait.  La relation de vers qui associe à un nombre son carré .  La relation de vers qui associe à un nombre les nombres tels .  La relation définie par .  La relation définie par .  La relation de vers qui associe à le nombre premier.       La relation entre les provinces de Canada n'est pas une fonction. Une province peut être en relation avec plusieurs autres, comme le Québec. Une province peut aussi ne pas être en relation avec aucune autre, comme l'Île-du-Prince-Édouard.   À la fin de la session, chaque étudiant aura une note. Deux étudiants auront peut-être la même note, mais ce n'est pas contre l'idée d'une fonction. Par contre, un étudiant aura une et une seule note. C'est donc une fonction.  Parce qu'un étudiant pourrait connaitre plus d'un langage de programmation, ce n'est pas une fonction. De même, peut-être qu'un étudiant ne sait même pas programmer. Il ne serait donc en relation avec aucun language de programmation.  Cette relation est une fonction, car à tout nombre , il existe une seule valeur pour . Par exemple, si on note cette fonction par , alors etc.  Ce n'est pas une fonction car, étant donné , il existe deux nombres dans pour lesquels cela est possible, soit . Par exemple, le naturel serait associé à la fois à et à par cette relation.  Si on changeait le codomaine par l'ensemble des rééls positifs, , alors on aurait une fonction.   Cette relation n'est pas une fonction, car certaines valeurs du domaine ne possèdent pas d'image. C'est le cas pour , puisque .  Cette fois-ci, le codomaine est adéquat et on a une fonction puisque la valeur est unique pour chaque .  Cette relation est une fonction, car il n'existe qu'un seul nombre premier et qu'il en existe une infinité. Toutefois, contrairement aux autres fonctions ci-dessus, il n'y a pas de formule explicite pour déterminer . La liste des premiers nombres premiers est .    "
},
{
  "id": "sec-fonctions-3-10",
  "level": "2",
  "url": "sec-fonctions.html#sec-fonctions-3-10",
  "type": "Exemple",
  "number": "1.3.4",
  "title": "Toutes le fonctions entre deux ensembles.",
  "body": "Toutes le fonctions entre deux ensembles  Soit et . On cherche à faire la liste de toutes les fonctions possibles partant de vers .  Il y aura fonctions. Avant de poursuivre, tenter de voir pourquoi.    On sait que chaque élément du domaine doit être envoyé sur exactement un élément du codomaine. Comme on a deux éléments dans le domaine et que pour chacun on a trois choix dans le codomaine, on devrait trouver fonctions. Elles sont dans la table . L'ordre n'est évidemment pas important, mais remarquer comment elles ont été listées. On est parti avec pour ensuite faire toutes les valeurs possibles pour . Ensuite, on prend la deuxième option et on répète, pour finalement arriver avec et ses variantes pour .  Les fonctions de vers                                                                                                                    "
},
{
  "id": "fig-diasagi",
  "level": "2",
  "url": "sec-fonctions.html#fig-diasagi",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": " Un diagramme sagittal de     "
},
{
  "id": "sec-fonctions-4-7-1",
  "level": "2",
  "url": "sec-fonctions.html#sec-fonctions-4-7-1",
  "type": "Figure",
  "number": "1.3.7",
  "title": "",
  "body": " Un graphique pour     "
},
{
  "id": "fig-sinus",
  "level": "2",
  "url": "sec-fonctions.html#fig-sinus",
  "type": "Figure",
  "number": "1.3.8",
  "title": "",
  "body": " Une fonction sinusoïdale     "
},
{
  "id": "sec-fonctions-4-9",
  "level": "2",
  "url": "sec-fonctions.html#sec-fonctions-4-9",
  "type": "Table",
  "number": "1.3.9",
  "title": "La table de valeurs pour la fonction <span class=\"process-math\">\\(f\\)<\/span>",
  "body": " La table de valeurs pour la fonction    n  f(n)    0  1    1  3    2  1    3  2    "
},
{
  "id": "def-compofct",
  "level": "2",
  "url": "sec-fonctions.html#def-compofct",
  "type": "Définition",
  "number": "1.3.10",
  "title": "La composition de deux fonctions.",
  "body": " La composition de deux fonctions  Soit et deux fonctions. La composition de et , notée est une fonction de vers définie par pour tout élément .  "
},
{
  "id": "fig-compofct",
  "level": "2",
  "url": "sec-fonctions.html#fig-compofct",
  "type": "Figure",
  "number": "1.3.11",
  "title": "",
  "body": " La composition   Trois ensembles A,B,C sont dessinés contenant respectivement les éléments a,g de a et f de g de a. Des flèches illustrant la fonction g partent de l'ensemble A à gauche vers l'ensemble B au centre, des flèches illustrant la fonction f partent de l'ensemble B au centre vers l'ensemble C à droite et des flèches illustrant la composition f rong g partent de l'ensemble A vers l'ensemble C.    "
},
{
  "id": "ex-composagi",
  "level": "2",
  "url": "sec-fonctions.html#ex-composagi",
  "type": "Exemple",
  "number": "1.3.12",
  "title": "Composition de deux fonctions.",
  "body": " Composition de deux fonctions  Soit trois ensembles et des fonctions telles qu'illustrés à la figure . On veut déterminer  Le domaine, le codomaine et l'image de et .  Les valeurs, si possible de .  Les préimages, si possible, .     Un diagramme sagittal de et leur composition   Un graphique sagittal à trois ensembles est illustré. À gauche, les éléments a,b,c de l'ensemble A sont envoyés respectivement sur 1,3 et 1 dans l'ensemble B au centre. L'ensemble B contient les éléments 1,2,3 qui sont envoyés dans l'ensemble C respectivement sur -4,-1,-2. L'ensemble C contient aussi l'élément -3.        On commence par la fonction . Son domaine est l'ensemble , son codomaine est l'ensemble et son image est le sous-ensemble de contenant les éléments .  Pour la fonction , son domaine est l'ensemble , son codomaine est l'ensemble et son image est le sous-ensemble de contenant les éléments .  Finalement pour la composition , son domaine est l'ensemble , son codomaine est l'ensemble et son image est le sous-ensemble de contenant les éléments .  Comme , on ne peut pas déterminer l'image de par . Par contre , on a et  La ou les préimage de par la fonction est l'ensemble des valeurs telles que . On a Pour la composition, on cherche l'ensemble des telle que . On trouve .    "
},
{
  "id": "def-inj",
  "level": "2",
  "url": "sec-fonctions.html#def-inj",
  "type": "Définition",
  "number": "1.3.14",
  "title": "Fonction injective.",
  "body": " Fonction injective  Soit une fonction. On dit que est injective si et seulement si les éléments de l'image ne sont atteints par que par exactement un élément du domaine. En langage mathématique, on écrit que si , alors nécessairement .  "
},
{
  "id": "ex-inj",
  "level": "2",
  "url": "sec-fonctions.html#ex-inj",
  "type": "Exemple",
  "number": "1.3.15",
  "title": "Des fonctions injectives.",
  "body": " Des fonctions injectives  On considère les fonctions suivantes et on cherche celles qui sont injectives:  La fonction de définie par .  La fonction de Par , on veut dire l'ensemble définie par .  La fonction d'un ensemble quelconque vers ce même ensemble qui associe chaque élément à lui-même.  Soit . On pose . On définit comme étant la fonction qui associe à chaque élément de sa cardinalité.    Cette fonction n'est pas injective puisque pour tout , on a . En particulier, si , on obtient deux valeurs différentes du domaine qui donne la même image, par exemple .  Cette fois, comme le domaine est restreint aux réels positifs, il n'y a plus de possible. Chaque nombre réel positif possède une unique racine carrée et donc, chaque élément de l'image n'est atteint que par un seul élément du domaine. C'est une fonction injective.  Parce que est un ensemble, on sait qu'il n'y a pas de répétitions dans ses éléments. Chaque membre de l'image est atteint par son unique homologue du domaine. C'est donc une injection (on utilise parfois ce terme plutôt que fonction injective).  On essaie de décortiquer un peu la fonction. L'ensemble de puissances contient éléments. La cardinalité de ces éléments varie de pour l'ensemble vide à pour l'ensemble lui-même. On comprend maintenant pourquoi le codomaine ne pouvait être que l'ensemble . On a dû lui ajoute l'élément afin que puisse associer à chaque valeur de une réponse.  On peut évidemment exhiber plusieurs sous-ensembles qui ont la même cardinalité, par exemple et ou et . Cette fonction n'est donc pas injective.    "
},
{
  "id": "def-surj",
  "level": "2",
  "url": "sec-fonctions.html#def-surj",
  "type": "Définition",
  "number": "1.3.16",
  "title": "Fonction surjective.",
  "body": " Fonction surjective  Soit une fonction. On dit que est surjective si et seulement si tous les éléments du codomaine sont atteints par par au moins une valeur du domaine .Ceci est équivalent à dire que le codomaine de la fonction est l'image de celle-ci. En lagange mathématique, on écrit que pour tout , il existe au moins un tel que .  "
},
{
  "id": "ex-surj",
  "level": "2",
  "url": "sec-fonctions.html#ex-surj",
  "type": "Exemple",
  "number": "1.3.17",
  "title": "Des fonctions surjectives.",
  "body": " Des fonctions surjectives  On considère les fonctions suivantes et on cherche celles qui sont surjective:  La fonction de définie par .  La fonction de Par , on veut dire l'ensemble définie par .  La fonction d'un ensemble quelconque vers ce même ensemble qui associe chaque élément à lui-même.  Soit . On pose . On définit comme étant la fonction qui associe à chaque élément de sa cardinalité.    Cette fonction n'est pas surjective puisque pour tout , il n'existe pas de réel qui, mis au carré, donnera . Par exemple, l'équation n'a pas de solutions dans les réels.  Cette fois, comme le codomaine est restreint aux réels positifs, il n'y a plus de nombres négatifs. Chaque nombre réel positif possède une unique racine carrée et donc, chaque élément de l'image n'est atteint que par un seul élément du domaine. C'est une fonction surjective.  Dans la définition de la fonction, on dit que chaque membre du domaine est associé à son homologue du codomaine. C'est donc une surjection (on utilise parfois ce terme plutôt que fonction surjective).  La cardinalité des éléments de varie de pour l'ensemble vide à pour l'ensemble lui-même, passant par et avec les sous-ensembles et et et . Cette fonction est donc surjective.    "
},
{
  "id": "def-bij",
  "level": "2",
  "url": "sec-fonctions.html#def-bij",
  "type": "Définition",
  "number": "1.3.18",
  "title": "Fonction bijective.",
  "body": " Fonction bijective  Une fonction est dite bijective si elle est à la fois injective et surjective. Une fonction bijective atteint chaque élément du codomaine exactement une fois.  "
},
{
  "id": "fig-fctscorr",
  "level": "2",
  "url": "sec-fonctions.html#fig-fctscorr",
  "type": "Figure",
  "number": "1.3.19",
  "title": "",
  "body": " Différents cas possible d'injectivité, surjectivité et bijectivité    Fonction ni injective ni surjective   Un ensemble A, à gauche contenant les éléments a,b,c est envoyé vers un ensemble B à droite contenant les éléments 1,2,3. L'élément 1 possède deux préimages et l'élément 2 n'est pas atteint.      Fonction injective, mais pas surjective   Un ensemble A, à gauche contenant les éléments a,b est envoyé vers un ensemble B à droite contenant les éléments 1,2,3. Les éléments a et 1 correspondent, tout comme b et 2. L'élément 3 n'est pas atteint.      Fonction surjective, mais pas injective   Un ensemble A, à gauche contenant les éléments a,b,c est envoyé vers un ensemble B à droite contenant les éléments 1,2. L'élément 1 possède deux préimages.      Fonction bijective   Un ensemble A, à gauche contenant les éléments a,b,c est envoyé vers un ensemble B à droite contenant les éléments 1,2,3. À chaque élément correspond un et un seul élément.      "
},
{
  "id": "def-inverse",
  "level": "2",
  "url": "sec-fonctions.html#def-inverse",
  "type": "Définition",
  "number": "1.3.20",
  "title": "Fonction inverse.",
  "body": " Fonction inverse   Soit une bijection. La fonction inverse de , notée est la fonction qui associe à chaque un élément tels que . On écrira alors .  De manière équivalente, la fonction est l'unique fonction telle que pour tout élément , on a , et pour tout élémemt , on a .   "
},
{
  "id": "exo-fctrel",
  "level": "2",
  "url": "sec-fonctions.html#exo-fctrel",
  "type": "Question de compréhension",
  "number": "1.3.5.1",
  "title": "",
  "body": "Soit , . Déterminer quelles relations ci-dessous sont des fonctions. Expliquer pourquoi. où ; où ; où ; où ; où . "
},
{
  "id": "sec-fonctions-8-3",
  "level": "2",
  "url": "sec-fonctions.html#sec-fonctions-8-3",
  "type": "Question de compréhension",
  "number": "1.3.5.2",
  "title": "",
  "body": "Soit les nombres naturels représentés par ou chiffres. On définit comme la fonction qui associe à la somme des chiffres qui composent . Par exemple, . Déterminer où est le jour de votre anniversaire. Trouver l'image de cette fonction. Trouver . Trouver "
},
{
  "id": "sec-fonctions-8-4",
  "level": "2",
  "url": "sec-fonctions.html#sec-fonctions-8-4",
  "type": "Question de compréhension",
  "number": "1.3.5.3",
  "title": "",
  "body": "Soit l'ensemble de tous les chiens. Donner un ensemble et une relation tels que n'est pas une fonction. est une fonction. "
},
{
  "id": "sec-fonctions-8-5",
  "level": "2",
  "url": "sec-fonctions.html#sec-fonctions-8-5",
  "type": "Question de compréhension",
  "number": "1.3.5.4",
  "title": "",
  "body": "Soit et . Représenter dans un diagramme sagittal la fonction qui associe à la première lettre de son écriture dans la langue française. "
},
{
  "id": "sec-fonctions-8-6",
  "level": "2",
  "url": "sec-fonctions.html#sec-fonctions-8-6",
  "type": "Question de compréhension",
  "number": "1.3.5.5",
  "title": "",
  "body": "Quels énoncés parmi les suivants sont équivalent à dire que est injective? Justifier.  Le codomaine est égal à l'image.  Pour tout on a .  Si alors .     "
},
{
  "id": "sec-fonctions-8-7",
  "level": "2",
  "url": "sec-fonctions.html#sec-fonctions-8-7",
  "type": "Question de compréhension",
  "number": "1.3.5.6",
  "title": "",
  "body": "Quels énoncés parmi les suivants sont équivalent à dire que est surjective? Justifier.  Le codomaine est égal à l'image.  Pour tout , on a .  Pour tout où , on a .     "
},
{
  "id": "sec-fonctions-8-8",
  "level": "2",
  "url": "sec-fonctions.html#sec-fonctions-8-8",
  "type": "Question de compréhension",
  "number": "1.3.5.7",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-fctintro",
  "level": "2",
  "url": "sec-fonctions.html#exo-fctintro",
  "type": "Exercice",
  "number": "1.3.6.1",
  "title": "",
  "body": "Soit , et . On considère les fonctions et définies comme suit:                   Déterminer   L'image de par ;  L'image de par est . C'est-à-dire que . La préimage de par ; La préimage de par est . C'est-à-dire que . La préimage de par ; La préimage de par est . C'est-à-dire que . Le domaine, le codomaine et l'image de Le domaine de est , le codomaine de est , et l'image de est . Le domaine, le codomaine et l'image de Le domaine de est , le codomaine de est et l'image de est . Le domaine, le codomaine et l'image de Le domaine de est , le codomaine de est et l'image de est . L'image de par la composition ; L'image de par est . C'est-à-dire que . La préimage de par la composition ; La préimage de par est . C'est-à-dire que . "
},
{
  "id": "exo--2-4",
  "level": "2",
  "url": "sec-fonctions.html#exo--2-4",
  "type": "Exercice",
  "number": "1.3.6.2",
  "title": "",
  "body": "Quel est l'image de la fonction ? Pouvez-vous trouver un élément dans l'image de ? Quel est l'ensemble qui ne contient aucun élément? L'image de est .  On montre qu'il est impossible de trouver une élément dans l'image à partir de la définition de l'image d'une fonction.  On suppose que . Par la définition de l'image, on sait que possède une préimage, c'est-à-dire qu'il y a un tel que . Or, un tel ne peut pas exister, car il serait élément de l'ensemble .  Il ne peut donc pas y avoir un élément , c'est-à-dire que . Ceci est un exemple par contradiction. On étudiera cette méthode de preuve en plus de détails plus tard.  "
},
{
  "id": "exo-fctrest",
  "level": "2",
  "url": "sec-fonctions.html#exo-fctrest",
  "type": "Exercice",
  "number": "1.3.6.3",
  "title": "",
  "body": "Soit une fonction et un sous-ensemble de . On définit la restriction de sur comme étant le sous-ensemble de donné par . On écrit parfois aussi . C'est le sous-ensemble des images provenant de . On considère à nouveau les fonctions de l'exercice . Déterminer ; . Déterminer ; . Déterminer . . "
},
{
  "id": "exo-compAsso",
  "level": "2",
  "url": "sec-fonctions.html#exo-compAsso",
  "type": "Exercice",
  "number": "1.3.6.4",
  "title": "",
  "body": "Soit et trois fonctions quelconques. Montrer que , soit que le composition est associative.  Pour montrer que deux fonctions sont égales, on doit montrer que si on applique les deux fonctions à n'importe quel élément du domaine, on obtient la même image.  Soit un élément quelconque de , on doit montrer que .  En utilisant la définition de la composition de fontions à plusieurs reprises, on a   "
},
{
  "id": "exo--2-7",
  "level": "2",
  "url": "sec-fonctions.html#exo--2-7",
  "type": "Exercice",
  "number": "1.3.6.5",
  "title": "",
  "body": "Parmi les énoncées suvants, lesquels représentent une définition équivalente du concept de fonction allant de vers .:  Une relation qui satisfait la propriété que si , alors pour tous les .  Un ensemble .  Un ensemble , si pour chaque , est un élément de .   L'énoncés c. est une définition équivalente du concept de fonction. "
},
{
  "id": "exo--2-8",
  "level": "2",
  "url": "sec-fonctions.html#exo--2-8",
  "type": "Exercice",
  "number": "1.3.6.6",
  "title": "",
  "body": "Pour chacune des fonctions suivantes, déterminer L'image de ;  L'image de la fonction;  La préimage de .   La fonction qui associe à son dernier chiffre (de gauche à droite).   L'image de par est .  L'image de est .  La préimage de par , est l'ensemble des entiers relatifs ayant comme dernier chiffre.   La fonction qui associe à son premier chiffre (de gauche à droite).   L'image de par est .  L'image de est .  La préimage de par , est l'ensemble des entiers naturels ayant comme premier chiffre.   La fonction qui associe à un nombre le plus petit entier supérieur ou égal à .   L'image de par est .  L'image de est .  La préimage de par est .   La fonction qui associe à un nombre le plus grand entier inférieur ou égal à .   L'image de par est  L'image de est .  La préimage de par est .   "
},
{
  "id": "exo--2-9",
  "level": "2",
  "url": "sec-fonctions.html#exo--2-9",
  "type": "Exercice",
  "number": "1.3.6.7",
  "title": "",
  "body": "Soit des fonctions définies de vers par et . Donner une formule pour les compositons suivantes. . . . "
},
{
  "id": "exo--2-10",
  "level": "2",
  "url": "sec-fonctions.html#exo--2-10",
  "type": "Exercice",
  "number": "1.3.6.8",
  "title": "",
  "body": "Soit deux ensembles et une fonction. Soit deux sous-ensembles de . Montrer que ;  On montre que , et ensuite que .  Soit , on veut montrer que . Puisque , il existe tel que . Puisque , alors soit , ou bien . Si , alors . Si , alors . Ainsi, on a montré que ou bien , c'est-à-dire que . On a donc .  Soit , on veut montrer que . Puisque , alors soit , ou bien . Si , alors pour un , et donc . Sinon, , et alors pour un , et donc . ON a donc montré que .  Puisqu'on a que et que , on a montré que .  ; Soit , alors il existe tel que . Puisque et , on a que et . On a donc , d'où . Trouver deux ensembles et des sous-ensembles tels que ,  ,  pour lesquels Soit et avec . On prend , , et , avec définie par . Ainsi, , , , et donc . Soit et avec . On prend , , et , avec définie par . Ainsi, , , , et donc . "
},
{
  "id": "exo-fctcar",
  "level": "2",
  "url": "sec-fonctions.html#exo-fctcar",
  "type": "Exercice",
  "number": "1.3.6.9",
  "title": "",
  "body": "Soit un ensemble et soit un sous-ensemble. La fonction caractéristique de , notée est une fonction de vers définie par . À titre d'exemple, on considère l'ensemble et le sous-ensemble . Quels sont les éléments de ? . Ainsi, on a , et  Pour des ensembles quelconques, montrer que . Soit , on veut comparer à .  Si , alors . De plus, on a que et . Ainsi,   Si , alors . De plus, on a que (c'est-à-dire que ) ou (c'est-à-dire que ). Dans les deux cas, on a . Pour des ensembles quelconques, montrer que . Soit , on veut comparer à .  Si , alors . On veut montrer que . Pour ce faire, on doit séparer le cas où du cas où .  Par la partie précédente, on sait que . Ainsi, si , alors .  Si on a plutôt , alors puisqu'on sait que , on a que ou bien . Dans les deux cas, on a   Finalement, si , alors . De plus, on a que et . Ainsi, .  On peut aussi montrer l'égalité à l'aide d'une table d'appartenance, à laquelle on ajoutes des colones pour les valeurs des fonctions.   Table d'appartenance pour                                 oui  non  oui  non  1  0  1  0  1    oui  oui  oui  oui  1  1  1  1  1    non  non  non  non  0  0  0  0  0    non  oui  oui  non  0  1  1  0  1     Trouver une expression pour la fonction caractéristique du complément de en fonction de celle de . . "
},
{
  "id": "exo--2-12",
  "level": "2",
  "url": "sec-fonctions.html#exo--2-12",
  "type": "Exercice",
  "number": "1.3.6.10",
  "title": "",
  "body": "On considère les ensembles et . Dans le chapitre , nous verrons des méthodes plus générales pour compter des objtes. Pour l'instnant, vous pouvez utiliser un argument intuitif ou énumérer les fonctions demandées. On considère les fonctions de vers . Combien y a-t-il de fonctions possibles? Il y a fonctions de vers . Combien sont injectives? Si possible, donner un exemple. Il y a fonctions injectives de vers . Une telle fonction est la fonction définie par et . Combien sont surjectives? Si possible, donner un exemple. Il n'y a aucune fonction surjective de vers . Combien sont bijectives? Si possible, donner un exemple. Il n'y a aucune fonction bijective de vers . Répondre aux mêmes questions, mais avec les fonctions de vers . Il y a fonctions de vers . Il n'y a aucune fonction injective de vers . Il y a fonctions surjectives de vers . Une telle fonction est la fonction définie par et . Il n'y a aucune fonction bijective de vers . "
},
{
  "id": "exo--2-13",
  "level": "2",
  "url": "sec-fonctions.html#exo--2-13",
  "type": "Exercice",
  "number": "1.3.6.11",
  "title": "",
  "body": "Que peut-on dire de la cardinalité des ensembles s'il existe une fonction qui est injective? Justifier Si est injective, alors . En effet, pour chaque élément , il existe un élément . De plus, tous ces éléments sont différents, puisque si , alors , par l'injectivité de . surjective? Justifier Si est surjective, alors . En effet, puisque est surjective, pour chaque élément , il existe un , différent pour chaque , tel que . bijective? Justifier Si est bijective, alors . En effet, si est bijective, alors est injective et surjective. Par , on a que , alors que par , on a que . Les deux innégalités nous donnent que . "
},
{
  "id": "exo--2-14",
  "level": "2",
  "url": "sec-fonctions.html#exo--2-14",
  "type": "Exercice",
  "number": "1.3.6.12",
  "title": "",
  "body": "Donner une fonction de vers qui est injective, mais pas surjective; surjective, mais pas injective; . bijective;  .  . ni injective ni surjective. . "
},
{
  "id": "exo-compInjSurj",
  "level": "2",
  "url": "sec-fonctions.html#exo-compInjSurj",
  "type": "Exercice",
  "number": "1.3.6.13",
  "title": "",
  "body": "Soit et des fonctions. Montrer que si sont injectives, alors l'est aussi. Pour montrer que est injective, on doit montrer que, soit deux éléments quelconques de tels que , alors . Par définition de , si , on a que Ainsi, est injective. Montrer que si sont surjectives, alors l'est aussi. Pour montrer que est surjective, on doit montrer que pour tout élélément , on peut trouver un élément tel que . Soit , puisque est surjective, il existe tel que . De plus, puisque est surjective, il existe tel que . Ainsi, , et donc est surjective. "
},
{
  "id": "exo--2-16",
  "level": "2",
  "url": "sec-fonctions.html#exo--2-16",
  "type": "Exercice",
  "number": "1.3.6.14",
  "title": "",
  "body": "Montrer que si et sont deux fonctions inversibles, alors la composition est inversible et .  Par l'exercice , on sait que est injective et surjective, et donc inversible. Il ne reste qu'à montrer que pour tout , et pour tout  et  Par définition, on a De façon similaire, on a   "
},
{
  "id": "exo-compofprei",
  "level": "2",
  "url": "sec-fonctions.html#exo-compofprei",
  "type": "Exercice",
  "number": "1.3.6.15",
  "title": "",
  "body": "Dans cet exercice, fait référence à la préimage de , pas nécessairment à l'inverse.  Soit une fonction et soit et des sous-ensembles. Analyser les égalités suivantes. Sont-elles toujours\/jamais vraies ou seulement parfois? Si c'est parfois, quelle propriété doit avoir pour garantir qu'elles soient vraies.  Si , et , alors et . Ainsi, l'égalité ne peut pas être toujours vraie.  On peut montrer que l'inclusion est vérifiée. En effet, si , alors par définition, , et donc .  Supposons maintenant que est une fonction injective. On veut montrer que . Soit , alors , par définition de . Puisque , il existe tel que . Mais on a supposé que est injective, d'où , et donc . On a donc bien montré que .  Ainsi, l'égalité est parfois vraie, parfois fausse. Elle sera toujours vraie si est injective.   Si , et , alors et . Ainsi, l'égalité ne peut pas être toujours vraie.  On peut montrer que l'inclusion . En effet, si , alors par définition, il existe un élément tel que . Par définition de , on a que , et donc .  Supposons maintenant que est une fonction surjective. On veut montrer que . Soit , puisque est une fonction surjective, il existe un élément tel que . Ainsi, on a que , et donc . On a donc bien montré que .  Ainsi, l'égalité est parfois vraie, parfois fausse. Elle sera toujours vraie si est surjective.  "
},
{
  "id": "exo--3-3",
  "level": "2",
  "url": "sec-fonctions.html#exo--3-3",
  "type": "Exercice",
  "number": "1.3.6.16",
  "title": "La cardinalité et l’infini.",
  "body": "La cardinalité et l'infini Y a-t-il plus de nombres naturels que de nombres naturles pairs? À priori, cela peut sembler évident puisque les nombres pairs sont inclus dans les naturels et que certains naturels ne sont pas pais. Dénontant les nombres pairs par , on a donc . Or les deux ensembles contiennent une infinité d'éléments. Ont-ils donc la même cardinalité? Comment la cardinalité de ces deux ensembles se compare-elle par rapport à la cardinalité des nombres réels compris entre et ?  Ces questions ont longtemps embêté les mathématiciens et c'est la notion de bijection qui est venue trancher le débat.  On dit que deux ensembles ont la même cardinalité s'il existe une bijection entre et . Le principe est évident et anodin pour les ensembles de cardinalité finie, mais apporte son lot de surprise pour les ensembles infinis.  Trouver une bijection entre les nombres naturels et les nombres naturels pairs. Ceci montre que , même si .  Un ensemble qui a la même cardinalité que ou qui est de cardinalité finie est dit dénombrable.  On considère la fonction définie par . Trouver une bijection entre et . Ceci montre que , même si . Penser à la fonction . La fonction définie par est une bijection. On considère maintenant l'ensemble et l'ensemble des nombres réels compris entre et (exclusivement, mais ce n'est pas important). On suppose qu'il existe une bijection entre ces deux ensembles. En particulier, on peut déterminer l'image de chaque naturel et lui associer un réel. On peut donc lister les nombres réels. Voici à quoi ressemblerait cette liste: .  Chaque représente un chiffre correspondant à la position décimale. Par exemple, si , alors et ainsi de suite.  Donc on prétend avoir cette bijection entre les deux ensembles. On considère le nombre réel formé de la manière suivante: si et si . Que peut-on conclure grâce à ce nombre?  Quel nombre naturel a pour image ? On peut remarquer que le nombre , mais n'est pas dans l'image de , c'est-à-dire que pour tout . En effet, a été construit en prenant la diagonale de la liste , pour ensuite changer chacun des termes, c'est- a-dire que . Ainsi, ne peut pas être une bijection, ce qui est en contradiction avec notre hypothèse initiale. Il n'existe donc pas de bijection entre et . Par , il ne peut pas y avoir de bijection entre et . En fait . "
},
{
  "id": "exo--3-4",
  "level": "2",
  "url": "sec-fonctions.html#exo--3-4",
  "type": "Exercice",
  "number": "1.3.6.17",
  "title": "",
  "body": "Soit et . On définit la relation qui associe à le plus grand commun diviseur de et . Montrer que cette relation est une fonction. Déterminer l'image de . Déterminer la préimage de . Est-ce que la fonction est injective? Surjective? "
},
{
  "id": "exo--3-5",
  "level": "2",
  "url": "sec-fonctions.html#exo--3-5",
  "type": "Exercice",
  "number": "1.3.6.18",
  "title": "",
  "body": "On considère la fonction caractéristique définie à l'exercice et la différence symétrique de l'exercice . Montrer que . "
},
{
  "id": "exo--3-6",
  "level": "2",
  "url": "sec-fonctions.html#exo--3-6",
  "type": "Exercice",
  "number": "1.3.6.19",
  "title": "",
  "body": "Dans l'exercice , on a analysé le comportement de et de . Montrer que . Donner un exemple où et un exemple où . Montrer que . Donner un exemple où et un exemple où . "
},
{
  "id": "exo--3-7",
  "level": "2",
  "url": "sec-fonctions.html#exo--3-7",
  "type": "Exercice",
  "number": "1.3.6.20",
  "title": "",
  "body": "Soit deux ensembles de cardinalité infinie dénombrable. Trouver une bijection entre et pour montrer que l'union est aussi dénombrable. "
},
{
  "id": "exo--3-8",
  "level": "2",
  "url": "sec-fonctions.html#exo--3-8",
  "type": "Exercice",
  "number": "1.3.6.21",
  "title": "",
  "body": "Soit des ensembles avec de cardinalité infinie dénombrable. Montrer que est aussi dénombrable. "
},
{
  "id": "exo--3-9",
  "level": "2",
  "url": "sec-fonctions.html#exo--3-9",
  "type": "Exercice",
  "number": "1.3.6.22",
  "title": "",
  "body": "Considérer l'ensemble des nombres entre et dont le développement décimal ne contient de que des ou des , par exemple . Montrer que cet ensemble est non dénombrable en modifiant l'argument présenté à l'exercice . "
},
{
  "id": "exo--3-10",
  "level": "2",
  "url": "sec-fonctions.html#exo--3-10",
  "type": "Exercice",
  "number": "1.3.6.23",
  "title": "",
  "body": "Considérer la table infinie suivante, dans laquelle des nombres rationnels strictement positifs apparaissent.   Énumération des rationnels    Numérateur\\Dénominateur                                                                                                                                                                                                                Est-ce que tous les rationnels strictement positifs apparaissent? Justifier Créer une bijection de vers l'ensemble des rationnels strictement positifs afin de montrer que cet ensemble est aussi dénombrable. "
},
{
  "id": "sec-logprop",
  "level": "1",
  "url": "sec-logprop.html",
  "type": "Section",
  "number": "2.1",
  "title": "La logique propositionnelle",
  "body": "  La logique propositionnelle    La logique propositionnelle est l'étude de propositions et leur combinaison par divers connecteurs. De manière plus générale, la logique est l'étude des conséquences de ces combinaisons. Les règles de la logique propositionnelle permettent de distinguer les raisonnements mathématiques valides des autres. Le caractère fondamental des mathématiques repose sur la validité des raisonnements qui sont utilisés pour démontrer les théorèmes et résultats divers.  D'un point de vue pratique, les règles de la logique sont maintenant utilisées en informatique afin que la machine puisse comprendre, sans ambiguité, ce que l'utilisateur veut faire.  Dans cette section, on définit la notion de proposition , les connecteurs de conjonction,disjonction et implication . On définit aussi la négation d'une proposition, de même que la réciproque et la contraposée d'une implication. Finalement, on introduit le concept de table de vérité.    Propositions mathématiques et connecteurs logiques  L'objet le plus élémentaire de la logique est la proposition. Pour pouvoir faire un raisonnement et le valider, il faut savoir comment écrire et parler des mathématiques.   Proposition mathématique   Une proposition est un énoncé, une phrase déclarative qui est soit vraie, soit fausse.    Par exemple, les énoncés suivants sont des propositions, car on peut leur attribuer une valeur de vérité.  Le Québec est une province du Canada (c'est vrai).  Le soleil tourne autour de la Terre (c'est faux).  (c'est faux).  J'ai pris une douche ce matin (c'est soit vrai, soit faux, dépendamment du matin, mais çe ne peut pas être autre chose que vrai ou faux).  Si on est jeudi ou si on est samedi, alors je vais prendre un verre. (étant donné la journée, on peut déterminer la véracité)  Une proposition n'est donc pas nécessairement vraie. Ce qui importe, c'est qu'elle soit vraie ou fausse. La valeur de vérité d'une proposition pourrait même changer dans le temps, par exemple si le Québec devenait indépendant, la première proposition serait fausse, et la véracité de la proposition sur la prise de douche dépend des matins.  Les énoncés ci-dessous ne sont pas des propositions.  Quel jour de la semaine est-on? (Une question, pas une phrase déclarative.)  Lire le chapitre pour le prochain cours (c'est une consigne).  (si on connaissait , on pourrait peut-être déterminer la véracité de cette proposition, mais sans informations additionnelles, c'est impossible).  Au sujet de l'énoncé avec la variable , c'est un exemple de fonction propositionnelle. On les abordera à la section .  Les propositions avec lesquelles on travaillera seront plus complexes que les premières du paragraphe ci-dessus. Si on regarde la proposition , on constate qu'elle est composée de plusieurs petites proposition: « on est jeudi», «on est samedi» et « je vais prendre un verre». Ces trois propositions sont par la suite composées à l'aide des connecteurs «ou» et « si alors». Une proposition qui ne peut être décomposée davantage est dite atomique, alors qu'une proposition composée est appelée moléculaire.  Du côté symbolique, on utilisera principalement les lettres de l'alphabet minuscule autour de pour désigner une proposition (atomique ou moléculaire). Par exemple, « si ou si , alors » pourrait représenter la proposition «si on est jeudi ou si on est samedi, alors je vais prendre un verre». En fait, le deuxième «si» sera souvent laissé de côté, et même les connecteurs auront leur propre symbole.   La négation d'une proposition  Soit une proposition quelconque. On apelle la négation de , notée , la proposition « il n'est pas vrai que ». C'est une proposition qui a toujours comme valeur de vérité le contraire de .  On note parfois aussi la négation comme étant ou encore . Cette dernière option est celle qui est utilisée dans beaucoup de programme informatique.  Selon le contexte, on reformulera la proposition pour que la formulation soit plus naturelle que « il n'est pas vrai que ».   Par exemple la négation de «Le Québec est une province du Canada » est « Il n'est pas vrai que le Québec est une province du Canada », que l'on pourrait reformuler plus simplement comme « Le Québec n'est pas une province du Canada ».   La conjonction  Soit deux propositions. On appelle et la conjonction de , notée , la proposition qui est vraie lorsque et sont vraies.  On note parfois aussi la conjonction entre et comme . C'est aussi la notation qui est utilisée par beaucoup de langages informatiques. Dans la partie textuelle de ces notes, on préfère l'utilisation du symbole , car il évoque un certain parallèle avec l'intersection de la théorie des ensembles. Le lien deviendra plus clair sous peu.     La disjonction  Soit deux propositions. On appelle ou la disjonction de , notée , la proposition qui est vraie lorsque ou sont vraies, peut-être les deux.  On note parfois aussi la disjonction entre et comme , ou . Les deux premières notations alternatives sont celles qui sont utilisées par beaucoup de langages informatiques. Dans la partie textuelle de ces notes, on préfère l'utilisation du symbole , car il évoque un certain parallèle avec l'union de la théorie des ensembles. Ce lien deviendra aussi plus clair sous peu.   La proposition « Il fait beau et je suis en congé » est une conjonction de deux propositions atomiques, alors que la proposition On est jeudi ou c'est l'hiver est une disjonction.   Priorité des opérateurs  Les opérateurs de disjonctions et de conjonctions sont des opérateurs binaires. Ils s'appliquent sur deux opérandes. L'opérateur de négation quant à lui est un opérateur unaire, qui s'applique sur l'opérande qui le suit. Afin d'éviter une trop grande utilisation de parenthèses, on donne la priorité à l'opérateur unaire.  Ainsi, la proposition doit être vue comme . Si on veut la négation d'une conjonction ou d'une disjonction, on pourra utiliser les parenthèses comme dans la proposition . Dans la section , on verra comment réécrire cette négation.     Table de vérité  Il n'est pas évident de déterminer la valeur de vérité d'une proposition moléculaire complexe en regardant simplement ses morceaux et leur interaction. Par exemple, quand peut-on dire que la proposition moléculaire « J'ai une soeur ou il n'est pas vrai que ( j'ai une soeur et le ciel est rouge) » est vraie? Si on la décortique, on voit qu'elle est formée des deux propositions atomique et et représentée symboliquement par . Cette proposition complexe a certainement une valeur de vérité, qui dépend probablement des valeurs de vérités individuelles de et .  Pour analyser une proposition complexe, on utilise une table de vérité. C'est un outil semblable au tableau d'appartenance introduit à la proposition . Ci-dessous, les tables de vérités des connecteurs de négation, conjonction et disjonction.   Trois des principales tables de vérité   Table de vérité de la négation            V  F    F  V     Table de vérité de la conjonction               V  V  V    V  F  F    F  V  F    F  F  F     Table de vérité de la disjonction               V  V  V    V  F  V    F  V  V    F  F  F        Une table de vérité plus complexe  On considère la proposition et on cherche à déterminer sous quelle condition elle est vraie. On utilise une table de vérité.  Pour ce type de proposition, il convient de décomposer en plus petits morceaux et d'analyser chacun de ces morceaux afin de former le tout. La table de vérité   Table de vérité d'une proposition complexe                     V  V  V  F  V    V  F  F  V  V    F  V  F  V  V    F  F  F  V  V     Comme on peut le voir, la proposition finale est toujours vraie, indépendamment de la véracité des propositions individuelles .        Implication, réciproque et contraposée  Une autre manière de connecter des propositions est d'utiliser la formule « si , alors ». Par exemple, la proposition « S'il pleut, alors le gazon est mouillé » est une telle proposition.   L'implication logique  Soit et deux proposition. On appelle si , alors l'implication logique, notée . C'est une proposition qui est fausse lorsque est vraie et est fausse, mais vraie dans tous les autres cas.  La proposition est appelée l'hypothèse ou la prémisse et la proposition est appelée la conséquence ou la conclusion.  En plus de si alors , on dit parfois aussi implique , seulement si , est suffisant pour que soit vraie ou encore est nécessaire pour avoir .    La table de vérité de l'implication se trouve ci-dessous.   Table de vérité de l'implication               V  V  V    V  F  F    F  V  V    F  F  V     À priopri, il semble étrange d'avoir une proposition qui est vraie lorsque ses composantes sont fausses. Il faut réaliser que pour la logique mathématique, il n'est pas important qu'il y ait un lien entre et pour les connecter avec l'implication. Ainsi, « si on est jeudi, alors » est une implication qui en générale sera considérée comme vraie, puisque six fois sur sept jeudi n'est pas aujourd'hui et que , mais lorsque que c'est jeudi, l'implication devient fausse. L'idée générale à retenir est qu'à partir d'une hypothèse qui est vraie, on ne peut que conclure la vérité, mais à partir d'une prémisse fausse, on peut arriver à n'importe quelle conclusion. En particulier pour la dernière ligne, ce n'est pas de dire que est vraie, mais que l'implication au total est vraie, un peu par défaut si à la fois l'hypothèse et la conclusion sont fausses.  Pour reprendre la proposition « S'il pleut, alors le gazon est mouillé », on considère les trois cas de figure suivant:  Il pleut et le gazon est mouillé.  Il ne pleut pas, mais le gazon est mouillé.  Il pleut, mais le gazon n'est pas mouillé.  Dans les deux premier cas, la conclusion est vraie. L'implication est alors vérifié. Il n'est pas important de savoir ce qui a causé le gazon à être mouillé. Dans le troisième cas de figure, l'implication est fausse, car elle stipule que la pluie aurait du mouiller le gazon, mais cela ne s'est pas produit. Dans le cas où il ne pleut pas et que le gazon n'est pas mouillé, l'implication serait vraie par défaut.  À partir d'une implication, on peut définir deux autres propositions reliées. Il est important de les distinguer.   La réciproque et la contraposée d'une implication   Soit des propositions. La proposition est appelée la réciproque de et la proposition est appelée la contraposée.    Ci-dessous on retrouve les tables de vérité de l'implication , sa réciproque et sa contraposée.   Table de vérité de l'implication , la réciproque et la contraposée                           V  V  F  F  V  V  V    V  F  F  V  F  V  F    F  V  V  F  V  F  V    F  F  V  V  V  V  V     En particulier, on remarque que l'implication et la contraposée ont exactement les mêmes valeurs de vérités en même temps. On dit de deux propositions qui possèdent cette propriété qu'elles sont équivalentes. On revient sur ce concept à la section .  La réciproque par contre n'est pas nécessairement vraie quand l'implication l'est. On peut toutefois imposer cette condition en créant la double implication.   La double implication  Soit et des propositions. On apelle si et seulement si , et on note , la proposition . On l'appelle aussi la biconditionnelle.  On dit aussi est nécessaire et suffisant pour .        Les éléments importants de cette section sont:  La définition d'une proposition .  La négation d'une proposition et les connecteurs conjonction et disjonction .  La notion d'implication et les formes si alors , seulement si , nécessaire et suffisant .   La notion de réciproque et de contraposée .  La construction d'une table de vérité et les tables de vérité de la conjonction, disjonction et implication.  La double implication et les formes si et seulement si et nécessaire et suffisant .       Ces questions sont à faire avant de venir en classe et à remettre au début du cours.   Parmi les énoncés suivants, lesquels sont des propositions? Justifier brièvement. Il est 8 heures. Il est 8 heures? si ou Le café doit être changé toutes les vingt minutes. J'ai un chien ou un chat. Il roulait à plus de km\/h et a brulé un feu rouge. Cette phrase est fausse.  Parmi les propositions précédentes, identifier celles qui sont moléculaires et décortiquer les en propositions atomiques.  On suppose qu'il est connu que l'auteur a un frère, mais il est incertain s'il a une soeur. Déterminer si les propositions suivantes sont vraies, fausses ou s'il manque d'information pour le savoir. L'auteur a un frère ou l'auteur a une soeur. L'auteur a un frère et l'auteur a une soeur. L'auteur a une soeur ou l'auteur n'a pas de soeur. Si l'auteur a une soeur, alors il a un frère. Si l'auteur a un frère, alors il a une soeur. Si l'auteur n'a pas de frère, alors il a une soeur.  Tout comme pour la théorie des ensembles, on peut définir le ou exclusif pour des propositions logiques. Noté , cette proposition est vrai lorsqu'exactement une des propositions est vraie.  Donner la table de vérité du ou exclusif .   Donner la table de vérité de la double implication.  Chaque phrase ci-dessous peut-être réécrite sous la forme d'une implication. Donner l'hypothèse et la conclusion de chacune de ces implications. Tous les québécois aiment le Canadien de Montréal. Le record sera battu si les conditions sont favorables. Le record sera battu seulement si les conditions sont favorables. Pour avoir un permis de conduire, il est nécessaire d'avoir au moins ans. Pour pouvoir acheter de l'alcool, il suffit d'avoir 18 ans.  Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.      Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Construire la table de vérité pour .    Table de vérité de                        V  V  F  V  V  V    V  F  V  V  V  V    F  V  F  V  F  F    F  F  V  F  V  F       Dans chacune des propositions suivantes, est-il plus probable que le « ou » soit inclusif ou exclusif? Justifier Je vais prendre du riz ou des frites avec mon poulet. Exclusif (on suppose qu'une personne ne peut pas avoir deux accompagnements avec son poulet). Pour s'inscrire à ce cours, il faut avoir réussi deux cours de mathématiques ou trois cours de physique. Inclusif. Si quelqu'un a réussi deux cours de mathématiques et trois cours de physique, il pourra encore s'inscrire à ce cours. Le Canadien a gagné ou perdu hier. Exclusif. On ne peut pas gagner et perdre en même temps!  On considère les propositions  J'ai passé le cours de mathématiques discrètes.  J'ai réussi mon examen final avec .  Je n'ai pas fait tous les devoirs recommandés par mon professeur.   Écrire les propositions suivantes en langage courant.    J'ai passé mon cours de mathématiques discrètes et j'ai réussi mon examen final avec . Je n'ai pas passé le cours de mathématiques discrètes et je n'ai pas fais tous les devoirs recommandés par mon professeur. Puisque j'ai réussi mon examen final avec , j'ai passé mon cours de mathématiques discrètes. Si je n'ai pas passé le cours de mathématiques discrètes, alors je n'ai pas réussi mon examen final avec ou je n'ai pas fait tous les devoirs recommandés par mon professeur. J'ai passé le cours de mathématiques discrètes en obtenant à mon examen final si et seulement si j'ai fait tous les devoirs recommandés par mon professeur.  Écrire les phrases suivantes en proposition logique n'utilisant que des variables et des connecteurs de la section. Lorsqu'un « ou » devrait être exclusif, utiliser .  On pose:  J'irai à l'épicerie.  J'irai chercher les enfants.  Tu m'entend chanter.  Je chante.  Je prend ma douche.  C'est nuageux.  Il pleut.  Je suis seul dans ma voiture.  Il fait chaud.  Vous êtes sage.  On ira à la plage.  Vous achetez cette voiture.  Je vous propose $ au comptant.  Je vous offre un rabais de sur le financement.  J'irai à l'épicerie et chercher les enfants. Si tu m'entends chanter, c'est que je suis sous la douche. Quand je prends une douche, je chante C'est nuageux, mais il n'y a pas de pluie. Je chante sous la douche ou seul dans ma voiture. S'il fait chaud et que vous êtes sage, on ira à la plage. Si vous achetez cette voiture, je vous propose $ de rabais au comptant ou un rabais de sur le financement.   Construire la table de vérité des propositions suivantes.      Table de vérité de                     V  V  V  V  V    V  F  V  F  F    F  V  V  F  F    F  F  F  F  V          Table de vérité de                        V  V  V  F  V  F    V  V  F  V  V  V    V  F  V  F  F  V    V  F  F  V  F  V    F  V  V  F  F  V    F  V  F  V  F  V    F  F  V  F  F  V    F  F  F  V  F  V          Table de vérité de                        V  V  V  F  V  F    V  V  F  V  V  V    V  F  V  F  V  F    V  F  F  V  V  V    F  V  V  F  V  F    F  V  F  V  V  V    F  F  V  F  F  V    F  F  F  V  F  V         Table de vérité de                           V  V  V  F  V  F  V    V  V  F  F  V  V  V    V  F  V  F  F  F  F    V  F  F  F  F  V  V    F  V  V  V  F  V  V    F  V  F  V  F  F  F    F  F  V  V  V  V  V    F  F  F  V  V  F  V       Dans cet exercice, on réfléchit à la négation de la disjonction, soit . Plus particulièrement, on veut trouver une autre formulation. Quelle est la table de vérité de la négation de la disjonction?    Table de vérité de                  V  V  V  F    V  F  V  F    F  V  V  F    F  F  F  V      En regardant l'unique ligne qui a pour valeur vrai , donner une formulation pour . Une autre formulation serait  Donner la négation de Je n'ai pas fait tous les exercices ou j'ai passé le cours sous la forme trouvée ci-dessus. J'ai fait tous les exercices et je n'ai pas passé le cours.  Dans cet exercice, on réfléchit à la négation de l'implication, soit . Plus particulièrement, on veut trouver une autre formulation. Quelle est la table de vérité de la négation de l'implication?    Table de vérité de                  V  V  V  F    V  F  F  V    F  V  V  F    F  F  V  F      En regardant l'unique ligne qui a pour valeur vrai , donner une formulation pour qui n'utilise pas l'implication. Une autre formulation serait . Donner la négation de Si je fais tous les exercices, alors je vais passer le cours sous la forme trouvée ci-dessus. J'ai fait tous les exercices, et je n'ai pas passé le cours.  Pour les phrases suivantes, énoncer en langage courant l'implication, la négation, la réciproque et la contraposée. Si je fais mes exercices, je vais passer le cours.    Implication: Si je fais mes exercices, alors je vais passer le cours.    Négation: J'ai fais mes exercices, mais je ne vais pas passer le cours.    Réciproque: Si je passe le cours, alors j'ai fait mes exercices.    Contraposée: Si je ne passe pas le cours, alors je n'ai pas fait mes exercices.    Quand je travaille de nuit, je dors jusqu'à 14:00.    Implication: Si je travaille de nuit, alors je dors jusqu'à 14:00.    Négation: Je travaille de nuit, mais je ne dort pas jusqu'à 14:00.    Réciproque: Si je dors jusqu'à 14:00, alors je travaille de nuit.    Contraposée: Si je ne dors pas jusqu'à 14:00, alors je ne travaille pas de nuit.    Pour être riche, il suffit de gagner à la loterie    Implication: Si je gagne à la loterie, alors je serai riche.    Négation: J'ai gagné à la loterie, mais je ne suis pas riche.    Réciproque: Si je suis riche, alors j'ai gagné à la loterie.    Contraposée: Si je ne suis pas riche, alors je n'ai pas gagné à la loterie.    Pour être riche, il est nécessaire de gagner à la loterie.    Implication: Si je suis riche, alors j'ai gagné à la loterie.    Négation: Je suis riche, mais je n'ai pas gagné à la loterie.    Réciproque: Si je gagne à la loterie, alors je serai riche.    Contraposée: Si je n'ai pas gagné à la loterie, alors je ne suis pas riche.    Le gazon est mouillé chaque fois qu'il pleut.    Implication: S'il pleut, alors le gazon est mouillé.    Négation: Il pleut, mais le gazon n'est pas mouillé.    Réciproque: Si le gazon est mouillé, alors il a plu.    Contraposée: Si le gazon n'est pas mouillé, alors il n'a pas plu.       Exercices supplémentaires   Il est possible de réécrire la définition d'un ensemble à partir de propositions et de connecteurs logiques. Par exemple, l'union de deux ensembles peut s'écrire .  Écrire les ensembles suivants en utilisant les symboles logiques. , sans utiliser le symbole logique .  Dans cet exercice, on réfléchit à la négation de la conjonction, soit . Plus particulièrement, on veut trouver une autre formulation. Quelle est la table de vérité de la négation de la conjonction? En regardant les lignes qui ont pour valeur vrai , donner une formulation pour . Donner la négation de J'ai fait tous les exercices et j'ai passé le cours sous la forme trouvée ci-dessus.  Dans la section , on a donné deux moyens pour démontrer l'égalité de deux ensembles, soit avec une table d'appartenance ou avec un argument de double inclusion. On démontre ci-dessous la deuxième loi de De Morgan à l'aide d'une troisième méthode, utilisant la logique.  On veut montrer que . Par définition, on a . D'un point de vue de la logique, le complément représente la négation. On a alors   Démontrer la première loi de De Morgan avec cette méthode.     "
},
{
  "id": "def-proposition",
  "level": "2",
  "url": "sec-logprop.html#def-proposition",
  "type": "Définition",
  "number": "2.1.1",
  "title": "Proposition mathématique.",
  "body": " Proposition mathématique   Une proposition est un énoncé, une phrase déclarative qui est soit vraie, soit fausse.   "
},
{
  "id": "def-negation",
  "level": "2",
  "url": "sec-logprop.html#def-negation",
  "type": "Définition",
  "number": "2.1.2",
  "title": "La négation d’une proposition.",
  "body": " La négation d'une proposition  Soit une proposition quelconque. On apelle la négation de , notée , la proposition « il n'est pas vrai que ». C'est une proposition qui a toujours comme valeur de vérité le contraire de .  On note parfois aussi la négation comme étant ou encore . Cette dernière option est celle qui est utilisée dans beaucoup de programme informatique.  Selon le contexte, on reformulera la proposition pour que la formulation soit plus naturelle que « il n'est pas vrai que ».  "
},
{
  "id": "def-conjonction",
  "level": "2",
  "url": "sec-logprop.html#def-conjonction",
  "type": "Définition",
  "number": "2.1.3",
  "title": "La conjonction.",
  "body": " La conjonction  Soit deux propositions. On appelle et la conjonction de , notée , la proposition qui est vraie lorsque et sont vraies.  On note parfois aussi la conjonction entre et comme . C'est aussi la notation qui est utilisée par beaucoup de langages informatiques. Dans la partie textuelle de ces notes, on préfère l'utilisation du symbole , car il évoque un certain parallèle avec l'intersection de la théorie des ensembles. Le lien deviendra plus clair sous peu.   "
},
{
  "id": "def-disjonction",
  "level": "2",
  "url": "sec-logprop.html#def-disjonction",
  "type": "Définition",
  "number": "2.1.4",
  "title": "La disjonction.",
  "body": " La disjonction  Soit deux propositions. On appelle ou la disjonction de , notée , la proposition qui est vraie lorsque ou sont vraies, peut-être les deux.  On note parfois aussi la disjonction entre et comme , ou . Les deux premières notations alternatives sont celles qui sont utilisées par beaucoup de langages informatiques. Dans la partie textuelle de ces notes, on préfère l'utilisation du symbole , car il évoque un certain parallèle avec l'union de la théorie des ensembles. Ce lien deviendra aussi plus clair sous peu.  "
},
{
  "id": "sec-logprop-3-13",
  "level": "2",
  "url": "sec-logprop.html#sec-logprop-3-13",
  "type": "Remarque",
  "number": "2.1.5",
  "title": "Priorité des opérateurs.",
  "body": " Priorité des opérateurs  Les opérateurs de disjonctions et de conjonctions sont des opérateurs binaires. Ils s'appliquent sur deux opérandes. L'opérateur de négation quant à lui est un opérateur unaire, qui s'applique sur l'opérande qui le suit. Afin d'éviter une trop grande utilisation de parenthèses, on donne la priorité à l'opérateur unaire.  Ainsi, la proposition doit être vue comme . Si on veut la négation d'une conjonction ou d'une disjonction, on pourra utiliser les parenthèses comme dans la proposition . Dans la section , on verra comment réécrire cette négation.  "
},
{
  "id": "sec-logprop-4-4",
  "level": "2",
  "url": "sec-logprop.html#sec-logprop-4-4",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": " Trois des principales tables de vérité   Table de vérité de la négation            V  F    F  V     Table de vérité de la conjonction               V  V  V    V  F  F    F  V  F    F  F  F     Table de vérité de la disjonction               V  V  V    V  F  V    F  V  V    F  F  F      "
},
{
  "id": "ex-tautologie1",
  "level": "2",
  "url": "sec-logprop.html#ex-tautologie1",
  "type": "Exemple",
  "number": "2.1.7",
  "title": "Une table de vérité plus complexe.",
  "body": " Une table de vérité plus complexe  On considère la proposition et on cherche à déterminer sous quelle condition elle est vraie. On utilise une table de vérité.  Pour ce type de proposition, il convient de décomposer en plus petits morceaux et d'analyser chacun de ces morceaux afin de former le tout. La table de vérité   Table de vérité d'une proposition complexe                     V  V  V  F  V    V  F  F  V  V    F  V  F  V  V    F  F  F  V  V     Comme on peut le voir, la proposition finale est toujours vraie, indépendamment de la véracité des propositions individuelles .     "
},
{
  "id": "def-implication",
  "level": "2",
  "url": "sec-logprop.html#def-implication",
  "type": "Définition",
  "number": "2.1.9",
  "title": "L’implication logique.",
  "body": " L'implication logique  Soit et deux proposition. On appelle si , alors l'implication logique, notée . C'est une proposition qui est fausse lorsque est vraie et est fausse, mais vraie dans tous les autres cas.  La proposition est appelée l'hypothèse ou la prémisse et la proposition est appelée la conséquence ou la conclusion.  En plus de si alors , on dit parfois aussi implique , seulement si , est suffisant pour que soit vraie ou encore est nécessaire pour avoir .   "
},
{
  "id": "tab-implication",
  "level": "2",
  "url": "sec-logprop.html#tab-implication",
  "type": "Table",
  "number": "2.1.10",
  "title": "Table de vérité de l’implication",
  "body": " Table de vérité de l'implication               V  V  V    V  F  F    F  V  V    F  F  V    "
},
{
  "id": "def-reciproquecontraposee",
  "level": "2",
  "url": "sec-logprop.html#def-reciproquecontraposee",
  "type": "Définition",
  "number": "2.1.11",
  "title": "La réciproque et la contraposée d’une implication.",
  "body": " La réciproque et la contraposée d'une implication   Soit des propositions. La proposition est appelée la réciproque de et la proposition est appelée la contraposée.   "
},
{
  "id": "sec-logprop-5-11",
  "level": "2",
  "url": "sec-logprop.html#sec-logprop-5-11",
  "type": "Table",
  "number": "2.1.12",
  "title": "Table de vérité de l’implication <span class=\"process-math\">\\(p\\rightarrow q\\text{,}\\)<\/span> la réciproque et la contraposée",
  "body": " Table de vérité de l'implication , la réciproque et la contraposée                           V  V  F  F  V  V  V    V  F  F  V  F  V  F    F  V  V  F  V  F  V    F  F  V  V  V  V  V    "
},
{
  "id": "sec-logprop-5-14",
  "level": "2",
  "url": "sec-logprop.html#sec-logprop-5-14",
  "type": "Définition",
  "number": "2.1.13",
  "title": "La double implication.",
  "body": " La double implication  Soit et des propositions. On apelle si et seulement si , et on note , la proposition . On l'appelle aussi la biconditionnelle.  On dit aussi est nécessaire et suffisant pour .   "
},
{
  "id": "sec-logprop-7-2",
  "level": "2",
  "url": "sec-logprop.html#sec-logprop-7-2",
  "type": "Question de compréhension",
  "number": "2.1.4.1",
  "title": "",
  "body": "Parmi les énoncés suivants, lesquels sont des propositions? Justifier brièvement. Il est 8 heures. Il est 8 heures? si ou Le café doit être changé toutes les vingt minutes. J'ai un chien ou un chat. Il roulait à plus de km\/h et a brulé un feu rouge. Cette phrase est fausse. "
},
{
  "id": "sec-logprop-7-3",
  "level": "2",
  "url": "sec-logprop.html#sec-logprop-7-3",
  "type": "Question de compréhension",
  "number": "2.1.4.2",
  "title": "",
  "body": "Parmi les propositions précédentes, identifier celles qui sont moléculaires et décortiquer les en propositions atomiques. "
},
{
  "id": "sec-logprop-7-4",
  "level": "2",
  "url": "sec-logprop.html#sec-logprop-7-4",
  "type": "Question de compréhension",
  "number": "2.1.4.3",
  "title": "",
  "body": "On suppose qu'il est connu que l'auteur a un frère, mais il est incertain s'il a une soeur. Déterminer si les propositions suivantes sont vraies, fausses ou s'il manque d'information pour le savoir. L'auteur a un frère ou l'auteur a une soeur. L'auteur a un frère et l'auteur a une soeur. L'auteur a une soeur ou l'auteur n'a pas de soeur. Si l'auteur a une soeur, alors il a un frère. Si l'auteur a un frère, alors il a une soeur. Si l'auteur n'a pas de frère, alors il a une soeur. "
},
{
  "id": "exo-ouexclusiflogique",
  "level": "2",
  "url": "sec-logprop.html#exo-ouexclusiflogique",
  "type": "Question de compréhension",
  "number": "2.1.4.4",
  "title": "",
  "body": "Tout comme pour la théorie des ensembles, on peut définir le ou exclusif pour des propositions logiques. Noté , cette proposition est vrai lorsqu'exactement une des propositions est vraie.  Donner la table de vérité du ou exclusif .  "
},
{
  "id": "sec-logprop-7-6",
  "level": "2",
  "url": "sec-logprop.html#sec-logprop-7-6",
  "type": "Question de compréhension",
  "number": "2.1.4.5",
  "title": "",
  "body": "Donner la table de vérité de la double implication. "
},
{
  "id": "sec-logprop-7-7",
  "level": "2",
  "url": "sec-logprop.html#sec-logprop-7-7",
  "type": "Question de compréhension",
  "number": "2.1.4.6",
  "title": "",
  "body": "Chaque phrase ci-dessous peut-être réécrite sous la forme d'une implication. Donner l'hypothèse et la conclusion de chacune de ces implications. Tous les québécois aiment le Canadien de Montréal. Le record sera battu si les conditions sont favorables. Le record sera battu seulement si les conditions sont favorables. Pour avoir un permis de conduire, il est nécessaire d'avoir au moins ans. Pour pouvoir acheter de l'alcool, il suffit d'avoir 18 ans. "
},
{
  "id": "sec-logprop-7-8",
  "level": "2",
  "url": "sec-logprop.html#sec-logprop-7-8",
  "type": "Question de compréhension",
  "number": "2.1.4.7",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-logprop-2-3",
  "level": "2",
  "url": "sec-logprop.html#exo-logprop-2-3",
  "type": "Exercice",
  "number": "2.1.5.1",
  "title": "",
  "body": "Construire la table de vérité pour .    Table de vérité de                        V  V  F  V  V  V    V  F  V  V  V  V    F  V  F  V  F  F    F  F  V  F  V  F      "
},
{
  "id": "exo-logprop-2-4",
  "level": "2",
  "url": "sec-logprop.html#exo-logprop-2-4",
  "type": "Exercice",
  "number": "2.1.5.2",
  "title": "",
  "body": "Dans chacune des propositions suivantes, est-il plus probable que le « ou » soit inclusif ou exclusif? Justifier Je vais prendre du riz ou des frites avec mon poulet. Exclusif (on suppose qu'une personne ne peut pas avoir deux accompagnements avec son poulet). Pour s'inscrire à ce cours, il faut avoir réussi deux cours de mathématiques ou trois cours de physique. Inclusif. Si quelqu'un a réussi deux cours de mathématiques et trois cours de physique, il pourra encore s'inscrire à ce cours. Le Canadien a gagné ou perdu hier. Exclusif. On ne peut pas gagner et perdre en même temps! "
},
{
  "id": "exo-logprop-2-5",
  "level": "2",
  "url": "sec-logprop.html#exo-logprop-2-5",
  "type": "Exercice",
  "number": "2.1.5.3",
  "title": "",
  "body": "On considère les propositions  J'ai passé le cours de mathématiques discrètes.  J'ai réussi mon examen final avec .  Je n'ai pas fait tous les devoirs recommandés par mon professeur.   Écrire les propositions suivantes en langage courant.    J'ai passé mon cours de mathématiques discrètes et j'ai réussi mon examen final avec . Je n'ai pas passé le cours de mathématiques discrètes et je n'ai pas fais tous les devoirs recommandés par mon professeur. Puisque j'ai réussi mon examen final avec , j'ai passé mon cours de mathématiques discrètes. Si je n'ai pas passé le cours de mathématiques discrètes, alors je n'ai pas réussi mon examen final avec ou je n'ai pas fait tous les devoirs recommandés par mon professeur. J'ai passé le cours de mathématiques discrètes en obtenant à mon examen final si et seulement si j'ai fait tous les devoirs recommandés par mon professeur. "
},
{
  "id": "exo-logprop-2-6",
  "level": "2",
  "url": "sec-logprop.html#exo-logprop-2-6",
  "type": "Exercice",
  "number": "2.1.5.4",
  "title": "",
  "body": "Écrire les phrases suivantes en proposition logique n'utilisant que des variables et des connecteurs de la section. Lorsqu'un « ou » devrait être exclusif, utiliser .  On pose:  J'irai à l'épicerie.  J'irai chercher les enfants.  Tu m'entend chanter.  Je chante.  Je prend ma douche.  C'est nuageux.  Il pleut.  Je suis seul dans ma voiture.  Il fait chaud.  Vous êtes sage.  On ira à la plage.  Vous achetez cette voiture.  Je vous propose $ au comptant.  Je vous offre un rabais de sur le financement.  J'irai à l'épicerie et chercher les enfants. Si tu m'entends chanter, c'est que je suis sous la douche. Quand je prends une douche, je chante C'est nuageux, mais il n'y a pas de pluie. Je chante sous la douche ou seul dans ma voiture. S'il fait chaud et que vous êtes sage, on ira à la plage. Si vous achetez cette voiture, je vous propose $ de rabais au comptant ou un rabais de sur le financement. "
},
{
  "id": "exo-logprop-2-7",
  "level": "2",
  "url": "sec-logprop.html#exo-logprop-2-7",
  "type": "Exercice",
  "number": "2.1.5.5",
  "title": "",
  "body": " Construire la table de vérité des propositions suivantes.      Table de vérité de                     V  V  V  V  V    V  F  V  F  F    F  V  V  F  F    F  F  F  F  V          Table de vérité de                        V  V  V  F  V  F    V  V  F  V  V  V    V  F  V  F  F  V    V  F  F  V  F  V    F  V  V  F  F  V    F  V  F  V  F  V    F  F  V  F  F  V    F  F  F  V  F  V          Table de vérité de                        V  V  V  F  V  F    V  V  F  V  V  V    V  F  V  F  V  F    V  F  F  V  V  V    F  V  V  F  V  F    F  V  F  V  V  V    F  F  V  F  F  V    F  F  F  V  F  V         Table de vérité de                           V  V  V  F  V  F  V    V  V  F  F  V  V  V    V  F  V  F  F  F  F    V  F  F  F  F  V  V    F  V  V  V  F  V  V    F  V  F  V  F  F  F    F  F  V  V  V  V  V    F  F  F  V  V  F  V      "
},
{
  "id": "exo-negdisj",
  "level": "2",
  "url": "sec-logprop.html#exo-negdisj",
  "type": "Exercice",
  "number": "2.1.5.6",
  "title": "",
  "body": "Dans cet exercice, on réfléchit à la négation de la disjonction, soit . Plus particulièrement, on veut trouver une autre formulation. Quelle est la table de vérité de la négation de la disjonction?    Table de vérité de                  V  V  V  F    V  F  V  F    F  V  V  F    F  F  F  V      En regardant l'unique ligne qui a pour valeur vrai , donner une formulation pour . Une autre formulation serait  Donner la négation de Je n'ai pas fait tous les exercices ou j'ai passé le cours sous la forme trouvée ci-dessus. J'ai fait tous les exercices et je n'ai pas passé le cours. "
},
{
  "id": "exo-negimplication",
  "level": "2",
  "url": "sec-logprop.html#exo-negimplication",
  "type": "Exercice",
  "number": "2.1.5.7",
  "title": "",
  "body": "Dans cet exercice, on réfléchit à la négation de l'implication, soit . Plus particulièrement, on veut trouver une autre formulation. Quelle est la table de vérité de la négation de l'implication?    Table de vérité de                  V  V  V  F    V  F  F  V    F  V  V  F    F  F  V  F      En regardant l'unique ligne qui a pour valeur vrai , donner une formulation pour qui n'utilise pas l'implication. Une autre formulation serait . Donner la négation de Si je fais tous les exercices, alors je vais passer le cours sous la forme trouvée ci-dessus. J'ai fait tous les exercices, et je n'ai pas passé le cours. "
},
{
  "id": "exo-logprop-2-10",
  "level": "2",
  "url": "sec-logprop.html#exo-logprop-2-10",
  "type": "Exercice",
  "number": "2.1.5.8",
  "title": "",
  "body": "Pour les phrases suivantes, énoncer en langage courant l'implication, la négation, la réciproque et la contraposée. Si je fais mes exercices, je vais passer le cours.    Implication: Si je fais mes exercices, alors je vais passer le cours.    Négation: J'ai fais mes exercices, mais je ne vais pas passer le cours.    Réciproque: Si je passe le cours, alors j'ai fait mes exercices.    Contraposée: Si je ne passe pas le cours, alors je n'ai pas fait mes exercices.    Quand je travaille de nuit, je dors jusqu'à 14:00.    Implication: Si je travaille de nuit, alors je dors jusqu'à 14:00.    Négation: Je travaille de nuit, mais je ne dort pas jusqu'à 14:00.    Réciproque: Si je dors jusqu'à 14:00, alors je travaille de nuit.    Contraposée: Si je ne dors pas jusqu'à 14:00, alors je ne travaille pas de nuit.    Pour être riche, il suffit de gagner à la loterie    Implication: Si je gagne à la loterie, alors je serai riche.    Négation: J'ai gagné à la loterie, mais je ne suis pas riche.    Réciproque: Si je suis riche, alors j'ai gagné à la loterie.    Contraposée: Si je ne suis pas riche, alors je n'ai pas gagné à la loterie.    Pour être riche, il est nécessaire de gagner à la loterie.    Implication: Si je suis riche, alors j'ai gagné à la loterie.    Négation: Je suis riche, mais je n'ai pas gagné à la loterie.    Réciproque: Si je gagne à la loterie, alors je serai riche.    Contraposée: Si je n'ai pas gagné à la loterie, alors je ne suis pas riche.    Le gazon est mouillé chaque fois qu'il pleut.    Implication: S'il pleut, alors le gazon est mouillé.    Négation: Il pleut, mais le gazon n'est pas mouillé.    Réciproque: Si le gazon est mouillé, alors il a plu.    Contraposée: Si le gazon n'est pas mouillé, alors il n'a pas plu.    "
},
{
  "id": "exo-logprop-3-2",
  "level": "2",
  "url": "sec-logprop.html#exo-logprop-3-2",
  "type": "Exercice",
  "number": "2.1.5.9",
  "title": "",
  "body": "Il est possible de réécrire la définition d'un ensemble à partir de propositions et de connecteurs logiques. Par exemple, l'union de deux ensembles peut s'écrire .  Écrire les ensembles suivants en utilisant les symboles logiques. , sans utiliser le symbole logique . "
},
{
  "id": "exo-logprop-3-3",
  "level": "2",
  "url": "sec-logprop.html#exo-logprop-3-3",
  "type": "Exercice",
  "number": "2.1.5.10",
  "title": "",
  "body": "Dans cet exercice, on réfléchit à la négation de la conjonction, soit . Plus particulièrement, on veut trouver une autre formulation. Quelle est la table de vérité de la négation de la conjonction? En regardant les lignes qui ont pour valeur vrai , donner une formulation pour . Donner la négation de J'ai fait tous les exercices et j'ai passé le cours sous la forme trouvée ci-dessus. "
},
{
  "id": "exo-egenslog",
  "level": "2",
  "url": "sec-logprop.html#exo-egenslog",
  "type": "Exercice",
  "number": "2.1.5.11",
  "title": "",
  "body": "Dans la section , on a donné deux moyens pour démontrer l'égalité de deux ensembles, soit avec une table d'appartenance ou avec un argument de double inclusion. On démontre ci-dessous la deuxième loi de De Morgan à l'aide d'une troisième méthode, utilisant la logique.  On veut montrer que . Par définition, on a . D'un point de vue de la logique, le complément représente la négation. On a alors   Démontrer la première loi de De Morgan avec cette méthode.  "
},
{
  "id": "sec-eqlogfnc",
  "level": "1",
  "url": "sec-eqlogfnc.html",
  "type": "Section",
  "number": "2.2",
  "title": "Équivalence logique et formes normales",
  "body": "  Équivalence logique et formes normales    On peut créer une infinité d'énoncés à l'aide des différents connecteurs logiques. Mais pour un nombre de variables propositionnelles donné, il n'existe qu'un nombre fini de combinaisons des valeurs de vérité de ces variables. Par exemple, avec deux variables , on peut former les combinaisons . Pour chacune de ces possibilités, la proposition moléculaire étudiée a deux possibilités, vraie ou fausse. C'est donc dire qu'il n'existe que propositions distinctes qui utilisent deux variables propositionnelles.  Il existe donc une forme d'équivalence entre certaines propositions. On cherchera à établir des outils qui permettront d'établir ces équivalences. La table de vérité en est un, mais on verra qu'en pratique, elle n'est pas toujours une bonne option. On continuera aussi à voir un certain parallèle entre la logique mathématique et la théorie des ensembles.  Dans cette section, on définit les notions de tautologie, de contradiction et d'équivalence logique. On établit différentes règles de simplification, dont les loi de De Morgan. Finalement, on définit la forme normale conjonctive.    Équivalence logique  Parmi toutes les propositions qui existent, peu importe les valeurs assignées aux variables propositionnelles, il y en a une qui est toujours vraie et une qui est toujours fausse. Le cas le plus simple d'une proposition toujours vraie est et la plus simple proposition toujours fausse est .   Tautologie et contradiction  Une proposition qui est toujours vraie peu importe la valeur de vérité des morceaux qui la composent est appelée une tautologie . Une proposition qui est toujours fausse quant à elle est appelée une contradiction .  Pour dénoter une tautologie et une contradiction, on écrira parfois respectivement et , pour vraie et fausse.    La proposition analysée à l'exemple était un exemple plus complexe de tautologie mettant en jeu deux variables propositionnelles.  La négation d'une tautologie est une contradiction et la négation d'une contradiction est une tautologie.  Des propositions sont équivalentes si elles sont vraies en même temps. On utilise la notion de tautologie pour énoncer cela.   Propositions équivalentes  Soit deux propositions. On dit que est équivalente à , et on écrit , si est une tautologie.   On utilise la définition pour montrer que la négation d'une disjonction est la conjonction des négations. Cette propriété est l'une des deux lois de De Morgan pour la logique, analogues à celles de la théorie des ensembles.   La négation d'une disjonction  Dans l'exercice , on a montré que la proposition était équivalente à . On montre que c'est le cas en exhibant la tautologie.   Voici la table de vérité de .  Équivalence entre négation de la disjonction et conjonction des négations                              V  V  F  F  V  F  F  V    V  F  F  V  V  F  F  V    F  V  V  F  V  F  F  V    F  F  V  V  F  V  V  V      On peut donc dire que .    On peut établir l'autre lois de De Morgan, ainsi que d'autres équivalences simples avec les opérateurs logiques. Elles sont données dans la liste ci-dessous. Noter la ressemblance avec les propriétés des opérations sur les ensembles .   Équivalences logiques de base   Les propriétés d'identité:      Les propriétés d'idempotence:      Les propriétés de domination:      Les propriétés de négation:         Les propriétés d'absorption:      Les propriétés de commutativité:      Les propriétés d'associativité:      Les propriétés de distributivité      Les lois de De Morgan:       En particuler, les loi de De Morgan sont utiles pour déterminer la négation d'expressions complexes, autant en symboles logiques qu'en expressions courantes.   Applications des lois de De Morgan   On cherche à écrire la négation des propositions suivantes en s'assurant que le symbole ne soit que directement collé à une variable et sans double négation.    Je vais prendre des sushis au saumon et au thon ou un bol poke avec un rouleau de printemps.      Pour des propositions complexes, il peut être utile de les décomposer en morceaux avec d'appliquer une règle ou une propriété sur chacun des morceaux et d'ensuite réécrire. Les solutions suivantes illustrent cela.  On pose et . La proposition à nier est équivalente à . Selon la loi de De Morgan pour la conjonction, on a .  On doit maintenant écrire les négations respectives de et . Pour , on a . Pour , .  Finalement en combinant le tout, on obtient .   D'une manière similaire, on pose et de sorte . Selon la loi de De Morgan pour la conjonction, on a .  On doit maintenant écrire les négations respectives de et . Pour , on a . Pour , .  En combinant le tout , on a .   Pour cette proposition, on commence par définir des variables. On pose   La proposition peut donc être écrite comme étant . Selon De Morgan , la négation de l'union devient . Toujours selon De Morgan , les intersections deviennent respectivement et . On obtient alors .  Individuellement, on peut traduire la négation des quatre propositions initiales par   Au final, la négation de la proposition serait Je ne prendrai pas de sushis au saumon ou au thon et je ne prendrai pas de bol poke ou de rouleau de printemps. ; ce à quoi l'auteur répondrait de considérer de changer de restaurant!  On a choisi de considérer le ou comme étant inclusif ici, d'une part parce que cela simplifie le problème en fonction de ce qui a été vu et d'autre part, il n'est pas déraisonnable qu'une personne commande à la fois des sushis et un bol poke ou un rouleau de printemps.      À l'exercice , on a montré comment on pouvait démontrer l'égalité de deux ensembles à l'aide de l'écriture logique. On regarde un autre exemple ci-dessous.   L'égalité de deux ensembles d'un point de vue logique   Soit deux ensembles. On veut montrer que en utilisant un argument de logique mathématique.    La différence de deux ensembles s'écrit d'un point de vu logique comme . On cherche le complément de cet ensemble, et donc la négation de la proposition . On a .      Formes normales  Jusqu'à maintenant, on a défini la notion de négation ainsi que les connecteurs de disjonction, conjonction et implication. Avec l'implication, on a aussi établi la double implication à l'aide d'une conjonction. On peut réécrire les implications simple et double en n'utilisant que les symboles et . On pourra aussi faire la même chose avec le ou exclusif (voir l'exercice ).   L'implication, sans flèche  On considère la proposition . On veut la réécrire en n'utilisant que des symboles parmi . Pour cela, on s'inspire de sa négation obtenue à l'exercice .   Selon l'exercice , il est possible d'écrire . Si on nie à nouveau cette équivalence, on devrait pouvoir réécrire l'implication sans flèche. Ainsi .  On peut donc dire que .    Toute proposition logique peut s'écrire en utilisant uniquement les symboles . Une proposition ainsi écrite sera dite sous forme normale. On distinguera deux formes particulières.  On exige dans un premier temps que toute négation affecte seulement une variable, quitte à utiliser les lois de De Morgan si nécessaire. Par la suite, la forme normale disjonctive est écrite comme un certain nombre de conjonctions ( ) connectées par des disjonctions ( ), alors que la forme normale conjonctive est écrite comme un certain nombre de disjonctions connectées par des conjonctions. Par exemple, est une forme normale disjonctive alors que est une forme normale conjonctive. Par contre, et n'en sont pas. La première possède une négation qui affecte plus d'une variable, alors que la seconde contient une parenthèse ayant à la fois une conjonction et une disjonction.  Pour obtenir des formes normales à partir des expressions ci-dessus, il faut utiliser les lois de De Morgan et de distributivité.   Transformer des propositions sous formes normales  On reprend les deux propositions et . On veut les écrire sous l'une des deux formes normales.   Il faut utiliser la loi de De Morgan afin d'enlever la négation devant la première parenthèse. Celle-ci devient . On peut ensuite réécrire la proposition comme étant , qui est une forme normale disjonctive.  Pour la seconde proposition, il faut distribuer la disjonction dans l'expression . En utilisant la distributivité , on obtient . En combinant avec le reste de la proposition initiale, on a , qui est une forme normale conjonctive.    Pour obtenir les formes normales, on peut utiliser les différentes propriétés des connecteurs logiques jusqu'à l'obtention de la forme souhaitée, comme à l'exemple , ou utiliser une table de vérité. La table de vérité est particulièrement utile pour trouver la forme normale disjonctive d'une proposition.  En effet, la forme normale disjonctive est un ensemble de sous-propositions connectées par des . À partir de la table de vérité d'une proposition, il suffit donc de connecter ensemble les lignes qui rendent la proposition vraie. Ceci est illustrée à l'exemple suivant.   Forme normale disjonctive à partir de la table de vérité   On reprend la proposition , dont une forme normale conjonctive a été trouvée à l'exemple . La table de vérité de cette proposition est donnée ci-dessous.   Table de vérité de                               V  V  V  F  V  F  V  F    V  V  F  V  V  V  V  V    V  F  V  F  F  F  F  F    V  F  F  V  F  F  F  F    F  V  V  F  F  F  F  F    F  V  F  V  F  V  V  V    F  F  V  F  F  F  F  F    F  F  F  V  F  F  F  F     On cherche une forme normale disjonctive,    En regardant la table de vérité, on cible les lignes qui rendent la propositions vraie. Il y a lorsque et sont vraies, de même que lorsque et . La proposition peut donc s'écrire de manière équivalente comme .    Pour obtenir la forme normale conjonctive à partir de la table de vérité, il faut travailler un peu plus fort. On utilise le fait que De Morgan transforme les en et vice-versa par le biais de la négation. En prenant la forme disjonctive de la négation d'une proposition et en la niant à son tour, on obtiendra la forme conjonctive de la proposition originale.   Forme normale conjonctive à partir de la table de vérité   On reprend la proposition , dont une forme normale disjonctive a été trouvée à l'exemple . La table de vérité de cette proposition est donnée ci-dessous.   Table de vérité de                               V  V  V  F  V  F  F  F    V  V  F  F  V  F  F  F    V  F  V  V  V  F  V  V    V  F  F  V  V  F  F  F    F  V  V  F  V  F  F  F    F  V  F  F  V  F  F  F    F  F  V  V  F  V  V  V    F  F  F  V  F  V  F  V     On cherche une forme normale conjonctive.    On considère la négation de la proposition initiale. Cette négation est vraie aux lignes de la table de vérité. On peut, à la manière de l'exemple dire que .  Pour retrouver la forme conjonctive de la proposition initiale, on nie l'équivalence ci-dessus. On a alors , où on a utilisé De Morgan pour transformer les négations.    En adoptant une convention, une équipe de programmeurs peut tirer avantage d'avoir des expressions sous forme normale. En particulier cela peut faciliter la mise à jour du code, car tout est uniforme.     Les points importants de cette section sont:  Les notions de tautologie et de contradiction ;  La notion de propositions équivalentes ;  Les différentes équivalences logiques de base et leurs liens avec les propriétés des opérations sur les ensembles;  La forme sans flèche de l'implication;  Les formes normales disjonctive et conjonctive et comment les obtenirs à partir de la table de vérité.       Ces questions sont à faire avant de venir en classe et à remettre au début du cours.   Utiliser des tables de vérité pour démontrer les propriétés d'absorption .  Montrer que est logiquement équivalent à .  Montrer que est une contradiction.  Déterminer si est équivalent à , à savoir si l'implication se distribue sur la disjonction.  Soit des variables propositionnelles. Donner une proposition moléculaire formée à partir de qui est vraie quand exactement deux variables sont vraies et fausse dans les autres cas. Penser à quoi ressemble la table de vérité de cette proposition afin de trouver une forme normale.  Transformer l'expression en l'une des formes normales en utilisant les propriétés (pas de table de vérité).  Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.      Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Déterminer si les expressions suivantes sont des tautologies, des contradictions ou des propositions quelconques. On montre que cette proposition est une contradiction. En effet, on a montrer, à l'exemple , que . Ainsi,  On veut montrer que cette proposition est une tautologie. On a: Ainsi, cette proposition est une tautologie.  À l'aide d'une table de vérité, on peut voir que cette proposition est quelconque (ni une tautologie, ni une contradiction).    Table de vérité de                        V  V  F  V  V  V    V  F  V  F  V  V    F  V  F  V  V  F    F  F  V  V  V  F      On remarque que cette proposition est équivalente à .  On veut montrer que cette proposition est une tautologie à l'aide des propriétés. On a Ainsi, cette proposition est toujours vraie, et donc est une tautologie.  On veut montrer que cette proposition est une tautologie à l'aide d'une table de vérité.    Table de vérité de                     V  V  V  V  V    V  F  F  F  V    F  V  V  F  V    F  F  V  F  V      Puisque cette proposition est toujours vraie, il s'agit bien d'une tautologie.   Déterminer si est équivalent à , à savoir si l'implication se distribue sur la conjonction. On a que   Démontrer les équivalences suivantes sans utiliser de table de vérité.      Montrer que . À l'aide de la table de vérité, on a   Table de vérité de , et                              V  V  F  F  F  V  V  V    V  F  F  V  V  F  F  F    F  V  V  F  V  F  F  F    F  F  V  V  F  V  V  V      Puisque les trois propositions ont toujours la même valeur de vérité, elles sont équivalentes.   Batman a capturé le Sphynx et lui demande d'avouer ses plus récents crimes. Le sphynx étant ce qu'il est, il propose au chevalier noir l'énigme suivante. Il lui dit: J'ai capturé la fille du commissaire Gordon ou posé la bombe dans la banque de Gotham. De plus si j'ai piraté les archives du palais de justice, alors j'ai donné un pot-de-vin à un procureur. Par contre je n'ai pas donné de pot-de-vin ni incendié l'hôpital.  Connaissant bien le Sphynx, Batman sait que tout ce qu'il vient d'affirmer est faux. Il réussit à déterminer les deux crimes commis par le Sphynx. Que sont-ils?  Sachant que l'énnoncé J'ai capturé la fille du commissaire Gordon ou posé la bombe dans la banque de Gotham. est fausse, on sait que le Sphynx n'a ni capturé la fille du commisaaire Gordon ni posé la bombe dans la banque de Gotham.  Sachant que l'énnoncé Si j'ai piraté les archives du palais de justice, alors j'ai donné un pot-de-vin à un procureur. est fausse, on sait que le Sphynx a piraté les archives du palais de justice, mais il n'a pas donné un pot-de-vin à un procureur.  Sachant que l'énnocné Je n'ai pas donné de pot-de-vin ni incendié l'hôpital est fausse. alors soit il a donné un pot-de-vin, soit il a incendié l'hôpital. On sait déjà qu'il n'a pas donné de pot-de-vin, on sait qu'il doit avoir incendié l'hôpital.   On pose    : J'ai capturé la fille du commissaire Gordon. ;     : J'ai posé la bombe dans la banque de Gotham. ;     : J'ai piraté les archives du palais de justice. ;     : J'ai donné un pot-de-vin à un procureur. ;     : J'ai incendié l'hôpital. .     On veut donc trouver les deux propositions qui sont vraies. Avec cette notation, on peut traduire chacune des phrase du Sphynx comme suit:    : J'ai capturé la fille du commissaire Gordon ou posé la bombe dans la banque de Gotham. ;     : Si j'ai piraté les archives du palais de justice, alors j'ai donné un pot-de-vin à un procureur. ;     : Je n'ai pas donné de pot-de-vin ni incendié l'hôpital. .     Puisque chacune de ces phrases sont fausses, on sait que la négation de chacune d'elle est fausse. Ainsi, les propositions suivantes sont vraies:    , et donc est fausse et est fausse.     , et donc est vraie alors que est fausse.     , et donc on sait que soit est vraie ou bien est vraie. Par la partie précédente, on sait que est fausse, et donc doit être vraie.   On en conclut que le Sphynx a piraté les archives du palais de justice et il a incendié l'hôpital.   Donner une forme normale disjonctive et une forme normale conjonctive de .   D'une part, la proposition est vraie uniquement lorsque est vraie et est fausse, ou est fausse et est vraie.  Ainsi .  D'autre part, la proposition est vraie uniquement lorsque et sont vraies, ou et sont fausses. Ainsi, . En prennant la négation de cette proposition, on obtien:    Transformer l'expression en forme normale disjonctive en utilisant une table de vérité.  Voici la table de vérité abrégée de l'expression . On laisse au lecteur le soin de vérifier les étapes intermédiaires.    Table de vérité de                   V  V  V  V    V  V  F  F    V  F  V  F    V  F  F  F    F  V  V  V    F  V  F  V    F  F  V  F    F  F  F  F     Ainsi, une forme normale disjonctive de la proposition est est   Remarque: Il est possible de simplifier cette expression et obtenir . On laisse en exercice au lecteur le soin d'utiliser les propriétés pour vérifier cette simplification.   Transformer l'expression en forme normale conjonctive en utilisant une table de vérité.  On obtien la table de vérité de à partir de celle de l'exercice :    Table de vérité de                   V  V  V  F    V  V  F  V    V  F  V  V    V  F  F  V    F  V  V  F    F  V  F  F    F  F  V  V    F  F  F  V     Ainsi, une (longue) forme normale disjonctive pour la négation de notre proposition est En prenant une deuxième fois la négation, trouve la forme normale conjonctive suivante:    Donner une forme normale disjonctive et une forme normale conjonctive des propositions suivantes.   Forme normale disjonctive:  Forme normale conjonctive:     Forme normale disjonctive:  Forme normale conjonctive:   Cette proposition est toujours vraie, et donc on peut écrire , qui est par défaut une forme normale conjonctive et disjonctive.   Forme normale disjonctive:  Forme normale conjonctive:    Donner une proposition sous forme normale disjonctive qui possède la table de vérité suivante.   Table de vérité de                   V  V  V  V    V  V  F  V    V  F  V  V    V  F  F  F    F  V  V  V    F  V  F  F    F  F  V  F    F  F  F  V         Table de vérité de                V  V  F    V  F  V    F  V  V    F  F  F         Exercices supplémentaires  Utiliser les autres équivalences de la logique pour démontrer les propriétés d'absorption .      Utiliser les lois de De Morgan pour donner la négation des propositions suivantes. Alex est en sciences de la nature et Omar est en sciences informatiques et mathématiques. L'autobus est en retard ou ma montre est en avance. Une année est bissextile si elle est divisible par mais pas par , ou si elle est divisible par . J'ai trois enfants et un chien, ou j'ai un chat ou une fille.  Donner une proposition sous forme normale disjonctive qui possède la table de vérité suivante.  Table de vérité de                V  V  V    V  F  F    F  V  V    F  F  V      Table de vérité de                   V  V  V  V    V  V  F  F    V  F  V  V    V  F  F  F    F  V  V  F    F  V  F  F    F  F  V  V    F  F  F  F     La barre de Sheffer  On a vu qu'on pouvait réduire le nombre d'opérateurs nécessaires pour décrire des propositions à trois, en utilisant la conjonction, la disjonction et la négation. Pour cela, on a pu réécrire les implications simple et double et le ou exclusif avec ces trois opérateurs. Il existe un opérateur particulier qui possède la propriété que tous les autres opérateurs peuvent s'écrire uniquement avec cet opérateur. On l'appelle la barre de Sheffer, définie comme suit:  Table de vérité de la barre de Sheffer               V  V  F    V  F  V    F  V  V    F  F  V     En utilisant des tables de vérité, montrer que .  On appelle souvent la barre de Sheffer le NAND en informatique, car c'est la négation (N) du et (AND).  Montrer que . Montrer que . Montrer que . Montrer que .  Démontrer à nouveau les équivalences de l'exercice en utilisant la définition de la barre de Sheffer et les propriétés des opérateurs logiques.    "
},
{
  "id": "def-tautologiecontradiction",
  "level": "2",
  "url": "sec-eqlogfnc.html#def-tautologiecontradiction",
  "type": "Définition",
  "number": "2.2.1",
  "title": "Tautologie et contradiction.",
  "body": " Tautologie et contradiction  Une proposition qui est toujours vraie peu importe la valeur de vérité des morceaux qui la composent est appelée une tautologie . Une proposition qui est toujours fausse quant à elle est appelée une contradiction .  Pour dénoter une tautologie et une contradiction, on écrira parfois respectivement et , pour vraie et fausse.   "
},
{
  "id": "def-propequivalentes",
  "level": "2",
  "url": "sec-eqlogfnc.html#def-propequivalentes",
  "type": "Définition",
  "number": "2.2.2",
  "title": "Propositions équivalentes.",
  "body": " Propositions équivalentes  Soit deux propositions. On dit que est équivalente à , et on écrit , si est une tautologie.  "
},
{
  "id": "sec-eqlogfnc-3-9",
  "level": "2",
  "url": "sec-eqlogfnc.html#sec-eqlogfnc-3-9",
  "type": "Exemple",
  "number": "2.2.3",
  "title": "La négation d’une disjonction.",
  "body": " La négation d'une disjonction  Dans l'exercice , on a montré que la proposition était équivalente à . On montre que c'est le cas en exhibant la tautologie.   Voici la table de vérité de .  Équivalence entre négation de la disjonction et conjonction des négations                              V  V  F  F  V  F  F  V    V  F  F  V  V  F  F  V    F  V  V  F  V  F  F  V    F  F  V  V  F  V  V  V      On peut donc dire que .   "
},
{
  "id": "li-oplogprop",
  "level": "2",
  "url": "sec-eqlogfnc.html#li-oplogprop",
  "type": "Liste",
  "number": "2.2.5",
  "title": "Équivalences logiques de base",
  "body": " Équivalences logiques de base   Les propriétés d'identité:      Les propriétés d'idempotence:      Les propriétés de domination:      Les propriétés de négation:         Les propriétés d'absorption:      Les propriétés de commutativité:      Les propriétés d'associativité:      Les propriétés de distributivité      Les lois de De Morgan:      "
},
{
  "id": "sec-eqlogfnc-3-13",
  "level": "2",
  "url": "sec-eqlogfnc.html#sec-eqlogfnc-3-13",
  "type": "Exemple",
  "number": "2.2.6",
  "title": "Applications des lois de De Morgan.",
  "body": " Applications des lois de De Morgan   On cherche à écrire la négation des propositions suivantes en s'assurant que le symbole ne soit que directement collé à une variable et sans double négation.    Je vais prendre des sushis au saumon et au thon ou un bol poke avec un rouleau de printemps.      Pour des propositions complexes, il peut être utile de les décomposer en morceaux avec d'appliquer une règle ou une propriété sur chacun des morceaux et d'ensuite réécrire. Les solutions suivantes illustrent cela.  On pose et . La proposition à nier est équivalente à . Selon la loi de De Morgan pour la conjonction, on a .  On doit maintenant écrire les négations respectives de et . Pour , on a . Pour , .  Finalement en combinant le tout, on obtient .   D'une manière similaire, on pose et de sorte . Selon la loi de De Morgan pour la conjonction, on a .  On doit maintenant écrire les négations respectives de et . Pour , on a . Pour , .  En combinant le tout , on a .   Pour cette proposition, on commence par définir des variables. On pose   La proposition peut donc être écrite comme étant . Selon De Morgan , la négation de l'union devient . Toujours selon De Morgan , les intersections deviennent respectivement et . On obtient alors .  Individuellement, on peut traduire la négation des quatre propositions initiales par   Au final, la négation de la proposition serait Je ne prendrai pas de sushis au saumon ou au thon et je ne prendrai pas de bol poke ou de rouleau de printemps. ; ce à quoi l'auteur répondrait de considérer de changer de restaurant!  On a choisi de considérer le ou comme étant inclusif ici, d'une part parce que cela simplifie le problème en fonction de ce qui a été vu et d'autre part, il n'est pas déraisonnable qu'une personne commande à la fois des sushis et un bol poke ou un rouleau de printemps.     "
},
{
  "id": "sec-eqlogfnc-3-15",
  "level": "2",
  "url": "sec-eqlogfnc.html#sec-eqlogfnc-3-15",
  "type": "Exemple",
  "number": "2.2.7",
  "title": "L’égalité de deux ensembles d’un point de vue logique.",
  "body": " L'égalité de deux ensembles d'un point de vue logique   Soit deux ensembles. On veut montrer que en utilisant un argument de logique mathématique.    La différence de deux ensembles s'écrit d'un point de vu logique comme . On cherche le complément de cet ensemble, et donc la négation de la proposition . On a .   "
},
{
  "id": "ex-implicationsansfleche",
  "level": "2",
  "url": "sec-eqlogfnc.html#ex-implicationsansfleche",
  "type": "Exemple",
  "number": "2.2.8",
  "title": "L’implication, sans flèche.",
  "body": " L'implication, sans flèche  On considère la proposition . On veut la réécrire en n'utilisant que des symboles parmi . Pour cela, on s'inspire de sa négation obtenue à l'exercice .   Selon l'exercice , il est possible d'écrire . Si on nie à nouveau cette équivalence, on devrait pouvoir réécrire l'implication sans flèche. Ainsi .  On peut donc dire que .   "
},
{
  "id": "ex-fnprop",
  "level": "2",
  "url": "sec-eqlogfnc.html#ex-fnprop",
  "type": "Exemple",
  "number": "2.2.9",
  "title": "Transformer des propositions sous formes normales.",
  "body": " Transformer des propositions sous formes normales  On reprend les deux propositions et . On veut les écrire sous l'une des deux formes normales.   Il faut utiliser la loi de De Morgan afin d'enlever la négation devant la première parenthèse. Celle-ci devient . On peut ensuite réécrire la proposition comme étant , qui est une forme normale disjonctive.  Pour la seconde proposition, il faut distribuer la disjonction dans l'expression . En utilisant la distributivité , on obtient . En combinant avec le reste de la proposition initiale, on a , qui est une forme normale conjonctive.   "
},
{
  "id": "ex-fnddetable",
  "level": "2",
  "url": "sec-eqlogfnc.html#ex-fnddetable",
  "type": "Exemple",
  "number": "2.2.10",
  "title": "Forme normale disjonctive à partir de la table de vérité.",
  "body": " Forme normale disjonctive à partir de la table de vérité   On reprend la proposition , dont une forme normale conjonctive a été trouvée à l'exemple . La table de vérité de cette proposition est donnée ci-dessous.   Table de vérité de                               V  V  V  F  V  F  V  F    V  V  F  V  V  V  V  V    V  F  V  F  F  F  F  F    V  F  F  V  F  F  F  F    F  V  V  F  F  F  F  F    F  V  F  V  F  V  V  V    F  F  V  F  F  F  F  F    F  F  F  V  F  F  F  F     On cherche une forme normale disjonctive,    En regardant la table de vérité, on cible les lignes qui rendent la propositions vraie. Il y a lorsque et sont vraies, de même que lorsque et . La proposition peut donc s'écrire de manière équivalente comme .   "
},
{
  "id": "sec-eqlogfnc-4-12",
  "level": "2",
  "url": "sec-eqlogfnc.html#sec-eqlogfnc-4-12",
  "type": "Exemple",
  "number": "2.2.12",
  "title": "Forme normale conjonctive à partir de la table de vérité.",
  "body": " Forme normale conjonctive à partir de la table de vérité   On reprend la proposition , dont une forme normale disjonctive a été trouvée à l'exemple . La table de vérité de cette proposition est donnée ci-dessous.   Table de vérité de                               V  V  V  F  V  F  F  F    V  V  F  F  V  F  F  F    V  F  V  V  V  F  V  V    V  F  F  V  V  F  F  F    F  V  V  F  V  F  F  F    F  V  F  F  V  F  F  F    F  F  V  V  F  V  V  V    F  F  F  V  F  V  F  V     On cherche une forme normale conjonctive.    On considère la négation de la proposition initiale. Cette négation est vraie aux lignes de la table de vérité. On peut, à la manière de l'exemple dire que .  Pour retrouver la forme conjonctive de la proposition initiale, on nie l'équivalence ci-dessus. On a alors , où on a utilisé De Morgan pour transformer les négations.   "
},
{
  "id": "rq-eqlogfnc-2",
  "level": "2",
  "url": "sec-eqlogfnc.html#rq-eqlogfnc-2",
  "type": "Question de compréhension",
  "number": "2.2.3.1",
  "title": "",
  "body": "Utiliser des tables de vérité pour démontrer les propriétés d'absorption . "
},
{
  "id": "rq-eqlogfnc-3",
  "level": "2",
  "url": "sec-eqlogfnc.html#rq-eqlogfnc-3",
  "type": "Question de compréhension",
  "number": "2.2.3.2",
  "title": "",
  "body": "Montrer que est logiquement équivalent à . "
},
{
  "id": "rq-eqlogfnc-4",
  "level": "2",
  "url": "sec-eqlogfnc.html#rq-eqlogfnc-4",
  "type": "Question de compréhension",
  "number": "2.2.3.3",
  "title": "",
  "body": "Montrer que est une contradiction. "
},
{
  "id": "rq-eqlogfnc-5",
  "level": "2",
  "url": "sec-eqlogfnc.html#rq-eqlogfnc-5",
  "type": "Question de compréhension",
  "number": "2.2.3.4",
  "title": "",
  "body": "Déterminer si est équivalent à , à savoir si l'implication se distribue sur la disjonction. "
},
{
  "id": "rq-eqlogfnc-6",
  "level": "2",
  "url": "sec-eqlogfnc.html#rq-eqlogfnc-6",
  "type": "Question de compréhension",
  "number": "2.2.3.5",
  "title": "",
  "body": "Soit des variables propositionnelles. Donner une proposition moléculaire formée à partir de qui est vraie quand exactement deux variables sont vraies et fausse dans les autres cas. Penser à quoi ressemble la table de vérité de cette proposition afin de trouver une forme normale. "
},
{
  "id": "rq-eqlogfnc-7",
  "level": "2",
  "url": "sec-eqlogfnc.html#rq-eqlogfnc-7",
  "type": "Question de compréhension",
  "number": "2.2.3.6",
  "title": "",
  "body": "Transformer l'expression en l'une des formes normales en utilisant les propriétés (pas de table de vérité). "
},
{
  "id": "rq-eqlogfnc-8",
  "level": "2",
  "url": "sec-eqlogfnc.html#rq-eqlogfnc-8",
  "type": "Question de compréhension",
  "number": "2.2.3.7",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-eqlogfnc-2-3",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-2-3",
  "type": "Exercice",
  "number": "2.2.4.1",
  "title": "",
  "body": "Déterminer si les expressions suivantes sont des tautologies, des contradictions ou des propositions quelconques. On montre que cette proposition est une contradiction. En effet, on a montrer, à l'exemple , que . Ainsi,  On veut montrer que cette proposition est une tautologie. On a: Ainsi, cette proposition est une tautologie.  À l'aide d'une table de vérité, on peut voir que cette proposition est quelconque (ni une tautologie, ni une contradiction).    Table de vérité de                        V  V  F  V  V  V    V  F  V  F  V  V    F  V  F  V  V  F    F  F  V  V  V  F      On remarque que cette proposition est équivalente à .  On veut montrer que cette proposition est une tautologie à l'aide des propriétés. On a Ainsi, cette proposition est toujours vraie, et donc est une tautologie.  On veut montrer que cette proposition est une tautologie à l'aide d'une table de vérité.    Table de vérité de                     V  V  V  V  V    V  F  F  F  V    F  V  V  F  V    F  F  V  F  V      Puisque cette proposition est toujours vraie, il s'agit bien d'une tautologie.  "
},
{
  "id": "exo-eqlogfnc-2-4",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-2-4",
  "type": "Exercice",
  "number": "2.2.4.2",
  "title": "",
  "body": "Déterminer si est équivalent à , à savoir si l'implication se distribue sur la conjonction. On a que  "
},
{
  "id": "exo-eqlogfnc-2-5",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-2-5",
  "type": "Exercice",
  "number": "2.2.4.3",
  "title": "",
  "body": "Démontrer les équivalences suivantes sans utiliser de table de vérité.     "
},
{
  "id": "exo-negationxor",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-negationxor",
  "type": "Exercice",
  "number": "2.2.4.4",
  "title": "",
  "body": "Montrer que . À l'aide de la table de vérité, on a   Table de vérité de , et                              V  V  F  F  F  V  V  V    V  F  F  V  V  F  F  F    F  V  V  F  V  F  F  F    F  F  V  V  F  V  V  V      Puisque les trois propositions ont toujours la même valeur de vérité, elles sont équivalentes.  "
},
{
  "id": "exo-eqlogfnc-2-7",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-2-7",
  "type": "Exercice",
  "number": "2.2.4.5",
  "title": "",
  "body": "Batman a capturé le Sphynx et lui demande d'avouer ses plus récents crimes. Le sphynx étant ce qu'il est, il propose au chevalier noir l'énigme suivante. Il lui dit: J'ai capturé la fille du commissaire Gordon ou posé la bombe dans la banque de Gotham. De plus si j'ai piraté les archives du palais de justice, alors j'ai donné un pot-de-vin à un procureur. Par contre je n'ai pas donné de pot-de-vin ni incendié l'hôpital.  Connaissant bien le Sphynx, Batman sait que tout ce qu'il vient d'affirmer est faux. Il réussit à déterminer les deux crimes commis par le Sphynx. Que sont-ils?  Sachant que l'énnoncé J'ai capturé la fille du commissaire Gordon ou posé la bombe dans la banque de Gotham. est fausse, on sait que le Sphynx n'a ni capturé la fille du commisaaire Gordon ni posé la bombe dans la banque de Gotham.  Sachant que l'énnoncé Si j'ai piraté les archives du palais de justice, alors j'ai donné un pot-de-vin à un procureur. est fausse, on sait que le Sphynx a piraté les archives du palais de justice, mais il n'a pas donné un pot-de-vin à un procureur.  Sachant que l'énnocné Je n'ai pas donné de pot-de-vin ni incendié l'hôpital est fausse. alors soit il a donné un pot-de-vin, soit il a incendié l'hôpital. On sait déjà qu'il n'a pas donné de pot-de-vin, on sait qu'il doit avoir incendié l'hôpital.   On pose    : J'ai capturé la fille du commissaire Gordon. ;     : J'ai posé la bombe dans la banque de Gotham. ;     : J'ai piraté les archives du palais de justice. ;     : J'ai donné un pot-de-vin à un procureur. ;     : J'ai incendié l'hôpital. .     On veut donc trouver les deux propositions qui sont vraies. Avec cette notation, on peut traduire chacune des phrase du Sphynx comme suit:    : J'ai capturé la fille du commissaire Gordon ou posé la bombe dans la banque de Gotham. ;     : Si j'ai piraté les archives du palais de justice, alors j'ai donné un pot-de-vin à un procureur. ;     : Je n'ai pas donné de pot-de-vin ni incendié l'hôpital. .     Puisque chacune de ces phrases sont fausses, on sait que la négation de chacune d'elle est fausse. Ainsi, les propositions suivantes sont vraies:    , et donc est fausse et est fausse.     , et donc est vraie alors que est fausse.     , et donc on sait que soit est vraie ou bien est vraie. Par la partie précédente, on sait que est fausse, et donc doit être vraie.   On en conclut que le Sphynx a piraté les archives du palais de justice et il a incendié l'hôpital.  "
},
{
  "id": "exo-ouexclusifnormal",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-ouexclusifnormal",
  "type": "Exercice",
  "number": "2.2.4.6",
  "title": "",
  "body": "Donner une forme normale disjonctive et une forme normale conjonctive de .   D'une part, la proposition est vraie uniquement lorsque est vraie et est fausse, ou est fausse et est vraie.  Ainsi .  D'autre part, la proposition est vraie uniquement lorsque et sont vraies, ou et sont fausses. Ainsi, . En prennant la négation de cette proposition, on obtien:   "
},
{
  "id": "exo-normDisj",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-normDisj",
  "type": "Exercice",
  "number": "2.2.4.7",
  "title": "",
  "body": "Transformer l'expression en forme normale disjonctive en utilisant une table de vérité.  Voici la table de vérité abrégée de l'expression . On laisse au lecteur le soin de vérifier les étapes intermédiaires.    Table de vérité de                   V  V  V  V    V  V  F  F    V  F  V  F    V  F  F  F    F  V  V  V    F  V  F  V    F  F  V  F    F  F  F  F     Ainsi, une forme normale disjonctive de la proposition est est   Remarque: Il est possible de simplifier cette expression et obtenir . On laisse en exercice au lecteur le soin d'utiliser les propriétés pour vérifier cette simplification.  "
},
{
  "id": "exo-eqlogfnc-2-10",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-2-10",
  "type": "Exercice",
  "number": "2.2.4.8",
  "title": "",
  "body": "Transformer l'expression en forme normale conjonctive en utilisant une table de vérité.  On obtien la table de vérité de à partir de celle de l'exercice :    Table de vérité de                   V  V  V  F    V  V  F  V    V  F  V  V    V  F  F  V    F  V  V  F    F  V  F  F    F  F  V  V    F  F  F  V     Ainsi, une (longue) forme normale disjonctive pour la négation de notre proposition est En prenant une deuxième fois la négation, trouve la forme normale conjonctive suivante:   "
},
{
  "id": "exo-eqlogfnc-2-11",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-2-11",
  "type": "Exercice",
  "number": "2.2.4.9",
  "title": "",
  "body": "Donner une forme normale disjonctive et une forme normale conjonctive des propositions suivantes.   Forme normale disjonctive:  Forme normale conjonctive:     Forme normale disjonctive:  Forme normale conjonctive:   Cette proposition est toujours vraie, et donc on peut écrire , qui est par défaut une forme normale conjonctive et disjonctive.   Forme normale disjonctive:  Forme normale conjonctive:   "
},
{
  "id": "exo-eqlogfnc-2-12",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-2-12",
  "type": "Exercice",
  "number": "2.2.4.10",
  "title": "",
  "body": "Donner une proposition sous forme normale disjonctive qui possède la table de vérité suivante.   Table de vérité de                   V  V  V  V    V  V  F  V    V  F  V  V    V  F  F  F    F  V  V  V    F  V  F  F    F  F  V  F    F  F  F  V         Table de vérité de                V  V  F    V  F  V    F  V  V    F  F  F      "
},
{
  "id": "exo-eqlogfnc-3-2",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-3-2",
  "type": "Exercice",
  "number": "2.2.4.11",
  "title": "",
  "body": "Utiliser les autres équivalences de la logique pour démontrer les propriétés d'absorption .     "
},
{
  "id": "exo-eqlogfnc-3-3",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-3-3",
  "type": "Exercice",
  "number": "2.2.4.12",
  "title": "",
  "body": "Utiliser les lois de De Morgan pour donner la négation des propositions suivantes. Alex est en sciences de la nature et Omar est en sciences informatiques et mathématiques. L'autobus est en retard ou ma montre est en avance. Une année est bissextile si elle est divisible par mais pas par , ou si elle est divisible par . J'ai trois enfants et un chien, ou j'ai un chat ou une fille. "
},
{
  "id": "exo-eqlogfnc-3-4",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-3-4",
  "type": "Exercice",
  "number": "2.2.4.13",
  "title": "",
  "body": "Donner une proposition sous forme normale disjonctive qui possède la table de vérité suivante.  Table de vérité de                V  V  V    V  F  F    F  V  V    F  F  V      Table de vérité de                   V  V  V  V    V  V  F  F    V  F  V  V    V  F  F  F    F  V  V  F    F  V  F  F    F  F  V  V    F  F  F  F    "
},
{
  "id": "exo-Sheffer",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-Sheffer",
  "type": "Exercice",
  "number": "2.2.4.14",
  "title": "La barre de Sheffer.",
  "body": "La barre de Sheffer  On a vu qu'on pouvait réduire le nombre d'opérateurs nécessaires pour décrire des propositions à trois, en utilisant la conjonction, la disjonction et la négation. Pour cela, on a pu réécrire les implications simple et double et le ou exclusif avec ces trois opérateurs. Il existe un opérateur particulier qui possède la propriété que tous les autres opérateurs peuvent s'écrire uniquement avec cet opérateur. On l'appelle la barre de Sheffer, définie comme suit:  Table de vérité de la barre de Sheffer               V  V  F    V  F  V    F  V  V    F  F  V     En utilisant des tables de vérité, montrer que .  On appelle souvent la barre de Sheffer le NAND en informatique, car c'est la négation (N) du et (AND).  Montrer que . Montrer que . Montrer que . Montrer que . "
},
{
  "id": "exo-eqlogfnc-3-6",
  "level": "2",
  "url": "sec-eqlogfnc.html#exo-eqlogfnc-3-6",
  "type": "Exercice",
  "number": "2.2.4.15",
  "title": "",
  "body": "Démontrer à nouveau les équivalences de l'exercice en utilisant la définition de la barre de Sheffer et les propriétés des opérateurs logiques. "
},
{
  "id": "sec-propquant",
  "level": "1",
  "url": "sec-propquant.html",
  "type": "Section",
  "number": "2.3",
  "title": "Les propositions quantifiées",
  "body": "  Les propositions quantifiées    On a vu qu'un énoncé comme x>0 n'est pas une proposition puisqu'il ne possède pas de valeur de vérité claire. Si , l'énoncé devient une proposition fausse, alors que si , il devient une proposition vraie. Bien que certains énoncés avec variables peuvent sembler vrais peu importe la valeur de la variable, on préfèrera ne pas les considérer comme des propositions. Un exemple d'un tel énoncé serait . Comme fonction réelle, il est vrai qu'un nombre au carré est toujours positif. Il existe toutefois d'autre contexte où cette équation ne serait plus nécessairement vraie. Pour en savoir plus, voir les nombres complexes .  Pour remédier à cela, on doit préciser ce que signifie les variables. On dira alors qu'on les quantifie.  Dans cette section, on définit le quantificateur existensiel et le quantificateur universel. On explique aussi comme obtenir la négation d'une proposition quantifiée.    Prédicats  Un énoncé qui contient une ou des variables est appelé un prédicat. Ce n'est pas une proposition, car la valeur de vérité dépendra de la valeurs des variables. On spécifie normalement un ensemble univers qui consiste aux diverses possibilités que peuvent prendre les variables. Pour des valeurs spécifiques des variables, le prédicat devient une proposition.   Des prédicats  On considère l'ensemble des nombres réels comme ensemble univers et les prédicats suivants:  ;  ;  .   On cherche à évaluer la valeur de vérité des propositions obtenues lorsque .   Lorsque , la proposition est , qui est fausse.  La proposition est , qui est vraie.  Puisque , la proposition est fausse.     L'ensemble de toutes les valeurs de qui rendent un prédicat vrai est appelé l'ensemble de vérité de . On le note .   Des ensembles de vérité  On considère le prédicat est une voyelle . On cherche les ensembles de vérité de ce prédicat lorsque l'ensemble univers est  , l'alphabet usuel;  , les lettres composant le prénom de l'auteur.     L'ensemble des lettres de l'alphabet usuel qui sont des voyelles et donc, qui rendent le prédicat vrai sont .  Parmi les lettres qui composent Jean-Sébastien , on retrouve les voyelles .       Quantificateurs existentiel et universel  On peut donc transformer un prédicat en proposition en assignant aux variables certaines valeurs. On peut aussi ajouter un quantificateur à un prédicat. Un quantificateur est un mot du genre certains, quelques, toutes, \\etc qui vient parler, d'une manière plus ou moins précise, de combien de valeurs de la variable on s'intéresse. Ainsi si on dit, pour certaines valeurs de on a ,on obtient une proposition. Dans ce cas-ci, elle est vraie, mais si on avait dit pour toutes les valeurs de , on a , on aurait obtenu une proposition fausse.  En mathématiques, il y a deux principaux quantificateurs qui sont utilisés. Le quantificateur existentiel et le quantificateur universel. Le premier s'intéresse à l'existence d'une valeur des variables qui rendent le prédicat vrai. Il n'est même pas nécessaire de la trouver cette valeur, et il pourrait y en avoir plus d'une. L'important, c'est qu'elle existe. Le quantificateur universel lui veut que le prédicat soit vrai pour toutes les valeurs de l'ensemble univers.   Quantificateur existentiel  Soit un prédicat et l'ensemble univers de la variable . Une proposition existentielle est un énoncé de la forme il existe tel que est vrai . D'un point de vue symbolique, on la dénote (le symbole se lit il existe ). La proposition est vraie s'il existe au moins une valeur dans qui rende vrai et est fausse si toutes les valeurs de font que est faux.  Au lieu de il existe , on dit parfois aussi pour un certain , on peut trouver , pour au moins , etc.   Avec une proposition contenant un quantificateur existentiel, on obtient la valeur de vérité vraie dès qu' (au moins) une valeur de rende le prédicat vrai. Pour que la proposition soit fausse, il faut toutefois vérifier que le prédicat est faux pour toutes les valeurs dans , ou du moins argumenter cela.  Des propositions avec quantificateur existentiel  On considère les propositions suivantes:   où .  Il y a un mammifère qui pond des oeufs.  Il existe un moment précis où l'auteur mesurait cm. (Présentement, il en fait environ .)    On cherche la valeur de vérité de ces propositions.    On peut essayer de trouver un exemple qui fonctionne. Rapidement, on voit que est une solution. La proposition est donc vraie.  Puisque Jean-Sébastien ne contient aucune des lettres u,v,w,x,y et z, la proposition est fausse.  Il y a en fait deux types de mammifères qui pondent des oeufs. L'ornithorynque est probablement l'exemple le plus connu, mais il y a aussi les échidnés.  Ceci constitue un bon exemple de l'existence d'une valeur, sans toutefois pouvoir la déterminer. Comme la croissance d'une personne est un processus continu et qu'un humain nait normalement entre 46 et 56 cm (le record étant de 71!), il existe bel et bien un moment où l'auteur mesurait 100 cm. Bien malin toutefois celui qui pourra dire quand cela s'est produit.    Alors que le quantificateur existentiel souhaite l'existence d'une valeur rendant le prédicat vrai, le quantificateur universel lui veut que le prédicat soit vrai pour toutes les valeurs de l'univers considéré.   Quantificateur universel   Soit un prédicat et l'ensemble univers de la variable . Une proposition universelle est un énoncé de la forme pour tout on a que est vrai . D'un point de vue symbolique, on la dénote (le symbole se lit pour tout ). La proposition est vraie si chaque valeur de dans rend vrai et est fausse dès qu'une valeur de font que est faux.  Au lieu de pour tout , on dit parfois aussi pour chaque , pour n'importe quel ,etc.    Avec une proposition contenant un quantificateur universel, il faut vérifier (ou argumenter pour) toutes les valeurs de pour que la proposition soit vraie. Pour qu'elle soit fausse, il suffit d'exhiber une valeur de pour laquelle est faux.  Des propositions avec quantificateur universel  On considère les propositions suivantes:   où .  Tous les oiseaux peuvent voler.  N'importe quel nombre naturel est pair ou impair.    On cherche la valeur de vérité de ces propositions.     Il suffit de tester pour certaines valeurs de , comme pour se rendre compte que la proposition est fausse.  Le prénom de l'auteur étant Jean-Sébastien, on vérifie aisément que a,b,s,t en font tous partie.  La proposition est fausse, les autruches étant un exemple d'oiseaux ne pouvant pas voler.  La proposition est vraie, la parité d'un nombre créant une dichotomie des nombres naturels. On aura les outils nécessaire pour formaliser ceci prochainement.     Une proposition universelle est souvent présentée à l'aide d'une implication. On retrouve donc fréquemment, pour des prédicats et , la forme . En langage courant, cela signifie que pour tout dans l'ensemble univers, avoir la propriété implique aussi avoir la propriété .  Par exemple, on pourrait dire , si alors . Ceci n'est pas très surprenant comme propriété. Cette proposition apporte toutefois une vision intéressante sur la table de vérité de l'implication, en particulier, pourquoi les ligne - et - sont vraies.  Si dans son ensemble la proposition , si alors est vraie, alors selon la définition du quantificateur universel, il faut que si alors soit vraie pour toutes les valeurs de . En particulier, il faut que  soit vraie (ce qui correspond à - )  et que soit vraie (ce qui correspond à - ).   Il existe bien entendu plusieurs manières équivalentes d'écrire des propositions. Par exemple, si est l'ensemble des polygones, , si est un carré alors est un rectangle pourrait être écrite de manière équivalente comme carré, est un rectangle.   En fait, on peut toujours traduire la proposition par , où est l'ensemble de vérité de prédicat .  D'un point de vue pratique, et dans le but d'alléger l'écriture, on omet parfois l'écriture des quantificateurs universels. Ainsi, la proposition doit être comprise comme la proposition quantifiée . On décide de garder l'écriture complète avec le quantificateur dans ce chapitre, mais il est possible qu'à l'occasion on le laisse tomber aussi au profit d'une écriture plus concise. Dans un souci de disctinction, on introduit la notation suivante:       Négation et combinaisons de quantificateurs  On s'intéresse maintenant à la négation d'une proposition quantifiée. On reprend la proposition il y a un mammifère qui pond des oeufs . Quelle est sa négation? À première vue, on pourrait penser que c'est il y a un mammifère qui ne pond pas d'oeufs , mais ce n'est pas tout à fait cela. Si on veut inverser la valeur de vérité de , et donc dire il est faux de dire qu'il y a un mammifère qui pond des oeufs ,il faudrait que tous les mammifères ne pondent pas d'oeufs.  On obtient donc la règle suivante: .  De même, pour nier la proposition tous les oiseaux peuvent voler , on cherche à exprimer il est faux de dire que tous les oiseaux peuvent voler . Intuitivement, on comprend donc que c'est équivalent à dire qu'il existe un oiseau qui ne peut pas voler. Ainsi, .  On répète ici qu'après analyse, cela ne devrait pas trop surprendre. S'il n'y a pas un objet avec une propriété, alors tous les objets n'ont pas la propriétés. De même, si ce n'est pas tous les objects qui ont une propriétés, alors il existe (au moins) un objet qui n'a pas la propriété. Le symbolisme en apparence complexe ne doit pas distraire du caractère simple de la chose.   Négation de propositions quantifiées   On considère les propositions suivantes:   où .  N'importe quel nombre naturel est pair ou impair.  Il existe un moment précis où l'auteur mesurait cm.    On cherche la négation de ces propositions.      Selon la règle établie, on a .    On peut nier cette proposition en écrivant , qui devient .    Cette proposition est équivalente à . Sa négation devient donc une proposition avec un quantificateur existentiel qui a la forme . On aurait aussi pu écrire plus simplement le prédicat comme est ni pair ni impair. Le et fait toutefois ressortir la loi de De Morgann dans la négation du ou .   Pour nier cette proposition, on pourrait dire qu'à tout moment de sa vie, l'auteur n'a jamais mesuré cm.     Il est également possible d'utiliser plus d'un quantificateur avec un prédicat. La forme symbolique mathématique prend alors toute son importance. Par exemple, on imagine la proposition suivante il existe un gardien pour tous les animaux du zoo . Qu'est-ce que cela signifie? Est-ce  il y a un seul gardien qui s'occupe de tous les animaux du zoo;  ou bien chaque animal du zoo a son propre gardien.   On réécrit ces deux possibilités en langage symbolique: signifie qu'il existe un unique gardien qui est le gardien de tous les animaux alors que signifie que chaque animal possède son gardien. On note toutefois que cela n'empêche pas que deux animaux aient le même gardien.  Pour cet exemple particulier, ce n'est pas trop grave si on interpète incorrectement la phrase il existe un gardien pour tous les animaux du zoo . Par contre en informatique, dans un contexte de programmation, il est primordial de bien interpréter ce qui est demandé afin que l'ordinateur puisse appliquer ce que l'utilisateur veut.  On imagine un prédicat en deux variables . La proposition peut s'interpréter de la manière suivante. On imagine quelqu'un qui choisit un . Il faut ensuite trouver un tel que est vrai. Le choix de risque de dépendre du qui est choisi.  Par contre dans la proposition , c'est le , s'il existe, qui dépendra des . On doit trouver un qui fonctionnera peu importe le que quelqu'un choisirait   Des quantificateurs juxtaposés  On considère la grille ci-dessous ainsi que les propositions suivantes:  Il existe un triangle tel que pour tout cercle , est à la droite de .  Il existe un cercle pour lequel il existe un triangle de la même couleur.  Pour tout triangle , il existe un carré tel que et sont de la même couleur.  Pour tout triangle , tous les carrés se retrouvent à une ligne inférieure à .    Une grille avec des figures   Une grille de taille cinq par cinq est affichée avec à l'intérieur des carrés, triangles et cercles de couleurs variées.     On cherche la valeur de vérité de ces propositions.   Pour cette proposition, il suffit de trouver un triangle pour lequel tout cercle, le triangle sera à la droite du cercle. En regardant la figure , on constate que les triangles et satisfont cette propriété. En effet, les trois cercles sont tous à la gauche de ces triangles. On peut donc dire que et sont à la droite de tous les cercles. Ainsi, la proposition est vraie.  Pour cette proposition, on cherche un cercle et un triangle de la même couleur. Aucun triangle n'est bleu, ce qui élimine les triangles . Par contre, le cercle et le triangle (ou ) sont rouges. La proposition est donc vraie.  Cette fois-ci, il n'est pas suffisant de trouver deux formes de la même couleur. Il faut s'assurer que pour chaque triangle, il existe un carré ayant la même couleur. On identifie trois triangles, soit et . Le triangle est vert. On vérifie sur la figure que le carré est aussi vert. Le triangle est rouge, tout comme le triangle . Dans les deux cas, le carré ou le carré sont aussi rouges. La propriété est donc vraie.  On doit vérifier la condition pour chaque triangle. Pour le triangle , il est vrai de dire que tous les carrés sont sur une ligne inférieure, comme on peut le voir sur la figure . Par contre il y a des carrés sur la même ligne que le triangle (les carrés ) et des carrés sur des lignes supérieures au triangle (toujours les carrés ). Pour ces raisons, la proposition est fausse.   Comment se comportent les propositions formées de plus d'un quantificateur lorsqu'on considère leur négation? À l'aide des règles établies plus haut et en procédant en étape, on peut arriver à trouver la négation d'une telle proposition. On donne deux exemples de propositions formées de deux quantificateurs. D'autres se trouvent dans les exercices.  Dans un premier temps, on considère la proposition . On pose la proposition . La proposition originale s'écrit donc comme . Selon la négation d'une proposition quantifiée par un quantificateur existentiel, on a . On peut ensuite calculer la négation de en utilisant la règle pour la négation d'une proposition quantifiée par un quantificateur universel. On obtient . Ainsi, .  On regarde maintenant la proposition . En utilisant un procédé similaire, on obtient .        Les éléments importants de cette section sont:  La notion de prédicat, à distinguer d'une proposition.  Le quantificateur existentiel et son symbole .  Le quantificateur universel et son symbole .  Les notations raccourcies et .  La négation d'une proposition quantifiée par un quantificateur existentiel est une proposition quantifiée par un quantificateur universel suivi de la négation du prédicat.  La négation d'une proposition quantifiée par un quantificateur universel est une proposition quantifiée par un quantificateur existentiel suivi de la négation du prédicat.  L'importance de l'ordre des quantificateurs lorsque plus d'un quantificateur de type différent sont présents.        Ces questions sont à faire avant de venir en classe et à remettre au début du cours.   Soit le prédicat . Déterminer si les propositions suivantes sont vraie, fausse ou indéterminée. ; ; ; ; ; ; ; ;  Dans une ferme, on retrouve les animaux suivants: un chien blanc et noir ainsi qu'un chien brun, treize vaches de couleur blanche et noire, seize moutons blancs, quatre chats noirs, trente-trois poules brunes.  On considère les éléments de notation suivants:  respectivement pour chien,vache,mouton,chat et poule.  respectivement pour possède la couleur blanc et noir, brun, blanc, noir, jaune et enfin gris, et plus généralement pour une allusion à la couleur quelconque.  respectivement pour est un mammifère ou un oiseau.  pour le nombre d'animaux est premier  l'ensemble des espèces animales de cette ferme.   La proposition peut être interprétée comme il existe un chat brun . Identifier les prédicats et transcrire en symbolique les propositions suivantes.  Il y a une animal jaune à cette ferme. Tous les animaux de la ferme sont des mammifères ou des oiseaux. Pour tout animal de la ferme, avoir du blanc signifie aussi avoir du noir. Le nombre d'animaux de la ferme d'une certaines espèces est un nombre premier. Aucun animal de la ferme n'est de couleur grise. Il existe deux animaux de la ferme qui sont même couleurs, mais qui ne sont pas des vaches.  Est-ce que ? Argumenter ou donner un exemple où l'équivalence n'est pas vraie.  Est-ce que ? Argumenter ou donner un exemple où l'équivalence n'est pas vraie.  Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.      Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Si représente la proposition Il existe un nombre tel que . , déterminer la valeur de vérité de ; ; ; ; , où ; Indéterminé , où . , où est .  Si représente la proposition . , déterminer la valeur de vérité de ;  ;  ;  ;   ;   .   Soit la proposition connait déjà un peu de programmation où est un étudiant quelconque de la classe.  Décrire en langue française les propositions suivantes:  Il y a au moins un étudiant de la classe qui connait déjà un peu de programmation. Tous les étudiants de la classe connaissent déjà un peu de programmation. Il y a au moins un étudiant de la classe qui ne connait pas déjà un peu de programmation. Aucun des étudiants de la classe ne connait déjà un peu de programmation. Aucun des étudiants de la classe ne connait déjà un peu de programmation. Il y a au moins un étudiant de la classe qui ne connait pas déjà un peu de programmation.  Soit la proposition est un mammifère et soit la proposition pond des oeufs , où est un animal quelconque.  Décrire en langue française les propositions suivantes:  Tous les animaux sont des mammifères ou pondents des oeufs. Il y a un mammifère qui pond des oeufs. Tous les animaux sont des mammifères et ils pondent des oeufs. Il y a un animal qui n'est pas un mammifère et qui pond des oeufs.  On considère le scénario suivant. Une urne contient deux billes blanches et une bille noire. La proposition est fausse. Si l'urne ne contient aucune bille, que peut-on dire de cette même proposition? Expliquer. Est-ce que la négation de cette proposition est vraie ou fausse? Si l'urne ne contient aucune bille, cette proposition est vraie. En effet, la négation de la proposition est Or, si l'urne est vide, cette proposition ne peut pas être vraie, et donc est fausse. Si la négation est fausse, alors l'énnoncé initiale doit être vraie.  Soit des nombres réels. Traduire les propositions suivantes en langue française et déterminer la valeur de vérité de chacune. Pour tout nombre réel , il existe un nombre réel tel que . Cette proposition est vraie. Pour chaque , il suffit de prendre, par exemple, . Il existe un nombre réel tel que, pour tout nombre réel , on a . Cette proposition est fausse. En effet, pour tout nombre réel on peut trouver un nombre réel pour lequel la proposition est fausse. Il suffit de poser, par exemple, . Pour tout nombre réel , et pour tout nombre réel , si est strictement positif, alors et sont tous les deux strictement positifs. Cette proposition en fausse, car le prédicat est faux lorsque . Pour toutes paires de nombres réels et , si et sont strictement positifs, alors est strictement positif. Cette proposition est vraie par les propriétés des nombres réels. Déterminer à nouveau la valeur de vérité des deux premières propositions précédentes si le domaine est maintenant l'intervalle . La proposition reste vraie. En effet, pour tout , on peut trouver un nombre réel tel que . Cependant, la proposition change de valeur et devient vraie. En effet, en prennant , le prédicat est vrai pour tout nombre réel .  Réécrire les propositions suivantes pour que les négations soient à l'intérieur des quantificateurs.  Réécrire les négations suivantes de sorte à ce que le symbole ne soit appliqué que sur les prédicats:             Exercices supplémentaires  Soit deux propositions .Est-ce que ?  Démontrer ou trouver une exemple. S'il existe un tel que et sont vraies, alors certainement qu'il existe un tel que est vraie et un (le même!) tel que est vraie. Est-ce qu'on peut affirmer l'inverse?  Soit deux propositions .Est-ce que ?  Démontrer ou trouver une exemple.  Soit deux propositions .Est-ce que ?  Démontrer ou trouver une exemple.  Soit deux propositions .Est-ce que ?  Démontrer ou trouver une exemple. Il faut penser à des propositions qui sont complémentaires.  Soit des figures quelconques. On définit les éléments de notation suivants:  Triangle( ),Cercle( ),Carré( ) représentent respectivement la proposition est un triangle, cercle ou carré.  Rouge( ),Vert( ),Bleu( ) représentent respectivement la proposition la figure est de couleur rouge,vert, bleu.  Gauche(f,g),Droite(f,g),Haut(f,g),Bas(f,g) représente respectivement la proposition est à gauche, à droite, en haut, en bas de .  MêmeCouleur( ),MêmeForme( ) représente respectivement les figures ont la même couleur,forme.  La figure interactive suivante permet d'afficher un certain nombre de formes géométriques de couleurs variées.   Une grille interactive de figures    Pour chaque proposition, décrire en mots, déterminer la valeur de vérité et écrire la négation sous une forme symbolique simplifiée. L'ensemble univers est toujours la grille et sera omis pour alléger l'écriture des propositions. Pour chaque proposition, décrire en symbole, déterminer la valeur de vérité et écrire la négation en langage courant. L'ensemble univers est toujours la grille et sera omis pour alléger l'écriture des propositions. Il existe une forme géométrique rouge à la droite de . La couleur d'un cercle n'est pas bleue ou il existe une carré en bas de . Il y a un triangle vert à droite d'un cercle bleu. Il existe une forme autre que qui est identique. Pour tout cercle, on peut trouver un carré de même couleur. Il existe une figure rouge telle que tous les carrés sont à sa gauche. Tous les cercles sont en haut des triangles. Il existe un triangle et il existe un carré tels que le carré est à droite ou en haut du triangle.     "
},
{
  "id": "sssec-predicats-3",
  "level": "2",
  "url": "sec-propquant.html#sssec-predicats-3",
  "type": "Exemple",
  "number": "2.3.1",
  "title": "Des prédicats.",
  "body": " Des prédicats  On considère l'ensemble des nombres réels comme ensemble univers et les prédicats suivants:  ;  ;  .   On cherche à évaluer la valeur de vérité des propositions obtenues lorsque .   Lorsque , la proposition est , qui est fausse.  La proposition est , qui est vraie.  Puisque , la proposition est fausse.    "
},
{
  "id": "sssec-predicats-5",
  "level": "2",
  "url": "sec-propquant.html#sssec-predicats-5",
  "type": "Exemple",
  "number": "2.3.2",
  "title": "Des ensembles de vérité.",
  "body": " Des ensembles de vérité  On considère le prédicat est une voyelle . On cherche les ensembles de vérité de ce prédicat lorsque l'ensemble univers est  , l'alphabet usuel;  , les lettres composant le prénom de l'auteur.     L'ensemble des lettres de l'alphabet usuel qui sont des voyelles et donc, qui rendent le prédicat vrai sont .  Parmi les lettres qui composent Jean-Sébastien , on retrouve les voyelles .    "
},
{
  "id": "def-existe",
  "level": "2",
  "url": "sec-propquant.html#def-existe",
  "type": "Définition",
  "number": "2.3.3",
  "title": "Quantificateur existentiel.",
  "body": " Quantificateur existentiel  Soit un prédicat et l'ensemble univers de la variable . Une proposition existentielle est un énoncé de la forme il existe tel que est vrai . D'un point de vue symbolique, on la dénote (le symbole se lit il existe ). La proposition est vraie s'il existe au moins une valeur dans qui rende vrai et est fausse si toutes les valeurs de font que est faux.  Au lieu de il existe , on dit parfois aussi pour un certain , on peut trouver , pour au moins , etc.  "
},
{
  "id": "sssec-quantificateurs-6",
  "level": "2",
  "url": "sec-propquant.html#sssec-quantificateurs-6",
  "type": "Exemple",
  "number": "2.3.4",
  "title": "Des propositions avec quantificateur existentiel.",
  "body": "Des propositions avec quantificateur existentiel  On considère les propositions suivantes:   où .  Il y a un mammifère qui pond des oeufs.  Il existe un moment précis où l'auteur mesurait cm. (Présentement, il en fait environ .)    On cherche la valeur de vérité de ces propositions.    On peut essayer de trouver un exemple qui fonctionne. Rapidement, on voit que est une solution. La proposition est donc vraie.  Puisque Jean-Sébastien ne contient aucune des lettres u,v,w,x,y et z, la proposition est fausse.  Il y a en fait deux types de mammifères qui pondent des oeufs. L'ornithorynque est probablement l'exemple le plus connu, mais il y a aussi les échidnés.  Ceci constitue un bon exemple de l'existence d'une valeur, sans toutefois pouvoir la déterminer. Comme la croissance d'une personne est un processus continu et qu'un humain nait normalement entre 46 et 56 cm (le record étant de 71!), il existe bel et bien un moment où l'auteur mesurait 100 cm. Bien malin toutefois celui qui pourra dire quand cela s'est produit.   "
},
{
  "id": "def-pourtout",
  "level": "2",
  "url": "sec-propquant.html#def-pourtout",
  "type": "Définition",
  "number": "2.3.5",
  "title": "Quantificateur universel.",
  "body": " Quantificateur universel   Soit un prédicat et l'ensemble univers de la variable . Une proposition universelle est un énoncé de la forme pour tout on a que est vrai . D'un point de vue symbolique, on la dénote (le symbole se lit pour tout ). La proposition est vraie si chaque valeur de dans rend vrai et est fausse dès qu'une valeur de font que est faux.  Au lieu de pour tout , on dit parfois aussi pour chaque , pour n'importe quel ,etc.   "
},
{
  "id": "sssec-quantificateurs-10",
  "level": "2",
  "url": "sec-propquant.html#sssec-quantificateurs-10",
  "type": "Exemple",
  "number": "2.3.6",
  "title": "Des propositions avec quantificateur universel.",
  "body": "Des propositions avec quantificateur universel  On considère les propositions suivantes:   où .  Tous les oiseaux peuvent voler.  N'importe quel nombre naturel est pair ou impair.    On cherche la valeur de vérité de ces propositions.     Il suffit de tester pour certaines valeurs de , comme pour se rendre compte que la proposition est fausse.  Le prénom de l'auteur étant Jean-Sébastien, on vérifie aisément que a,b,s,t en font tous partie.  La proposition est fausse, les autruches étant un exemple d'oiseaux ne pouvant pas voler.  La proposition est vraie, la parité d'un nombre créant une dichotomie des nombres naturels. On aura les outils nécessaire pour formaliser ceci prochainement.    "
},
{
  "id": "sec-propquant-5-6",
  "level": "2",
  "url": "sec-propquant.html#sec-propquant-5-6",
  "type": "Exemple",
  "number": "2.3.7",
  "title": "Négation de propositions quantifiées.",
  "body": " Négation de propositions quantifiées   On considère les propositions suivantes:   où .  N'importe quel nombre naturel est pair ou impair.  Il existe un moment précis où l'auteur mesurait cm.    On cherche la négation de ces propositions.      Selon la règle établie, on a .    On peut nier cette proposition en écrivant , qui devient .    Cette proposition est équivalente à . Sa négation devient donc une proposition avec un quantificateur existentiel qui a la forme . On aurait aussi pu écrire plus simplement le prédicat comme est ni pair ni impair. Le et fait toutefois ressortir la loi de De Morgann dans la négation du ou .   Pour nier cette proposition, on pourrait dire qu'à tout moment de sa vie, l'auteur n'a jamais mesuré cm.    "
},
{
  "id": "sec-propquant-5-12",
  "level": "2",
  "url": "sec-propquant.html#sec-propquant-5-12",
  "type": "Exemple",
  "number": "2.3.8",
  "title": "Des quantificateurs juxtaposés.",
  "body": " Des quantificateurs juxtaposés  On considère la grille ci-dessous ainsi que les propositions suivantes:  Il existe un triangle tel que pour tout cercle , est à la droite de .  Il existe un cercle pour lequel il existe un triangle de la même couleur.  Pour tout triangle , il existe un carré tel que et sont de la même couleur.  Pour tout triangle , tous les carrés se retrouvent à une ligne inférieure à .    Une grille avec des figures   Une grille de taille cinq par cinq est affichée avec à l'intérieur des carrés, triangles et cercles de couleurs variées.     On cherche la valeur de vérité de ces propositions.   Pour cette proposition, il suffit de trouver un triangle pour lequel tout cercle, le triangle sera à la droite du cercle. En regardant la figure , on constate que les triangles et satisfont cette propriété. En effet, les trois cercles sont tous à la gauche de ces triangles. On peut donc dire que et sont à la droite de tous les cercles. Ainsi, la proposition est vraie.  Pour cette proposition, on cherche un cercle et un triangle de la même couleur. Aucun triangle n'est bleu, ce qui élimine les triangles . Par contre, le cercle et le triangle (ou ) sont rouges. La proposition est donc vraie.  Cette fois-ci, il n'est pas suffisant de trouver deux formes de la même couleur. Il faut s'assurer que pour chaque triangle, il existe un carré ayant la même couleur. On identifie trois triangles, soit et . Le triangle est vert. On vérifie sur la figure que le carré est aussi vert. Le triangle est rouge, tout comme le triangle . Dans les deux cas, le carré ou le carré sont aussi rouges. La propriété est donc vraie.  On doit vérifier la condition pour chaque triangle. Pour le triangle , il est vrai de dire que tous les carrés sont sur une ligne inférieure, comme on peut le voir sur la figure . Par contre il y a des carrés sur la même ligne que le triangle (les carrés ) et des carrés sur des lignes supérieures au triangle (toujours les carrés ). Pour ces raisons, la proposition est fausse.  "
},
{
  "id": "rq-propquant-2",
  "level": "2",
  "url": "sec-propquant.html#rq-propquant-2",
  "type": "Question de compréhension",
  "number": "2.3.4.1",
  "title": "",
  "body": "Soit le prédicat . Déterminer si les propositions suivantes sont vraie, fausse ou indéterminée. ; ; ; ; ; ; ; ; "
},
{
  "id": "rq-propquant-3",
  "level": "2",
  "url": "sec-propquant.html#rq-propquant-3",
  "type": "Question de compréhension",
  "number": "2.3.4.2",
  "title": "",
  "body": "Dans une ferme, on retrouve les animaux suivants: un chien blanc et noir ainsi qu'un chien brun, treize vaches de couleur blanche et noire, seize moutons blancs, quatre chats noirs, trente-trois poules brunes.  On considère les éléments de notation suivants:  respectivement pour chien,vache,mouton,chat et poule.  respectivement pour possède la couleur blanc et noir, brun, blanc, noir, jaune et enfin gris, et plus généralement pour une allusion à la couleur quelconque.  respectivement pour est un mammifère ou un oiseau.  pour le nombre d'animaux est premier  l'ensemble des espèces animales de cette ferme.   La proposition peut être interprétée comme il existe un chat brun . Identifier les prédicats et transcrire en symbolique les propositions suivantes.  Il y a une animal jaune à cette ferme. Tous les animaux de la ferme sont des mammifères ou des oiseaux. Pour tout animal de la ferme, avoir du blanc signifie aussi avoir du noir. Le nombre d'animaux de la ferme d'une certaines espèces est un nombre premier. Aucun animal de la ferme n'est de couleur grise. Il existe deux animaux de la ferme qui sont même couleurs, mais qui ne sont pas des vaches. "
},
{
  "id": "rq-propquant-4",
  "level": "2",
  "url": "sec-propquant.html#rq-propquant-4",
  "type": "Question de compréhension",
  "number": "2.3.4.3",
  "title": "",
  "body": "Est-ce que ? Argumenter ou donner un exemple où l'équivalence n'est pas vraie. "
},
{
  "id": "rq-propquant-5",
  "level": "2",
  "url": "sec-propquant.html#rq-propquant-5",
  "type": "Question de compréhension",
  "number": "2.3.4.4",
  "title": "",
  "body": "Est-ce que ? Argumenter ou donner un exemple où l'équivalence n'est pas vraie. "
},
{
  "id": "rq-propquant-6",
  "level": "2",
  "url": "sec-propquant.html#rq-propquant-6",
  "type": "Question de compréhension",
  "number": "2.3.4.5",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-propquant-2-3",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-2-3",
  "type": "Exercice",
  "number": "2.3.5.1",
  "title": "",
  "body": "Si représente la proposition Il existe un nombre tel que . , déterminer la valeur de vérité de ; ; ; ; , où ; Indéterminé , où . , où est . "
},
{
  "id": "exo-propquant-2-4",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-2-4",
  "type": "Exercice",
  "number": "2.3.5.2",
  "title": "",
  "body": "Si représente la proposition . , déterminer la valeur de vérité de ;  ;  ;  ;   ;   .  "
},
{
  "id": "exo-propquant-2-5",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-2-5",
  "type": "Exercice",
  "number": "2.3.5.3",
  "title": "",
  "body": "Soit la proposition connait déjà un peu de programmation où est un étudiant quelconque de la classe.  Décrire en langue française les propositions suivantes:  Il y a au moins un étudiant de la classe qui connait déjà un peu de programmation. Tous les étudiants de la classe connaissent déjà un peu de programmation. Il y a au moins un étudiant de la classe qui ne connait pas déjà un peu de programmation. Aucun des étudiants de la classe ne connait déjà un peu de programmation. Aucun des étudiants de la classe ne connait déjà un peu de programmation. Il y a au moins un étudiant de la classe qui ne connait pas déjà un peu de programmation. "
},
{
  "id": "exo-propquant-2-6",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-2-6",
  "type": "Exercice",
  "number": "2.3.5.4",
  "title": "",
  "body": "Soit la proposition est un mammifère et soit la proposition pond des oeufs , où est un animal quelconque.  Décrire en langue française les propositions suivantes:  Tous les animaux sont des mammifères ou pondents des oeufs. Il y a un mammifère qui pond des oeufs. Tous les animaux sont des mammifères et ils pondent des oeufs. Il y a un animal qui n'est pas un mammifère et qui pond des oeufs. "
},
{
  "id": "exo-propquant-2-7",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-2-7",
  "type": "Exercice",
  "number": "2.3.5.5",
  "title": "",
  "body": "On considère le scénario suivant. Une urne contient deux billes blanches et une bille noire. La proposition est fausse. Si l'urne ne contient aucune bille, que peut-on dire de cette même proposition? Expliquer. Est-ce que la négation de cette proposition est vraie ou fausse? Si l'urne ne contient aucune bille, cette proposition est vraie. En effet, la négation de la proposition est Or, si l'urne est vide, cette proposition ne peut pas être vraie, et donc est fausse. Si la négation est fausse, alors l'énnoncé initiale doit être vraie. "
},
{
  "id": "exo-propquant-2-8",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-2-8",
  "type": "Exercice",
  "number": "2.3.5.6",
  "title": "",
  "body": "Soit des nombres réels. Traduire les propositions suivantes en langue française et déterminer la valeur de vérité de chacune. Pour tout nombre réel , il existe un nombre réel tel que . Cette proposition est vraie. Pour chaque , il suffit de prendre, par exemple, . Il existe un nombre réel tel que, pour tout nombre réel , on a . Cette proposition est fausse. En effet, pour tout nombre réel on peut trouver un nombre réel pour lequel la proposition est fausse. Il suffit de poser, par exemple, . Pour tout nombre réel , et pour tout nombre réel , si est strictement positif, alors et sont tous les deux strictement positifs. Cette proposition en fausse, car le prédicat est faux lorsque . Pour toutes paires de nombres réels et , si et sont strictement positifs, alors est strictement positif. Cette proposition est vraie par les propriétés des nombres réels. Déterminer à nouveau la valeur de vérité des deux premières propositions précédentes si le domaine est maintenant l'intervalle . La proposition reste vraie. En effet, pour tout , on peut trouver un nombre réel tel que . Cependant, la proposition change de valeur et devient vraie. En effet, en prennant , le prédicat est vrai pour tout nombre réel . "
},
{
  "id": "exo-propquant-2-9",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-2-9",
  "type": "Exercice",
  "number": "2.3.5.7",
  "title": "",
  "body": "Réécrire les propositions suivantes pour que les négations soient à l'intérieur des quantificateurs. "
},
{
  "id": "exo-propquant-2-10",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-2-10",
  "type": "Exercice",
  "number": "2.3.5.8",
  "title": "",
  "body": "Réécrire les négations suivantes de sorte à ce que le symbole ne soit appliqué que sur les prédicats:          "
},
{
  "id": "exo-propquant-3-2",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-3-2",
  "type": "Exercice",
  "number": "2.3.5.9",
  "title": "",
  "body": "Soit deux propositions .Est-ce que ?  Démontrer ou trouver une exemple. S'il existe un tel que et sont vraies, alors certainement qu'il existe un tel que est vraie et un (le même!) tel que est vraie. Est-ce qu'on peut affirmer l'inverse? "
},
{
  "id": "exo-propquant-3-3",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-3-3",
  "type": "Exercice",
  "number": "2.3.5.10",
  "title": "",
  "body": "Soit deux propositions .Est-ce que ?  Démontrer ou trouver une exemple. "
},
{
  "id": "exo-propquant-3-4",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-3-4",
  "type": "Exercice",
  "number": "2.3.5.11",
  "title": "",
  "body": "Soit deux propositions .Est-ce que ?  Démontrer ou trouver une exemple. "
},
{
  "id": "exo-propquant-3-5",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-3-5",
  "type": "Exercice",
  "number": "2.3.5.12",
  "title": "",
  "body": "Soit deux propositions .Est-ce que ?  Démontrer ou trouver une exemple. Il faut penser à des propositions qui sont complémentaires. "
},
{
  "id": "exo-propquant-3-6",
  "level": "2",
  "url": "sec-propquant.html#exo-propquant-3-6",
  "type": "Exercice",
  "number": "2.3.5.13",
  "title": "",
  "body": "Soit des figures quelconques. On définit les éléments de notation suivants:  Triangle( ),Cercle( ),Carré( ) représentent respectivement la proposition est un triangle, cercle ou carré.  Rouge( ),Vert( ),Bleu( ) représentent respectivement la proposition la figure est de couleur rouge,vert, bleu.  Gauche(f,g),Droite(f,g),Haut(f,g),Bas(f,g) représente respectivement la proposition est à gauche, à droite, en haut, en bas de .  MêmeCouleur( ),MêmeForme( ) représente respectivement les figures ont la même couleur,forme.  La figure interactive suivante permet d'afficher un certain nombre de formes géométriques de couleurs variées.   Une grille interactive de figures    Pour chaque proposition, décrire en mots, déterminer la valeur de vérité et écrire la négation sous une forme symbolique simplifiée. L'ensemble univers est toujours la grille et sera omis pour alléger l'écriture des propositions. Pour chaque proposition, décrire en symbole, déterminer la valeur de vérité et écrire la négation en langage courant. L'ensemble univers est toujours la grille et sera omis pour alléger l'écriture des propositions. Il existe une forme géométrique rouge à la droite de . La couleur d'un cercle n'est pas bleue ou il existe une carré en bas de . Il y a un triangle vert à droite d'un cercle bleu. Il existe une forme autre que qui est identique. Pour tout cercle, on peut trouver un carré de même couleur. Il existe une figure rouge telle que tous les carrés sont à sa gauche. Tous les cercles sont en haut des triangles. Il existe un triangle et il existe un carré tels que le carré est à droite ou en haut du triangle. "
},
{
  "id": "sec-circuits",
  "level": "1",
  "url": "sec-circuits.html",
  "type": "Section",
  "number": "2.4",
  "title": "Circuits logiques",
  "body": "  Circuits logiques    Pour la première fois, on évoque spécifiquement le fonctionnement d'un ordinateur. Les composantes d'un ordinateur sont presque toutes composées de petits circuits électroniques qui sont fait pour accepter deux intensité de courant électrique. Un circuit qui reçoit le niveau élevé de courant sera représenté par un alors qu'un circuit qui reçoit un faible niveau sera représenté par un . Cette dualité n'est pas sans rappeler les sections précédentes où les propositions étaient vraie ou fausse.  Un ordinateur combine l'information de tous ses circuits pour effectuer ses tâches. Pour cela, il combine ces informations à l'aide de ce qu'on appelle des portes, qui sont analogues aux connecteurs logiques. Les éléments de la présente section sont d'une certaine façon une manière graphique de visualiser les notions de la section .  Dans cette section, on définit les portes logiques élémentaires, les circuits logiques et leur construction,    Portes logiques  Une porte logique est un dispositif agissant sur un certain nombre d'entrée et produisant à partir de ceux-ci une sortie. Typiquement dans un ordinateur, le niveau de tension de composantes est fourni en entrée afin de produire un résultat ou une information. On peut aussi voir les entrées comme des Vrai ou Faux, des Ouvert ou Fermé ou des ou . Une partie d'un circuit peut être illustré comme sur la figure . À gauche, on retrouve les entrées (il peut y en avoir une ou plusieurs) et à droite la sortie (encore une fois, une ou plusieurs). Au centre, on retrouve une porte, une espèce de boite noire qui accomplit des opérations logiques pour produire la sortie.   Une partie de circuit avec une porte inconnue   Un rectangle, représentant une porte de nature inconnue, est représenté avec à sa gauche, deux petits traits pour les entrées et à sa droite, un trait pour la sortie.    On définit maintenant les trois portes principales d'un circuit logique. Elles les équivalents des opérateurs logiques . Les portes NON, ET et OU sont illustrées ci-dessous.   Trois portes logiques élémentaires    Porte logique NON   Un triangle avec un côté vertical à gauche et une extrémité à droite est représenté avec à sa gauche, un petit trait pour l'entrée et à sa droite, un trait pour la sortie. On retrouve aussi à l'extrémité droite du triangle un petit cercle ouvert.     Porte logique ET   Une moitié d'ellipse avec un côté vertical à gauche et une extrémité arrondie à droite est représenté avec à sa gauche, deux petits traits pour les entrées et à sa droite, un trait pour la sortie.     Porte logiqueOU   Une figure ressemblant à une fusée couchée sur le côté est représentée avec un côté concave arrondie à gauche et une extrémité à arrondie à droite. À sa gauche, deux petits traits pour l'entrée et à sa droite, un trait pour la sortie.      En plus des portes élémentaires, on peut aussi définir des portes pour des opérations comme le ou exclusif. On peut même définir ses propres opérations logiques et leur créer une porte. Concrètement, la porte NON va changer le signal de l'entrée pour l'inverser. Ainsi si une composante avait une tension élevée, envoyer son signal dans une porte NON convertira la tension en basse. Une porte ET regarde les deux entrées et retourne un signal à tension élevée si les deux signaux d'entrée étaient aussi à tension élevée. Finalement la porte OU envoie un signal à tension élevée dès que l'une de ses entrée l'était. Pour se coller à la tradition informatique, on parlera désormais en termes de et de pour parler de l'entrée et de la sortie d'un circuit.  Évidemment, ces portes à elles seules ne sont pas très intéressante, mais c'est en les combinant qu'on peut faire des choses complexes et utiles. Il y a toutefois quelques règles à respecter. Sous ces conditions, la sortie d'un circuit sera entièrement déterminée par la valeur de ces entrées au moment de la lecture de celles-ci. On regarde un exemple de circuit plus complexe avant d'établir les règles pour combiner les portes.   Un premier circuit combiné: dynamique  On considère le circuit de la figure . Si , quelle est la sortie du circuit?   Un premier circuit combiné   Un circuit complexe ayant trois entrées est illustrée. Les entrées X et Y passent dans une porte ET, l'entrée Y est transformée par une porte NON et par la suite combinée dans une porte ET avec l'entrée Z. Finalement, le résultat des deux portes ET est combiné dans une porte OU.      La figure ci-dessous permet de faire la résolution de ce circuit de manière interactive.   La solution du circuit      Quelles sont donc les règles pour avoir un circuit logique valide? Il y en a quatre. La dernière, si elle n'est pas respectée, peut donner lieu à des circuits appelés séquentiels. On ne considère pas ce type de circuits.  On ne combine pas deux fils d'entrée.  Une entrée peut se séparer comme l'entrée dans le circuit de la figure afin d'être utilisée par plus d'une porte.  Une sortie peut être utilisée comme entrée.  Par contre, aucune sortie ne retourne dans la porte d'où elle provient, que ce soit immédiatement ou éventuellement.      Parallèle avec la logique propositionnelle  On sait que pour chaque possibilité des entrées d'un circuit, on obtiendra une valeur de sortie. Lorsque le nombre de possibilités est raisonnable, on peut faire une table des possibilités. C'est l'équivalent de la table de vérité de la logique propositionnelle. Ci-dessous, la table du circuit de l'exemple . On peut vérifier avec la figure interactive que les valeurs sont exactes.   Table de vérité du circuit de l'exemple             Sortie    1  1  1  1    1  1  0  1    1  0  1  1    1  0  0  0    0  1  1  0    0  1  0  0    0  0  1  1    0  0  0  0     S'il est possible d'associer à un circuit logique une table de vérité, il est également possible de lui associer une expression logique. La sortie du circuit de l'exemple se lisait d'ailleurs . En passant Certaines personnes changent la symbolique lorsqu'ils transforment les circuits en expressions. Ils utilisent pour la négation, pour et au lieu de . On a préféré ici garder la notation propositionnelle afin d'éviter la confusion.   D'autres exemples de circuits logiques  On considère les circuits de la figure ci-dessous. On cherche à déterminer la table de vérité et une expression de logique propositionnelle pour chacun.   Deux circuits logiques    Un circuit à deux entrées   Un circuit à deux entrées et trois portes logiques est illustré. Le X et le Y sont combinés dans une porte OU. Le Y passe également à travers une porte NON avant d'être combiné avec le résultat de la première porte dans une porte ET.     Un circuit à trois entrées   Un circuit à trois entrées et quatre portes logiques est illustrés. Le X et le Y sont combinés dans une porte OU. Le Y et le Z sont combinés dans une porte ET et le résultat de cette porte est inversé par une porte NON. Finalement, cette inversion est combiné avec la porte OU du début dans une porte ET.        On débute par la table de vérité de ce circuit.  On commence avec la paire d'entrées - . La porte OU les combinant retournent . La valeur de est inversée par la porte non et se combine ensuite avec le résultat précédent dans la porte ET. Comme la valeur du Y a été inversée et est maintenant , la porte ET retourne comme sortie du circuit.  Pour la paire d'entrée - , la porte OU les combinant retournent . La valeur de est inversée par la porte non et se combine ensuite avec le résultat précédent dans la porte ET. Comme la valeur du Y a été inversée et est maintenant , la porte ET retourne comme sortie du circuit.  Pour la paire d'entrée - , la porte OU les combinant retournent . La valeur de est inversée par la porte non et se combine ensuite avec le résultat précédent dans la porte ET. Comme la valeur du Y a été inversée et est maintenant , la porte ET retourne comme sortie du circuit.  Pour la paire d'entrée - , la porte OU les combinant retournent . La valeur de est inversée par la porte non et se combine ensuite avec le résultat précédent dans la porte ET. La valeur du Y a été inversée et est maintenant , mais la porte OU a retourné . La porte ET finale retourne comme sortie du circuit.  Le résumé de ces calculs se trouve dans la table ci-dessous.   Table de vérité du circuit                  1  1  1  0    1  0  1  1    0  1  1  0    0  0  0  0     Pour ce qui est de l'expression logique, en suivant le raisonnement des calculs précédents, on arrive à .   Souvent, il est plus simple de déterminer d'abord l'expression logique et à partir de celle-ci, écrire la table de vérité. C'est l'approche préconisée ici.  On peut procéder comme dans le circuit à deux entrées. On peut aussi procéder de la sortie vers les entrées. La porte finale est une porte ET. On sait donc qu'on aura une conjonction de deux propositions. La première partie de la conjonction correspond à la sortie de la porte OU, qui combine le et le . La seconde partie de la porte finale est la sortie d'une inversion. On aura donc une négation. Ce qui est inversé, c'est le résultat de la porte ET, qui combine le et le . En combinant ces informations, on obtient .  On peut ensuite trouver la table de vérité ci-dessous.   Table de vérité du circuit                        1  1  1  1  0  0    1  1  0  1  1  1    1  0  1  1  1  1    1  0  0  1  1  1    0  1  1  1  0  0    0  1  0  1  1  1    0  0  1  0  1  0    0  0  0  0  1  0       Si on peut trouver une expression logique et une table de vérité à partir d'un circuit logique, on peut probablement trouver une circuit logique à partir d'une expression ou d'une table de vérité. Pour cette dernière option, la forme normale disjonctive sera particulièrement utile.   Des circuits à partir d'une expression logique ou d'une table de vérité   On considère l'expression logique et la table de vérité suivante.  Table de vérité du circuit                  1  1  1  1    1  1  0  1    1  0  1  1    1  0  0  1    0  1  1  1    0  1  0  0    0  0  1  0    0  0  0  0     On veut dessiner des circuits logiques équivalents à ceux-ci.    On débute avec l'expression logique. On voit que la sortie sera obtenue après une porte ET qui combine les deux paires de parenthèses. Dans la première paire, le est combiné à la négation de par une porte OU et dans la seconde, c'est la négation de qui est combinée à , aussi par une porte OU.  Comme apparait dans les deux paires de parenthèses, il faudra séparer l'entrée en deux. Une solution possible est donner ci-dessous.   Le circuit associé à l'expression logique   Un circuit à trois entrées est illustré. L'entrée X est combinée avec l'inverse de l'entrée Z dans une porte OU. L'entrée Y est inversée et combinée avec l'entrée Z, aussi dans une porte OU. Le résultat de ces deux portes OU est finalement combiné dans une porte ET.     Le plus simple pour construire le circuit associé à une table de vérité est de construire la forme normale disjonctive de l'expression. Comme toutes les sorties tels que est donnent ,en combinant à la cinquième ligne, on obtient . Il faudra donc combiner l'inverse de avec et ensuite combiner ce résultat avec dans des portes ET. Ensuite, on combine cette sortie avec dans une porte OU. À noter qu'à l'exercice , on verra qu'on peut combiner plus de deux entrées dans une porte ET grâce à l'associativité.  Le circuit associé à cette table de vérité est illustré ci-dessous.   Le circuit associé à la table de vérité   Un circuit à trois entrées est illustré. L'entrée X est inversée et combinée avec l'entrée Y dans une porte ET. Ensuite, la sortie de cette porte est combinée avec Z dans une autre porte ET. Finalement le résultat de cette seconde porte ET est combinée avec X dans une porte OU.      En plus de déterminer des circuits équivalents à des expressions ou des tables de vérité, on peut aussi déterminer l'équivalence de circuits entre eux. Grâce aux règles de la logique, on peut simplifier les circuits. Si on réussit à réduire le nombre de portes utilisées, on aura potentiellement sauvé des coûts de construction du circuit et peut-être aussi en maintenance ou alimentation.      Les éléments importants de cette section sont:  Les représentations des portes NON,ET et OU.  Le parallèle entre les circuits et les expressions logiques.       Ces questions sont à faire avant de venir en classe et à remettre au début du cours.   On considère le circuit illustré à la figure .   Un circuit à trois entrées   Un circuit à trois entrées est illustrée dans lequel l'entrée X est combinée avec l'inverse de l'entrée Y dans une porte ET. Ce résultat est finalement combinée avec Z dans une porte OU.    Déterminer la valeur de la sortie si: ; ; .  Déterminer la table de vérité du circuit illustré à la figure . Par quelle porte plus simple aurait-on pu le remplacer?   Un circuit à trois portes à simplifier   Un circuit à deux entrées est illustrée dans lequel l'entrée X est inversée pour être combinée avec l'entrée Y dans une porte ET. Le résultat de cette porte est ensuite combinée dans une porte OU avec l'entrée X.     En plus des portes NON,ET et OU, on peut aussi créer d'autres portes à l'aide d'expressions fréquemment utilisées. Dans cet exercice, on s'intéresse au circuit du ou exclusif . Une porte associée à cette opération s'appelle une porte XOR. Elle est illustrée à la figure .   Une porte XOR   Une porte à deux entrée est illustrée, semblable à la porte du OU, mais avec un demi-cercle supplémentaire à gauche.    Déterminer une circuit équivalent à une simple porte XOR en termes de porte NON, ET et OU.  Quel serait un circuit associé à l'expression ?  Un circuit peut avoir plus d'une sortie. C'est particulièrement utile quand un circuit est en fait une partie d'un système plus complexe. Le circuit illustré à la figure est une partie d'un circuit utilisé pour qu'un ordinateur effectue des additions. On reviendra sur ce type de circuit dans le chapitre .   Le circuit demi-additionneur   Un circuit à deux entrée est illustrée dans lequel les entrées X et Y sont combinées dans une porte XOR et dans une porte ET. Le circuit retourne deux sorties, le résultat de chacune de ces combinaisons.    Déterminer la table de vérité de ce circuit.   Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.  Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.      Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Dans cet exercice, on constate qu'il est parfois possible de combiner deux portes en une seule de même nature.  Vérifier que les deux circuits suivants sont équivalents.    Le premier circuit   Une circuit à trois entrée dans lequel les entrées X et Y sont combinées dans une porte ET pour ensuite être combinées avec Z dans une autre porte ET.     Le second circuit   Une circuit à trois entrée dans lequel l'entrée X est combinée dans une porte ET avec la combinaison par une porte ET des entrées Y et Z     Comment justifier cela avec les notions de la section ?   Une première méthode est de construire la table de vérité des deux circuits, et comparer la valeur des sorties. Ceci revient à faire la démonstration de l'associativité du .  Une autre méthode est d'utiliser les propositions logiques associées aux circuits. On utilise cette méthode.  La proposition logique associée au premier circuit est , alors que la proposition associée au deuxième circuit est . En utilisant l'associativité du , on sait que .  Puisque les deux propositions associées sont équivalentes, les circuits le sont également  Vérifier que le résultat est le même si on remplace les portes ET par des portes OU.  Comme à la partie précédente, une première méthode est de construire la table de vérité des deux circuits, et comparer la valeur des sorties. Ceci revient à faire la démonstration de l'associativité du .  Une autre méthode est d'utiliser les propositions logiques associées aux circuits. On utilise encore une fois cette méthode.  La proposition logique associée au premier circuit est , alors que la proposition associée au deuxième circuit est . En utilisant l'associativité du , on sait que .  Puisque les deux propositions associées sont équivalentes, les circuits le sont également  Puisque les circuits sont équivalents, on utilisera parfois une porte ET ou une porte OU à plus de deux entrées pour alléger les diagrammes. Un exemple d'une porte ET à trois entrées est illustré ci-dessous.   Une porte ET à trois entrées   Une circuit à trois entrée dans les entrées X,Y et Z sont combinées dans une unique porte ET.     Si la porte XOR, associé au ou exclusif, retourne lorsque les entrées sont différentes et lorsqu'elle sont égales, on peut aussi définir une porte qui fait le contraire, c'est-à-dire une porte qui retournera en cas d'égalité et sinon. En termes de propositions logiques, on veut alors le complément du ou exclusif. On parlera d'une porte ÉGAL, qui est illustrée à la figure . On note que c'est la même porte que le XOR, mais avec le point de l'inversion à la sortie. Lorsqu'une porte quelconque possède ce point à sa sortie, on comprendra que c'est l'inversion de la porte sans le point qui est donnée.   Une porte ÉGAL   Une porte à deux entrées identique à une porte XOR, mais possédant un point ouvert à l'extrémité droite de la porte, signifiant l'inversion.    Déterminer un circuit équivalent à une porte ÉGAL qui n'utilise que des portes NON,ET et OU.  Une possibilité est d'ajouter tout simplement une porte NON à la fin du circuit pour la porte XOR. Ceci devrait normalement donner les cinq portes du XOR et la porte NON. Il est toutefois possible de le faire à l'aide de cinq portes au total si on utilise les lois de la logique pour simplifier le complément du ou exclusif.   Le circuit de ÉGAL      À l'exercice , il a été mentionné qu'une porte avec un point ouvert à la sortie représente l'inversion de cette porte. On peut ainsi définir les portes NET et NOU, illustrées ci-dessous.   La négation des portes ET et OU    La porte NET   Une porte identique à la porte ET, mais avec un petit point ouvert à l'extrémité droite, signifiant l'inversion.     La porte NOU   Une porte identique à la porte OU, mais avec un petit point ouvert à l'extrémité droite, signifiant l'inversion.      En particulier, dans l'exercice sur la barre de Sheffer , il a été question de l'opérateur logique NAND (anglais pour NET). Pour chaque question ci-dessous, l'exercice équivalent sur la barre de Sheffer pourrait être utile.  Trouver un circuit logique ne possédant que des portes NET équivalent à l'inversion.   Le circuit de l'inversion     Trouver un circuit logique ne possédant que des portes NET équivalent à une porte ET.   Le circuit du ET     Trouver un circuit logique ne possédant que des portes NET équivalent à une porte OU.   Le circuit du OU      Déterminer quel est le résultat du circuit ci-dessous pour les entrées demandées. Attention aux portes avec des inversions .   Un circuit complexe avec des portes inversées   Un circuit à trois entrées est illustré. Dans un premier temps, une porte NOU combine les entrées X et Y. L'inversion de Y est ensuite combinée avec Z dans une porte ET. Le résultat de cette porte ET est combiné dans une porte XOR avec l'inversion de Y. Finalement, la sortie de la porte XOR est combinée avec la sortie de la première porte NOU dans une porte NET.    La sortie est 0. La sortie est 1. La sortie est 1. La sortie est 1. La sortie est 1.  Construire un circuit à trois entrées qui retourne si et seulement si et en n'utilisant que les trois portes de base   Un circuit      Construire un circuit à trois entrées qui retourne si au moins deux entrées valent 1, et sinon. Utiliser n'importe quelle(s) porte(s) vues jusqu'ici.   Un Circuit      Construire un circuit à trois entrées qui retourne si au moins deux entrées valent 0, et sinon. Utiliser n'importe quelle(s) porte(s) vues jusqu'ici.   Un Circuit        Exercices supplémentaires  Un pont de la région de Vancouver possède trois voies qui s'utilisent dans les deux sens, selon la direction du trafic (vers l'île ou vers l'extérieur). Afin d'orienter les usagers, des symboles lumineux vert ou rouge indique si une voie est accessible. L'affichage de ces symboles est contrôlé par deux interrupteurs .  Lorsque les deux interrupteurs sont fermés ( ), les trois voies affichent rouge. Lorsque seulement est ouvert, la voie la plus à droite des trois est au vert et les deux autres sont au rouge. Lorsque seulement est ouvert, ce sont les deux voies de droites qui sont au vert, la troisième est au rouge. Finalement, si les deux interrupteurs sont ouverts, les trois voies sont au vert.  Donner un circuit à deux entrées et trois sorties illustrant cette situation.   Le Lion's Gate Bridge, de la région de Vancouver Image tirée de Wikipedia, libre de droits   Une photo du Lion's Gate Bridge de Vancouver sur laquelle on peut apercevoir des voyants lumineux, indiquant aux automobilistes quelle voies ils peuvent emprunter.     Les circuits trouvés à l'exercice peuvent aussi se faire en n'utilisant que des portes NOU. Trouver un circuit logique ne possédant que des portes NOU équivalent à l'inversion. Trouver un circuit logique ne possédant que des portes NOU équivalent à une porte ET. Trouver un circuit logique ne possédant que des portes NOU équivalent à une porte OU. L'opérateur logique équivalent à la porte NOU est appelé la flèche de Peirce. On note l'opération .     "
},
{
  "id": "fig-circuitintro",
  "level": "2",
  "url": "sec-circuits.html#fig-circuitintro",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " Une partie de circuit avec une porte inconnue   Un rectangle, représentant une porte de nature inconnue, est représenté avec à sa gauche, deux petits traits pour les entrées et à sa droite, un trait pour la sortie.   "
},
{
  "id": "fig-portesdebase",
  "level": "2",
  "url": "sec-circuits.html#fig-portesdebase",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": " Trois portes logiques élémentaires    Porte logique NON   Un triangle avec un côté vertical à gauche et une extrémité à droite est représenté avec à sa gauche, un petit trait pour l'entrée et à sa droite, un trait pour la sortie. On retrouve aussi à l'extrémité droite du triangle un petit cercle ouvert.     Porte logique ET   Une moitié d'ellipse avec un côté vertical à gauche et une extrémité arrondie à droite est représenté avec à sa gauche, deux petits traits pour les entrées et à sa droite, un trait pour la sortie.     Porte logiqueOU   Une figure ressemblant à une fusée couchée sur le côté est représentée avec un côté concave arrondie à gauche et une extrémité à arrondie à droite. À sa gauche, deux petits traits pour l'entrée et à sa droite, un trait pour la sortie.     "
},
{
  "id": "ex-circuit1",
  "level": "2",
  "url": "sec-circuits.html#ex-circuit1",
  "type": "Exemple",
  "number": "2.4.3",
  "title": "Un premier circuit combiné: dynamique.",
  "body": " Un premier circuit combiné: dynamique  On considère le circuit de la figure . Si , quelle est la sortie du circuit?   Un premier circuit combiné   Un circuit complexe ayant trois entrées est illustrée. Les entrées X et Y passent dans une porte ET, l'entrée Y est transformée par une porte NON et par la suite combinée dans une porte ET avec l'entrée Z. Finalement, le résultat des deux portes ET est combiné dans une porte OU.      La figure ci-dessous permet de faire la résolution de ce circuit de manière interactive.   La solution du circuit     "
},
{
  "id": "sec-circuits-4-3",
  "level": "2",
  "url": "sec-circuits.html#sec-circuits-4-3",
  "type": "Table",
  "number": "2.4.6",
  "title": "Table de vérité du circuit de l’exemple 2.4.3",
  "body": " Table de vérité du circuit de l'exemple             Sortie    1  1  1  1    1  1  0  1    1  0  1  1    1  0  0  0    0  1  1  0    0  1  0  0    0  0  1  1    0  0  0  0    "
},
{
  "id": "sec-circuits-4-6",
  "level": "2",
  "url": "sec-circuits.html#sec-circuits-4-6",
  "type": "Exemple",
  "number": "2.4.7",
  "title": "D’autres exemples de circuits logiques.",
  "body": " D'autres exemples de circuits logiques  On considère les circuits de la figure ci-dessous. On cherche à déterminer la table de vérité et une expression de logique propositionnelle pour chacun.   Deux circuits logiques    Un circuit à deux entrées   Un circuit à deux entrées et trois portes logiques est illustré. Le X et le Y sont combinés dans une porte OU. Le Y passe également à travers une porte NON avant d'être combiné avec le résultat de la première porte dans une porte ET.     Un circuit à trois entrées   Un circuit à trois entrées et quatre portes logiques est illustrés. Le X et le Y sont combinés dans une porte OU. Le Y et le Z sont combinés dans une porte ET et le résultat de cette porte est inversé par une porte NON. Finalement, cette inversion est combiné avec la porte OU du début dans une porte ET.        On débute par la table de vérité de ce circuit.  On commence avec la paire d'entrées - . La porte OU les combinant retournent . La valeur de est inversée par la porte non et se combine ensuite avec le résultat précédent dans la porte ET. Comme la valeur du Y a été inversée et est maintenant , la porte ET retourne comme sortie du circuit.  Pour la paire d'entrée - , la porte OU les combinant retournent . La valeur de est inversée par la porte non et se combine ensuite avec le résultat précédent dans la porte ET. Comme la valeur du Y a été inversée et est maintenant , la porte ET retourne comme sortie du circuit.  Pour la paire d'entrée - , la porte OU les combinant retournent . La valeur de est inversée par la porte non et se combine ensuite avec le résultat précédent dans la porte ET. Comme la valeur du Y a été inversée et est maintenant , la porte ET retourne comme sortie du circuit.  Pour la paire d'entrée - , la porte OU les combinant retournent . La valeur de est inversée par la porte non et se combine ensuite avec le résultat précédent dans la porte ET. La valeur du Y a été inversée et est maintenant , mais la porte OU a retourné . La porte ET finale retourne comme sortie du circuit.  Le résumé de ces calculs se trouve dans la table ci-dessous.   Table de vérité du circuit                  1  1  1  0    1  0  1  1    0  1  1  0    0  0  0  0     Pour ce qui est de l'expression logique, en suivant le raisonnement des calculs précédents, on arrive à .   Souvent, il est plus simple de déterminer d'abord l'expression logique et à partir de celle-ci, écrire la table de vérité. C'est l'approche préconisée ici.  On peut procéder comme dans le circuit à deux entrées. On peut aussi procéder de la sortie vers les entrées. La porte finale est une porte ET. On sait donc qu'on aura une conjonction de deux propositions. La première partie de la conjonction correspond à la sortie de la porte OU, qui combine le et le . La seconde partie de la porte finale est la sortie d'une inversion. On aura donc une négation. Ce qui est inversé, c'est le résultat de la porte ET, qui combine le et le . En combinant ces informations, on obtient .  On peut ensuite trouver la table de vérité ci-dessous.   Table de vérité du circuit                        1  1  1  1  0  0    1  1  0  1  1  1    1  0  1  1  1  1    1  0  0  1  1  1    0  1  1  1  0  0    0  1  0  1  1  1    0  0  1  0  1  0    0  0  0  0  1  0      "
},
{
  "id": "sec-circuits-4-8",
  "level": "2",
  "url": "sec-circuits.html#sec-circuits-4-8",
  "type": "Exemple",
  "number": "2.4.11",
  "title": "Des circuits à partir d’une expression logique ou d’une table de vérité.",
  "body": " Des circuits à partir d'une expression logique ou d'une table de vérité   On considère l'expression logique et la table de vérité suivante.  Table de vérité du circuit                  1  1  1  1    1  1  0  1    1  0  1  1    1  0  0  1    0  1  1  1    0  1  0  0    0  0  1  0    0  0  0  0     On veut dessiner des circuits logiques équivalents à ceux-ci.    On débute avec l'expression logique. On voit que la sortie sera obtenue après une porte ET qui combine les deux paires de parenthèses. Dans la première paire, le est combiné à la négation de par une porte OU et dans la seconde, c'est la négation de qui est combinée à , aussi par une porte OU.  Comme apparait dans les deux paires de parenthèses, il faudra séparer l'entrée en deux. Une solution possible est donner ci-dessous.   Le circuit associé à l'expression logique   Un circuit à trois entrées est illustré. L'entrée X est combinée avec l'inverse de l'entrée Z dans une porte OU. L'entrée Y est inversée et combinée avec l'entrée Z, aussi dans une porte OU. Le résultat de ces deux portes OU est finalement combiné dans une porte ET.     Le plus simple pour construire le circuit associé à une table de vérité est de construire la forme normale disjonctive de l'expression. Comme toutes les sorties tels que est donnent ,en combinant à la cinquième ligne, on obtient . Il faudra donc combiner l'inverse de avec et ensuite combiner ce résultat avec dans des portes ET. Ensuite, on combine cette sortie avec dans une porte OU. À noter qu'à l'exercice , on verra qu'on peut combiner plus de deux entrées dans une porte ET grâce à l'associativité.  Le circuit associé à cette table de vérité est illustré ci-dessous.   Le circuit associé à la table de vérité   Un circuit à trois entrées est illustré. L'entrée X est inversée et combinée avec l'entrée Y dans une porte ET. Ensuite, la sortie de cette porte est combinée avec Z dans une autre porte ET. Finalement le résultat de cette seconde porte ET est combinée avec X dans une porte OU.     "
},
{
  "id": "rq-circuits-2",
  "level": "2",
  "url": "sec-circuits.html#rq-circuits-2",
  "type": "Question de compréhension",
  "number": "2.4.3.1",
  "title": "",
  "body": "On considère le circuit illustré à la figure .   Un circuit à trois entrées   Un circuit à trois entrées est illustrée dans lequel l'entrée X est combinée avec l'inverse de l'entrée Y dans une porte ET. Ce résultat est finalement combinée avec Z dans une porte OU.    Déterminer la valeur de la sortie si: ; ; . "
},
{
  "id": "rq-circuits-3",
  "level": "2",
  "url": "sec-circuits.html#rq-circuits-3",
  "type": "Question de compréhension",
  "number": "2.4.3.2",
  "title": "",
  "body": "Déterminer la table de vérité du circuit illustré à la figure . Par quelle porte plus simple aurait-on pu le remplacer?   Un circuit à trois portes à simplifier   Un circuit à deux entrées est illustrée dans lequel l'entrée X est inversée pour être combinée avec l'entrée Y dans une porte ET. Le résultat de cette porte est ensuite combinée dans une porte OU avec l'entrée X.    "
},
{
  "id": "rq-circuits-4",
  "level": "2",
  "url": "sec-circuits.html#rq-circuits-4",
  "type": "Question de compréhension",
  "number": "2.4.3.3",
  "title": "",
  "body": "En plus des portes NON,ET et OU, on peut aussi créer d'autres portes à l'aide d'expressions fréquemment utilisées. Dans cet exercice, on s'intéresse au circuit du ou exclusif . Une porte associée à cette opération s'appelle une porte XOR. Elle est illustrée à la figure .   Une porte XOR   Une porte à deux entrée est illustrée, semblable à la porte du OU, mais avec un demi-cercle supplémentaire à gauche.    Déterminer une circuit équivalent à une simple porte XOR en termes de porte NON, ET et OU. "
},
{
  "id": "rq-circuits-5",
  "level": "2",
  "url": "sec-circuits.html#rq-circuits-5",
  "type": "Question de compréhension",
  "number": "2.4.3.4",
  "title": "",
  "body": "Quel serait un circuit associé à l'expression ? "
},
{
  "id": "exo-demiadditionneur",
  "level": "2",
  "url": "sec-circuits.html#exo-demiadditionneur",
  "type": "Question de compréhension",
  "number": "2.4.3.5",
  "title": "",
  "body": "Un circuit peut avoir plus d'une sortie. C'est particulièrement utile quand un circuit est en fait une partie d'un système plus complexe. Le circuit illustré à la figure est une partie d'un circuit utilisé pour qu'un ordinateur effectue des additions. On reviendra sur ce type de circuit dans le chapitre .   Le circuit demi-additionneur   Un circuit à deux entrée est illustrée dans lequel les entrées X et Y sont combinées dans une porte XOR et dans une porte ET. Le circuit retourne deux sorties, le résultat de chacune de ces combinaisons.    Déterminer la table de vérité de ce circuit.  "
},
{
  "id": "rq-circuits-7",
  "level": "2",
  "url": "sec-circuits.html#rq-circuits-7",
  "type": "Question de compréhension",
  "number": "2.4.3.6",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "rq-circuits-8",
  "level": "2",
  "url": "sec-circuits.html#rq-circuits-8",
  "type": "Question de compréhension",
  "number": "2.4.3.7",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-ETmultiple",
  "level": "2",
  "url": "sec-circuits.html#exo-ETmultiple",
  "type": "Exercice",
  "number": "2.4.4.1",
  "title": "",
  "body": "Dans cet exercice, on constate qu'il est parfois possible de combiner deux portes en une seule de même nature.  Vérifier que les deux circuits suivants sont équivalents.    Le premier circuit   Une circuit à trois entrée dans lequel les entrées X et Y sont combinées dans une porte ET pour ensuite être combinées avec Z dans une autre porte ET.     Le second circuit   Une circuit à trois entrée dans lequel l'entrée X est combinée dans une porte ET avec la combinaison par une porte ET des entrées Y et Z     Comment justifier cela avec les notions de la section ?   Une première méthode est de construire la table de vérité des deux circuits, et comparer la valeur des sorties. Ceci revient à faire la démonstration de l'associativité du .  Une autre méthode est d'utiliser les propositions logiques associées aux circuits. On utilise cette méthode.  La proposition logique associée au premier circuit est , alors que la proposition associée au deuxième circuit est . En utilisant l'associativité du , on sait que .  Puisque les deux propositions associées sont équivalentes, les circuits le sont également  Vérifier que le résultat est le même si on remplace les portes ET par des portes OU.  Comme à la partie précédente, une première méthode est de construire la table de vérité des deux circuits, et comparer la valeur des sorties. Ceci revient à faire la démonstration de l'associativité du .  Une autre méthode est d'utiliser les propositions logiques associées aux circuits. On utilise encore une fois cette méthode.  La proposition logique associée au premier circuit est , alors que la proposition associée au deuxième circuit est . En utilisant l'associativité du , on sait que .  Puisque les deux propositions associées sont équivalentes, les circuits le sont également  Puisque les circuits sont équivalents, on utilisera parfois une porte ET ou une porte OU à plus de deux entrées pour alléger les diagrammes. Un exemple d'une porte ET à trois entrées est illustré ci-dessous.   Une porte ET à trois entrées   Une circuit à trois entrée dans les entrées X,Y et Z sont combinées dans une unique porte ET.    "
},
{
  "id": "exo-EGAL",
  "level": "2",
  "url": "sec-circuits.html#exo-EGAL",
  "type": "Exercice",
  "number": "2.4.4.2",
  "title": "",
  "body": "Si la porte XOR, associé au ou exclusif, retourne lorsque les entrées sont différentes et lorsqu'elle sont égales, on peut aussi définir une porte qui fait le contraire, c'est-à-dire une porte qui retournera en cas d'égalité et sinon. En termes de propositions logiques, on veut alors le complément du ou exclusif. On parlera d'une porte ÉGAL, qui est illustrée à la figure . On note que c'est la même porte que le XOR, mais avec le point de l'inversion à la sortie. Lorsqu'une porte quelconque possède ce point à sa sortie, on comprendra que c'est l'inversion de la porte sans le point qui est donnée.   Une porte ÉGAL   Une porte à deux entrées identique à une porte XOR, mais possédant un point ouvert à l'extrémité droite de la porte, signifiant l'inversion.    Déterminer un circuit équivalent à une porte ÉGAL qui n'utilise que des portes NON,ET et OU.  Une possibilité est d'ajouter tout simplement une porte NON à la fin du circuit pour la porte XOR. Ceci devrait normalement donner les cinq portes du XOR et la porte NON. Il est toutefois possible de le faire à l'aide de cinq portes au total si on utilise les lois de la logique pour simplifier le complément du ou exclusif.   Le circuit de ÉGAL     "
},
{
  "id": "exo-NET",
  "level": "2",
  "url": "sec-circuits.html#exo-NET",
  "type": "Exercice",
  "number": "2.4.4.3",
  "title": "",
  "body": "À l'exercice , il a été mentionné qu'une porte avec un point ouvert à la sortie représente l'inversion de cette porte. On peut ainsi définir les portes NET et NOU, illustrées ci-dessous.   La négation des portes ET et OU    La porte NET   Une porte identique à la porte ET, mais avec un petit point ouvert à l'extrémité droite, signifiant l'inversion.     La porte NOU   Une porte identique à la porte OU, mais avec un petit point ouvert à l'extrémité droite, signifiant l'inversion.      En particulier, dans l'exercice sur la barre de Sheffer , il a été question de l'opérateur logique NAND (anglais pour NET). Pour chaque question ci-dessous, l'exercice équivalent sur la barre de Sheffer pourrait être utile.  Trouver un circuit logique ne possédant que des portes NET équivalent à l'inversion.   Le circuit de l'inversion     Trouver un circuit logique ne possédant que des portes NET équivalent à une porte ET.   Le circuit du ET     Trouver un circuit logique ne possédant que des portes NET équivalent à une porte OU.   Le circuit du OU     "
},
{
  "id": "exo-circuits-2-6",
  "level": "2",
  "url": "sec-circuits.html#exo-circuits-2-6",
  "type": "Exercice",
  "number": "2.4.4.4",
  "title": "",
  "body": "Déterminer quel est le résultat du circuit ci-dessous pour les entrées demandées. Attention aux portes avec des inversions .   Un circuit complexe avec des portes inversées   Un circuit à trois entrées est illustré. Dans un premier temps, une porte NOU combine les entrées X et Y. L'inversion de Y est ensuite combinée avec Z dans une porte ET. Le résultat de cette porte ET est combiné dans une porte XOR avec l'inversion de Y. Finalement, la sortie de la porte XOR est combinée avec la sortie de la première porte NOU dans une porte NET.    La sortie est 0. La sortie est 1. La sortie est 1. La sortie est 1. La sortie est 1. "
},
{
  "id": "exo-circuits-2-7",
  "level": "2",
  "url": "sec-circuits.html#exo-circuits-2-7",
  "type": "Exercice",
  "number": "2.4.4.5",
  "title": "",
  "body": "Construire un circuit à trois entrées qui retourne si et seulement si et en n'utilisant que les trois portes de base   Un circuit     "
},
{
  "id": "exo-circuits-2-8",
  "level": "2",
  "url": "sec-circuits.html#exo-circuits-2-8",
  "type": "Exercice",
  "number": "2.4.4.6",
  "title": "",
  "body": "Construire un circuit à trois entrées qui retourne si au moins deux entrées valent 1, et sinon. Utiliser n'importe quelle(s) porte(s) vues jusqu'ici.   Un Circuit     "
},
{
  "id": "exo-circuits-2-9",
  "level": "2",
  "url": "sec-circuits.html#exo-circuits-2-9",
  "type": "Exercice",
  "number": "2.4.4.7",
  "title": "",
  "body": "Construire un circuit à trois entrées qui retourne si au moins deux entrées valent 0, et sinon. Utiliser n'importe quelle(s) porte(s) vues jusqu'ici.   Un Circuit     "
},
{
  "id": "exo-circuits-3-2",
  "level": "2",
  "url": "sec-circuits.html#exo-circuits-3-2",
  "type": "Exercice",
  "number": "2.4.4.8",
  "title": "",
  "body": "Un pont de la région de Vancouver possède trois voies qui s'utilisent dans les deux sens, selon la direction du trafic (vers l'île ou vers l'extérieur). Afin d'orienter les usagers, des symboles lumineux vert ou rouge indique si une voie est accessible. L'affichage de ces symboles est contrôlé par deux interrupteurs .  Lorsque les deux interrupteurs sont fermés ( ), les trois voies affichent rouge. Lorsque seulement est ouvert, la voie la plus à droite des trois est au vert et les deux autres sont au rouge. Lorsque seulement est ouvert, ce sont les deux voies de droites qui sont au vert, la troisième est au rouge. Finalement, si les deux interrupteurs sont ouverts, les trois voies sont au vert.  Donner un circuit à deux entrées et trois sorties illustrant cette situation.   Le Lion's Gate Bridge, de la région de Vancouver Image tirée de Wikipedia, libre de droits   Une photo du Lion's Gate Bridge de Vancouver sur laquelle on peut apercevoir des voyants lumineux, indiquant aux automobilistes quelle voies ils peuvent emprunter.    "
},
{
  "id": "exo-circuits-3-3",
  "level": "2",
  "url": "sec-circuits.html#exo-circuits-3-3",
  "type": "Exercice",
  "number": "2.4.4.9",
  "title": "",
  "body": "Les circuits trouvés à l'exercice peuvent aussi se faire en n'utilisant que des portes NOU. Trouver un circuit logique ne possédant que des portes NOU équivalent à l'inversion. Trouver un circuit logique ne possédant que des portes NOU équivalent à une porte ET. Trouver un circuit logique ne possédant que des portes NOU équivalent à une porte OU. L'opérateur logique équivalent à la porte NOU est appelé la flèche de Peirce. On note l'opération . "
},
{
  "id": "sec-representation",
  "level": "1",
  "url": "sec-representation.html",
  "type": "Section",
  "number": "3.1",
  "title": "Représentation des nombres",
  "body": "  Représentation des nombres    À l'école primaire, on apprend à interpréter un nombre comme en le décomposant selon ses unités, dizaines, centaines et milliers. En termes plus mathématiques, on peut écrire . Pourquoi une telle décomposition? D'où vient le choix de et ? L'hypothèse la plus plausible est que les systèmes de numération qui se développèrent au fil du temps ont en quelque sorte converger vers l'utilisation des chiffres ; dix symboles, autant de doigts qu'un humain possède.  L'importance du nombre dix se fait d'autant plus remarquer quand on réécrit . Cela n'a toutefois pas toujours été ainsi. Différents système de représentation des nombres ont été élaborés dans l'histoire. Encore aujourd'hui, d'autres systèmes sont utilisés dans certains contexte. En informatique, la représentation binaire est prédominante.  Dans cette section, on rappelle la notion d'écriture en base dix, on définit la représentation en base deux (binaire) et seize (hexadécimale). On effectue aussi des opérations élémentaires sur les nombres écrits en base deux et on voit comment convertir un nombre d'une base à une autre.     Systèmes positionnels  La représentation d'un nombre peut se faire de plusieurs manières. Une manière brute et assez inefficace consiste par exemple à faire un trait pour chaque unité. Ce système devient vite encombrant et il est difficile de rapidement lire un nombre. D'autres systèmes un peu mieux ont été inventés par différentes civilisation au cours de l'histoire. Un système dans lequel un nombre peut s'écrire sous une forme ressemblant à l'équation de l'introduction est appelé un système positionnel. Ces systèmes sont normalement construits selon une base entière , dans le cas de l'introduction, c'est dix, et d'un ensemble de symboles en nombre égal à la base. On peut utiliser une base différente, par exemple quatre avec les symboles , pour représenter n'importe quel nombre.  Chaque position correspond à une puissance de la base, puissance croissante lorsqu'on lit le nombre de droite à gauche. Ainsi le nombre à droite correspond aux unités, le deuxième nombre correspond à un multiple de , le troisième au multiple de et ainsi de suite. Afin de distinguer du cas usuel, lorsque la base sera différente de dix, on l'indiquera en indice. Cet indice sera toujours sous-entendu comme étant écrit en base dix.   Des exemples en base quatre  On considère les nombres suivants, écrits en base quatre:  ;  ;  .  On cherche leur valeur en base dix.    L'idée est de reprendre le principe de la décomposition sous une forme des puissances de .    On a donc .  De plus, .  Finalement, .     La figure interactive permet de visualiser les nombres de à dans chacune des bases deux,trois, quatre et cinq. Il est intéressant de voir comment la représentation d'un nombre évolue au fur et à mesure que celui-ci grandit.   Les nombres de à dans différentes bases      Représentation en base deux  Autre que la base dix, la base deux, ou représentation binaire est probablement la plus utilisée. Une des raisons est que les signaux envoyées par les pièces électroniques se trouvent en deux états, tel que mentionné dans la section . La représentation binaire utilise les puissances de deux et l'ensemble de chiffres pour représenter les nombres. Tout nombre entier peut être représenté comme une somme de termes où et . Les nombres de à peuvent être visualisés dans la figure interactive en mettant la valeur de .  La conversion d'un nombre d'une base à l'autre dépend des bases utilisées. Lorsque la base dix est impliquée, le processus est plus naturel. On peut comparer la conversion à la traduction entre deux langues. Traduire un mot d'une langue proche de la sienne, mais inconnue, est souvent un peu plus simple que de prendre un mot de sa langue et le traduire dans la langue inconnue. C'est un peu le même principe pour la conversion entre une base et la base dix. De la base vers dix est un peu plus simple que de la base dix vers la base . Pour le binaire, connaitre les premières puissances de deux peut-être pratique. Les premières sont données dans la table .   Les premières puissances de     Puissance de                                            Valeur en base dix                                             Du binaire vers la base dix  On veut convertir les nombres suivants en base dix:  ;  ;  ;  .      On réécrit avec les puissances de deux .  On réécrit avec les puissances de deux .  On réécrit avec les puissances de deux .  On réécrit avec les puissances de deux .     Une méthode pour convertir un nombre de la base décimale à une autre base est présentée ci-dessous. Une autre méthode sera présentée dans la section suivante.   De la base dix vers le binaire   On cherche à convertir les nombres suivants en binaire:  ;  .    On sait qu'un nombre en binaire va s'écrire sous la forme avec tous les . Pour trouver , on cherche la plus grande puissance de la base qui est plus petite ou égale au nombre à convertir. Le nombre sera celui la valeur de cette puissance. Ainsi pour , la plus grande puissance qui est plus petite est . On a donc .  Il faut ensuite choisir la plus grande valeur de possible de sorte que soit inférieure au nombre . Pour la base deux, le choix est simple et sera toujours . Ainsi pour , on a : . On envoie le terme trouvé du côté du nombre en soustrayant et on répète ce processus jusqu'à ce que tous les soient déterminés. . En reprenant les valeurs de non nulles, on a .   On montre une manière plus concise d'écrire le raisonnement précédent. La plus grande puissance de qui est inférieure ou égale à est . On a donc   En plus des nombres naturels, on peut aussi représenter les nombres négatifs ou même réels en d'autre base. Pour un nombre négatif, on se contentera de convertir le nombre en valeur absolue en binaire et d'ajouter un signe devant. Pour un ordinateur toutefois, la réalité est un peu plus complexe. Pour les nombres décimaux, on peut procéder d'une manière similaire à celles utilisées pour convertir d'une base à l'autre. Si on considère un nombre à virgule écrit en binaire (dont la partie entière sera , pour simplifier), par exemple , alors il suffit de poursuivre l'écriture en puissance avec des nombres négatifs: . À noter toutefois que, comme dans le cas des nombres décimaux, il est possible que la partie fractionnaire soit infinie, périodique ou non. On se contentera de cas où la représentation sera finie.   D'une représentation binaire fractionnaire à décimale   On considère le nombre et on cherche sa conversion en base dix.   On décompose le nombre selon les puissances négatives de pour obtenir .   Il est possible qu'un nombre ayant une représentation décimale finie possède une représentation binaire infinie, il faut donc bien choisir les exemples pour éviter que cela arrive. Dans la prochaine section, on verra comment convertir un nombre décimal qui devient à représentation infinie périodique. La table suivante pourra être utile.    Puissances négatives de   Puissance de                             Valeurs décimales                              D'une représentation décimale fractionnaire à binaire  On veut convertir le nombre en binaire.  L'idée est la même que celle utilisée à l'exemple . On cherche la plus grande puissance de qui est plus petite ou égale à . Dans ce cas, c'est . On a donc .      Représentation en base hexadécimale  La représentation binaire d'un nombre prend beaucoup plus de place que la représentation décimale. C'est un désavantage avec lequel on est prêt à vivre en informatique étant donné la simplicité d'un système à deux possibilités (ouvert-fermé, haut-bas, vrai-faux, etc.). On a dit au tout début de la section que n'importe quelle nombre . Si est un entier, quels symboles utilise-t-on pour représenter les nombres? L'un des systèmes les plus utilisés est le système hexadécimal. Celui-ci correspond à la base seize. Pour compléter l'ensemble des chiffres, on ajoute aux symboles les six premières lettres de l'alphabet, en majuscule. Ainsi, un nombre entier exprimé en hexadécimal sera de la forme avec tous les . Dans les calculs, on se rappelera que et .  Les nombres naturels de à sont transformés en base seize dans la figure interactive ci-dessous.   Les nombres de à en base seize    Les méthodes pour convertir entre la base dix et seize sont identiques à celles pour convertir entre base dix et deux. On donne deux exemples ci-dessous. La table des premières puissances de est donné ici pour référence.  Puissances de 16    Puissance de seize                               Valeurs décimales                                 Conversion entre système décimal et système hexadécimal  On veut convertir en décimal et en hexadécimal.   La conversion d'hexadécimal vers la base dix étant plus simple, on débute par celle-ci. On a .   Pour la conversion de la base décimale vers la base seize, on regarde encore quelle est la plus grande puissance de seize qui est inférieure ou égale au nombre à convertir. Pour , c'est qui sera utilisé. Il y a toutefois une étape supplémentaire à considérer par rapport à la conversion au binaire. Combien de fois rentre-t-il dans ? On utilise Sage pour faire ce calcul, en notant qu'à la section suivante on aura un opérateur spécial qui donnera directement la réponse, sans tenir compte de la partie fractionnaire.   Comme on obtient , on déduit qu'on peut mettre trois puissances de , mais pas quatre. On a donc . On poursuit les calculs avec Sage. Dans un premier temps, que reste-t-il si on soustrait à ?   La plus grande puissance de qui est plus petite que ce nombre est . En répétant la méthode ci-dessus, on calcule combien de fois cette puissance rentre dans .   La puissance peut rentrer fois, ce qui veut dire que le symbole utilisé sera : . On soustrait de pour obtenir le reste.   On effectue une dernière étape complète avant de donner la réponse. Le reste pourra être complété en exercice. La cinquième puissance de sera la prochaine à être utilisée.   On peut donc mettre fois dans , ce qui signifie que le symbole utilisé sera . On aura . Le reste sera égal à , comme le montre le calcul ci-dessous.   Au final, on peut montrer que . L'exercice demande le reste de la démarche.    La base hexadécimale est beaucoup utilisée en informatique, car on peut passer facilement de binaire à hexadécimale ou l'inverse sans passer par l'intermédiaire de la base dix. De plus, un nombre en base seize est moins long à écrire qu'un nombre en base deux (en terme de nombre de caractère à utiliser). Pour voir comment passer de la base deux vers la base hexadécimale, on considère l'exemple suivant. On veut convertir le nombre sous forme hexadécimale. Exprimé sous forme de puissances de deux, ce nombre est . On regroupe maintenant ces termes en paquets de quatre, en effectuant une mise en évidence de la plus grande puissance de deux possible. On obtient alors . On peut maintenant remarquer deux choses. Dans un premier temps, on a et . En regroupant comme cela, on fait ressortir des puissances de 16, justement les puissances nécessaires pour écrire en base hexadécimale. Ensuite, dans les parenthèses, il ne reste que des puissance de deux entre et . Avec quatre chiffre binaire, on peut obtenir n'importe quel nombre entre et , exactement le nombre de caractères utilisés dans la base hexadécimale. Le nombre peut donc se réécrire comme suit: .  On remarque que les chiffres dans les parenthèses de l'équation sont les mêmes chiffres que ceux de la représentation binaire, séparés en groupe de quatre. Pourquoi quatre? Parce que tel qu'observé, en effectuant une mise en évidence pour un groupe de quatre, on obtient des puissances de seize. L'algorithme suivant décrit la procédure pour convertir un nombre binaire en hexadécimal et hexadécimal en binaire   Conversion entre binaire et hexadécimale  Pour convertir un nombre binaire en hexadécimale, on effectue les étapes suivantes.  De droite à gauche, sépare les chiffres en groupe de quatre. Si le groupe à gauche ne contient pas quatre chiffres, on comble avec des zéros à sa gauche.  On convertit chaque groupe de quatre en une valeur de à , en associant et si nécessaire.  En juxtaposant les chiffres obtenus, on obtient la représentation en hexadécimale.   En inversant ce processus on peut aussi convertir d'hexadécimal à binaire.  Convertir chaque caractère du nombre hexadecimal en binaire, en ajoutant des zéros à la gauche au besoin pour former des groupes de quatre chiffres.  Regrouper les groupes en un seul nombre.  Supprimer les zéros complètement à gauche si nécessaire.      On montre des exemples additionnels de cette procédure dans l'exemple suivant.   Des conversions entre binaire et hexadécimal  On veut convertir les nombres et en hexadécimal et les nombres et en binaire.  On commence par convertir les nombres binaires en base seize. Pour , on forme les groupes , ayant pris soin d'ajouter deux zéros à la gauche du premier bloc. Ces nombres correspondent respectivement à et en hexadécimal et donc, . D'une manière similaire, se regroupe comme , qui se convertissent comme et , pour donner .  Pour convertir les nombres hexadecimaux en binaire, on suit la procédure établie dans l'algorithme . Pour , on obtient , ce qui donne en regroupant et en éliminant les zéros de gauche . Ensuite pour , on a , ce qui donne . On voit bien ici l'avantage du système hexadécimal pour la longueur du nombre.     Opérations élémentaires en base deux  On s'intéresse maintenant à l'arithmétique dans les autres bases. Par simplicité, on n'utilise que le binaire, mais les opérations dans les autres bases se font essentiellement de la même manière.  Pour additionner deux nombres, on apprend assez tôt de faire l'addition position par position, en appliquant la retenue lorsque la somme des chiffres d'une même colonne dépasse dix. Le principe est le même en binaire, toutefois les retenues arrivent dès que la somme est supérieure ou égale à deux. En binaire, . Voici un exemple d'addition de et en base deux. Dans la colonne à droite de cet exemple, on effectue en binaire. Le résultat donne , d'où le dans la troisième ligne et le dans la ligne des retenues. Ensuite, on additionne cette retenue avec le et le de cette colonne. Ceci donne encore une fois , entrainant une autre retenue dans la colonne à gauche. Cette fois, pour la troisième colonne, il y a deux à additionner en plus de la retenue. Cela donne , expliquant pourquoi dans la réponse on obtient un ainsi que dans la retenue. On poursuit ensuite de droite à gauche jusqu'à épuisement des nombres et des retenues.  Les soustractions fonctionnent aussi de manière similaire à l'arithmétique en base dix. Au lieu d'avoir des retenues, on fait des emprunts lorsqu'on doit soustraire à . Dans ce cas, la soustraction devient après emprunt, et l'emprunt se fait vers la gauche sur le prochain chiffre non nul (on ne peut emprunter à un ). Voici un exemple de la soustraction de et .   Dans la deuxième colonne, il a été nécessaire de faire un emprunt. On a donc remplacé le de la première colonne par et en soustrayant le , on obtient . Il a aussi fallu emprunter dans la troisième colonne. Comme la quatrième est aussi nulle, on emprunte à la cinquième, ainsi devient avec le dernier considéré comme . La troisième colonne devient , la quatrième et la cinquième . Finalement, la dernière colonne est . Au final on a .  On veut maintenant effectuer une multiplication de deux nombres binaires. L'algorithme utilisé pour faire une multiplication en base dix peut être repris, mais on utilise une approche différente, similaire à la manière dont les ordinateurs font les calculs. Celle-ci exploite le fait que multiplié un nombre par une puissance de deux est équivalents à ajouter un certain nombre de zéros à la fin, comme multiplié par etc. en base dix. Par exemple, pour faire on a .  De manière plus générale, on ajoute autant de zéros qu'il y en a dans l'écriture de la puissance de deux.Pour un produit quelconque, on va décomposer l'un des facteur selon ses puissances de deux, distribuer sur l'autre facteur et additionner les nombres obtenus.   Une multiplication binaire  On veut effectuer le produit de par en décomposant selon ses puissances.  Puisque , on aura . On ajoute à chaque terme le bon nombre de zéros et on obtient . Finalement, on additionne    Si on veut multiplier des nombres réels avec un nombre fini de chiffre après le point, on procède comme suit. Une puissance négative de deux équivaut à déplacer le point vers la gauche, de un chiffre par valeur de dans . Ainsi, , puisque . On considère un exemple plus complexe.   Multiplication binaire de nombres réels  On veut effectuer .   En suivant la méthode pour les entiers, on décompose l'un des facteur en une somme de de puissances de deux. Ici, on choisit de décomposer le deuxième facteur, puisqu'il contient moins de chiffre. On a . Le produit devient     Finalement, la division en binaire s'effectue aussi comme la division en base dix, en cherchant combien de fois on peut mettre ce par quoi on divise dans le nombre divisé. Une fois que suffisamment de chiffres du dividende (le nombre qui est divisé) ont été considérés pour que le diviseur puisse être soustrait au moins une fois, on utilise les autres chiffres du dividende de droite à gauche en abaissant un à un après la soustraction. Un exemple est illustré ci-dessous.                                                                                    Pour la division binaire, les chiffres du quotient (la réponse) ne peuvent être que ou . On revoit la même division que ci-dessous, mais en binaire, soit .                                                                                                                                                                           reste          On pourra vérifier que et bien sûr, . On considère un autre exemple.   Division en binaire  On souhaite effectuer la division de par en binaire.  On commence par convertir les nombres en binaire. Pour , on obtient et pour , c'est . Le résultat de la division est donné ci-dessous.                                                                                        reste           La division de réels est bien sûr possible, mais on se restreint à la division de nombres naturels.    (Section supplémentaire) Représentation en circuits d'opérations binaires  À l'exercice , on définit un circuit à deux entrées et deux sorties. Ce circuit est appelé un demi-additionneur. Étant donné deux entrées binaires, il retourne leur somme comme un nombre à deux chiffres, la puissance de comme somme et la puissance de comme retenue . Ainsi, sera retournée comme et , alors que sera retournée comme et .  On peut maintenant considérer l'addition binaire générale. Une addition se fait colonne par colonne. La somme d'une colonne est obtenue en faisant la somme des chiffres des nombres à additionner plus la retenue de la colonne précédente, le cas échéant. On va maintenant construire le circuit effectuant cette opération. Dans ce circuit, on note le chiffre du premier terme de l'addition, le second, la retenue de la colonne précédente, la somme de la colonne et la nouvelle retenue. La figure illustre l'additionneur.   Un circuit additionneur   Une circuit à trois entrées et deux sorties est illustré. Les entrées A et B se combinent dans une porte XOR et dans une porte ET. Le résultat de la porte XOR se combine dans une autre porte XOR avec l'entrée P pour donner la sortie S. Puis la première porte XOR se combine encore avec P, mais cette fois-ci dans une porte ET. Le résultat des deux portes ET se combinent dans une porte OU pour produire la sortie R.    On peut comprendre le circuit en considérant la table de vérité de l'opération et en utilisant une forme normale. La table est donnée ci-dessous   L'addition de deux chiffres et une retenue en binaire                                                                                                                                                              On regarde l'expression pour à l'aide de la forme normale disjonctive. La sortie sera égale à si . On peut ensuite utiliser les règles de la logique pour simplifier un peu l'expression. . L'exercice permettra de montrer que .  On observe dans le circuit de l'additionneur la présence de deux circuits demi-additionneurs, illustrés par les boites dans le circuit équivalent de la figure .   Un circuit additionneur réduit grâce aux circuits demi-additonneurs   Une circuit à trois entrées et deux sorties est illustré. Les entrées A et B se combinent dans un circuit demi-additionneur. La sortie S de ce circuit se combine dans un autre circuit demi-additionneur avec l'entrée P. La sortie S de ce second demi-additionneur produit la sortie S globale du circuit. Puis, les sorties R des deux demi-additionneurs se combinent pour produire la sortie globale R du circuit.    Maintenant, à partir de plusieurs combinaisons de circuits additionneurs, on peut illustrer comment faire l'addition de deux nombres binaires. La quantité de circuits additionneurs à utiliser dépend du nombres de chiffres utilisés pour représenter les nombres. Dans la figure , on illustre un circuit permettant de faire l'addition de nombres binaires écrits avec quatre chiffres. La sortie d'un tel système sera un nombre à cinq chiffres, avec potentiellement le premier de ces chiffres égal à zéro. Pour faire , on suppose que , et . Le circuit additionne, de haut en bas, les chiffres de droite à gauche de et .   Un circuit additionneur pour des nombres binaires à quatre chiffre   Une circuit à huit entrées et cinq sorties est illustré. Les entrées A0 et B0 se combinent dans un circuit demi-additionneur. La sortie S de ce circuit produit la sortie S0 puis la sortie R se combine avec les entrées A1 et B1 dans un additionneur. La sortie S de cette additionneur produit S1 et la sortie R se combine avec A2 et B2 dans un autre additionneur. On continue ainsi de suite jusqu'au dernier additionneur, qui produit S3 par sa sortie S et S4 par sa sortie R.       Les points importants de cette section sont:  Le principe d'un système positionnel , où chaque chiffre représente un multiple d'une puissance de la base.  La conversion d'un nombre en binaire en un nombre en base dix .  La conversion d'un nombre en base dix en un nombre en binaire .  La conversion d'un nombre en hexadécimal en un nombre en base dix .  La conversion d'un nombre en base dix en un nombre en hexadécimal .  La conversion directe entre binaire et hexadécimal.  Les opérations d'addition , soustraction , multiplication et division en base deux.       Ces questions sont à faire avant de venir en classe et à remettre au début du cours.    Donner les huit nombres binaires qui suivent .  Donner les dix nombres hexadécimaux qui suivent .  Qu'ont de particulier les nombres binaires qui se terminent par ?  Convertir les nombres suivants en base dix.    Effectuer les additions suivantes.  Effectuer les multiplications suivantes.  Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.       Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Convertir les nombres suivants en binaire.     Convertir les nombres suivants en hexadécimal.  Convertir les nombres réels suivants en base deux.  Convertir les nombres ci-dessous en base seize sans passer par la base dix .  Convertir les nombres ci-dessous en binaire sans passer par la base dix.  Compléter la conversion de en hexadécimal entamée à l'exemple .  On considère . On pose l'ensemble des nombres dans qui ont un à la position dans leur représentation binaire, ceux qui ont un à la position et ainsi de suite. Donner une description en extension de . Que sont les nombres dans ? , et donc Que vaut Énumérer les éléments dans .    Par définition, on a que , alors que . Ainsi,   Énumérer les éléments dans .    Par définition, on a que , alors que . Ainsi,    On considère la fonction qui associe à chaque nombre naturel la somme de ses chiffres dans la représentation binaire, par exemple . Soit . Calculer .   Quelle est l'image de l'ensemble ?   Donner , soit les nombres dans qui ont comme image .   De façon générale, que vaut ?  est l'ensemble des puissances de .  Effectuer les opérations suivantes.             On effectue alors l'addition    Effectuer les soustractions suivantes.      Effectuer les divisions suivantes afin de trouver le quotient et le reste.                                                                                                                                   reste                 Effectuer les soustractions suivantes, en décimale ou en binaire. Remarquer que le nombre de gauche est toujours une puissance de deux.                       Que peut-on dire du résulat de la soustraction d'un nombre à une puissance de deux supérieure? Le résultat de la soustraction est obtenu de la manière suivante:  À partir de la droite, on garde les premiers zéros et le premier un.  Tous les autres chiffres sont inversés. Les zéros deviennent des uns et les uns deviennent des zéros.      Exercices supplémentaires  Montrer en utilisant une table de vérité et la forme normale disjonctive que la retenue d'un additionneur s'écrit comme . À l'aide de la table de vérité, on trouve la forme normale disjonctive de: . À l'aide des propriétés, on obtient    La complémentation à On a vu dans le texte, faire une soustraction est une opération difficile comparativement à faire une addition. L'exercice laisse entrevoir une manière différente de faire les soustractions. C'est d'ailleurs avec cette méthode (un peu modifiée) qu'un ordinateur effectue les soustractions. La méthode est basée sur l'observation suivante: .  Pour soustraire à , on lui additionne plutôt le complément à de selon la puissance . On décortique la méthode ci-dessous. Le complément à selon la puissance d'un nombre binaire est le nombre obtenu en faisant la soustraction . Grâce à l'exercice , on peut observer ceci. Le complément par rapport à une puissance est obtenu en écrivant le nombre avec chiffres, ajoutant au besoin des zéros à gauche. Par la suite:  À partir de la droite, on garde les premiers zéros et le premier un.  Tous les autres chiffres sont inversés. Les zéros deviennent des uns et les uns deviennent des zéros.   Par exemple, le complément de par rapport à la puissance est . Celui-ci correspond à la réponse de la soustraction à l'exercice .  Vérifier les réponses de l'exercice en utilisant la méthode du complément. Trouver le complément de par rapport à la puissance . Pour revenir à la soustraction , une fois le complément de calculé, on additionne , ce qui donne un nombre à au plus chiffres significatifs (à partir du premier à gauche). On distingue alors deux cas, selon si ou . Vérifier que et que le résultat correspond au résultat de , en ignorant le chiffre le plus à gauche. On prend le complément selon la puissance . Calculer en utilisant l'observation ci-dessus. En prenant le complément à 2 selon la puissance 5, on a . Ainsi, en ommettant le le plus à gauche, on a Lorsque , l'algorithme de soustraction ne fonctionne pas. On a alors deux options. La première consiste à faire à la place et de mettre un signe négatif devant la réponse, puisque . L'autre option utilise un argument similaire pour montrer que . Le membre de droite de l'équation précédente n'est rien d'autre que le complément de . On a donc . Utiliser la première méthode pour calculer . Utiliser la seconde méthode pour calculer .  On désire construire un circuit qui va permettre de déterminer si deux nombres écrits en binaire sont égaux. L'idée est de comparer chiffre par chiffre, l'égalité étant vérifiée si tous les chiffres à la même position sont égaux. Quelle porte permet de vérifier si deux entrées ont la même valeur? C'est la négation d'une porte spécifique. Illustrer le circuit permettant de vérifier l'égalité de deux nombres écrits à l'aide de deux chiffres. Généraliser l'idée du circuit précédent pour des nombres à chiffres. Penser à utiliser une porte ET multiple.  On considère le circuit de la figure , qui prend deux nombres binaires écrits à l'aide de deux chiffres. Comparer différentes possibilités de et afin de déterminer ce que fait ce circuit.   Un circuit pour nombres binaires à deux chiffres   Un circuit à quatre entrées et une sortie est représentée. L'entrée A0 se combine avec la négation de l'entrée B0 dans une porte ET. Les entrées A1 et B1 se combinent dans une porte NXOR (non ou exclusif). La sortie de cette porte se combine avec la sortie de la première porte ET dans une deuxième porte ET. Ensuite, A1 se combine cette fois avec la négation de B1 dans une porte ET, et le résultat de cette porte se combine dans une porte OU avec le résultat de la deuxième porte ET pour produire la sortie finale du circuit.    Vérifier que le cicuit correspond à l'expression , où l'expression vaut si les deux entrées ont la même valeur et sinon. En utilisant une boite générique pour illustrer le circuit d'égalité de l'exercice , illustrer un circuit permettant de généraliser celui de la figure pour des nombres à n chiffres.    "
},
{
  "id": "subs-sysPositionnel-4",
  "level": "2",
  "url": "sec-representation.html#subs-sysPositionnel-4",
  "type": "Exemple",
  "number": "3.1.1",
  "title": "Des exemples en base quatre.",
  "body": " Des exemples en base quatre  On considère les nombres suivants, écrits en base quatre:  ;  ;  .  On cherche leur valeur en base dix.    L'idée est de reprendre le principe de la décomposition sous une forme des puissances de .    On a donc .  De plus, .  Finalement, .    "
},
{
  "id": "fig-repbase",
  "level": "2",
  "url": "sec-representation.html#fig-repbase",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " Les nombres de à dans différentes bases   "
},
{
  "id": "tab-puissances2",
  "level": "2",
  "url": "sec-representation.html#tab-puissances2",
  "type": "Table",
  "number": "3.1.3",
  "title": "Les premières puissances de <span class=\"process-math\">\\(2\\)<\/span>",
  "body": " Les premières puissances de     Puissance de                                            Valeur en base dix                                           "
},
{
  "id": "ex-binairedecimale",
  "level": "2",
  "url": "sec-representation.html#ex-binairedecimale",
  "type": "Exemple",
  "number": "3.1.4",
  "title": "Du binaire vers la base dix.",
  "body": " Du binaire vers la base dix  On veut convertir les nombres suivants en base dix:  ;  ;  ;  .      On réécrit avec les puissances de deux .  On réécrit avec les puissances de deux .  On réécrit avec les puissances de deux .  On réécrit avec les puissances de deux .    "
},
{
  "id": "ex-decimalebinaire",
  "level": "2",
  "url": "sec-representation.html#ex-decimalebinaire",
  "type": "Exemple",
  "number": "3.1.5",
  "title": "De la base dix vers le binaire.",
  "body": " De la base dix vers le binaire   On cherche à convertir les nombres suivants en binaire:  ;  .    On sait qu'un nombre en binaire va s'écrire sous la forme avec tous les . Pour trouver , on cherche la plus grande puissance de la base qui est plus petite ou égale au nombre à convertir. Le nombre sera celui la valeur de cette puissance. Ainsi pour , la plus grande puissance qui est plus petite est . On a donc .  Il faut ensuite choisir la plus grande valeur de possible de sorte que soit inférieure au nombre . Pour la base deux, le choix est simple et sera toujours . Ainsi pour , on a : . On envoie le terme trouvé du côté du nombre en soustrayant et on répète ce processus jusqu'à ce que tous les soient déterminés. . En reprenant les valeurs de non nulles, on a .   On montre une manière plus concise d'écrire le raisonnement précédent. La plus grande puissance de qui est inférieure ou égale à est . On a donc  "
},
{
  "id": "sec-representation-4-9",
  "level": "2",
  "url": "sec-representation.html#sec-representation-4-9",
  "type": "Exemple",
  "number": "3.1.6",
  "title": "D’une représentation binaire fractionnaire à décimale.",
  "body": " D'une représentation binaire fractionnaire à décimale   On considère le nombre et on cherche sa conversion en base dix.   On décompose le nombre selon les puissances négatives de pour obtenir .  "
},
{
  "id": "sec-representation-4-11",
  "level": "2",
  "url": "sec-representation.html#sec-representation-4-11",
  "type": "Table",
  "number": "3.1.7",
  "title": "",
  "body": "  Puissances négatives de   Puissance de                             Valeurs décimales                            "
},
{
  "id": "sec-representation-4-12",
  "level": "2",
  "url": "sec-representation.html#sec-representation-4-12",
  "type": "Exemple",
  "number": "3.1.8",
  "title": "D’une représentation décimale fractionnaire à binaire.",
  "body": " D'une représentation décimale fractionnaire à binaire  On veut convertir le nombre en binaire.  L'idée est la même que celle utilisée à l'exemple . On cherche la plus grande puissance de qui est plus petite ou égale à . Dans ce cas, c'est . On a donc .  "
},
{
  "id": "fig-repbas16",
  "level": "2",
  "url": "sec-representation.html#fig-repbas16",
  "type": "Figure",
  "number": "3.1.9",
  "title": "",
  "body": " Les nombres de à en base seize   "
},
{
  "id": "sec-representation-5-6",
  "level": "2",
  "url": "sec-representation.html#sec-representation-5-6",
  "type": "Table",
  "number": "3.1.10",
  "title": "Puissances de 16",
  "body": "Puissances de 16    Puissance de seize                               Valeurs décimales                               "
},
{
  "id": "ex-decihexa",
  "level": "2",
  "url": "sec-representation.html#ex-decihexa",
  "type": "Exemple",
  "number": "3.1.11",
  "title": "Conversion entre système décimal et système hexadécimal.",
  "body": " Conversion entre système décimal et système hexadécimal  On veut convertir en décimal et en hexadécimal.   La conversion d'hexadécimal vers la base dix étant plus simple, on débute par celle-ci. On a .   Pour la conversion de la base décimale vers la base seize, on regarde encore quelle est la plus grande puissance de seize qui est inférieure ou égale au nombre à convertir. Pour , c'est qui sera utilisé. Il y a toutefois une étape supplémentaire à considérer par rapport à la conversion au binaire. Combien de fois rentre-t-il dans ? On utilise Sage pour faire ce calcul, en notant qu'à la section suivante on aura un opérateur spécial qui donnera directement la réponse, sans tenir compte de la partie fractionnaire.   Comme on obtient , on déduit qu'on peut mettre trois puissances de , mais pas quatre. On a donc . On poursuit les calculs avec Sage. Dans un premier temps, que reste-t-il si on soustrait à ?   La plus grande puissance de qui est plus petite que ce nombre est . En répétant la méthode ci-dessus, on calcule combien de fois cette puissance rentre dans .   La puissance peut rentrer fois, ce qui veut dire que le symbole utilisé sera : . On soustrait de pour obtenir le reste.   On effectue une dernière étape complète avant de donner la réponse. Le reste pourra être complété en exercice. La cinquième puissance de sera la prochaine à être utilisée.   On peut donc mettre fois dans , ce qui signifie que le symbole utilisé sera . On aura . Le reste sera égal à , comme le montre le calcul ci-dessous.   Au final, on peut montrer que . L'exercice demande le reste de la démarche.   "
},
{
  "id": "algo-binhex",
  "level": "2",
  "url": "sec-representation.html#algo-binhex",
  "type": "Algorithme",
  "number": "3.1.12",
  "title": "Conversion entre binaire et hexadécimale.",
  "body": " Conversion entre binaire et hexadécimale  Pour convertir un nombre binaire en hexadécimale, on effectue les étapes suivantes.  De droite à gauche, sépare les chiffres en groupe de quatre. Si le groupe à gauche ne contient pas quatre chiffres, on comble avec des zéros à sa gauche.  On convertit chaque groupe de quatre en une valeur de à , en associant et si nécessaire.  En juxtaposant les chiffres obtenus, on obtient la représentation en hexadécimale.   En inversant ce processus on peut aussi convertir d'hexadécimal à binaire.  Convertir chaque caractère du nombre hexadecimal en binaire, en ajoutant des zéros à la gauche au besoin pour former des groupes de quatre chiffres.  Regrouper les groupes en un seul nombre.  Supprimer les zéros complètement à gauche si nécessaire.     "
},
{
  "id": "sec-representation-5-12",
  "level": "2",
  "url": "sec-representation.html#sec-representation-5-12",
  "type": "Exemple",
  "number": "3.1.13",
  "title": "Des conversions entre binaire et hexadécimal.",
  "body": " Des conversions entre binaire et hexadécimal  On veut convertir les nombres et en hexadécimal et les nombres et en binaire.  On commence par convertir les nombres binaires en base seize. Pour , on forme les groupes , ayant pris soin d'ajouter deux zéros à la gauche du premier bloc. Ces nombres correspondent respectivement à et en hexadécimal et donc, . D'une manière similaire, se regroupe comme , qui se convertissent comme et , pour donner .  Pour convertir les nombres hexadecimaux en binaire, on suit la procédure établie dans l'algorithme . Pour , on obtient , ce qui donne en regroupant et en éliminant les zéros de gauche . Ensuite pour , on a , ce qui donne . On voit bien ici l'avantage du système hexadécimal pour la longueur du nombre.  "
},
{
  "id": "ex-multBin",
  "level": "2",
  "url": "sec-representation.html#ex-multBin",
  "type": "Exemple",
  "number": "3.1.14",
  "title": "Une multiplication binaire.",
  "body": " Une multiplication binaire  On veut effectuer le produit de par en décomposant selon ses puissances.  Puisque , on aura . On ajoute à chaque terme le bon nombre de zéros et on obtient . Finalement, on additionne   "
},
{
  "id": "subs-opeElemBin-10",
  "level": "2",
  "url": "sec-representation.html#subs-opeElemBin-10",
  "type": "Exemple",
  "number": "3.1.15",
  "title": "Multiplication binaire de nombres réels.",
  "body": " Multiplication binaire de nombres réels  On veut effectuer .   En suivant la méthode pour les entiers, on décompose l'un des facteur en une somme de de puissances de deux. Ici, on choisit de décomposer le deuxième facteur, puisqu'il contient moins de chiffre. On a . Le produit devient    "
},
{
  "id": "subs-opeElemBin-15",
  "level": "2",
  "url": "sec-representation.html#subs-opeElemBin-15",
  "type": "Exemple",
  "number": "3.1.16",
  "title": "Division en binaire.",
  "body": " Division en binaire  On souhaite effectuer la division de par en binaire.  On commence par convertir les nombres en binaire. Pour , on obtient et pour , c'est . Le résultat de la division est donné ci-dessous.                                                                                        reste          "
},
{
  "id": "fig-additionneur",
  "level": "2",
  "url": "sec-representation.html#fig-additionneur",
  "type": "Figure",
  "number": "3.1.17",
  "title": "",
  "body": " Un circuit additionneur   Une circuit à trois entrées et deux sorties est illustré. Les entrées A et B se combinent dans une porte XOR et dans une porte ET. Le résultat de la porte XOR se combine dans une autre porte XOR avec l'entrée P pour donner la sortie S. Puis la première porte XOR se combine encore avec P, mais cette fois-ci dans une porte ET. Le résultat des deux portes ET se combinent dans une porte OU pour produire la sortie R.   "
},
{
  "id": "sec-representation-7-6",
  "level": "2",
  "url": "sec-representation.html#sec-representation-7-6",
  "type": "Table",
  "number": "3.1.18",
  "title": "L’addition de deux chiffres et une retenue en binaire",
  "body": " L'addition de deux chiffres et une retenue en binaire                                                                                                                                                             "
},
{
  "id": "fig-additionneurreduit",
  "level": "2",
  "url": "sec-representation.html#fig-additionneurreduit",
  "type": "Figure",
  "number": "3.1.19",
  "title": "",
  "body": " Un circuit additionneur réduit grâce aux circuits demi-additonneurs   Une circuit à trois entrées et deux sorties est illustré. Les entrées A et B se combinent dans un circuit demi-additionneur. La sortie S de ce circuit se combine dans un autre circuit demi-additionneur avec l'entrée P. La sortie S de ce second demi-additionneur produit la sortie S globale du circuit. Puis, les sorties R des deux demi-additionneurs se combinent pour produire la sortie globale R du circuit.   "
},
{
  "id": "fig-additionneur4bits",
  "level": "2",
  "url": "sec-representation.html#fig-additionneur4bits",
  "type": "Figure",
  "number": "3.1.20",
  "title": "",
  "body": " Un circuit additionneur pour des nombres binaires à quatre chiffre   Une circuit à huit entrées et cinq sorties est illustré. Les entrées A0 et B0 se combinent dans un circuit demi-additionneur. La sortie S de ce circuit produit la sortie S0 puis la sortie R se combine avec les entrées A1 et B1 dans un additionneur. La sortie S de cette additionneur produit S1 et la sortie R se combine avec A2 et B2 dans un autre additionneur. On continue ainsi de suite jusqu'au dernier additionneur, qui produit S3 par sa sortie S et S4 par sa sortie R.   "
},
{
  "id": "rq-representation-2-1",
  "level": "2",
  "url": "sec-representation.html#rq-representation-2-1",
  "type": "Question de compréhension",
  "number": "3.1.6.1",
  "title": "",
  "body": "Donner les huit nombres binaires qui suivent . "
},
{
  "id": "rq-representation-2-2",
  "level": "2",
  "url": "sec-representation.html#rq-representation-2-2",
  "type": "Question de compréhension",
  "number": "3.1.6.2",
  "title": "",
  "body": "Donner les dix nombres hexadécimaux qui suivent . "
},
{
  "id": "rq-representation-2-3",
  "level": "2",
  "url": "sec-representation.html#rq-representation-2-3",
  "type": "Question de compréhension",
  "number": "3.1.6.3",
  "title": "",
  "body": "Qu'ont de particulier les nombres binaires qui se terminent par ? "
},
{
  "id": "rq-representation-2-4",
  "level": "2",
  "url": "sec-representation.html#rq-representation-2-4",
  "type": "Question de compréhension",
  "number": "3.1.6.4",
  "title": "",
  "body": "Convertir les nombres suivants en base dix. "
},
{
  "id": "rq-representation-3-1",
  "level": "2",
  "url": "sec-representation.html#rq-representation-3-1",
  "type": "Question de compréhension",
  "number": "3.1.6.5",
  "title": "",
  "body": "Effectuer les additions suivantes. "
},
{
  "id": "rq-representation-3-2",
  "level": "2",
  "url": "sec-representation.html#rq-representation-3-2",
  "type": "Question de compréhension",
  "number": "3.1.6.6",
  "title": "",
  "body": "Effectuer les multiplications suivantes. "
},
{
  "id": "rq-representation-3-3",
  "level": "2",
  "url": "sec-representation.html#rq-representation-3-3",
  "type": "Question de compréhension",
  "number": "3.1.6.7",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-conversionbinaire",
  "level": "2",
  "url": "sec-representation.html#exo-conversionbinaire",
  "type": "Exercice",
  "number": "3.1.7.1",
  "title": "",
  "body": "Convertir les nombres suivants en binaire.    "
},
{
  "id": "exo-conversionhexadecimale",
  "level": "2",
  "url": "sec-representation.html#exo-conversionhexadecimale",
  "type": "Exercice",
  "number": "3.1.7.2",
  "title": "",
  "body": "Convertir les nombres suivants en hexadécimal. "
},
{
  "id": "exo-representation-2-5",
  "level": "2",
  "url": "sec-representation.html#exo-representation-2-5",
  "type": "Exercice",
  "number": "3.1.7.3",
  "title": "",
  "body": "Convertir les nombres réels suivants en base deux. "
},
{
  "id": "exo-representation-2-6",
  "level": "2",
  "url": "sec-representation.html#exo-representation-2-6",
  "type": "Exercice",
  "number": "3.1.7.4",
  "title": "",
  "body": "Convertir les nombres ci-dessous en base seize sans passer par la base dix . "
},
{
  "id": "exo-representation-2-7",
  "level": "2",
  "url": "sec-representation.html#exo-representation-2-7",
  "type": "Exercice",
  "number": "3.1.7.5",
  "title": "",
  "body": "Convertir les nombres ci-dessous en binaire sans passer par la base dix. "
},
{
  "id": "exo-hexaafinir",
  "level": "2",
  "url": "sec-representation.html#exo-hexaafinir",
  "type": "Exercice",
  "number": "3.1.7.6",
  "title": "",
  "body": "Compléter la conversion de en hexadécimal entamée à l'exemple . "
},
{
  "id": "exo-representation-2-9",
  "level": "2",
  "url": "sec-representation.html#exo-representation-2-9",
  "type": "Exercice",
  "number": "3.1.7.7",
  "title": "",
  "body": "On considère . On pose l'ensemble des nombres dans qui ont un à la position dans leur représentation binaire, ceux qui ont un à la position et ainsi de suite. Donner une description en extension de . Que sont les nombres dans ? , et donc Que vaut Énumérer les éléments dans .    Par définition, on a que , alors que . Ainsi,   Énumérer les éléments dans .    Par définition, on a que , alors que . Ainsi,   "
},
{
  "id": "exo-representation-2-10",
  "level": "2",
  "url": "sec-representation.html#exo-representation-2-10",
  "type": "Exercice",
  "number": "3.1.7.8",
  "title": "",
  "body": "On considère la fonction qui associe à chaque nombre naturel la somme de ses chiffres dans la représentation binaire, par exemple . Soit . Calculer .   Quelle est l'image de l'ensemble ?   Donner , soit les nombres dans qui ont comme image .   De façon générale, que vaut ?  est l'ensemble des puissances de . "
},
{
  "id": "exo-representation-2-11",
  "level": "2",
  "url": "sec-representation.html#exo-representation-2-11",
  "type": "Exercice",
  "number": "3.1.7.9",
  "title": "",
  "body": "Effectuer les opérations suivantes.             On effectue alors l'addition   "
},
{
  "id": "exo-representation-2-12",
  "level": "2",
  "url": "sec-representation.html#exo-representation-2-12",
  "type": "Exercice",
  "number": "3.1.7.10",
  "title": "",
  "body": "Effectuer les soustractions suivantes.     "
},
{
  "id": "exo-representation-2-13",
  "level": "2",
  "url": "sec-representation.html#exo-representation-2-13",
  "type": "Exercice",
  "number": "3.1.7.11",
  "title": "",
  "body": "Effectuer les divisions suivantes afin de trouver le quotient et le reste.                                                                                                                                   reste                "
},
{
  "id": "exo-puissmoinsnombre",
  "level": "2",
  "url": "sec-representation.html#exo-puissmoinsnombre",
  "type": "Exercice",
  "number": "3.1.7.12",
  "title": "",
  "body": "Effectuer les soustractions suivantes, en décimale ou en binaire. Remarquer que le nombre de gauche est toujours une puissance de deux.                       Que peut-on dire du résulat de la soustraction d'un nombre à une puissance de deux supérieure? Le résultat de la soustraction est obtenu de la manière suivante:  À partir de la droite, on garde les premiers zéros et le premier un.  Tous les autres chiffres sont inversés. Les zéros deviennent des uns et les uns deviennent des zéros.   "
},
{
  "id": "exo-circuitretenue",
  "level": "2",
  "url": "sec-representation.html#exo-circuitretenue",
  "type": "Exercice",
  "number": "3.1.7.13",
  "title": "",
  "body": "Montrer en utilisant une table de vérité et la forme normale disjonctive que la retenue d'un additionneur s'écrit comme . À l'aide de la table de vérité, on trouve la forme normale disjonctive de: . À l'aide des propriétés, on obtient   "
},
{
  "id": "exo-representation-3-3",
  "level": "2",
  "url": "sec-representation.html#exo-representation-3-3",
  "type": "Exercice",
  "number": "3.1.7.14",
  "title": "La complémentation à <span class=\"process-math\">\\(2\\)<\/span>.",
  "body": "La complémentation à On a vu dans le texte, faire une soustraction est une opération difficile comparativement à faire une addition. L'exercice laisse entrevoir une manière différente de faire les soustractions. C'est d'ailleurs avec cette méthode (un peu modifiée) qu'un ordinateur effectue les soustractions. La méthode est basée sur l'observation suivante: .  Pour soustraire à , on lui additionne plutôt le complément à de selon la puissance . On décortique la méthode ci-dessous. Le complément à selon la puissance d'un nombre binaire est le nombre obtenu en faisant la soustraction . Grâce à l'exercice , on peut observer ceci. Le complément par rapport à une puissance est obtenu en écrivant le nombre avec chiffres, ajoutant au besoin des zéros à gauche. Par la suite:  À partir de la droite, on garde les premiers zéros et le premier un.  Tous les autres chiffres sont inversés. Les zéros deviennent des uns et les uns deviennent des zéros.   Par exemple, le complément de par rapport à la puissance est . Celui-ci correspond à la réponse de la soustraction à l'exercice .  Vérifier les réponses de l'exercice en utilisant la méthode du complément. Trouver le complément de par rapport à la puissance . Pour revenir à la soustraction , une fois le complément de calculé, on additionne , ce qui donne un nombre à au plus chiffres significatifs (à partir du premier à gauche). On distingue alors deux cas, selon si ou . Vérifier que et que le résultat correspond au résultat de , en ignorant le chiffre le plus à gauche. On prend le complément selon la puissance . Calculer en utilisant l'observation ci-dessus. En prenant le complément à 2 selon la puissance 5, on a . Ainsi, en ommettant le le plus à gauche, on a Lorsque , l'algorithme de soustraction ne fonctionne pas. On a alors deux options. La première consiste à faire à la place et de mettre un signe négatif devant la réponse, puisque . L'autre option utilise un argument similaire pour montrer que . Le membre de droite de l'équation précédente n'est rien d'autre que le complément de . On a donc . Utiliser la première méthode pour calculer . Utiliser la seconde méthode pour calculer . "
},
{
  "id": "exo-circuitegalite",
  "level": "2",
  "url": "sec-representation.html#exo-circuitegalite",
  "type": "Exercice",
  "number": "3.1.7.15",
  "title": "",
  "body": "On désire construire un circuit qui va permettre de déterminer si deux nombres écrits en binaire sont égaux. L'idée est de comparer chiffre par chiffre, l'égalité étant vérifiée si tous les chiffres à la même position sont égaux. Quelle porte permet de vérifier si deux entrées ont la même valeur? C'est la négation d'une porte spécifique. Illustrer le circuit permettant de vérifier l'égalité de deux nombres écrits à l'aide de deux chiffres. Généraliser l'idée du circuit précédent pour des nombres à chiffres. Penser à utiliser une porte ET multiple. "
},
{
  "id": "exo-representation-3-5",
  "level": "2",
  "url": "sec-representation.html#exo-representation-3-5",
  "type": "Exercice",
  "number": "3.1.7.16",
  "title": "",
  "body": "On considère le circuit de la figure , qui prend deux nombres binaires écrits à l'aide de deux chiffres. Comparer différentes possibilités de et afin de déterminer ce que fait ce circuit.   Un circuit pour nombres binaires à deux chiffres   Un circuit à quatre entrées et une sortie est représentée. L'entrée A0 se combine avec la négation de l'entrée B0 dans une porte ET. Les entrées A1 et B1 se combinent dans une porte NXOR (non ou exclusif). La sortie de cette porte se combine avec la sortie de la première porte ET dans une deuxième porte ET. Ensuite, A1 se combine cette fois avec la négation de B1 dans une porte ET, et le résultat de cette porte se combine dans une porte OU avec le résultat de la deuxième porte ET pour produire la sortie finale du circuit.    Vérifier que le cicuit correspond à l'expression , où l'expression vaut si les deux entrées ont la même valeur et sinon. En utilisant une boite générique pour illustrer le circuit d'égalité de l'exercice , illustrer un circuit permettant de généraliser celui de la figure pour des nombres à n chiffres. "
},
{
  "id": "sec-divisibilite",
  "level": "1",
  "url": "sec-divisibilite.html",
  "type": "Section",
  "number": "3.2",
  "title": "La divisibilité dans les entiers",
  "body": "  La divisibilité dans les entiers    Si on prend deux nombres , on peut les additionner, les soustraire et les multiplier et le résultat sera encore un entier. La division est la seule des quatre opérations élémentaires qui n'est pas garantie de rester un entier. C'est peut-être ce qui en fait une opération si riche et si intéressante. Quand est-ce que la division de deux nombres va produire un entier? Comment le vérifier?  Dans cette section, on rappelle la notion de division entière, quotient et reste, on définit le plus grand commun diviseur et le plus petit commun multiple de deux nombres naturels, on montre l'algorithme d'Euclide pour calculer le plus grand commun diviseur.     L'opération de division  Soit deux entiers. Si on divise par , le résultat peut être un entier, comme par exemple avec , un rationnel, avec en exemple ou même non défini, si on divise par . On expliquera prochainement la raison pour laquelle le fait que la division par est non définie est une bonne chose. Dans le cas où , donc où le résultat de la division produit un entier, on dit que divise , et on écrit (la barre étant verticale et non pas oblique comme pour l'opérateur de division).   La divisibilité  Soit avec . On dit que divise et on écrit si le résultat est un entier. On note que les quatre conditions suivantes sont équivalentes:   pour un certain  est un facteur (ou diviseur) de  est un multiple de .     Quand on écrit , c'est soit vrai, soit faux selon . On a donc une proposition. Pour écrire la négation de cette proposition, on peut utiliser la notation pour dire que me divise pas .   Exemples de divisibilité   On cherche la valeur de vérité des propositions suivantes.                 L'énoncé est vrai puisque et .  L'énoncé est faux étant donné que et que .  L'énoncé est faux, car non ne peut pas diviser par .  L'énoncé est vrai, car . En fait, n'importe quel nombre non nul divise .  L'énoncé est vrai puisque est un facteur de .  Le fait que le nombre est négatif ne pose pas de problème. On peut utiliser n'importe quelle des définitions équivalentes, par exemple est un multiple de , spécifiquement fois et donc est vraie.  Puisque , on conclut que est un facteur de et donc que peu importe la valeur de non nulle. La proposition est vraie.  Si on peut montrer une valeur de qui ne respecte pas la condition, alors la proposition sera fausse. Par exemple, si , c'est faux de dire que puisque et ce n'est pas un entier. Donc la proposition est fausse.  Si on arrive à trouver une valeur, la proposition d'existence sera vérifiée. En prenant , on observe que et donc la proposition est vraie.      Les valeurs numériques de l'exemple précédent étaient relativement petites qu'on savait si la relation de divisibilité était vraie assez facilement. Par contre, si on se demande est-ce que divise , alors là ce n'est plus aussi évident. Comment peut-on procéder? On veut trouver un multiple de qui donne ou montrer que c'est impossible. On peut essayer de procéder par étranglement. Si on fait , on obtient une valeur trop grande, alors que si on fait , on obtient une valeur trop petite. Si un multiple existe, il se trouve nécessairement entre et . On essaie , qui est encore trop petit. Avec , on est maintenant trop haut. Le multiple s'il existe se retrouve donc entre et . On peut continuer de couper la poire en deux comme cela pendant un certain temps et éventuellement, on arrive à qui est plus petit et qui est trop grand. On conclut donc que n'est pas un multiple de et donc .  En prenant , on remarque qu'on est à entiers de la cible. On peut donc écrire . Il se trouve qu'on peut généraliser se résultat pour obtenir la notion bien connue de division.   La division euclidienne  Soit avec . Alors il existe des uniques entiers avec pour lesquels .  L'entier est appelé le quotient et l'entier est appelé le reste.    Pour trouver et , on peut procéder comme dans le paragraphe précédant la proposition , ou encore utiliser la méthode pour diviser enseignée au primaire.  On termine avec un exemple présentant des opérateurs de division sur Sage.   La divisibilité et Sage   Sage est capable de calculer facilement les entiers et de la proposition grâce à deux opérateurs spéciaux. Si a\/b produit la division usuelle, donnant un nombre rationnel lorsque , l'opération a\/\/b elle produit le quotient dans l'expession . Pour obtenir le reste, il faut utiliser a%b . La cellule ci-dessous illustre ces opérations.   Voici une version interactive de la cellule précédente.     À remarquer que lorsque est négatif, Sage retourne un reste négatif alors que dans la proposition , on mentionne que le reste doit satisfaire . Il existe tout de même un autre entier qui satisfait cette relation, qui entrainera une valeur du quotient différente.    Retour sur la conversion à partir de la base dix  Dans la section précédente, on a utilisé une méthode similaire à l'étranglement pour convertir un nombre de la base décimale aux bases binaires et hexadécimale. On peut utiliser l'écriture sous forme quotient et reste pour trouver les chiffres de l'écriture dans la nouvelle base. On montre l'idée générale avec un exempe concret, qu'on pourra généraliser facilement par la suite. On considère l'écriture de dans la base deux, établie à l'exemple . On suppose que l'écriture de a chiffres. On remarque que . Puisque , on voit que et donc, selon la proposition , le premier chiffre de l'écriture de en binaire correspond au reste de la division de par . Ensuite pour trouver , on répète avec le quotient . Dans le cas de , on a et . En continuant, , on peut trouver et le prochain quotient égal à . Avec cela, on obtient , amenant le quotient suivant à . On obtient et le quotient suivant vaut . On continue avec pour un quotient de , puis d_5=1 pour un quotient de , pour un quotient de et finalement, pour un quotient de . On peut donc écrire .  Ce qui est bien avec le binaire, c'est que le reste se déduit facilement avec la parité du nombre divisé. Si celui-ci est pair, le reste est de et s'il est impair, le reste est de On peut simplifier la procédure en écrivant les quotients et les restes dans un tableau. La colonne des restes correspond à l'écriture binaire du nombre, les nombres de droite à gauche se trouvant de haut en bas de la colonne. Afin d'illustrer, la conversion du nombre , aussi de l'exemple est donnée dans la table .   Conversion de 101 en binaire avec la méthode des quotients et des restes            Quotients  Restes                                                             La procédure est la même pour les autres bases, mais les restes ne peuvent pas être déterminés aussi facilement qu'en regardant la parité.   Conversion d'un nombre en base dix à un nombre en hexadécimale  On veut convertir en base hexadécimale, afin de valider l'exemple .   On utilise une table dans laquelle on note les quotients et les restes. Ceux-ci peuvent être calculés avec Sage.   Conversion de 987654321 en hexadécimale avec la méthode des quotients et des restes            Quotients  Restes                                                                     Le résultat est donc bel et bien .      L'algorithme d'Euclide  Un concept important en théorie des nombres est celui du plus grand commun diviseur, ou pgcd. Le nom est assez évocateur de ce qu'il représente, mais voici une définition formelle.   Le plus grand commun diviseur  Soit avec (les nombres ne sont pas tous les deux nuls). Le plus grand commun diviseur de , noté , est un entier qui satisfait les trois propriétés suivantes:  ;  et ;  Pour tout , si et , alors .    Lorsque , on dit que et sont copremiers.    On peut trouver le de deux nombres en donnant la liste de tous leurs diviseurs et en prenant le plus grand qu'ils ont en commun. Pour de petits nombres, cette approche est viable, mais pour de plus grands nombres, cela risque d'être inefficace et peu pratique. En fait, factoriser de très grands nombres est une opération difficile. Une grande partie de la sécurité informatique repose sur le fait qu'un même un puissance ordinateur ne peut pas factoriser facilement de très grands nombres. L'algorithme d'Euclide fournit une méthode plus efficace pour calculer le de deux nombres. Avec de très grands nombres, ça peut être long, mais ça utilise des opérations qu'un ordinateur effectue facilement.   L'algorithme d'Euclide  Soit des nombres naturels. Le plus grand commun diviseur de et est le dernier reste non nul de la suite suivante: .    Calcul d'un   En utilisant l'algorithme d'Euclide, on veut calculer  ;  .    On a . Selon l'algorithme d'Euclide, , le dernier reste non nul.   Cette fois-ci, on a . Selon l'algorithme d'Euclide, , le dernier reste non nul. Ces nombres sont donc copremiers.       Les points importants de cette section sont:  La définition de la divisibilité ;  L'écriture en quotient et reste de la division d'un entier par un autre entier;  La conversion d'un nombre en base dix vers une autre base à l'aide de la division euclidienne;  La définition du plus grand commun diviseur de deux nombres;  L'algorithme d'Euclide pour calculer le .        Ces questions sont à faire avant de venir en classe et à remettre au début du cours.    Écrire les divisions suivantes sous la forme quotient et reste. Utiliser la méthode par étranglement comme dans ce paragraphe .    Écrire les divisions suivantes sous la forme quotient et reste. Utiliser la méthode de division à la main comme au primaire.   Convertir les nombres de l'exercice en binaire en utilisant la méthode des divisions.  Convertir les nombres de l'exercice en hexadécimale en utilisant la méthode des divisions.  Que fait l'algorithme suivant?   Une algorithme sur les entiers   def algo(n): laliste = [1] d = 2 while d < n: if n % d == 0: laliste.append(d) d = d + 1 if n > 1: laliste.append(n) return laliste      L'algorithme suivant retourne un couple représentant le quotient et le reste de la division , mais il est incomplet. Pour chacun des quatre endroits écrits ÀCOMPLÉTER , écrire les instructions pour que l'algorithme fonctionne. Il est possible de le tester à même la cellule.   La division euclidienne   def divisionEuclidienne(a, b): #Une algorithme qui retourne (q,r) la forme quotient reste de a\/b: a=bq+r if :#ÀCOMPLÉTER1 print('Le quotient est non défini') elif a == 0: return #ÀCOMPLÉTER2 else: s = b \/ abs(b) # le signe de b q=0 r =a if a > 0: while r - abs(b) >= 0: q = q + s r = #ÀCOMPLÉTER3 return q, r else: #a <0 while r < 0: q = q - s r = #ÀCOMPLÉTER4 return q, r      Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.      Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Convertir les nombres suivants dans la base demandée en utilisant un tableau de division. en binaire.    Conversion de 1775 en binaire avec la méthode des quotients et des restes            Quotients  Restes                                                                                             Ainsi, en lisant la colonne des restes du bas vers le haut, on obtient .  en binaire   Conversion de 2730 en binaire avec la méthode des quotients et des restes            Quotients  Restes                                                                                                     Ainsi, en lisant la colonne des restes du bas vers le haut, on obtient .  en hexadécimale   Conversion de 10632005 en hexadécimale avec la méthode des quotients et des restes            Quotients  Restes                                                     Ainsi, en lisant la colonne des restes du bas vers le haut, on obtient .   Donner la liste de tous les diviseurs de chaque nombre et déduire le . et .  L'ensemble des diviseurs de 27 est .  L'ensemble des diviseurs de 72 est .  Ainsi, .  et .  L'ensemble des diviseurs de 66 est .  L'ensemble des diviseurs de 111 est .  Ainsi, .  et .  L'ensemble des diviseurs de 60 est .  L'ensemble des diviseurs de 100 est .  Ainsi, .   Calculer le des paires de nombres suivants en utilisant l'algorithme d'Euclide. et   Ainsi,  et   Ainsi,  et   Ainsi,  et   Ainsi,  et   Ainsi,  et   Ainsi,   Donner une explication intuitive du fait que si sont des naturels non nuls et que , alors . Si le était égal à , que pourrait-on dire que ?  Suppons . Dans ce cas, on a que .  Aussi, on sait que pour , car .  De même, on a que pour .  Cela implique que et , c'est-à-dire que et . Ainsi, divise et , et . Or, cela contredit le fait que, , car est le plus grand diviseur commun à et .  L'algorithme d'Euclide permet de trouver le d'entiers strictement positifs. On peut toutefois facilement étendre la notion aux entiers quelconques. Montrer que si , alors .  Posons . On sait que pour tout , si , alors et . Ainsi, par définition de , on a que .  De plus, puisque , on a aussi que . Ainsi, , et donc . Montrer que si et , alors .  Posons et . Ainsi, on sait que et , alors que et .  On a donc et pour . En multipliant les deux égalités par , on obtient et , c'est-à-dire que et .  Par définition de et , on a que , et donc .  Montrer que pour , on a . Par ce qu'on a fait précédemment, il suffit de montrer que l'égalité est vraie pour .  Posons . Ainsi, on sait que et . On a donc et pour . En multipliant les deux égalités par , on obtient et , c'est-à-dire que et .  Posons . Ainsi, on sait que et . On a donc et pour . En multipliant les deux égalités par , on obtient et , c'est-à-dire que et .  Par définition de et , on a que , et donc .   Le lemme de Bézout  Soit des naturels non nuls tels que . Alors il existe tels que  Cette relation a des conséquences importantes en théorie des nombres. On montre dans cet exercice comment démontrer l'existence des entiers et on explique comment on peut trouver de tels entiers.  On considère l'ensemble . C'est donc l'ensemble des naturels plus grands que zéro qu'il est possible de former avec en les combinant avec des entiers quelconques.  Montrer que est non vide. En particulier, puisque est un ensemble de nombres naturels, il existe un plus petit élément.   Il suffit de montrer qu'il existe au moins une paire telle que . Pour cela, on prend et . Dans ce cas, on a que et . Ainsi, . En effet, on rappel que et sont non nuls, et donc .  On pose le plus petit élément de cet ensemble. On veut montrer que et . On pose le plus petit élément de cet ensemble. On veut montrer que et .  On considère la division de par , qu'on écrit sous la forme quotient reste .  Montrer que en l'écrivant comme avec .   Puisque , on peut écrire pour . Ainsi, on a et donc où et .  Ainsi, si , alors . De l'autre côté, si , puisque , on sait que . En particulier, .  Utiliser le fait que dans la forme quotient reste, on a , le fait que et le fait que est le plus petit élément de pour déterminer la valeur de . On veut montrer que . En effet, Puisque , si , alors et . Or, si , alors par définition de , on a que , ce qui est impossible si . On doit donc avoir . Conclure que . Puisque , on a que , et donc . Argumenter que divise aussi pour les mêmes raisons. On remplace par dans les parties à , et on obtient que . Le plus petit élément de est donc un diviseur de et . On va maintenant montrer que c'est nécessairement le de ces deux nombres.  Si est un diviseur commun de et , montrer que divise en utilisant l'équation pour certains . Si , alors nécessairement , ce qui complète la preuve. Si et , alors et pour . Ainsi, on a Ainsi, , car . Ceci montre que .    Exercices supplémentaires  Le plus petit commun multiple  Soit deux entiers non nuls. On définit le plus petit commun multiple de , noté comme étant le nombre qui satisfait les propriétés suivantes:  ;  et ;  Pour tout , si et , alors .  Calculer les plus petits communs multiples suivants.     "
},
{
  "id": "def-divisibilite",
  "level": "2",
  "url": "sec-divisibilite.html#def-divisibilite",
  "type": "Définition",
  "number": "3.2.1",
  "title": "La divisibilité.",
  "body": " La divisibilité  Soit avec . On dit que divise et on écrit si le résultat est un entier. On note que les quatre conditions suivantes sont équivalentes:   pour un certain  est un facteur (ou diviseur) de  est un multiple de .    "
},
{
  "id": "sec-divisibilite-3-5",
  "level": "2",
  "url": "sec-divisibilite.html#sec-divisibilite-3-5",
  "type": "Exemple",
  "number": "3.2.2",
  "title": "Exemples de divisibilité.",
  "body": " Exemples de divisibilité   On cherche la valeur de vérité des propositions suivantes.                 L'énoncé est vrai puisque et .  L'énoncé est faux étant donné que et que .  L'énoncé est faux, car non ne peut pas diviser par .  L'énoncé est vrai, car . En fait, n'importe quel nombre non nul divise .  L'énoncé est vrai puisque est un facteur de .  Le fait que le nombre est négatif ne pose pas de problème. On peut utiliser n'importe quelle des définitions équivalentes, par exemple est un multiple de , spécifiquement fois et donc est vraie.  Puisque , on conclut que est un facteur de et donc que peu importe la valeur de non nulle. La proposition est vraie.  Si on peut montrer une valeur de qui ne respecte pas la condition, alors la proposition sera fausse. Par exemple, si , c'est faux de dire que puisque et ce n'est pas un entier. Donc la proposition est fausse.  Si on arrive à trouver une valeur, la proposition d'existence sera vérifiée. En prenant , on observe que et donc la proposition est vraie.     "
},
{
  "id": "prop-divisioneuclidienne",
  "level": "2",
  "url": "sec-divisibilite.html#prop-divisioneuclidienne",
  "type": "Proposition",
  "number": "3.2.3",
  "title": "La division euclidienne.",
  "body": " La division euclidienne  Soit avec . Alors il existe des uniques entiers avec pour lesquels .  L'entier est appelé le quotient et l'entier est appelé le reste.   "
},
{
  "id": "sec-divisibilite-3-11",
  "level": "2",
  "url": "sec-divisibilite.html#sec-divisibilite-3-11",
  "type": "Calcul",
  "number": "3.2.4",
  "title": "La divisibilité et Sage.",
  "body": " La divisibilité et Sage   Sage est capable de calculer facilement les entiers et de la proposition grâce à deux opérateurs spéciaux. Si a\/b produit la division usuelle, donnant un nombre rationnel lorsque , l'opération a\/\/b elle produit le quotient dans l'expession . Pour obtenir le reste, il faut utiliser a%b . La cellule ci-dessous illustre ces opérations.   Voici une version interactive de la cellule précédente.    "
},
{
  "id": "tab-binairedecimale101",
  "level": "2",
  "url": "sec-divisibilite.html#tab-binairedecimale101",
  "type": "Table",
  "number": "3.2.5",
  "title": "Conversion de 101 en binaire avec la méthode des quotients et des restes",
  "body": " Conversion de 101 en binaire avec la méthode des quotients et des restes            Quotients  Restes                                                            "
},
{
  "id": "sec-divisibilite-4-6",
  "level": "2",
  "url": "sec-divisibilite.html#sec-divisibilite-4-6",
  "type": "Exemple",
  "number": "3.2.6",
  "title": "Conversion d’un nombre en base dix à un nombre en hexadécimale.",
  "body": " Conversion d'un nombre en base dix à un nombre en hexadécimale  On veut convertir en base hexadécimale, afin de valider l'exemple .   On utilise une table dans laquelle on note les quotients et les restes. Ceux-ci peuvent être calculés avec Sage.   Conversion de 987654321 en hexadécimale avec la méthode des quotients et des restes            Quotients  Restes                                                                     Le résultat est donc bel et bien .   "
},
{
  "id": "def-pgcd",
  "level": "2",
  "url": "sec-divisibilite.html#def-pgcd",
  "type": "Définition",
  "number": "3.2.8",
  "title": "Le plus grand commun diviseur.",
  "body": " Le plus grand commun diviseur  Soit avec (les nombres ne sont pas tous les deux nuls). Le plus grand commun diviseur de , noté , est un entier qui satisfait les trois propriétés suivantes:  ;  et ;  Pour tout , si et , alors .    Lorsque , on dit que et sont copremiers.   "
},
{
  "id": "algo-euclide",
  "level": "2",
  "url": "sec-divisibilite.html#algo-euclide",
  "type": "Algorithme",
  "number": "3.2.9",
  "title": "L’algorithme d’Euclide.",
  "body": " L'algorithme d'Euclide  Soit des nombres naturels. Le plus grand commun diviseur de et est le dernier reste non nul de la suite suivante: .  "
},
{
  "id": "sec-divisibilite-5-6",
  "level": "2",
  "url": "sec-divisibilite.html#sec-divisibilite-5-6",
  "type": "Exemple",
  "number": "3.2.10",
  "title": "Calcul d’un <span class=\"process-math\">\\(\\pgcd\\)<\/span>.",
  "body": " Calcul d'un   En utilisant l'algorithme d'Euclide, on veut calculer  ;  .    On a . Selon l'algorithme d'Euclide, , le dernier reste non nul.   Cette fois-ci, on a . Selon l'algorithme d'Euclide, , le dernier reste non nul. Ces nombres sont donc copremiers.   "
},
{
  "id": "rq-divisibilite-2",
  "level": "2",
  "url": "sec-divisibilite.html#rq-divisibilite-2",
  "type": "Question de compréhension",
  "number": "3.2.4.1",
  "title": "",
  "body": " Écrire les divisions suivantes sous la forme quotient et reste. Utiliser la méthode par étranglement comme dans ce paragraphe .  "
},
{
  "id": "rq-divisibilite-3",
  "level": "2",
  "url": "sec-divisibilite.html#rq-divisibilite-3",
  "type": "Question de compréhension",
  "number": "3.2.4.2",
  "title": "",
  "body": " Écrire les divisions suivantes sous la forme quotient et reste. Utiliser la méthode de division à la main comme au primaire.  "
},
{
  "id": "rq-divisibilite-4",
  "level": "2",
  "url": "sec-divisibilite.html#rq-divisibilite-4",
  "type": "Question de compréhension",
  "number": "3.2.4.3",
  "title": "",
  "body": "Convertir les nombres de l'exercice en binaire en utilisant la méthode des divisions. "
},
{
  "id": "rq-divisibilite-5",
  "level": "2",
  "url": "sec-divisibilite.html#rq-divisibilite-5",
  "type": "Question de compréhension",
  "number": "3.2.4.4",
  "title": "",
  "body": "Convertir les nombres de l'exercice en hexadécimale en utilisant la méthode des divisions. "
},
{
  "id": "rq-divisibilite-6",
  "level": "2",
  "url": "sec-divisibilite.html#rq-divisibilite-6",
  "type": "Question de compréhension",
  "number": "3.2.4.5",
  "title": "",
  "body": "Que fait l'algorithme suivant?   Une algorithme sur les entiers   def algo(n): laliste = [1] d = 2 while d < n: if n % d == 0: laliste.append(d) d = d + 1 if n > 1: laliste.append(n) return laliste     "
},
{
  "id": "rq-divisibilite-7",
  "level": "2",
  "url": "sec-divisibilite.html#rq-divisibilite-7",
  "type": "Question de compréhension",
  "number": "3.2.4.6",
  "title": "",
  "body": "L'algorithme suivant retourne un couple représentant le quotient et le reste de la division , mais il est incomplet. Pour chacun des quatre endroits écrits ÀCOMPLÉTER , écrire les instructions pour que l'algorithme fonctionne. Il est possible de le tester à même la cellule.   La division euclidienne   def divisionEuclidienne(a, b): #Une algorithme qui retourne (q,r) la forme quotient reste de a\/b: a=bq+r if :#ÀCOMPLÉTER1 print('Le quotient est non défini') elif a == 0: return #ÀCOMPLÉTER2 else: s = b \/ abs(b) # le signe de b q=0 r =a if a > 0: while r - abs(b) >= 0: q = q + s r = #ÀCOMPLÉTER3 return q, r else: #a <0 while r < 0: q = q - s r = #ÀCOMPLÉTER4 return q, r     "
},
{
  "id": "rq-divisibilite-8",
  "level": "2",
  "url": "sec-divisibilite.html#rq-divisibilite-8",
  "type": "Question de compréhension",
  "number": "3.2.4.7",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-divisibilite-2-3",
  "level": "2",
  "url": "sec-divisibilite.html#exo-divisibilite-2-3",
  "type": "Exercice",
  "number": "3.2.5.1",
  "title": "",
  "body": "Convertir les nombres suivants dans la base demandée en utilisant un tableau de division. en binaire.    Conversion de 1775 en binaire avec la méthode des quotients et des restes            Quotients  Restes                                                                                             Ainsi, en lisant la colonne des restes du bas vers le haut, on obtient .  en binaire   Conversion de 2730 en binaire avec la méthode des quotients et des restes            Quotients  Restes                                                                                                     Ainsi, en lisant la colonne des restes du bas vers le haut, on obtient .  en hexadécimale   Conversion de 10632005 en hexadécimale avec la méthode des quotients et des restes            Quotients  Restes                                                     Ainsi, en lisant la colonne des restes du bas vers le haut, on obtient .  "
},
{
  "id": "exo-divisibilite-2-4",
  "level": "2",
  "url": "sec-divisibilite.html#exo-divisibilite-2-4",
  "type": "Exercice",
  "number": "3.2.5.2",
  "title": "",
  "body": "Donner la liste de tous les diviseurs de chaque nombre et déduire le . et .  L'ensemble des diviseurs de 27 est .  L'ensemble des diviseurs de 72 est .  Ainsi, .  et .  L'ensemble des diviseurs de 66 est .  L'ensemble des diviseurs de 111 est .  Ainsi, .  et .  L'ensemble des diviseurs de 60 est .  L'ensemble des diviseurs de 100 est .  Ainsi, .  "
},
{
  "id": "exo-divisibilite-2-5",
  "level": "2",
  "url": "sec-divisibilite.html#exo-divisibilite-2-5",
  "type": "Exercice",
  "number": "3.2.5.3",
  "title": "",
  "body": "Calculer le des paires de nombres suivants en utilisant l'algorithme d'Euclide. et   Ainsi,  et   Ainsi,  et   Ainsi,  et   Ainsi,  et   Ainsi,  et   Ainsi,  "
},
{
  "id": "exo-divisibilite-2-6",
  "level": "2",
  "url": "sec-divisibilite.html#exo-divisibilite-2-6",
  "type": "Exercice",
  "number": "3.2.5.4",
  "title": "",
  "body": "Donner une explication intuitive du fait que si sont des naturels non nuls et que , alors . Si le était égal à , que pourrait-on dire que ?  Suppons . Dans ce cas, on a que .  Aussi, on sait que pour , car .  De même, on a que pour .  Cela implique que et , c'est-à-dire que et . Ainsi, divise et , et . Or, cela contredit le fait que, , car est le plus grand diviseur commun à et . "
},
{
  "id": "exo-divisibilite-2-7",
  "level": "2",
  "url": "sec-divisibilite.html#exo-divisibilite-2-7",
  "type": "Exercice",
  "number": "3.2.5.5",
  "title": "",
  "body": "L'algorithme d'Euclide permet de trouver le d'entiers strictement positifs. On peut toutefois facilement étendre la notion aux entiers quelconques. Montrer que si , alors .  Posons . On sait que pour tout , si , alors et . Ainsi, par définition de , on a que .  De plus, puisque , on a aussi que . Ainsi, , et donc . Montrer que si et , alors .  Posons et . Ainsi, on sait que et , alors que et .  On a donc et pour . En multipliant les deux égalités par , on obtient et , c'est-à-dire que et .  Par définition de et , on a que , et donc .  Montrer que pour , on a . Par ce qu'on a fait précédemment, il suffit de montrer que l'égalité est vraie pour .  Posons . Ainsi, on sait que et . On a donc et pour . En multipliant les deux égalités par , on obtient et , c'est-à-dire que et .  Posons . Ainsi, on sait que et . On a donc et pour . En multipliant les deux égalités par , on obtient et , c'est-à-dire que et .  Par définition de et , on a que , et donc .  "
},
{
  "id": "exo-Bezout",
  "level": "2",
  "url": "sec-divisibilite.html#exo-Bezout",
  "type": "Exercice",
  "number": "3.2.5.6",
  "title": "Le lemme de Bézout.",
  "body": "Le lemme de Bézout  Soit des naturels non nuls tels que . Alors il existe tels que  Cette relation a des conséquences importantes en théorie des nombres. On montre dans cet exercice comment démontrer l'existence des entiers et on explique comment on peut trouver de tels entiers.  On considère l'ensemble . C'est donc l'ensemble des naturels plus grands que zéro qu'il est possible de former avec en les combinant avec des entiers quelconques.  Montrer que est non vide. En particulier, puisque est un ensemble de nombres naturels, il existe un plus petit élément.   Il suffit de montrer qu'il existe au moins une paire telle que . Pour cela, on prend et . Dans ce cas, on a que et . Ainsi, . En effet, on rappel que et sont non nuls, et donc .  On pose le plus petit élément de cet ensemble. On veut montrer que et . On pose le plus petit élément de cet ensemble. On veut montrer que et .  On considère la division de par , qu'on écrit sous la forme quotient reste .  Montrer que en l'écrivant comme avec .   Puisque , on peut écrire pour . Ainsi, on a et donc où et .  Ainsi, si , alors . De l'autre côté, si , puisque , on sait que . En particulier, .  Utiliser le fait que dans la forme quotient reste, on a , le fait que et le fait que est le plus petit élément de pour déterminer la valeur de . On veut montrer que . En effet, Puisque , si , alors et . Or, si , alors par définition de , on a que , ce qui est impossible si . On doit donc avoir . Conclure que . Puisque , on a que , et donc . Argumenter que divise aussi pour les mêmes raisons. On remplace par dans les parties à , et on obtient que . Le plus petit élément de est donc un diviseur de et . On va maintenant montrer que c'est nécessairement le de ces deux nombres.  Si est un diviseur commun de et , montrer que divise en utilisant l'équation pour certains . Si , alors nécessairement , ce qui complète la preuve. Si et , alors et pour . Ainsi, on a Ainsi, , car . Ceci montre que . "
},
{
  "id": "exo-divisibilite-3-2",
  "level": "2",
  "url": "sec-divisibilite.html#exo-divisibilite-3-2",
  "type": "Exercice",
  "number": "3.2.5.7",
  "title": "Le plus petit commun multiple.",
  "body": "Le plus petit commun multiple  Soit deux entiers non nuls. On définit le plus petit commun multiple de , noté comme étant le nombre qui satisfait les propriétés suivantes:  ;  et ;  Pour tout , si et , alors .  Calculer les plus petits communs multiples suivants.  "
},
{
  "id": "sec-modulo",
  "level": "1",
  "url": "sec-modulo.html",
  "type": "Section",
  "number": "3.3",
  "title": "Arithmétique modulaire",
  "body": "  Arithmétique modulaire    Au moment d'écrire ces lignes, il est 16:00. Quelle heure sera-t-il dans heures? Bien sûr, la réponse est . Si la question avait pourtant été quelle heure sera-t-il dans heures, la réponse n'aurait pourtant pas été , mais plutôt . Cet exemple représente un classique de la notion d'arithmétique modulaire. On utilise l'arithmétique modulaire dans des contextes où un aspect cyclique est présent, pour effectuer certaines formes de vérification et en cryptographie.  Dans cette section, on définit la relation de congruence modulo et on explique les règles de calculs de l'arithmétique modulaire. On présente aussi une introduction à la cryptographie.     Congruence modulo  Lorsqu'on effectue la division d'un entier par , les restes possibles de la forme quotient reste sont ou . Pour une division par , les restes sont limités à l'ensemble . De manière générale, le reste de la division d'un entier par est un élément de . Lorsqu'on parle de la division par un entier spécifique , il est souvent utile d'associer les entiers à leur reste de la division par . On parle alors des classes d'équivalence modulo .   Congruence modulo   Soit des entiers et un autre entier positif. On dit que est congru à modulo si et possède le même reste lors de la division par . On peut alors écrire .  On dit alors que et sont dans la même classe d'équivalence modulo . De manière générale, pour un entier , on définit la classe d'équivalence à modulo par .    Dans le cas des heures de la journée, on peut dire que est dans la même classe d'équivalence que modulo . C'est pourquoi heures après , il est . Les classes d'équivalence établissent un élément qui les représente et associe à tout autre entier équivalent cet élément.   Les classes d'équivalence modulo .  On considère les entiers et la division par . On cherche à décrire en extension les classes d'équivalence modulo , à savoir les ensembles de la définition .   Les restes de la division par possibles sont . À chacun de ces restes correspond une classe d'équivalence qui contient d'autres entiers. Par exemple, contient tous les nombres qui produisent un reste de lorsque divisé par . Ce sont les multiples de : .  Les nombres dans s'écrivent comme . Ce sont donc les nombres qui valent un de plus qu'un multiple de . On aura alors .  D'une manière analogue, on remarque que la classe d'équivalence contient les nombres qui valent deux de plus qu'un multiple de , les nombres qui valent trois de plus qu'un multiple de et finalement, les nombres qui valent quatre de plus qu'un multiple de pour . On a .    En déterminant dans quelle classe d'équivalence un nombre se trouve, on peut obtenir l'information importante sous une forme plus standard, comme avec l'exemple de l'heure. Ceci est aussi vrai pour le mois, la journée Le cas des journées est un peu plus complexe dû aux années bissextiles. , etc.   Classes d'équivalence et moments  Au moment d'écrire ces lignes, la date est et c'est un vendredi. Que peut-on dire de  La journée de la semaine jours après l'écriture de ces lignes;  Le mois de l'année mois après l'écriture de ces lignes;  L'heure heures après l'écriture de ces lignes;  Le jour de la semaine ans après l'écriture de ces lignes;  Le jour de la semaine ans après l'écriture de ces lignes;  La date jours après l'écriture de ces lignes;  La date jours après l'écriture de ces lignes.   On prend comme convention d'ordonner les journées de la semaine du dimanche au samedi, avec dimanche correspondant à et samedi à . On commence à numéroter par afin de correspondre aux classes d'équivalence. Ainsi, vendredi correspond à . Comme il y a sept jours dans une semaine, on veut travailler modulo . jours après l'écriture, on était le jour . En regardant le reste de lors de la division par , on retrouve , ce qui signigie que . On peut donc dire que jours plus tard, c'était l'équivalent du jour , c'est-à-dire un mardi.  On note au passage ici que le choix de faire débuter la semaine au dimanche est arbitraire et ne change rien. Si on avait fait commencer la semaine le mercredi (donc vendredi , alors on aurait eu , ce qui donne encore le mardi.   D'une manière similaire, on pourrait associer les mois de l'année à des nombres en commençant par janvier à . On numérote toutefois déjà les mois de   à , allant de janvier à décembre. Dans ce cas, on peut aussi choisir décembre comme point de départ décembre. Puisque , on a équivalence. Septembre étant le neuvième mois, mois après septembre, ce sera équivalent au , donc au septième mois, soit juillet.  On travaille modulo , avec le début correspondant à minuit. Dans heures, puisque et que , on conclut que heures après l'écriture de ces lignes, il était .  L'année et l'année ne sont pas des années bissextiles. Elle contiennent donc chacun jours. Pour trouver le jour de la semaine ans après le septembre , il suffit de travailler modulo avec le vendredi de . En ajoutant les journées de ces deux années, on trouve , qui est congru à modulo . Dans deux ans, le septembre sera donc un dimanche.  Dans les quatre années suivant , il y a nécessairement une année bissextile. Celle-ci se trouve en . Donc pour calculer le jour de la semaine, il faut ajouter jours au vendredi de et travailler encore une fois modulo . On trouve alors . Le septembre sera (était?) donc un mercredi.  À partir d'ici, les choses se compliquent légèrement. La difficulté vient du fait que les mois n'ont pas tous le même nombre de jours et donc, on ne peut pas travailler modulo un entier régulier. On commence par ajouter les jours à pour obtenir . Puisque septembre compte jours, on travaillera modulo . On apportera toutefois une précision dans la prochaine solution.  Donc, , ce qui signifie que la date jours après le septembre est équivalent à un et donc, le octobre.  Si on essaie la même chose pour trouver la date jours après le septembre, on trouvera . On comprend assez rapidement qu'il ne peut s'agir du octobre. Il serait logique de penser que la date est alors le novembre, mais cela est aussi faux . L'erreur vient du fait que le prochain mois, octobre, compte jours et non pas comme septembre. On doit donc retrancher une journée à la date trouvée pour obtenir le novembre.  Le cas plus général est un problème relativement difficile étant donné la dépendance avec la date de départ, le nombre de jours par mois variant d'un mois à l'autre ainsi que les années bissextiles.   Sur la notation modulo   Après avoir vu plusieurs exemples, il est temps de faire une mise au point sur la notation utilisée pour dénoter la congruence modulo . Si sont congrus modulo , ils sont dits équivalents, en quelque sorte égaux, par rapport à la division par . On ne veut toutefois pas écrire , car au sens usuel de l'égalité, c'est probablement faux. Le symbole est utilisée pour dénoter l'équivalence ou la congruence entre deux objets mathématiques. Il serait par contre erroné de simplement écrire , puisque la congruence est dépendante du choix de . Ainsi , mais .    Si deux entiers sont dans une même classe d'équivalence, alors ils se trouvent à une distance d'un multiple de . On a donc où . Ceci permet de donner une définition alternative à la congruence modulo .   Congruence modulo et divisibilité  Soit deux entiers et un autre entier. Alors si et seulement si .   Puisqu'on a affaire à une double implication, on procède en deux étapes.  Dans un premier temps, on suppose que au sens de la définition . On tente maintenant de montrer que divise . D'une part, on sait qu'il existe tels que . De plus, on sait qu'il existe tels que . Puisque , on doit avoir . On peut alors écrire . Ainsi, puisque , on conclut que .  On suppose maintenant que et on veut montrer que cette hypothèse entraine que . Si divise , alors on peut écrire pour un certain . Si on écrit la division de chaque côté sous la forme quotient reste, il suit du fait que que la forme quotient reste du côté gauche doit s'écrire . De l'autre côté, et le reste est nul. On doit donc avoir et en développant, on est forcé d'avoir . Les nombres ont donc le même reste lors de la division par et ainsi, .      Arithmétique modulaire  La grande utilité des congruences modulo vient de l'arithmétique qu'il est possible d'effectuer dans les classes d'équivalences. Afin d'illustrer par des exemples, on considère à nouveau les classes d'équivalence de la division par établies à l'exemple . Si on prend deux nombres de la classe d'équivalence et qu'on les additionne, par exemple , on obtient toujours un membre de . Qu'en est-il de deux membres de la classe ? Par exemple, avec , cette fois on obtient un membre de la classe puisque . Dans un sens, c'est parfaitement logique puisque et que les membres de sont l'équivalent du nombre au niveau de la division par . Le produit se comporte aussi de cette manière. Un nombre dans multiplié par un nombre dans se retrouvera dans puisque . Par exemple puisque est un de plus qu'un multiple de . On généralise cette idée dans la proposition suivante.   Propriété de l'arithmétique modulaire  Soit et des entiers tels que et . Alors  ;  ;  .   L'idée derrière cette propriété découle du fait suivant: si , alors pour tout , on a . On peut toujours effectuer une même opération de part et d'autre d'une égalité et préserver celle-ci. Dans le contexte des congruences modulo , il n'est pas nécessaire d'ajouter de chaque côté le même nombre, en autant que les ajouts soient dans la même classe d'équivalence. On démontre maintenant la première propriété.  Puisque et , on sait qu'il existe tels que et . En additionnant et , on trouve . De même .  Si , alors on vient de montrer que et ont le même reste lorsque divisés par . Ils sont donc congrus modulo . Si toutefois , alors il faut d'abord écrire . Puisque , on sait que et donc . On a alors et et le résultat tient aussi.   La deuxième propriété peut être démontrée d'une manière identique à la première, mais on choisit ici de présenter une approche différente tirant profit de la proposition . D'une part, si , alors puisque . De même, . On peut alors écrire , qui devient . Or cela signifie que et donc, que . Selon la proposition , on a donc .  Voir l'exercice .   On regarde maintenant un des avantages de ces propriétés. En particulier, quand on travaille avec de grands nombres, on peut considérablement simplifier les calculs en utilisant les propriétés de l'arithmétique modulaire   Application des propriétés de l'arithmétique modulaire  On cherche le reste de la division de par .   L'idée est de décomposer le nombre en quelque chose de plus petit et dont on connait le reste de la division par . Dans ce cas-ci, on voit que et donc . Comme , la troisième propriété appliquée à répétition nous permet de dire que . On peut ensuite observer que et puisque , alors .  Le reste de la division par du nombre est donc . On note au passage qu'on aurait pu y arriver plus rapidement en divisant par plutôt que par initialement.    Dans la proposition , il est question d'addition, de soustraction et de multiplication. Dans un chapitre où la division tient une place si importante, ne devrait-il pas y avoir une propriété de division? Par exemple, et si on divise par de chaque côté, on obtient , qui est vrai. Mais si on considère plutôt et qu'on divise par , l'équivalence ne tient plus puisque . On voit donc que la situation est plus complexe qu'elle en a l'air.  D'où vient le problème? On imagine un cas général où . On peut alors dire que pour un certain . Que se passe-t-il si on divise la congruence par ? Puisque , il s'en suit que . On ne sait toutefois pas si ou . En fait, ça pourrait même être ni l'un ni l'autre, par exemple , mais ne divise ni ni . Dans la congruence avec et , on a et . On peut alors écrire , ce qui donne . Dans ce cas, la division par laisse intact, d'où le fait que la congruence tient le coup après la division. Par contre pour la congruence avec et , on a et toujours , ce qui permet d'écrire , avec . Cette fois, la division par touche en partie , ce qui rend la congruence fausse.  Dans le pire des cas, la division par va simplifier de la plus grande partie commune à , soit . Ceci amène à la proposition suivante.   La division dans une congruence modulo  Soit et des entiers tels que . Alors .  En particulier, si , alors .      Ce que la proposition ne dit pas  À noter que la proposition ne dit pas que . On ne peut tout simplement pas en être certain. En reprenant les exemples qui précèdent la proposition ci-dessus, puisque , on sait que , c'est-à-dire . Cela n'empêchait . Pour l'autre exemple par contre, on n'a que , soit .   On reprend les calculs de l'exemple en les regardant sous l'oeil de la proposition .   Classes d'équivalence et moments, prise deux  On reprend la date ( un vendredi) comme référence et on considère à nouveau les moments suivants (sans les deux derniers):  La journée de la semaine jours après l'écriture de ces lignes;  Le mois de l'année mois après l'écriture de ces lignes;  L'heure heures après l'écriture de ces lignes;  Le jour de la semaine ans après l'écriture de ces lignes;  Le jour de la semaine ans après l'écriture de ces lignes;     En travaillant modulo , puisque , on peut dire que . Puisque , on conclut à nouveau que jours après l'écriture, c'était un mardi. Une autre approche consiste à dire que et donc et ainsi, on retrouve le mardi.  Puisque , plutôt que d'additionner mois, on peut soustraire mois au mois actuel et trouver la réponse, soit et donc, juillet.  En travaillant modulo , on a et donc, heures après l'écriture de ces lignes est équivalent en termes d'heures à heures après. Il était donc .  Tel que discuté précédemment, il n'y a pas d'année bissextile en ni en . Ces deux années comptent donc pour jours. Puisque , la journée de la semaine deux ans après l'écriture de ces lignes est un dimanche.  Les quatre années comptant ici pour jours et que et que , le jour de la semaine ans après l'écriture de ces lignes est un mercredi.   Il est parfois pratique de visualiser les opérations d'addition et de multiplication à l'aide d'une table. À titre d'exemple, voici la table de multiplication pour l'arithmétique usuelle:   Table de la multiplication usuelle       0  1  2  3  4  5  6  7  8  9    0  0  0  0  0  0  0  0  0  0  0    1  0  1  2  3  4  5  6  7  8  9    2  0  2  4  6  8  10  12  14  16  18    3  0  3  6  9  12  15  18  21  24  27    4  0  4  8  12  16  20  24  28  32  36    5  0  5  10  15  20  25  30  35  40  45    6  0  6  12  18  24  30  36  42  48  54    7  0  7  14  21  28  35  42  49  56  63    8  0  8  16  24  32  40  48  56  64  72    9  0  9  18  27  36  45  54  63  72  81     Voici maintenant des tables similaires pour l'addition et la multiplication modulo :   Table de l'addition modulo    +  0  1  2  3  4    0  0  1  2  3  4    1  1  2  3  4  0    2  2  3  4  0  1    3  3  4  0  1  2    4  4  0  1  2  3      Table de la multiplication modulo 5       0  1  2  3  4    0  0  0  0  0  0    1  0  1  2  3  4    2  0  2  4  1  3    3  0  3  1  4  2    4  0  4  3  2  1     Puisque tous les entiers ont leur équivalent modulo dans l'ensemble , il n'est pas nécessaire de construire une table plus grande.    Résolution d'équations en congruence modulo  On considère l'équation . Cette équation se résout en envoyant le à droite et en divisant par , obtenant ainsi . Qu'en est-il de l'équation maintenant? Peut-on trouver des solutions à cette équation? Comme ici la valeur du modulo est petite, on pourrait tester tous les cas possibles (modulo ) et voir que est encore une solution. Bien sûr, n'importe quel autre nombre dans la classe d'équivalence de fera aussi l'affaire. Par exemple, puisque , on peut vérifier que .  On note que dans l'équation obtenue dans la résolution, on peut diviser de chaque côté par puisque (proposition ). On n'a donc pas à modifier le modulo. On regarde d'autres exemples.   Des équations à congruence modulo  On cherche toutes à résoudre les congruences suivantes (indépendamment):    .     Pour la première congruence, on ne peut pas directement diviser par puisque . Mais on peut toutefois ajouter un élément de la classe d'équivalence de à droite sans changer la véracité de la congruence, selon la proposition . En ajoutant , on obtient , qui revient à . Maintenant qu'on a et que , on peut diviser par et obtenir . Les solutions sont donc tous les nombres congrus à modulo .    Pour la seconde congruence, il peut être une bonne idée de réduire dans un premier temps modulo les membres de chaque côté de l'équation. En effet, si et , alors la congruence peut s'écrire de manière plus simple . Puisque et , la congruence peut s'écrire . Cette fois, ajouter ne sera pas suffisant, mais si on ajoute , on obtient et en divisant, on conclut que . Les solutions sont donc tous les nombres congrus à modulo .   Dans cet exemple, peu importe combien de multiples de on ajoute à , on n'obtiendra jamais un nombre pair qui permettra la division par . Cette congruence en fait n'a pas de solutions. Lorsqu'on multiplie par un entier, on obtient un nombre pair, qui ne peut pas être congru à modulo .   Puisqu'il est possible qu'une congruence ne possède pas de solutions, il serait intéressant de savoir quand des solutions seront possibles. En fait, on peut établir un critère pour savoir quand la congruence n'aura pas de solutions.   Congruence sans solutions  Soit avec différents de . Si , alors la congruence ne possède pas de solutions.  On suppose que est une solution à la congruence. Cela signifie que ou de manière équivalente, . On réécrit pour obtenir pour un certain . On divise maintenant cette équation par . On obtient alors où sont des entiers. Or puisque , le terme lui, n'est pas entier. Ceci crée une contradiction et donc, il ne peut pas exister de solutions.   Jusqu'à maintenant, les exemples qui fonctionnaient avaient pour pour pgcd entre et . La proposition ne permet pas de diviser dans une congruence sans changer la valeur du modulo. On considère par exemple . On peut ajouter à droite pour obtenir . En divisant, on doit toutefois ajuster le modulo par un facteur . La nouvelle équation est donc équivalente à . On cherchait toutefois des solutions par rapport au modulo . Peut-on ramener ces solutions dans ce cadre? Quels sont les nombres modulo qui sont congrus à modulo ? Il y a bien sûr , mais aussi . On peut donc dire qu'il y a solutions (en réalité, une infinité, mais deux classes d'équivalence) à cette congruence. La proposition suivante donne le nombre de classes d'équivalence solutions à une congruence modulo . Elle complète la proposition .   Congruence et solutions  Soit et avec différents de . Si , alors la congruence possède des solutions, une infinité provenant d'autant de classes d'équivalence différente que la valeur du .    L'équation qui avait pour solutions et vérifie bel et bien la proposition puisque les solutions proviennent de classes d'équivalence différentes modulo . Un cas particulier découlant directement de la proposition précédente est celui où . Une solution à l'équation est alors appelée l'inverse de modulo .   L'inverse d'un nombre modulo  Soit deux entiers avec . Les nombres dans l'unique classe d'équivalence satisfaisant l'équation sont appelés des inverses de modulo .   On considère l'équation . Puisque , il existe une classe d'équivalence pour laquelle le produit de tout nombre y appartenant multiplié par donne . Ce sont les inverses de en modulo . En regardant la table ou tout simplement en essayant les quelques possibilités, on trouve que est un inverse pour en modulo . C'est donc en fait toute la classe d'équivalence de qui est considérée comme inverse.   Un inverse modulo  On cherche un inverse à modulo , c'est-à-dire un nombre tel que .   Pour trouver un inverse, il faut trouver tel que . En d'autres mots, pour un certain . En réécrivant, on remarque qu'il faut que et de plus, . Le lemme de Bézout et l'algorithme d'Euclide seront utiles pour trouver l'inverse. D'une part, on a , selon l'algorithme d'Euclide. Puis, en réorganisant ces équations, on trouve .  est donc un inverse à modulo .      Introduction à la cryptographie  La transmission de messages secrets existe depuis toujours. Des messages entre amoureux aux codes secrets militaires, on a toujours cherché des moyens d'encoder de l'information afin de la transmettre pour que seul son destinataire puisse la déchiffrer. De nos jours, la majorité des opérations effectuées en ligne sont encryptées mathématiquement afin de les rendres sécuritaires: opérations bancaires, transactions par cartes de crédit, connexion à un compte quelconque, etc.  On illustre ici comment l'arithmétique modulaire peut aider à mettre en place un système d'encodage. La première de ces techniques est un peu primitives et est loin de celles utilisées de nos jours, car elle n'est pas assez sécuritaires, mais elles illustrent tout de même l'idée de la cryptographie.  L'un des premiers systèmes d'encodage est appelé le chiffrement de César. L'histoire veut que Jules César l'utilisait pour envoyer des messages à ses commandants. Il apparait toutefois évident que ce type de chiffrement était connu bien avant César. Son principe est simple, on associe à chaque lettre de l'alphabet un nombre correspondant à sa position, . On effectue par la suite un décalage uniforme des lettres du message à coder. Par exemple, le message BONJOUR est d'abord transformé en nombres, donnant , puis on décale l'alphabet en ajoutant à chaque nombre un paramètre de translation. Avec ce paramètre égal à , on obtient . On reconvertit ensuite en lettres pour avoir le message crypté: ERQMRXU , qui est ensuite transmit au destinaire. Celui-ci pourra le décoder en effectuant la conversion en nombres et le décalage inverse s'il connait le paramètre de translation. L'arithmétique modulaire est utilisé pour faire l'encryption. Si la position d'une lettre additionnée du paramètre de translation dépasse , on se ramène dans le bon intervalle en travaillant modulo .  Les cellules Sage ci-dessous montrent comment on peut coder ce processus. La première cellule crée une fonction qui prend un message ne contenant que des caractères alphabétiques et le convertit en liste de nombres selon la position des lettres. On enlève les espaces et on met la phrase en majuscule.  En passant  On peut parfois utiliser la cryptographie dans un but autre que celui d'envoyer un message secret. Sur certains forums de discussions, un encodage de César est parfois utilisé afin de ne pas divulgâcher une série, un film, un jeu vidéo ou autre. Typiquement, on utilise le chiffrement de César avec décalage de 13 caractères. On l'appelle d'ailleurs ROT-13. Un exemple peut-être vu à cette adresse https:\/\/www.vendetta-online.com\/x\/msgboard\/15\/10908?page=3 concernant Harry Potter.    La deuxième cellule crée une fonction qui, à partir d'une liste de nombres, renvoie un message. Ce message est écrit en majuscule et ne possède pas d'espaces.   La troisième cellule effectue le décalage d'une liste. À partir d'une liste L et d'un nombre , on ajoute à chaque entrée de la liste, en travaillant modulo .   Finalement, la dernière fonction prend un message et un nombre et retourne le message codé.   On teste finalement ici avec les messages secrets Bonjour et Vive les maths . Il faut s'assurer d'avoir exécuter toutes les cellules ci-dessus pour que la prochaine fonctionne.   Pour décoder un message crypté à l'aide de chiffrement de César, il suffit d'appliquer le chiffrement inverse. Ainsi, si on a le message WPDPEFOTLYEDOPDTXDZYEWPDXPTWWPFCD et qu'on sait que le message a été chiffré à l'aide d'un César avec paramètre , on peut appliquer un chiffrement de pour décoder le message.   Le chiffrement de César est simple, mais peu sécuritaire. Avec un message suffisament long, un personne pourrait intercepter le message et utiliser une analyse fréquentielle sur les lettres afin de deviner le paramètre de translation utilisé. Dans la langue française, la lettre e est la plus utilisés, avec un peu plus de selon Wikipedia .  Ainsi, si on reçoit le message HBJSHPYKLSHSBULTVUHTPWPLYYVAWYLALTVPAHWSBTLWVBYLJYPYLBUTVATHJOHUKLSSLLZATVYALQLUHPWSBZKLMLBVBCYLTVPAHWVYALWVBYSHTVBYKLKPLB , on peut vérifier que la lettre la plus fréquente dans ce message est L . Sage peut être utile avec la fonction mode , qui retourne l'élément d'une liste qui apparait le plus souvent.   Il est donc plausible de penser que le chiffrement a envoyé E sur L et on peut tenter de déchiffrer ce message en appliquant un chiffrement inverse. Comme et que , on essaie un chiffrement de .   Une belle chanson!  Pire encore, étant donné le petit nombre de possibilités, même sans avoir recours à l'analyse de la lettre la plus fréquente il est possible de déchiffrer le message. Il suffit d'essayer chacune des possibilités (on n'a certainement pas fait un décalage de caractères) et de constater que la plupart des messages seront insignifiants. On pourra alors rapidement décoder le bon message.  On imagine un instant que les systèmes précédents ne soient pas si facile que cela à décoder. Un autre désavantage de ces systèmes est que pour envoyer un message à quelqu'un, je dois aussi lui transmettre quelle encryption j'ai effectuée, afin qu'il puisse décrypter le messsage. Cette information doit être transmise de manière sécuritaire afin que personne d'autre que la personne visée par le message ne puisse le déchiffrer (encore une fois, on suppose que le décodage n'est pas facile). Un système où l'auteur et le destinataire doivent connaitre la méthode d'encryptage est appelé un système à clé privée.  L'un des système d'encodage les plus populaires et sécuritaire est basé sur un concept simple. Il est facile de multiplier deux nombres, mais factoriser un nombre qui serait le produit de deux nombres (premiers) est difficile. Quand on dit difficile, on parle bien entendu de très grand nombres, contenant des centaines et des centaines de chiffres. Le système de chiffrement RSA utilise ce principe. Contrairement aux autres systèmes précédents, c'est un système à clé publique.  On suppose que Damien veut offrir aux gens la possibilité de lui envoyer des messages privés. Pour ce faire, il choisit deux nombres premiers. Pour l'exemple, il choisit et . Il garde ces deux nombres secrets, mais donne à qui veut bien lui envoyer un message le produit . Ensuite, Damien doit sélectionner un autre nombre tel que . Puisque , Damien choisit . Damien donne aussi à qui veut bien lui envoyer un message ce nombre . Ensemble, la paire constitue la clé publique de Damien.  Dans la réalité, Damien choisirait des nombres beaucoup plus grands, sans quoi la sécurité du système RSA expliqué ci-dessous serait nulle. On considère maintenant Marie, qui souhaite envoyer le message Bonjour à Damien. Marie commence par transformer son message en nombres et obtient 2 15 14 10 15 21 18 . Puis, elle prend chacun de des chiffres de son message et les encode à l'aide de la formule . Par exemple B devient , puis O devient , N devient (reste) et ainsi de suite. Le message devient ainsi 32 71 14 82 71 21 44 . C'est ce message qui est transmis à Damien.  Damien reçoit donc le message 32 71 14 82 71 21 44 et entreprend donc de le décoder. Pour cela, il doit calculer un inverse de modulo . Puisque avait été choisi pour qu'un inverse existe, il sait que c'est posssible. Damien se souvient de l'exemple et sait que est un inverse pour modulo . Pour décoder le message de Marie, Damien applique à chaque nombre reçu la formule . On utilise Sage pour décoder le message.   La sécurité du système RSA vient du fait que, sans connaitre et individuellement, il est impossible de déterminer l'inverse de et ainsi décoder le message. Lorsqu'en pratique, sont choisis de sorte à posséder un très grand nombre de chiffres, même l'ordinateur le plus puissant ne pourra décoder le message en un temps raisonnable sans connaitre .  L'explication du pourquoi le décodage fonctionne avec la formule utilise un résultat appelé le petit théorème de Fermat. On explore ceci dans l'exercice . Les cellules suivantes permettent d'encoder un message avec le cryptage RSA à partir de deux nombres et d'en décoder un à partir des trois nombres . Il faut s'assurer d'avoir exécuter les cellules plus haut afin de d'utiliser certaines fonctions définies dans celles-ci.       Le principe RSA présenté ici est une simplification du vrai système RSA qui est encore utilisé. Dans la réalité, on va faire des blocs de lettres et juxtaposer leur équivalent en nombres avant de faire le cryptage.     Les points importants de cette section sont:  La définition de congruence modulo et des classes d'équivalence;  L'équivalence entre modulo et divisibilité ;  Les propriétés de l'arithmétique modulaire;  Le fait qu'on ne peut pas diviser dans une congruence modulo sans changer la valeur du modulo, sauf si le pgcd est .        Ces questions sont à faire avant de venir en classe et à remettre au début du cours.   Déterminer La journée de la semaine jours après un jeudi; La journée de la semaine jours après un mardi; La journée de la semaine jours avant un samedi.  Donner entiers qui sont congrus à modulo .  Donner les tables d'addition et de multiplication modulo .  Donner les tables d'addition et de multiplication modulo .  Quels sont les entiers dans qui ont un inverse modulo ? Est-ce que cela satisfait la définition .  Quels sont les entiers dans qui ont un inverse modulo ? Est-ce que cela satisfait la définition .  Le message ORTEGAXGVGYJKIXEVZUMXGVNOKGRKDGSKT a été encodé à l'aide d'un chiffrement de César avec décalage correspondant à 6. Quel est ce message.  Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.      Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Déterminer le plus petit entier positif congru à modulo: ;  Ainsi, le plus petit entier positif congru à modulo est . Puisque est un nombre impair, on sait que le plus petit entier positif congru à modulo est ;  Ainsi, le plus petit entier positif congru à modulo est . ;  Ainsi, le plus petit entier positif congru à modulo est . ;  Ainsi, le plus petit entier positif congru à modulo est .  Pour chaque opération ci-dessous, donner la réponse sous la forme d'un entier entre et . ; ; ; Rappel: On utilise la notation pour représenter le reste de la division de par . Par exemple,   Donner les réponses aux calculs de l'exercice précédent sous la forme d'un entier entre et .         On considère les entiers naturels impairs . Pour , calculer pour quelques entiers. Comment démontrer que cela sera toujours vrai?  En calculant pour les premières valeurs de , on obtient , , , et . Ainsi, on remarque que .  Pour pouvoir démontrer que pour tout les éléments de , on remarque que est impair si et seulement si est congru à , , ou modulo . Ainsi, si est impair, en utilisant les propriétés , on obtient que est congru à , , ou modulo . Par les calculs précédents, on a alors que pour tout .   Un tableau contenant une infinité de lignes et colonnes contenant les nombres naturels est construit. Les premières lignes sont données à la table ci-dessous. On considère l'élément à la première ligne et la première colonne comme la position . De manière générale, un élément en position est à la ligne et colonne . Par exemple, est à la position .   Un tableau de nombres                                                                                                         À quelle ligne et quelle colonne retrouve-t-on le nombre ? Le nombre se trouve à la position . À quelle ligne et quelle colonne retrouve-t-on le nombre ? Le nombre se trouve à la position . À quelle ligne et quelle colonne retrouve-t-on le nombre ? Le nombre se trouve à la position . À quelle ligne et quelle colonne retrouve-t-on votre numéro de DA? Votre DA se trouve à la position , où est le reste de votre DA lors de la division par .  Résoudre les congruences suivantes ou expliquer pourquoi il n'y a pas de solutions. Cette équation ne possède aucune solution, car .  Résoudre les congruences suivantes sans essayer toutes les possibilités ou expliquer pourquoi il n'y a pas de solutions.  Ainsi, est une solution à l'équation si et seulement si .  Ainsi, est une solution à l'équation si et seulement si .  Ainsi, est une solution à l'équation si et seulement si . Cette équation ne possède aucune solution, car  Ainsi, est une solution à l'équation si et seulement si . Les résultats de l'exercice précédent peuvent être utile. On peut aussi y aller par essaie-erreur pour la plus part des équations.  Sachant que est une solution à l'équation , trouver une solution à .  Ainsi, une solution est , ou encore .  On consdière la paire de congruences suivantes: .  Trouver une valeur de qui satisfait simultanément ces deux équations.  Écrire la soution à la première congruence comme et remplacer dans la deuxième.  Clairement, si , alors est une solution de la première équation, mais pas de la deuxième. Cependant, on sait que toutes les solutions de la première équation s'écrive comme , où .  Ainsi, en remplaçant par dans la deuxième équation, on obtient   Ainsi, on peut obtenir une solution en remplaçant cette fois par dans , ce qui donne . On peut en effet vérifier que:   En fait, on a montrer que, pour que soit une solution à la deuxième équation, on doit avoir , c'est-à-dire , pour .  Ainsi, en remplaçant dans , on a que , c'est-à-dire que est une solution aux deux équation si et seulement si est une solution à l'équation ou encore .   Une relation entre deux objets est une relation d'équivalence si pour on a  que la relation est symétrique, c'est-à-dire que si , alors ;  que la relation est réflexive, c'est-à-dire que ;  que la relation est transitive, c'est-à-dire que si et , alors .   Pour la congruence modulo , on peut plus simplement écrire . Montrer que la congruence modulo est une relation d'équivalence.   On utilise principalement la version de congruence modulo donnée par la proposition On doit vérifier que la relation respecte les trois propriétés d'une relation d'équivalence.    Si , on doit montrer que . Or, si , on a que , c'est-à-dire que pour un certain . On a alors , d'où , c'est-à-dire que .   On a bien que , car .  Supposons que et . On a alors que et . Par définition de la divisibilité, on a et , pour certain . En additionnant, on obtient Par ce qui précède, on a bien que , c'est-à-dire que .       Exercices supplémentaires  Encoder les messages suivants avec le décalage de César précisé avec le message. Mon enseignant est le meilleur avec décalage Je vais faire tous les devoirs avec décalage Un jour je serai le meilleur dresseur avec décalage  Décoder les messages suivants, qui ont été chiffrés par un décalage de César précisé avec le message. EHBWEPXAWQZADKNO avec décalage MNBYXVVNBMNBYXRANBMNBJWJWJB avec décalage MFTNBUIFNBUJRVFTEJTDSFUFTDFTUWSBJNFOUHFOJBM avec décalage  Encoder les messages suivants avec le système RSA dont les paramètres sont précisés avec le message. Mon enseignant est le meilleur avec paramètres Je vais faire tous les devoirs avec paramètres Un jour je serai le meilleur dresseur avec paramètres Qui a-t-il de particulier avec ces messages codés? Est-ce qu'il y a une lettre qui est facile à décoder? En utilisant des blocs de lettres comme dans le vrai RSA, ceci ne se produit pas.  Décoder les messages suivants, qui ont été chiffrés par RSA avec paramètres précisés avec le message. [8, 349, 1231, 64, 1000, 1, 684, 125, 807, 8, 349, 1231, 64] avec [6041, 80552, 64471, 1, 40280, 76462, 6041, 75310, 6041, 40280, 2122, 78295, 80552, 16446, 1, 32487, 2122, 80552, 6041, 73799, 1, 20790, 3336, 6041, 40280, 20790, 16446, 1, 79033, 2122, 46951, 6415, 70263, 2122, 46951, 40280] avec [10, 1, 7357, 15878, 6017, 16044, 6017, 1172, 6017, 341, 6017, 10370, 341, 6017, 13378, 1, 16044, 11527, 341, 1518, 11527, 7357, 3855] avec  QFINXUFWNYNTS Le message AYHOPYXBPKPZWHYBAKHUZSHKPZWHYPAPVUYHCPYHPAHBSPZHUAZBIAPSAVBAWSHPZPYTVABZKVUJZBYSPUJVUUBUVFHBTHUXBHUA a été encodé à l'aide d'un décalage César, mais le décalage est inconnu. Déterminer le message original, sans essayer toutes les possibilités. Si même après avoir déterminé quelles lettres sont les plus fréquentes le message ne se déchiffre toujours pas, un indice avec décalage 5 a été crypté dans le titre de l'exercice.  Ne pas lire avant d'avoir réfléchi et cherché à propos de l'indice 1. L'indice ci-dessous est un décalage de César avec décalage . Décoder chaque phrase individuellement pour une meilleure lisibilité.  QFINXUFWNYNTSJXYZSWTRFSIJLJTWLJUJWJHVZNJXYJHWNYXFSXZYNQNXJWQFQJYYWJJ  FUWJXJVZJQQJXTSYQJXQJYYWJXQJXUQZXZYNQNXJJXIJQFQFSLZJKWFSHFNXJ  Le message est un résumé du livre la disparition de George Perec, que l'on peut lire sur le site de Renaud-Bray . Ce livre a la particularité qu'il ne contient pas la lettre e , sauf pour le nom de l'auteur.    "
},
{
  "id": "def-modulo",
  "level": "2",
  "url": "sec-modulo.html#def-modulo",
  "type": "Définition",
  "number": "3.3.1",
  "title": "Congruence modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Congruence modulo   Soit des entiers et un autre entier positif. On dit que est congru à modulo si et possède le même reste lors de la division par . On peut alors écrire .  On dit alors que et sont dans la même classe d'équivalence modulo . De manière générale, pour un entier , on définit la classe d'équivalence à modulo par .   "
},
{
  "id": "ex-modulo5",
  "level": "2",
  "url": "sec-modulo.html#ex-modulo5",
  "type": "Exemple",
  "number": "3.3.2",
  "title": "Les classes d’équivalence modulo <span class=\"process-math\">\\(5\\text{.}\\)<\/span>.",
  "body": " Les classes d'équivalence modulo .  On considère les entiers et la division par . On cherche à décrire en extension les classes d'équivalence modulo , à savoir les ensembles de la définition .   Les restes de la division par possibles sont . À chacun de ces restes correspond une classe d'équivalence qui contient d'autres entiers. Par exemple, contient tous les nombres qui produisent un reste de lorsque divisé par . Ce sont les multiples de : .  Les nombres dans s'écrivent comme . Ce sont donc les nombres qui valent un de plus qu'un multiple de . On aura alors .  D'une manière analogue, on remarque que la classe d'équivalence contient les nombres qui valent deux de plus qu'un multiple de , les nombres qui valent trois de plus qu'un multiple de et finalement, les nombres qui valent quatre de plus qu'un multiple de pour . On a .   "
},
{
  "id": "ex-modulotemps",
  "level": "2",
  "url": "sec-modulo.html#ex-modulotemps",
  "type": "Exemple",
  "number": "3.3.3",
  "title": "Classes d’équivalence et moments.",
  "body": " Classes d'équivalence et moments  Au moment d'écrire ces lignes, la date est et c'est un vendredi. Que peut-on dire de  La journée de la semaine jours après l'écriture de ces lignes;  Le mois de l'année mois après l'écriture de ces lignes;  L'heure heures après l'écriture de ces lignes;  Le jour de la semaine ans après l'écriture de ces lignes;  Le jour de la semaine ans après l'écriture de ces lignes;  La date jours après l'écriture de ces lignes;  La date jours après l'écriture de ces lignes.   On prend comme convention d'ordonner les journées de la semaine du dimanche au samedi, avec dimanche correspondant à et samedi à . On commence à numéroter par afin de correspondre aux classes d'équivalence. Ainsi, vendredi correspond à . Comme il y a sept jours dans une semaine, on veut travailler modulo . jours après l'écriture, on était le jour . En regardant le reste de lors de la division par , on retrouve , ce qui signigie que . On peut donc dire que jours plus tard, c'était l'équivalent du jour , c'est-à-dire un mardi.  On note au passage ici que le choix de faire débuter la semaine au dimanche est arbitraire et ne change rien. Si on avait fait commencer la semaine le mercredi (donc vendredi , alors on aurait eu , ce qui donne encore le mardi.   D'une manière similaire, on pourrait associer les mois de l'année à des nombres en commençant par janvier à . On numérote toutefois déjà les mois de   à , allant de janvier à décembre. Dans ce cas, on peut aussi choisir décembre comme point de départ décembre. Puisque , on a équivalence. Septembre étant le neuvième mois, mois après septembre, ce sera équivalent au , donc au septième mois, soit juillet.  On travaille modulo , avec le début correspondant à minuit. Dans heures, puisque et que , on conclut que heures après l'écriture de ces lignes, il était .  L'année et l'année ne sont pas des années bissextiles. Elle contiennent donc chacun jours. Pour trouver le jour de la semaine ans après le septembre , il suffit de travailler modulo avec le vendredi de . En ajoutant les journées de ces deux années, on trouve , qui est congru à modulo . Dans deux ans, le septembre sera donc un dimanche.  Dans les quatre années suivant , il y a nécessairement une année bissextile. Celle-ci se trouve en . Donc pour calculer le jour de la semaine, il faut ajouter jours au vendredi de et travailler encore une fois modulo . On trouve alors . Le septembre sera (était?) donc un mercredi.  À partir d'ici, les choses se compliquent légèrement. La difficulté vient du fait que les mois n'ont pas tous le même nombre de jours et donc, on ne peut pas travailler modulo un entier régulier. On commence par ajouter les jours à pour obtenir . Puisque septembre compte jours, on travaillera modulo . On apportera toutefois une précision dans la prochaine solution.  Donc, , ce qui signifie que la date jours après le septembre est équivalent à un et donc, le octobre.  Si on essaie la même chose pour trouver la date jours après le septembre, on trouvera . On comprend assez rapidement qu'il ne peut s'agir du octobre. Il serait logique de penser que la date est alors le novembre, mais cela est aussi faux . L'erreur vient du fait que le prochain mois, octobre, compte jours et non pas comme septembre. On doit donc retrancher une journée à la date trouvée pour obtenir le novembre.  Le cas plus général est un problème relativement difficile étant donné la dépendance avec la date de départ, le nombre de jours par mois variant d'un mois à l'autre ainsi que les années bissextiles.  "
},
{
  "id": "sec-modulo-3-8",
  "level": "2",
  "url": "sec-modulo.html#sec-modulo-3-8",
  "type": "Remarque",
  "number": "3.3.4",
  "title": "Sur la notation modulo.",
  "body": "Sur la notation modulo   Après avoir vu plusieurs exemples, il est temps de faire une mise au point sur la notation utilisée pour dénoter la congruence modulo . Si sont congrus modulo , ils sont dits équivalents, en quelque sorte égaux, par rapport à la division par . On ne veut toutefois pas écrire , car au sens usuel de l'égalité, c'est probablement faux. Le symbole est utilisée pour dénoter l'équivalence ou la congruence entre deux objets mathématiques. Il serait par contre erroné de simplement écrire , puisque la congruence est dépendante du choix de . Ainsi , mais .   "
},
{
  "id": "prop-modulodivisibilite",
  "level": "2",
  "url": "sec-modulo.html#prop-modulodivisibilite",
  "type": "Proposition",
  "number": "3.3.5",
  "title": "Congruence modulo <span class=\"process-math\">\\(n\\)<\/span> et divisibilité.",
  "body": " Congruence modulo et divisibilité  Soit deux entiers et un autre entier. Alors si et seulement si .   Puisqu'on a affaire à une double implication, on procède en deux étapes.  Dans un premier temps, on suppose que au sens de la définition . On tente maintenant de montrer que divise . D'une part, on sait qu'il existe tels que . De plus, on sait qu'il existe tels que . Puisque , on doit avoir . On peut alors écrire . Ainsi, puisque , on conclut que .  On suppose maintenant que et on veut montrer que cette hypothèse entraine que . Si divise , alors on peut écrire pour un certain . Si on écrit la division de chaque côté sous la forme quotient reste, il suit du fait que que la forme quotient reste du côté gauche doit s'écrire . De l'autre côté, et le reste est nul. On doit donc avoir et en développant, on est forcé d'avoir . Les nombres ont donc le même reste lors de la division par et ainsi, .   "
},
{
  "id": "prop-moduloprop",
  "level": "2",
  "url": "sec-modulo.html#prop-moduloprop",
  "type": "Proposition",
  "number": "3.3.6",
  "title": "Propriété de l’arithmétique modulaire.",
  "body": " Propriété de l'arithmétique modulaire  Soit et des entiers tels que et . Alors  ;  ;  .   L'idée derrière cette propriété découle du fait suivant: si , alors pour tout , on a . On peut toujours effectuer une même opération de part et d'autre d'une égalité et préserver celle-ci. Dans le contexte des congruences modulo , il n'est pas nécessaire d'ajouter de chaque côté le même nombre, en autant que les ajouts soient dans la même classe d'équivalence. On démontre maintenant la première propriété.  Puisque et , on sait qu'il existe tels que et . En additionnant et , on trouve . De même .  Si , alors on vient de montrer que et ont le même reste lorsque divisés par . Ils sont donc congrus modulo . Si toutefois , alors il faut d'abord écrire . Puisque , on sait que et donc . On a alors et et le résultat tient aussi.   La deuxième propriété peut être démontrée d'une manière identique à la première, mais on choisit ici de présenter une approche différente tirant profit de la proposition . D'une part, si , alors puisque . De même, . On peut alors écrire , qui devient . Or cela signifie que et donc, que . Selon la proposition , on a donc .  Voir l'exercice .  "
},
{
  "id": "sec-modulo-4-5",
  "level": "2",
  "url": "sec-modulo.html#sec-modulo-4-5",
  "type": "Exemple",
  "number": "3.3.7",
  "title": "Application des propriétés de l’arithmétique modulaire.",
  "body": " Application des propriétés de l'arithmétique modulaire  On cherche le reste de la division de par .   L'idée est de décomposer le nombre en quelque chose de plus petit et dont on connait le reste de la division par . Dans ce cas-ci, on voit que et donc . Comme , la troisième propriété appliquée à répétition nous permet de dire que . On peut ensuite observer que et puisque , alors .  Le reste de la division par du nombre est donc . On note au passage qu'on aurait pu y arriver plus rapidement en divisant par plutôt que par initialement.   "
},
{
  "id": "prop-divmodulo",
  "level": "2",
  "url": "sec-modulo.html#prop-divmodulo",
  "type": "Proposition",
  "number": "3.3.8",
  "title": "La division dans une congruence modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " La division dans une congruence modulo  Soit et des entiers tels que . Alors .  En particulier, si , alors .    "
},
{
  "id": "sec-modulo-4-10",
  "level": "2",
  "url": "sec-modulo.html#sec-modulo-4-10",
  "type": "Remarque",
  "number": "3.3.9",
  "title": "Ce que la proposition ne dit pas.",
  "body": " Ce que la proposition ne dit pas  À noter que la proposition ne dit pas que . On ne peut tout simplement pas en être certain. En reprenant les exemples qui précèdent la proposition ci-dessus, puisque , on sait que , c'est-à-dire . Cela n'empêchait . Pour l'autre exemple par contre, on n'a que , soit .  "
},
{
  "id": "sec-modulo-4-12",
  "level": "2",
  "url": "sec-modulo.html#sec-modulo-4-12",
  "type": "Exemple",
  "number": "3.3.10",
  "title": "Classes d’équivalence et moments, prise deux.",
  "body": " Classes d'équivalence et moments, prise deux  On reprend la date ( un vendredi) comme référence et on considère à nouveau les moments suivants (sans les deux derniers):  La journée de la semaine jours après l'écriture de ces lignes;  Le mois de l'année mois après l'écriture de ces lignes;  L'heure heures après l'écriture de ces lignes;  Le jour de la semaine ans après l'écriture de ces lignes;  Le jour de la semaine ans après l'écriture de ces lignes;     En travaillant modulo , puisque , on peut dire que . Puisque , on conclut à nouveau que jours après l'écriture, c'était un mardi. Une autre approche consiste à dire que et donc et ainsi, on retrouve le mardi.  Puisque , plutôt que d'additionner mois, on peut soustraire mois au mois actuel et trouver la réponse, soit et donc, juillet.  En travaillant modulo , on a et donc, heures après l'écriture de ces lignes est équivalent en termes d'heures à heures après. Il était donc .  Tel que discuté précédemment, il n'y a pas d'année bissextile en ni en . Ces deux années comptent donc pour jours. Puisque , la journée de la semaine deux ans après l'écriture de ces lignes est un dimanche.  Les quatre années comptant ici pour jours et que et que , le jour de la semaine ans après l'écriture de ces lignes est un mercredi.  "
},
{
  "id": "sec-modulo-4-14",
  "level": "2",
  "url": "sec-modulo.html#sec-modulo-4-14",
  "type": "Table",
  "number": "3.3.11",
  "title": "Table de la multiplication usuelle",
  "body": " Table de la multiplication usuelle       0  1  2  3  4  5  6  7  8  9    0  0  0  0  0  0  0  0  0  0  0    1  0  1  2  3  4  5  6  7  8  9    2  0  2  4  6  8  10  12  14  16  18    3  0  3  6  9  12  15  18  21  24  27    4  0  4  8  12  16  20  24  28  32  36    5  0  5  10  15  20  25  30  35  40  45    6  0  6  12  18  24  30  36  42  48  54    7  0  7  14  21  28  35  42  49  56  63    8  0  8  16  24  32  40  48  56  64  72    9  0  9  18  27  36  45  54  63  72  81    "
},
{
  "id": "sec-modulo-4-16",
  "level": "2",
  "url": "sec-modulo.html#sec-modulo-4-16",
  "type": "Table",
  "number": "3.3.12",
  "title": "Table de l’addition modulo <span class=\"process-math\">\\(5\\)<\/span>",
  "body": " Table de l'addition modulo    +  0  1  2  3  4    0  0  1  2  3  4    1  1  2  3  4  0    2  2  3  4  0  1    3  3  4  0  1  2    4  4  0  1  2  3    "
},
{
  "id": "tab-multmod5",
  "level": "2",
  "url": "sec-modulo.html#tab-multmod5",
  "type": "Table",
  "number": "3.3.13",
  "title": "Table de la multiplication modulo 5",
  "body": " Table de la multiplication modulo 5       0  1  2  3  4    0  0  0  0  0  0    1  0  1  2  3  4    2  0  2  4  1  3    3  0  3  1  4  2    4  0  4  3  2  1    "
},
{
  "id": "sec-modulo-5-4",
  "level": "2",
  "url": "sec-modulo.html#sec-modulo-5-4",
  "type": "Exemple",
  "number": "3.3.14",
  "title": "Des équations à congruence modulo.",
  "body": " Des équations à congruence modulo  On cherche toutes à résoudre les congruences suivantes (indépendamment):    .     Pour la première congruence, on ne peut pas directement diviser par puisque . Mais on peut toutefois ajouter un élément de la classe d'équivalence de à droite sans changer la véracité de la congruence, selon la proposition . En ajoutant , on obtient , qui revient à . Maintenant qu'on a et que , on peut diviser par et obtenir . Les solutions sont donc tous les nombres congrus à modulo .    Pour la seconde congruence, il peut être une bonne idée de réduire dans un premier temps modulo les membres de chaque côté de l'équation. En effet, si et , alors la congruence peut s'écrire de manière plus simple . Puisque et , la congruence peut s'écrire . Cette fois, ajouter ne sera pas suffisant, mais si on ajoute , on obtient et en divisant, on conclut que . Les solutions sont donc tous les nombres congrus à modulo .   Dans cet exemple, peu importe combien de multiples de on ajoute à , on n'obtiendra jamais un nombre pair qui permettra la division par . Cette congruence en fait n'a pas de solutions. Lorsqu'on multiplie par un entier, on obtient un nombre pair, qui ne peut pas être congru à modulo .  "
},
{
  "id": "prop-congruence0solution",
  "level": "2",
  "url": "sec-modulo.html#prop-congruence0solution",
  "type": "Proposition",
  "number": "3.3.15",
  "title": "Congruence sans solutions.",
  "body": " Congruence sans solutions  Soit avec différents de . Si , alors la congruence ne possède pas de solutions.  On suppose que est une solution à la congruence. Cela signifie que ou de manière équivalente, . On réécrit pour obtenir pour un certain . On divise maintenant cette équation par . On obtient alors où sont des entiers. Or puisque , le terme lui, n'est pas entier. Ceci crée une contradiction et donc, il ne peut pas exister de solutions.  "
},
{
  "id": "sec-modulo-5-8",
  "level": "2",
  "url": "sec-modulo.html#sec-modulo-5-8",
  "type": "Proposition",
  "number": "3.3.16",
  "title": "Congruence et solutions.",
  "body": " Congruence et solutions  Soit et avec différents de . Si , alors la congruence possède des solutions, une infinité provenant d'autant de classes d'équivalence différente que la valeur du .   "
},
{
  "id": "def-inversemodulo",
  "level": "2",
  "url": "sec-modulo.html#def-inversemodulo",
  "type": "Définition",
  "number": "3.3.17",
  "title": "L’inverse d’un nombre modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " L'inverse d'un nombre modulo  Soit deux entiers avec . Les nombres dans l'unique classe d'équivalence satisfaisant l'équation sont appelés des inverses de modulo .  "
},
{
  "id": "ex-inversemodulo",
  "level": "2",
  "url": "sec-modulo.html#ex-inversemodulo",
  "type": "Exemple",
  "number": "3.3.18",
  "title": "Un inverse modulo <span class=\"process-math\">\\(72\\)<\/span>.",
  "body": " Un inverse modulo  On cherche un inverse à modulo , c'est-à-dire un nombre tel que .   Pour trouver un inverse, il faut trouver tel que . En d'autres mots, pour un certain . En réécrivant, on remarque qu'il faut que et de plus, . Le lemme de Bézout et l'algorithme d'Euclide seront utiles pour trouver l'inverse. D'une part, on a , selon l'algorithme d'Euclide. Puis, en réorganisant ces équations, on trouve .  est donc un inverse à modulo .   "
},
{
  "id": "rq-modulo-2",
  "level": "2",
  "url": "sec-modulo.html#rq-modulo-2",
  "type": "Question de compréhension",
  "number": "3.3.5.1",
  "title": "",
  "body": "Déterminer La journée de la semaine jours après un jeudi; La journée de la semaine jours après un mardi; La journée de la semaine jours avant un samedi. "
},
{
  "id": "rq-modulo-3",
  "level": "2",
  "url": "sec-modulo.html#rq-modulo-3",
  "type": "Question de compréhension",
  "number": "3.3.5.2",
  "title": "",
  "body": "Donner entiers qui sont congrus à modulo . "
},
{
  "id": "rq-modulo-4",
  "level": "2",
  "url": "sec-modulo.html#rq-modulo-4",
  "type": "Question de compréhension",
  "number": "3.3.5.3",
  "title": "",
  "body": "Donner les tables d'addition et de multiplication modulo . "
},
{
  "id": "rq-modulo-5",
  "level": "2",
  "url": "sec-modulo.html#rq-modulo-5",
  "type": "Question de compréhension",
  "number": "3.3.5.4",
  "title": "",
  "body": "Donner les tables d'addition et de multiplication modulo . "
},
{
  "id": "rq-modulo-6",
  "level": "2",
  "url": "sec-modulo.html#rq-modulo-6",
  "type": "Question de compréhension",
  "number": "3.3.5.5",
  "title": "",
  "body": "Quels sont les entiers dans qui ont un inverse modulo ? Est-ce que cela satisfait la définition . "
},
{
  "id": "rq-modulo-7",
  "level": "2",
  "url": "sec-modulo.html#rq-modulo-7",
  "type": "Question de compréhension",
  "number": "3.3.5.6",
  "title": "",
  "body": "Quels sont les entiers dans qui ont un inverse modulo ? Est-ce que cela satisfait la définition . "
},
{
  "id": "rq-modulo-8",
  "level": "2",
  "url": "sec-modulo.html#rq-modulo-8",
  "type": "Question de compréhension",
  "number": "3.3.5.7",
  "title": "",
  "body": "Le message ORTEGAXGVGYJKIXEVZUMXGVNOKGRKDGSKT a été encodé à l'aide d'un chiffrement de César avec décalage correspondant à 6. Quel est ce message. "
},
{
  "id": "rq-modulo-9",
  "level": "2",
  "url": "sec-modulo.html#rq-modulo-9",
  "type": "Question de compréhension",
  "number": "3.3.5.8",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-modulo-2-3",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-2-3",
  "type": "Exercice",
  "number": "3.3.6.1",
  "title": "",
  "body": "Déterminer le plus petit entier positif congru à modulo: ;  Ainsi, le plus petit entier positif congru à modulo est . Puisque est un nombre impair, on sait que le plus petit entier positif congru à modulo est ;  Ainsi, le plus petit entier positif congru à modulo est . ;  Ainsi, le plus petit entier positif congru à modulo est . ;  Ainsi, le plus petit entier positif congru à modulo est . "
},
{
  "id": "exo-modulo-2-4",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-2-4",
  "type": "Exercice",
  "number": "3.3.6.2",
  "title": "",
  "body": "Pour chaque opération ci-dessous, donner la réponse sous la forme d'un entier entre et . ; ; ; Rappel: On utilise la notation pour représenter le reste de la division de par . Par exemple,  "
},
{
  "id": "exo-modulo-2-5",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-2-5",
  "type": "Exercice",
  "number": "3.3.6.3",
  "title": "",
  "body": "Donner les réponses aux calculs de l'exercice précédent sous la forme d'un entier entre et .       "
},
{
  "id": "exo-modulo-2-6",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-2-6",
  "type": "Exercice",
  "number": "3.3.6.4",
  "title": "",
  "body": "On considère les entiers naturels impairs . Pour , calculer pour quelques entiers. Comment démontrer que cela sera toujours vrai?  En calculant pour les premières valeurs de , on obtient , , , et . Ainsi, on remarque que .  Pour pouvoir démontrer que pour tout les éléments de , on remarque que est impair si et seulement si est congru à , , ou modulo . Ainsi, si est impair, en utilisant les propriétés , on obtient que est congru à , , ou modulo . Par les calculs précédents, on a alors que pour tout .  "
},
{
  "id": "exo-modulo-2-7",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-2-7",
  "type": "Exercice",
  "number": "3.3.6.5",
  "title": "",
  "body": "Un tableau contenant une infinité de lignes et colonnes contenant les nombres naturels est construit. Les premières lignes sont données à la table ci-dessous. On considère l'élément à la première ligne et la première colonne comme la position . De manière générale, un élément en position est à la ligne et colonne . Par exemple, est à la position .   Un tableau de nombres                                                                                                         À quelle ligne et quelle colonne retrouve-t-on le nombre ? Le nombre se trouve à la position . À quelle ligne et quelle colonne retrouve-t-on le nombre ? Le nombre se trouve à la position . À quelle ligne et quelle colonne retrouve-t-on le nombre ? Le nombre se trouve à la position . À quelle ligne et quelle colonne retrouve-t-on votre numéro de DA? Votre DA se trouve à la position , où est le reste de votre DA lors de la division par . "
},
{
  "id": "exo-modulo-2-8",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-2-8",
  "type": "Exercice",
  "number": "3.3.6.6",
  "title": "",
  "body": "Résoudre les congruences suivantes ou expliquer pourquoi il n'y a pas de solutions. Cette équation ne possède aucune solution, car . "
},
{
  "id": "exo-modulo-2-9",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-2-9",
  "type": "Exercice",
  "number": "3.3.6.7",
  "title": "",
  "body": "Résoudre les congruences suivantes sans essayer toutes les possibilités ou expliquer pourquoi il n'y a pas de solutions.  Ainsi, est une solution à l'équation si et seulement si .  Ainsi, est une solution à l'équation si et seulement si .  Ainsi, est une solution à l'équation si et seulement si . Cette équation ne possède aucune solution, car  Ainsi, est une solution à l'équation si et seulement si . Les résultats de l'exercice précédent peuvent être utile. On peut aussi y aller par essaie-erreur pour la plus part des équations. "
},
{
  "id": "exo-modulo-2-10",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-2-10",
  "type": "Exercice",
  "number": "3.3.6.8",
  "title": "",
  "body": "Sachant que est une solution à l'équation , trouver une solution à .  Ainsi, une solution est , ou encore . "
},
{
  "id": "exo-modulo-2-11",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-2-11",
  "type": "Exercice",
  "number": "3.3.6.9",
  "title": "",
  "body": "On consdière la paire de congruences suivantes: .  Trouver une valeur de qui satisfait simultanément ces deux équations.  Écrire la soution à la première congruence comme et remplacer dans la deuxième.  Clairement, si , alors est une solution de la première équation, mais pas de la deuxième. Cependant, on sait que toutes les solutions de la première équation s'écrive comme , où .  Ainsi, en remplaçant par dans la deuxième équation, on obtient   Ainsi, on peut obtenir une solution en remplaçant cette fois par dans , ce qui donne . On peut en effet vérifier que:   En fait, on a montrer que, pour que soit une solution à la deuxième équation, on doit avoir , c'est-à-dire , pour .  Ainsi, en remplaçant dans , on a que , c'est-à-dire que est une solution aux deux équation si et seulement si est une solution à l'équation ou encore .  "
},
{
  "id": "exo-modulo-2-12",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-2-12",
  "type": "Exercice",
  "number": "3.3.6.10",
  "title": "",
  "body": "Une relation entre deux objets est une relation d'équivalence si pour on a  que la relation est symétrique, c'est-à-dire que si , alors ;  que la relation est réflexive, c'est-à-dire que ;  que la relation est transitive, c'est-à-dire que si et , alors .   Pour la congruence modulo , on peut plus simplement écrire . Montrer que la congruence modulo est une relation d'équivalence.   On utilise principalement la version de congruence modulo donnée par la proposition On doit vérifier que la relation respecte les trois propriétés d'une relation d'équivalence.    Si , on doit montrer que . Or, si , on a que , c'est-à-dire que pour un certain . On a alors , d'où , c'est-à-dire que .   On a bien que , car .  Supposons que et . On a alors que et . Par définition de la divisibilité, on a et , pour certain . En additionnant, on obtient Par ce qui précède, on a bien que , c'est-à-dire que .    "
},
{
  "id": "exo-modulo-3-2",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-3-2",
  "type": "Exercice",
  "number": "3.3.6.11",
  "title": "",
  "body": "Encoder les messages suivants avec le décalage de César précisé avec le message. Mon enseignant est le meilleur avec décalage Je vais faire tous les devoirs avec décalage Un jour je serai le meilleur dresseur avec décalage "
},
{
  "id": "exo-modulo-3-3",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-3-3",
  "type": "Exercice",
  "number": "3.3.6.12",
  "title": "",
  "body": "Décoder les messages suivants, qui ont été chiffrés par un décalage de César précisé avec le message. EHBWEPXAWQZADKNO avec décalage MNBYXVVNBMNBYXRANBMNBJWJWJB avec décalage MFTNBUIFNBUJRVFTEJTDSFUFTDFTUWSBJNFOUHFOJBM avec décalage "
},
{
  "id": "exo-modulo-3-4",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-3-4",
  "type": "Exercice",
  "number": "3.3.6.13",
  "title": "",
  "body": "Encoder les messages suivants avec le système RSA dont les paramètres sont précisés avec le message. Mon enseignant est le meilleur avec paramètres Je vais faire tous les devoirs avec paramètres Un jour je serai le meilleur dresseur avec paramètres Qui a-t-il de particulier avec ces messages codés? Est-ce qu'il y a une lettre qui est facile à décoder? En utilisant des blocs de lettres comme dans le vrai RSA, ceci ne se produit pas. "
},
{
  "id": "exo-modulo-3-5",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-3-5",
  "type": "Exercice",
  "number": "3.3.6.14",
  "title": "",
  "body": "Décoder les messages suivants, qui ont été chiffrés par RSA avec paramètres précisés avec le message. [8, 349, 1231, 64, 1000, 1, 684, 125, 807, 8, 349, 1231, 64] avec [6041, 80552, 64471, 1, 40280, 76462, 6041, 75310, 6041, 40280, 2122, 78295, 80552, 16446, 1, 32487, 2122, 80552, 6041, 73799, 1, 20790, 3336, 6041, 40280, 20790, 16446, 1, 79033, 2122, 46951, 6415, 70263, 2122, 46951, 40280] avec [10, 1, 7357, 15878, 6017, 16044, 6017, 1172, 6017, 341, 6017, 10370, 341, 6017, 13378, 1, 16044, 11527, 341, 1518, 11527, 7357, 3855] avec "
},
{
  "id": "exo-modulo-3-6",
  "level": "2",
  "url": "sec-modulo.html#exo-modulo-3-6",
  "type": "Exercice",
  "number": "3.3.6.15",
  "title": "QFINXUFWNYNTS.",
  "body": "QFINXUFWNYNTS Le message AYHOPYXBPKPZWHYBAKHUZSHKPZWHYPAPVUYHCPYHPAHBSPZHUAZBIAPSAVBAWSHPZPYTVABZKVUJZBYSPUJVUUBUVFHBTHUXBHUA a été encodé à l'aide d'un décalage César, mais le décalage est inconnu. Déterminer le message original, sans essayer toutes les possibilités. Si même après avoir déterminé quelles lettres sont les plus fréquentes le message ne se déchiffre toujours pas, un indice avec décalage 5 a été crypté dans le titre de l'exercice.  Ne pas lire avant d'avoir réfléchi et cherché à propos de l'indice 1. L'indice ci-dessous est un décalage de César avec décalage . Décoder chaque phrase individuellement pour une meilleure lisibilité.  QFINXUFWNYNTSJXYZSWTRFSIJLJTWLJUJWJHVZNJXYJHWNYXFSXZYNQNXJWQFQJYYWJJ  FUWJXJVZJQQJXTSYQJXQJYYWJXQJXUQZXZYNQNXJJXIJQFQFSLZJKWFSHFNXJ  Le message est un résumé du livre la disparition de George Perec, que l'on peut lire sur le site de Renaud-Bray . Ce livre a la particularité qu'il ne contient pas la lettre e , sauf pour le nom de l'auteur. "
},
{
  "id": "sec_prodSomme",
  "level": "1",
  "url": "sec_prodSomme.html",
  "type": "Section",
  "number": "4.1",
  "title": "Méthodes de dénombrement: Principes de base",
  "body": " Méthodes de dénombrement: Principes de base   Dans ce chapitre, nous allons étudier les différentes méthodes permettant de compter des objets ayant certaines propriétés. Les techniques de dénombrement sont basées sur des principes relativement simples, mais peuvent demander beaucoup d'ingéniosité afin de dénombrer les bons objets, ne pas en oublier et les compter une seule fois!  Lorsqu'on veut dénombrer certains objets, il est souvent utile de penser au problème comme si l’on voulait accomplir la tâche et de compter le nombre de façons différentes d'accomplir cette tâche. En particulier, on va souvent décrire les problèmes de dénombrement en termes du nombre de façons de choisir certains objets.  Dans cette section, nous étudierons les principes du produit et de la somme et leur variante.    Principe du produit   Lorsqu'on veut compter le nombre de façons différentes d'accomplir une tâche, il est souvent plus efficace de séparer la tâche en différentes étapes plus simples. On doit alors compter le nombre de façons d'accomplir chacune des étapes, et ensuite multiplier ces nombres pour obtenir le résultat. C'est ce qu'on appelle le principe du produit. On considère un exemple de base avant d'énoncer le principe en général.    Le nombre de costumes  Supposons qu'un de vos amis doit choisir un costume pour animer un spectacle. Si votre ami doit choisir parmi 3 chapeaux, 6 chandails et 4 pantalons. De combien de façons différentes peut-il s'habiller?  On sépare la tâche de choisir le costume en trois étapes: choisir le chapeau, choisir le chandail et finalement choisir les pantalons. Il y a 3 façons d'exécuter la première tâche, 6 façons d'exécuter la deuxième tâche et 4 façons d'exécuter la troisième. Ainsi, au total, il y a façons de choisir un costume différent.   À l'exemple , l'ordre dans lequel on exécute chacune des tâches n'a pas d'importance. Si votre ami choisit son chapeau en premier, ou bien il peut choisir son chandail en premier, et le nombre de costumes ne change pas. Ainsi, lorsqu'on veut dénombrer les costumes, on peut décider d'un ordre arbitraire (par exemple, chapeau, chandail, pantalons).  Le principe utilisé à l'exemple précédent est ce qu'on appelle le principe du produit. On le nomme parfois aussi le principe du ET, car on doit faire un premier choix, ET ensuite faire un deuxième choix. En langage plus formel, le principe du produit peut s'énoncer de deux façons.   Principe du produit   Supposons qu'une procédure peut être séparée en une séquence de deux tâches. S'il existe façons d'exécuter la première tâche, et façons d'exécuter la deuxième tâche, alors il y a façons d'exécuter la procédure.  Soit et deux ensembles, alors , c'est-à-dire que la cardinalité du produit cartésien est le produit des cardinalités.     Exemples de base du principe du produit  On veut compter le nombre de façons d'accomplir chacune des tâches suivantes.  Une compagnie formée de seulement deux employés, Damien et Laura, loue un étage d'un immeuble de bureaux. Si cet étage possède 15 bureaux, de combien de manières peut-on assigner un bureau à chaque employé? Pour assigner un bureau à chaque employé, on commence à assigner un bureau à Laura, puis on assigne un bureau à Damien. Il y a 15 bureaux possibles pour Laura. Ensuite, il reste 14 bureaux possibles pour Damien. Ainsi, il y a façons d'assigner un bureau à chaque employé.  Les chaises d'un auditorium sont étiquetées à l'aide d'une lettre un d'un nombre entier de 1 à 100. Combien de chaise peut-on étiqueter de cette façon. Pour étiqueter une chaise, on doit d'abord choisir une lettre, et ensuite choisir un nombre entier de 1 à 100. Il y a 26 choix possibles pour la lettre, et 100 choix possibles pour l'entier. On peut donc étiqueter chaises.  Combien de plaques d'immatriculation peut-on obtenir, si une plaque est formée de 3 lettres suivies de trois chiffres si l’on accepte toutes les séquences possibles? Pour chaque lettre, il y a 26 choix possibles. Pour chaque chiffre, il y a 10 choix possibles. Il y a donc possibilités.   À l'exercice , on a considérer le nombres de fonctions, de fonctions injectives et de fonctions surjective allant de vers . Puisque ces ensembles sont assez petits, on a pû énumérer toutes ces fonctions directement. On veut maintenant utiliser le principe du produit pour compter le nombre de fonctions et le nombre de fonctions injectives allant de vers . Par la suite, on va généraliser à des ensembles quelconques.   Retour sur le nombre de fonctions   Soit et .   Combien y a-t-il de fonctions ?  On compte le nombre de façons qu'il y a de définir une telle fonction . Pour se faire, on sépare la tâche en deux étapes: choisir la valeur de et ensuite choisir la valeur de .  Lorsqu'on choisit la valeur de , on a trois choix possibles: , ou bien .  Une fois qu'on a choisit , on doit choisir . Encore une fois, on a trois choix possibles: , ou bien .  Par le principe du produit, il y a alors façons différentes de choisir une fonction .  On remarque encore une fois que le fait de choisir avant n'a pas d'importance. Puisque cela n'a pas d'importance, on peut donc décider d'un ordre arbitraire.   Combien y a-t-il de fonctions injectives ?  Comme à la partie précédente, on compte le nombre de façons qu'il y a de définir une telle fonction . Pour se faire, on sépare la tâche en deux étapes: choisir la valeur de et ensuite choisir la valeur de .  Lorsqu'on choisit la valeur de , on a trois choix possibles: , ou bien .  Une fois qu'on a choisi , on doit choisir . Attention! Ici, on veut une fonction injective! Supposons par exemple que , il ne reste alors que deux choix possibles : ou bien . La même chose est vraie si l'on avait choisi une autre valeur pour , il ne resterait que deux choix possibles pour .  Par le principe du produit, il y a alors façons différentes de choisir une fonction injective .    Le cas des fonctions surjectives est beaucoup plus complexe. On étudiera ce cas dans une prochaine section .  On veut maintenant généraliser l'exemple précédent à des ensembles finis quelconques.   Compter des fonctions : Cas général  Soit deux ensembles et tels que et .  Combien de fonctions différentes existe-t-il? Pour chaque élément , on doit choisir la valeur de . Ainsi, pour chaque ,il y a possibilités pour . Puisqu'on doit faire choix et qu'il y a possibilités, pour chacun de ces choix, par le principe du produit, il y aura fonctions différentes.  Combien de fonctions injectives différentes existe-t-il? si , sinon.  Supposons qu'on étiquette les éléments de par . On commence par choisir la valeur de . Il y a choix possible. On note cette valeur , c'est-à-dire que .  On veut maintenant choisir la valeur de . Puisque est injective, . Il reste donc choix pour . On veut poursuivre ce raisonement de façon général pour tout les éléments de .  Supposons qu'on ait choisi les valeurs de pour tous les premières valeurs de , c'est-à-dire pour , et qu'on veut maintenant choisir la valeur de . Puisque est injective, on aura que pour . Il reste donc choix pour la valeur de . On répète cette démarche jusqu'à ce qu'on ait défini .  On remarque d'ailleurs que si , on ne peut pas trouver de fonction injective (car on ne pourra pas trouver de valeur pour tous les ). Ainsi, par le principe du produit, il y aura fonctions injectives différentes. En effet, lorsqu'on veut choisir la valeur de , il restera choix possible (attention aux indices!).   À la section , on a introduit, pour un ensemble , l'ensemble des puissances de (voir ). On avait remarqué que la cardinalité de semblait être donnée par . On utilise le principe du produit sur un exemple avant de généraliser ce résultat à un ensemble de taille fini quelconque.   Retour sur l'ensemble des puissances  On considère l'ensemble . On sait que , car on a décrit en extension à la section .  On veut utiliser le principe du produit pour arriver à la même conclusion. On pourra ensuite généraliser au cas où .   On veut dénombrer le nombre de sous-ensembles différents de . Ceci revient à compter le nombre de façons différentes qu'on peut construire un tel sous-ensemble .  Pour se faire, on sépare la tâche \"construire \" en trois étapes. On commence par choisir si . Il y a deux choix possibles (oui ou non). On choisit ensuite si . Il y a deux choix possibles (oui ou non). Finalement, on choisit si . Encore une fois, il y a deux choix possibles.  Par le principe du produit, il y a façons différentes de choisir un ensemble , et donc .    En utilisant un argument similaire, on peut déterminer la taille de l'ensemble des puissances pour un ensemble fini de taille quelconque.   L'ensemble des puissances: Cas général  Soit un ensemble de cardinalité fini, disons , quelle est la cardinalité de ? C'est-à-dire, qu'elle est la valeur de ?     Supposons qu'on ordonne les éléments de d'une manière quelconque, c'est-à-dire qu'on les étiquette par .  On veut maintenant construire (choisir) un sous-ensemble de . Pour se faire, on regarde successivement chaque élément de . Pour chaque élément , il y a deux choix possibles. Soit , soit . Par le principe du produit, il y a façons différentes de construire le sous-ensemble . Ainsi, .    À la section, , on étudiera plus en détail les permutations et les combinaisons. On introduit l'idée avec l'exemple ci-dessous , ainsi qu'avec l'exemple .   Les permutations  Combien de \"mots\" différents peut-on écrire en utilisant les lettres du \"mot\" ? Ici, \"mot\" veut simplement dire une suite de lettres, même si le \"mot\" n'est pas un vrai mot en français (ou n'importe quelle autre langue). On dit aussi qu'il s'agit des permutations des lettres de .   On utilise le principe du produit. On choisit la première lettre du mot, ensuite la deuxième, et ainsi de suite jusqu'à la dernière lettre.  Pour la première lettre, on a choix possibles. Pour la deuxième lettre, il reste choix possibles. Pour la troisième lettre, il reste choix possibles. Pour la quatrième lettre, il reste choix possibles. Finalement, il ne reste que choix pour la dernière lettre.  Ainsi, il y a mots différents qu'on peut obtenir à partir des lettres de .  Ce problème est un exemple de permutations. On verra, à la prochaine section , que le nombre de permutations de objets est , où la notation  y sera également définie.    Une solution alternative est de remarquer que d'écrire un mot utilisant les lettres de est équivalent à choisir une fonction injective , où est la lettre à la position du mot. Par exemple, les mots et sont équivalents aux fonctions et définies par   Ainsi, le nombre de mots différents formés à partir des lettres de est aussi le nombre de fonctions injectives de vers . Par l'exemple , on sait qu'il y en a .      Principe de la somme   Il est parfois difficile d'utiliser le principe du produit directement pour dénombrer une situation. Cela se produit souvent lorsque le nombre de façons d'accomplir une tâche dépend d'une condition. On doit alors compter le nombre de façons d'accomplir la tâche pour chaque condition, et ensuite additionner ces résultats. On commence par considérer un exemple très simple, avant d'énoncer ce principe.    Des lettres ou des chiffres   Supposons que l'on doive créer un mot de passe composé de quatre caractères pour un site quelconque. Supposons qu'en plus tous les caractères doivent soit tous être une des lettres de l'alphabet, ou bien ils doivent tous être un chiffre (de à ). Combien de façons différentes y a-t-il de choisir un mot de passe?    On sépare la tâche selon si on choisit d'utiliser des lettres ou des chiffres pour notre mot de passe.  Si l'on choisit d'utiliser des lettres pour le mot de passe, on aura choix pour chacun des caractères, et donc choix possibles pour le mot de passe.  Si par contre, on choisit d'utiliser des chiffres, alors on aura choix pour chacun des caractères, et donc choix possibles pour le mot de passe.  Au total, puisqu'on doit avoir des lettres ou des chiffres, il y aura choix possibles.    Le principe utilisé à l'exemple précédent s'appelle le principe de la somme. On le nomme également le principe du OU, car on peut accomplir la tâche d'une première façon OU d'une deuxième façon. En langage plus formel, le principe de la somme peut s'énoncer de deux façons.   Principe de la somme   Si une tâche peut soit être effectuée de façons, soit de façons, et que toutes les façons sont différentes des façons, alors il y a façons d'effectuer la tâche.  Soit et deux ensembles tels que , c'est-à-dire que et sont disjoints, alors    On montre ici comment utiliser le principe de la somme dans le cas le plus simple. Dans les faits, on devra souvent utiliser le principe à plusieurs reprises, ou bien le combiner au principe du produit.   Exemple de base du principe de la somme  Supposons que le Cégep Gérald-Godin veut choisir, parmi les professeurs en mathématiques ou les professeurs en informatique, un représentant du programme de SIM pour siéger sur un comité exécutif. Sachant qu'il y a professeurs en mathématiques et professeurs en informatique. Combien de façons y a-t-il de choisir ce représentant, en supposons qu'un professeur ne peut pas être à la fois un professeur d'informatique et un professeur de mathématique?  Il y a façons de choisir un professeur de mathématiques, alors qu'il y a façons de choisir un professeur d'informatique. Puisque le représentant est soit un professeur de mathématiques, soit un professeur d'informatique, il y a façons différentes de choisir un tel représentant.    Évidemment, il est souvent utile de séparer une tâche en plus de deux choix. On peut alors utiliser le principe de la somme à plusieurs reprises, tel qu'illustré à l'exemple .   Utilisation successive du principe de la somme  Un élève d'un cours d'informatique doit choisir pour l'évaluation finale, un projet parmi trois listes selon le langage de programmation utilisé. S'il y a projets possibles en C, projets possibles en python et projets possibles en Pascal, combien de projets différents est-ce qu'un élève peut choisir?  Lorsqu'un élève choisit son projet, il peut soit choisir de le faire en C, soit en python ou soit en Pascal. S'il choisit de le faire en C, il aura choix possibles. S'il choisit de le faire en python, il en aura , alors que s'il le fait en Pascal, il n'en aura que . Si on utilise le principe de la somme à deux reprises, on a qu'il y a façons de choisir un projet pour l'évaluation finale.      Combinaison du principe du produit et du principe de la somme   Tel que mentionné précédemment, il est souvent nécessaire de combiner le principe de la somme avec le principe du produit. Souvent, on commence par utiliser le principe de la somme pour séparer la tâche selon certaines conditions, et ensuite on utilise le principe du produit pour dénombrer le nombre de façons d'exécuter la tâche sous chacune des conditions. C'est ce qu'on a fait à l'exemple .    Nombre de variables en BASIC   Dans une version du langage informatique BASIC, le nom d'une variable doit être une chaîne de caractères formée d'un ou de deux caractères alphanumériques. Un caractère alphanumérique est soit une des lettres de l'alphabet ou bien un chiffre de à .  De plus, le premier caractère doit toujours être une lettre, et il existe noms de variables formées de deux caractères qui sont des variables protégées, c'est-à-dire qu'on ne peut pas donner ces noms à nos variables. Combien de noms de variables différents peut-on avoir dans cette version de BASIC?    Soit le nombre de noms de variables possible. Soit aussi le nombre de ces noms formés d'un seul caractère, et soit le nombre des noms formés de deux caractères. Ainsi, par le principe de la somme, on aura .  Pour . Puisque le premier caractère doit être une lettre, il y a seulement possibilités, c'est-à-dire .  Pour . On doit choisir le premier caractère, qui doit être une lettre (donc possibilités), et ensuite le deuxième caractère qui peut être soit une lettre soit un chiffre (par le principe de la somme, il y a possibilités). Ainsi, par le principe du produit, il y a possibilités. Cependant, on doit retirer les possibilités représentant les noms réservés. On a donc .  Finalement, on obtient .     Bien que le principe de la somme et le principe du produit soient relativement simples en principe, ils n'est pas toujours si simples de voir comment les utiliser pour répondre à un problème de dénombrement. Ceci peut rendre la résolution de problèmes de dénombrement particulièrement frustrant... Voici un exemple où il faut utiliser d'un peu plus d'intuition pour trouver la solution.   Sous-ensembles de cardinalité paire  Soit un ensemble fini de cardinalité . Combien de sous-ensembles de ont une cardinalité paire si:  ;  Supposons que . Puisque l'ensemble est de cardinalité relativement petite, on peut essayer d'énumérer ces sous-ensembles de cardinalité paire. On obtient alors   Avant de considérer le cas général, on fait quelques remarques. Notons . On peut voir que le nombre de sous-ensembles de cardinalité pair de est équivalent au nombre de sous-ensembles de . En effet, on peut voir un lien entre ceux-ci si on liste les sous-ensembles de .   Si on compare les sous-ensembles aux sous-ensembles , on remarque que ceux ayant un indice pair sont égaux, c'est-à-dire que , , et . De même, chaque sous-ensemble ayant un indice impair est obtenu à partir du sous-ensemble , auquel on a ajouté l'élément , c'est-à-dire que , , et .  On utilisera cette remarque pour déterminer la solution dans le cas général.   est un entier quelconque. .  Supposons qu'on écrit et posons . Notons le nombre de sous-ensembles de de cardinalité pair. On choisit un sous-ensemble de cardinalité pair de la façon suivante. Tout d'abord, on remarque que soit , ou bien . Ainsi, par le principe de la somme, on a que , où est le nombre de sous-ensembles de cardinalité paire contenant , et le nombre de ces sous-ensembles qui ne contiennent pas .  D'un côté, on remarque que si et seulement si et est pair. Ainsi, est le nombre de sous-ensembles de de cardinalité paire.  De l'autre côté, on remarque aussi que si et seulement si avec impair. Ainsi, est le nombre de sous-ensembles de de cardinalité impair.  Par ce qui précède, on a que est aussi le nombre de sous-ensembles de . Or, on sait que ce nombre est .    Dans certains problèmes de dénombrement, il arrive qu'au moins une des tâches doive être accomplie d'une certaine façon, en ajoutant une restriction quelconque. Dans ce cas, il est souvent plus utile de compter toutes les façons possibles d'accomplir la tâche, et de lui soustraire les façons d'accomplir la tâche qui ne respectent pas la restriction. On utilise alors le principe de la somme \"à l'envers\". Ce genre d'argument est très utile lorsqu'on voit les mots \"au moins un\" dans l'exercice.   Nombre de mots de passe  Un site internet vous demande de choisir un mot de passe lors de la création de votre compte. Ce mot de passe doit être formé de caractères alphanumériques. De plus, chaque mot de passe doit contenir au moins un chiffre. Combien de mots de passe possible y a-t-il?   On note le nombre de mots de passe total, et le nombre de mots de passe à caractères, pour . Par le principe de la somme, on a .  Pour calculer , on compte tous les mots de passe à caractères. Par la suite, on lui soustrait le nombre de mots de passe à caractères qui ne contiennent pas de chiffres. En effet, par le principe de la somme , et donc .  Par le principe du produit, il y a chaîne de caractères alphanumériques. De plus, de ces chaînes ne contiennent que des lettres, c'est-à-dire ne contiennent pas de chiffres. Ainsi, par l'argument donné au paragraphe précédent, . On utilise le même argument pour et .  Pour , on obtient  Pour , on obtient  Ainsi, on a .       Le principe d'inclusion-exclusion (ou de la soustraction )  Il arrive que, lorsqu'on sépare les façons d'effectuer une tâche en deux catégories, certaines des façons d'effectuer la tâche se retrouvent dans les deux catégories. Dans ce cas, on ne peut pas simplement utiliser le principe de la somme, car on compte les éléments qui se trouvent dans les deux catégories deux fois.   Le nombre de costumes bleus ou vert!  Supposons qu'un de vos amis doit choisir un costume pour animer un spectacle. Si votre ami doit choisir parmi 5 chapeaux dont 3 sont bleus, 2 chandails et 6 pantalons, dont 4 sont verts. De combien de façons différentes peut-il s'habiller, s'il doit porter un chapeau bleau ou un pantalon vert?   On note le nombre de costumes avec chapeau bleu ou pantalon vert. Pour déterminer , on sépare la tâche de choisir le costume en deux catégories: la première catégorie est celle formée des costumes avec un chapeau bleu, alors que la deuxième est celle formée des costumes avec un pantalon vert.  On note le nombre de costumes avec chapeau bleu, et le nombre de costumes avec un pantalon vert. Par le principe du produit, on a que . De même, on obtient  Cependant, ! En effet, dans l'expression , on a compté les costumes avec chapeau bleu et pantalon vert deux fois. Une fois dans , et une fois dans .  Ainsi, on note le nombre de costumes avec chapeau bleu et pantalon vert. On obtient . On a alors .     On aurait pu résoudre l'exemple en séparant le choix des costumes en trois catégories, les costumes avec chapeau bleu mais pantalon non vert (il y en a ), les costumes avec chapeau bleu et pantalon vert (il y en a ), et finalement les costumes avec chapeau non bleu et pantalon vert (il y en a ).  De cette façon, on peut utiliser le principe de la somme directement et obtenir le nombre de costumes avec chapeau bleu ou pantalon vert, qui est .   Le principe utilisé à l'exemple est le principe d'inclusion-exclusion. Il s'agit du même principe que celui de la formule . On énonce le principe de deux façons différentes.   Principe d'inclusion-exclusion    Supposons qu'on peut séparer les façons d'effectuer une tâche en deux catégories. Si la première catégorie est formée de façons d'accomplir la tâche, la deuxième catégorie est formée de façons d'accomplir la tâche, et si de ces façons d'accomplir la tâche font partie des deux catégories en même temps, alors il y a façons d'effectuer la tâche.  Soit et deux ensembles, alors       Exemple de base du principe d'inclusion-exclusion  Une chaîne binaire est une chaîne de caractères où chaque caractère est soit un , soit un . Combien de chaînes binaires de longueur qui commencent par un ou finissent avec deux ?  Soit le nombre de chaînes binaires voulues, et soit le nombre de chaînes binaires de longueur commençant par un et le nombre de chaînes binaires de longueur se terminant avec deux .  Si on utilise directement le principe de la somme (de façon erronée), on obtient Cependant, on ne peut pas utiliser le principe de la somme, car il existe des chaînes binaires de longueur qui commencent par un  ET se terminent par deux . On note le nombre de ces chaînes .  Ainsi, par le principe d'inclusion-exclusion, on a  Par le principe du produit, on a que . En effet, chaque caractère, sauf le premier (qui est fixé à ), peut être un ou un . Il reste donc choix à faire, avec possibilités pour chaque choix.  De même, on peut voir que , car cette fois deux des caractères sont fixés.  Enfin, on peut également voir par le principe du produit que , car trois des caractères sont fixés.  Finalement, on a      Le principe de la division   Une technique de dénombrement intéressante pour obtenir certaines égalités de manière très efficace est de compter la même chose de deux façons différentes. On peut se servir de cette idée lorsqu'on utilise le principe du produit de deux façons différentes pour la même tâche. Ceci nous permettra de simplifier certains problèmes de dénombrement.  Par exemple, on considère deux problèmes similaire, mais pour lesquels celui qui semble plus complexe est simple à résoudre.  D'un côté, supposons qu'on doive choisir trois personnes dans un groupe de quatre, sans leur attribuer un rôle particulier. Ceci est équivalent à dénombrer les sous-ensembles , avec et . Avec de petites cardinalités, on peut simplement énumérer les sous-ensembles . Cependant, il est à priori difficile de dénombrer cette situation avec des cardinalités plus élevées.  D'un autre côté, supposons qu'on doive choisir un président, un vice-président et un trésorier parmi un groupe de quatre personnes. En utilisant le principe du produit, il est facile de compter le nombre de façons d'accomplir cette tâche.  On remarque qu'on peut séparer la tâche de choisir un président, un vice-président et un trésorier parmi quatre personnes en deux étapes. Tout d'abord on choisit les trois personnes parmi quatre, et ensuite on choisit leur rôle. Étonnamment, il est plus difficile de compter le nombre de façons de choisir trois personnes, que de choisir trois personnes avec un rôle.  L'exemple ci-dessous nous permettra de montrer comment utiliser le lien entre ces deux situations pour dénombrer le nombre de façons de choisir trois personnes parmi quatre sans rôle.    Choisir trois personnes parmi quatre   On doit choisir trois personnes parmi un groupe de quatre personnes afin de former un comité.    De combien de façons peut-on choisir ces trois personnes, si on doit choisir un président, un vice-président et un trésorier?   On doit choisir un président, et ensuite choisir un vice-président, et finalement choisir un trésorier. Par le principe du produit, il y a façons de former le comité.    De combien de façons peut-on choisir ces trois personnes, si on ne leur attribue pas un rôle particulier?   Tout d'abord, on rappel qu'en , on a vu qu'il y a façons de choisir un président, un vice-président et un trésorier. Ensuite, on remarque qu'on peut séparer cette tâche en deux étapes.  Premièrement, on choisit trois personnes parmi quatre. On note le nombre de façons d'accomplir cette étape. Ensuite, on choisit un rôle pour chacune des personnes. À l'aide du principe du produit, on sait qu'il y a façons d'accomplir cette étape.  Ainsi, on sait que . On peut alors isoler pour obtenir .    Le principe utilisé à l'exemple précédent s'appelle le principe de la division. Il est basé sur le principe du produit, et on peut l'énoncer de trois façons différentes.   Principe de la division    S'il est possible d'accomplir une procédure de façons, mais que pour chacune de ces façons, il y a exactement façons qui sont équivalentes, alors il y aura façons différentes d'accomplir la tâche.  Soit et deux ensembles finis et non vides, alors .  Si est une fonction de vers deux ensembles finis, et si pour chaque , il existe exactement préimages de , c'est-à-dire que , alors      Exemple de base du principe de la division   Supposons qu'il faille placer quatre personnes, Damien, Jean-Michel, Alexandre et Valérie, autour d'une table ronde (à quatre chaises).  De combien de façons différentes peut-on accomplir cette tâche, si deux façons de s'assoir sont considérées les mêmes si chaque personne possède le même voisin à gauche et le même voisin à droite.     On commence par assigner une première chaise à Valérie. Celle-ci choisit arbitrairement une chaise qu'on numérote par . Ensuite, on numérote les autres chaises de à de façon systématique (disons en tournant dans le sens horaire). Il y aura façons différentes de faire ceci, car le résultat dépend uniquement du choix de Valérie.  Par la suite, on assigne arbitrairement une personne à la chaise (il y aura façons de faire ce choix). On continue pour la chaise ( façons) et finalement la chaise ( seule façon de faire).  Par le principe du produit, il y a façons d'accomplir cette tâche.  Cependant, on se rend compte que le choix de la première chaise n'a pas d'impacte sur l'arrangement final, car on distingue deux arrangements seulement si les voisins des gens sont différents. Par le principe de la division, on doit diviser par le résultat précédent, et il y aura donc façons différentes d'assoir les gens.       Dans les problèmes de dénombrement, on remarque qu'une petite modification à une question peut entraîner une grande différence dans la méthode de résolution. Il est alors important d'utiliser le bon principe au bon moment.  On remarque également que, pour résoudre certains problèmes, il est parfois plus facile de transformer celui-ci en un problème déjà résolu. À la section , on introduit quelques cas de base qui nous serviront à résoudre une grande partie des problèmes de dénombrement.  Les points importants de cette section sont:  Le principe du produit ;  Le principe de la somme ;  Le principe d'inclusion-exclusion ;  Le principe de la division ;       Ces questions sont à faire avant de venir en classe et à remettre au début du cours.    Un test est formé de questions à choix multiples. Chaque question possède réponse possible.  De combien de façons un étudiant peut-il répondre aux questions s'il répond à toutes les questions? De combien de façons un étudiant peut-il répondre aux questions s'il peut laisser une réponse vide à certaines questions?  Une marque populaire de vêtements produit des chandails en couleurs, en version à manches courtes ou à manches longues et est offert en trois tailles différentes. Combien de types de chandails différents sont produit par cette marque?  Combien d'entiers : sont divisible par ? sont divisible par , mais pas par ? sont divisible par et par ? sont divisible par ou par ? sont divisible par exactement un des entiers ou ? ne sont divisible ni par ni par ? ont des chiffres différents les uns des autres? ont des chiffres différents les uns des autres et sont pair?   On considère des chaînes de trois caractères de chiffres en base . Combien de ces chaînes:  ne contiennent pas le même chiffre trois fois? ont exactement deux chiffres qui sont des ?  Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.      Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.   Combien de chaînes de quatre chiffres  sont formées de chiffres différents? . Lorsqu'on choisit le premier chiffre, il y a possibilités. Pour chaque chiffre qu'on choisit par la suite, il y a toujours un choix de moins que pour le chiffre précédent. Ainsi, par le principe du produit, on a  se terminent par un nombre pair? On commence par choisir le dernier chiffre. Pour que celui-ci soit pair, il y a choix possibles. Pour chacun des autres chiffres, il y a possibilités, car les chiffres peuvent se répéter. ont exactement trois chiffres qui sont des ?  On conditionne sur la position du chiffre qui n'est pas un . C'est-à-dire qu'on utilise le principe de la somme selon la position du chiffre qui n'est pas .  Le chiffre est soit à la position , soit à la position , soit à la position ou bien à la position . Dans chacun des cas, il ne reste qu'à trouver la valeur de ce chiffre, car on sait que les autres chiffres sont des . Il y aura donc possibilités, soit , , , , , , , ou .  Ainsi, par le principe de la somme, il y a possibilités.   Lors de la finale de la course du mètres aux derniers jeux Olympiques, il y avait coureurs. De combien de manières possibles le podium pouvait-il être composé?    Combien de chaînes de sept lettres minuscules y a-t-il si les lettres peuvent se répéter? si les lettres ne peuvent pas se répéter? qui commencent par un x , si les lettres peuvent se répéter? qui commencent par un x , si les lettres ne peuvent pas se répéter? qui commencent et se terminent par un x , si les lettres peuvent se répéter? qui commencent par les lettres bo (dans cet ordre), si les lettres peuvent se répéter? qui commencent et se terminent par les lettres bo (dans cet ordre), si les lettres peuvent se répéter? qui commencent ou se terminent par les lettres bo (dans cet ordre), si les lettres peuvent se répéter?  Soit un ensemble tel que . Combien de sous-ensembles de possède plus d'un élément? Il y a sous-ensemble au total. Il y a un sous-ensemble qui ne contient aucun élément (l'esemble vide) et il y a sous-ensemble contenant un seul élément. Ainsi, il y aura sous-ensembles avec plus d'un élément.  On considère les entiers , . Combien de ces entiers sont divisibles par ou ? Pour être divisible par et par , il faut et il suffit d'être divisible par . Combien de ces entiers ne sont divisibles ni par ni par ? L'énoncé n'est divisible ni par , ni par est la négation de l'éoncé est divisible par ou par .  Supposons qu'un mot de passe pour un système informatique doit avoir entre et (inclusivement) caractères, où chaque caractère est soit une lettre minuscule ou majuscule, un chiffre ou l'un des caractères spéciaux . Combien de mots de passe différents sont disponibles pour ce système informatique? Pour chaque caractère, il y a possibilités. Il faut utiliser le principe de la somme selon le nombre de caractères. Combien de ces mots de passe contiennent au moins un des caractères spéciaux? Combien de ces mots de passe ne contiennt pas de caractères spéciaux?  On considère l'ensemble des propositions formées à partir de propositions atomiques. Combien de lignes possède le tableau de vérité d'une de ces propositions? Chaque de ligne dans le tableau de vérité correspond à une combinaison des valeurs de vérités des propositions atomiques. Combien de tableaux de vérité différents y a-t-il pour ces propositions? On considère que deux tableaux sont les mêmes si leur dernière colone sont les mêmes. On considère que deux tableaux de vérités sont les mêmes si les propositions se trouvant à la dernière colone sont équivalentes. Si est une proposition de cet ensemble, pour chaque ligne du tableau de vérité, combien de valeur de vérité est-ce que peut avoir ?  On considère les fonctions où . Conbien de ces fonctions sont injectives? Si , il y en a . Si , il y en a aussi 2. Si , il y en a . Combien de ces fonctions sont telles que ? Si ou , il y en a une seule. Si , il y en a . Combien de ces fonctions sont telles que ? Ici, on doit supposer que , car sinon la notation n'est pas cohérente. Si , alors il y aura fonctions qui respectent la condition.  Pour un mariage, de combien de façons différentes est-ce qu'un photographe peu arranger en une ligne personnes d'un groupe de , où les mariés sont dans le groupe de , si la mariée doit être sur la photo? On commence par placer la mariée. Une fois la mariée placée, il reste à placer personnes parmi les personnes restantes.  les mariés doivent tous deux être sur la photo? On commence par placer la mariée. Une fois la mariée placée, on place le marié. Une fois les mariés placé, il reste à placer personnes parmi les personnes restantes.  exactement un des mariés doit être sur la photo? On commence par choisir si c'est la marié ou le marié qui est sur la photo. On peut aussi utiliser le principe de la somme selon lequel des deux est sur la photo.  Pour un mariage, de combien de façons différentes est-ce qu'un photographe peu arranger en une ligne personnes, incluant les mariés, si les mariés doivent être l'un à côté de l'autre? On peut considérer les mariés comme une seule personne! Il suffit de choisir qui est à gauche, et qui est à droite! la mariée n'est pas à côté du marié? On vient d'énumérer les façons d'accomplir cette tâche si les mariés sont l'un à côté de l'autre. Comment faire pour calculer le complément? De combien de façons peut-on accomplir la tâche sans aucune restriction? la mariée est quelque part à gauche du marié? De combien de façons peut-on accomplir la tâche sans aucune restriction? Parmi ces façons, y a-t-il plus de façons d'avoir la mariée à droite ou à gauche du marié?    Exercices supplémentaires   Combien de chaînes binaires de longueur contiennent cinq consécutifs ou cinq consécutifs?  Utiliser le principe de la somme en séparant selon l'endroit où commence la séquence de longueur cinq. Il y aura plusieurs cas à considérer.  Il faudra aussi utiliser le principe d'inclusion-exclusion.  Attention! La chaîne binaire peut contenir plus de cinq ( ou ) consécutifs. C'est à dire qu'il faut compter la chaîne  On commence par compter celles qui ont une séquence de cinq consécutifs. De plus, on conditionne sur la position du premier de la première séquence de consécutifs.  Si la séquence commence à la première position, les chaînes seront de la forme , où les sont quelconques ( ). Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la deuxième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la troisième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la quatrième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la cinquième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la sixième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Ainsi, il y a chaînes ayant une séquence de cinq consécutifs. Par symétrie du problème, on sait qu'il y aura autant de chaînes ayant une chaîne de cinq consécutifs.  Finalement, on doit remarquer qu'il y a deux chaînes qui possèdent une séquences de cinq consécutifs et une séquence de cinq consécutifs. Il s'agit de et  Par le principe d'inclusion-exclusion, on a   Combien de chaînes binaires de longueur contiennent quatre consécutifs ou trois consécutifs? Cette question est similaire au numéro précédent , mais plus dificile, car on peut avoir plusieurs fois trois consécutifs dans la même chaîne.  On commence par compter celles qui ont une séquence de quatre consécutifs. De plus, on conditionne sur la position du premier de la première séquence de consécutifs.  Si la séquence commence à la première position, les chaînes seront de la forme , où les sont quelconques ( ). Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la deuxième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la troisième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la quatrième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la cinquième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Ainsi, il y a chaînes ayant une séquence de cinq consécutifs.  Par la suite, on compte celles qui ont une séquence de trois consécutifs. De plus, on conditionne sur la position du premier de la première séquence de consécutifs.  Si la séquence commence à la première position, les chaînes seront de la forme , où les sont quelconques ( ). Il y a donc chaînes dont la première séquence de commence à cette position.  Si la séquence commence à la deuxième position, les chaînes seront de la forme . Il y a donc chaînes dont la première séquence de commence à cette position.  Si la séquence commence à la troisième position, les chaînes seront de la forme . Il y a donc chaînes dont la première séquence de commence à cette position.  Si la séquence commence à la quatrième position, les chaînes seront de la forme , mais ne peut pas être car la première séquence doit commencer à la quatrième position! Il y a donc chaînes dont la première séquence de commence à cette position.  Si la séquence commence à la cinquième position, les chaînes seront de la forme . Cependant, il y a chaînes ayant une séquence d'au moins trois au début de la chaîne. Il s'agit de , et . Il y a donc chaînes dont la première séquence de commence à cette position.  Ainsi, il y a chaînes ayant une séquence de cinq consécutifs.  Finalement, on doit remarquer qu'il y a huit chaînes qui possèdent une séquences de quatre consécutifs et une séquence de trois consécutifs.  Par le principe d'inclusion-exclusion, on a .     "
},
{
  "id": "ex-introProdCostumes",
  "level": "2",
  "url": "sec_prodSomme.html#ex-introProdCostumes",
  "type": "Exemple",
  "number": "4.1.1",
  "title": "Le nombre de costumes.",
  "body": " Le nombre de costumes  Supposons qu'un de vos amis doit choisir un costume pour animer un spectacle. Si votre ami doit choisir parmi 3 chapeaux, 6 chandails et 4 pantalons. De combien de façons différentes peut-il s'habiller?  On sépare la tâche de choisir le costume en trois étapes: choisir le chapeau, choisir le chandail et finalement choisir les pantalons. Il y a 3 façons d'exécuter la première tâche, 6 façons d'exécuter la deuxième tâche et 4 façons d'exécuter la troisième. Ainsi, au total, il y a façons de choisir un costume différent.  "
},
{
  "id": "rem-ordreChoixOrdre",
  "level": "2",
  "url": "sec_prodSomme.html#rem-ordreChoixOrdre",
  "type": "Remarque",
  "number": "4.1.2",
  "title": "",
  "body": "À l'exemple , l'ordre dans lequel on exécute chacune des tâches n'a pas d'importance. Si votre ami choisit son chapeau en premier, ou bien il peut choisir son chandail en premier, et le nombre de costumes ne change pas. Ainsi, lorsqu'on veut dénombrer les costumes, on peut décider d'un ordre arbitraire (par exemple, chapeau, chandail, pantalons). "
},
{
  "id": "prop-regleProd",
  "level": "2",
  "url": "sec_prodSomme.html#prop-regleProd",
  "type": "Proposition",
  "number": "4.1.3",
  "title": "Principe du produit.",
  "body": " Principe du produit   Supposons qu'une procédure peut être séparée en une séquence de deux tâches. S'il existe façons d'exécuter la première tâche, et façons d'exécuter la deuxième tâche, alors il y a façons d'exécuter la procédure.  Soit et deux ensembles, alors , c'est-à-dire que la cardinalité du produit cartésien est le produit des cardinalités.   "
},
{
  "id": "ex-baseProd",
  "level": "2",
  "url": "sec_prodSomme.html#ex-baseProd",
  "type": "Exemple",
  "number": "4.1.4",
  "title": "Exemples de base du principe du produit.",
  "body": " Exemples de base du principe du produit  On veut compter le nombre de façons d'accomplir chacune des tâches suivantes.  Une compagnie formée de seulement deux employés, Damien et Laura, loue un étage d'un immeuble de bureaux. Si cet étage possède 15 bureaux, de combien de manières peut-on assigner un bureau à chaque employé? Pour assigner un bureau à chaque employé, on commence à assigner un bureau à Laura, puis on assigne un bureau à Damien. Il y a 15 bureaux possibles pour Laura. Ensuite, il reste 14 bureaux possibles pour Damien. Ainsi, il y a façons d'assigner un bureau à chaque employé.  Les chaises d'un auditorium sont étiquetées à l'aide d'une lettre un d'un nombre entier de 1 à 100. Combien de chaise peut-on étiqueter de cette façon. Pour étiqueter une chaise, on doit d'abord choisir une lettre, et ensuite choisir un nombre entier de 1 à 100. Il y a 26 choix possibles pour la lettre, et 100 choix possibles pour l'entier. On peut donc étiqueter chaises.  Combien de plaques d'immatriculation peut-on obtenir, si une plaque est formée de 3 lettres suivies de trois chiffres si l’on accepte toutes les séquences possibles? Pour chaque lettre, il y a 26 choix possibles. Pour chaque chiffre, il y a 10 choix possibles. Il y a donc possibilités.  "
},
{
  "id": "nbrFonctionsProd",
  "level": "2",
  "url": "sec_prodSomme.html#nbrFonctionsProd",
  "type": "Exemple",
  "number": "4.1.5",
  "title": "Retour sur le nombre de fonctions.",
  "body": " Retour sur le nombre de fonctions   Soit et .   Combien y a-t-il de fonctions ?  On compte le nombre de façons qu'il y a de définir une telle fonction . Pour se faire, on sépare la tâche en deux étapes: choisir la valeur de et ensuite choisir la valeur de .  Lorsqu'on choisit la valeur de , on a trois choix possibles: , ou bien .  Une fois qu'on a choisit , on doit choisir . Encore une fois, on a trois choix possibles: , ou bien .  Par le principe du produit, il y a alors façons différentes de choisir une fonction .  On remarque encore une fois que le fait de choisir avant n'a pas d'importance. Puisque cela n'a pas d'importance, on peut donc décider d'un ordre arbitraire.   Combien y a-t-il de fonctions injectives ?  Comme à la partie précédente, on compte le nombre de façons qu'il y a de définir une telle fonction . Pour se faire, on sépare la tâche en deux étapes: choisir la valeur de et ensuite choisir la valeur de .  Lorsqu'on choisit la valeur de , on a trois choix possibles: , ou bien .  Une fois qu'on a choisi , on doit choisir . Attention! Ici, on veut une fonction injective! Supposons par exemple que , il ne reste alors que deux choix possibles : ou bien . La même chose est vraie si l'on avait choisi une autre valeur pour , il ne resterait que deux choix possibles pour .  Par le principe du produit, il y a alors façons différentes de choisir une fonction injective .   "
},
{
  "id": "subs-regleProd-10",
  "level": "2",
  "url": "sec_prodSomme.html#subs-regleProd-10",
  "type": "Remarque",
  "number": "4.1.6",
  "title": "",
  "body": "Le cas des fonctions surjectives est beaucoup plus complexe. On étudiera ce cas dans une prochaine section . "
},
{
  "id": "ex-comptFonction",
  "level": "2",
  "url": "sec_prodSomme.html#ex-comptFonction",
  "type": "Exemple",
  "number": "4.1.7",
  "title": "Compter des fonctions : Cas général.",
  "body": " Compter des fonctions : Cas général  Soit deux ensembles et tels que et .  Combien de fonctions différentes existe-t-il? Pour chaque élément , on doit choisir la valeur de . Ainsi, pour chaque ,il y a possibilités pour . Puisqu'on doit faire choix et qu'il y a possibilités, pour chacun de ces choix, par le principe du produit, il y aura fonctions différentes.  Combien de fonctions injectives différentes existe-t-il? si , sinon.  Supposons qu'on étiquette les éléments de par . On commence par choisir la valeur de . Il y a choix possible. On note cette valeur , c'est-à-dire que .  On veut maintenant choisir la valeur de . Puisque est injective, . Il reste donc choix pour . On veut poursuivre ce raisonement de façon général pour tout les éléments de .  Supposons qu'on ait choisi les valeurs de pour tous les premières valeurs de , c'est-à-dire pour , et qu'on veut maintenant choisir la valeur de . Puisque est injective, on aura que pour . Il reste donc choix pour la valeur de . On répète cette démarche jusqu'à ce qu'on ait défini .  On remarque d'ailleurs que si , on ne peut pas trouver de fonction injective (car on ne pourra pas trouver de valeur pour tous les ). Ainsi, par le principe du produit, il y aura fonctions injectives différentes. En effet, lorsqu'on veut choisir la valeur de , il restera choix possible (attention aux indices!).  "
},
{
  "id": "exe-nbrSousEnsIntro",
  "level": "2",
  "url": "sec_prodSomme.html#exe-nbrSousEnsIntro",
  "type": "Exemple",
  "number": "4.1.8",
  "title": "Retour sur l’ensemble des puissances.",
  "body": " Retour sur l'ensemble des puissances  On considère l'ensemble . On sait que , car on a décrit en extension à la section .  On veut utiliser le principe du produit pour arriver à la même conclusion. On pourra ensuite généraliser au cas où .   On veut dénombrer le nombre de sous-ensembles différents de . Ceci revient à compter le nombre de façons différentes qu'on peut construire un tel sous-ensemble .  Pour se faire, on sépare la tâche \"construire \" en trois étapes. On commence par choisir si . Il y a deux choix possibles (oui ou non). On choisit ensuite si . Il y a deux choix possibles (oui ou non). Finalement, on choisit si . Encore une fois, il y a deux choix possibles.  Par le principe du produit, il y a façons différentes de choisir un ensemble , et donc .   "
},
{
  "id": "exe-nbrSousEns",
  "level": "2",
  "url": "sec_prodSomme.html#exe-nbrSousEns",
  "type": "Exemple",
  "number": "4.1.9",
  "title": "L’ensemble des puissances: Cas général.",
  "body": " L'ensemble des puissances: Cas général  Soit un ensemble de cardinalité fini, disons , quelle est la cardinalité de ? C'est-à-dire, qu'elle est la valeur de ?     Supposons qu'on ordonne les éléments de d'une manière quelconque, c'est-à-dire qu'on les étiquette par .  On veut maintenant construire (choisir) un sous-ensemble de . Pour se faire, on regarde successivement chaque élément de . Pour chaque élément , il y a deux choix possibles. Soit , soit . Par le principe du produit, il y a façons différentes de construire le sous-ensemble . Ainsi, .   "
},
{
  "id": "ex-permIntro",
  "level": "2",
  "url": "sec_prodSomme.html#ex-permIntro",
  "type": "Exemple",
  "number": "4.1.10",
  "title": "Les permutations.",
  "body": " Les permutations  Combien de \"mots\" différents peut-on écrire en utilisant les lettres du \"mot\" ? Ici, \"mot\" veut simplement dire une suite de lettres, même si le \"mot\" n'est pas un vrai mot en français (ou n'importe quelle autre langue). On dit aussi qu'il s'agit des permutations des lettres de .   On utilise le principe du produit. On choisit la première lettre du mot, ensuite la deuxième, et ainsi de suite jusqu'à la dernière lettre.  Pour la première lettre, on a choix possibles. Pour la deuxième lettre, il reste choix possibles. Pour la troisième lettre, il reste choix possibles. Pour la quatrième lettre, il reste choix possibles. Finalement, il ne reste que choix pour la dernière lettre.  Ainsi, il y a mots différents qu'on peut obtenir à partir des lettres de .  Ce problème est un exemple de permutations. On verra, à la prochaine section , que le nombre de permutations de objets est , où la notation  y sera également définie.    Une solution alternative est de remarquer que d'écrire un mot utilisant les lettres de est équivalent à choisir une fonction injective , où est la lettre à la position du mot. Par exemple, les mots et sont équivalents aux fonctions et définies par   Ainsi, le nombre de mots différents formés à partir des lettres de est aussi le nombre de fonctions injectives de vers . Par l'exemple , on sait qu'il y en a .   "
},
{
  "id": "ex-regleSommeIntro",
  "level": "2",
  "url": "sec_prodSomme.html#ex-regleSommeIntro",
  "type": "Exemple",
  "number": "4.1.11",
  "title": "Des lettres ou des chiffres.",
  "body": " Des lettres ou des chiffres   Supposons que l'on doive créer un mot de passe composé de quatre caractères pour un site quelconque. Supposons qu'en plus tous les caractères doivent soit tous être une des lettres de l'alphabet, ou bien ils doivent tous être un chiffre (de à ). Combien de façons différentes y a-t-il de choisir un mot de passe?    On sépare la tâche selon si on choisit d'utiliser des lettres ou des chiffres pour notre mot de passe.  Si l'on choisit d'utiliser des lettres pour le mot de passe, on aura choix pour chacun des caractères, et donc choix possibles pour le mot de passe.  Si par contre, on choisit d'utiliser des chiffres, alors on aura choix pour chacun des caractères, et donc choix possibles pour le mot de passe.  Au total, puisqu'on doit avoir des lettres ou des chiffres, il y aura choix possibles.   "
},
{
  "id": "prop-regleSomme",
  "level": "2",
  "url": "sec_prodSomme.html#prop-regleSomme",
  "type": "Proposition",
  "number": "4.1.12",
  "title": "Principe de la somme.",
  "body": " Principe de la somme   Si une tâche peut soit être effectuée de façons, soit de façons, et que toutes les façons sont différentes des façons, alors il y a façons d'effectuer la tâche.  Soit et deux ensembles tels que , c'est-à-dire que et sont disjoints, alors   "
},
{
  "id": "ex-baseSomme",
  "level": "2",
  "url": "sec_prodSomme.html#ex-baseSomme",
  "type": "Exemple",
  "number": "4.1.13",
  "title": "Exemple de base du principe de la somme.",
  "body": " Exemple de base du principe de la somme  Supposons que le Cégep Gérald-Godin veut choisir, parmi les professeurs en mathématiques ou les professeurs en informatique, un représentant du programme de SIM pour siéger sur un comité exécutif. Sachant qu'il y a professeurs en mathématiques et professeurs en informatique. Combien de façons y a-t-il de choisir ce représentant, en supposons qu'un professeur ne peut pas être à la fois un professeur d'informatique et un professeur de mathématique?  Il y a façons de choisir un professeur de mathématiques, alors qu'il y a façons de choisir un professeur d'informatique. Puisque le représentant est soit un professeur de mathématiques, soit un professeur d'informatique, il y a façons différentes de choisir un tel représentant.   "
},
{
  "id": "ex-baseSommeSuccessive",
  "level": "2",
  "url": "sec_prodSomme.html#ex-baseSommeSuccessive",
  "type": "Exemple",
  "number": "4.1.14",
  "title": "Utilisation successive du principe de la somme.",
  "body": " Utilisation successive du principe de la somme  Un élève d'un cours d'informatique doit choisir pour l'évaluation finale, un projet parmi trois listes selon le langage de programmation utilisé. S'il y a projets possibles en C, projets possibles en python et projets possibles en Pascal, combien de projets différents est-ce qu'un élève peut choisir?  Lorsqu'un élève choisit son projet, il peut soit choisir de le faire en C, soit en python ou soit en Pascal. S'il choisit de le faire en C, il aura choix possibles. S'il choisit de le faire en python, il en aura , alors que s'il le fait en Pascal, il n'en aura que . Si on utilise le principe de la somme à deux reprises, on a qu'il y a façons de choisir un projet pour l'évaluation finale.   "
},
{
  "id": "ex-combProdSomme1",
  "level": "2",
  "url": "sec_prodSomme.html#ex-combProdSomme1",
  "type": "Exemple",
  "number": "4.1.15",
  "title": "Nombre de variables en BASIC.",
  "body": " Nombre de variables en BASIC   Dans une version du langage informatique BASIC, le nom d'une variable doit être une chaîne de caractères formée d'un ou de deux caractères alphanumériques. Un caractère alphanumérique est soit une des lettres de l'alphabet ou bien un chiffre de à .  De plus, le premier caractère doit toujours être une lettre, et il existe noms de variables formées de deux caractères qui sont des variables protégées, c'est-à-dire qu'on ne peut pas donner ces noms à nos variables. Combien de noms de variables différents peut-on avoir dans cette version de BASIC?    Soit le nombre de noms de variables possible. Soit aussi le nombre de ces noms formés d'un seul caractère, et soit le nombre des noms formés de deux caractères. Ainsi, par le principe de la somme, on aura .  Pour . Puisque le premier caractère doit être une lettre, il y a seulement possibilités, c'est-à-dire .  Pour . On doit choisir le premier caractère, qui doit être une lettre (donc possibilités), et ensuite le deuxième caractère qui peut être soit une lettre soit un chiffre (par le principe de la somme, il y a possibilités). Ainsi, par le principe du produit, il y a possibilités. Cependant, on doit retirer les possibilités représentant les noms réservés. On a donc .  Finalement, on obtient .    "
},
{
  "id": "ex_sousEnsPair",
  "level": "2",
  "url": "sec_prodSomme.html#ex_sousEnsPair",
  "type": "Exemple",
  "number": "4.1.16",
  "title": "Sous-ensembles de cardinalité paire.",
  "body": " Sous-ensembles de cardinalité paire  Soit un ensemble fini de cardinalité . Combien de sous-ensembles de ont une cardinalité paire si:  ;  Supposons que . Puisque l'ensemble est de cardinalité relativement petite, on peut essayer d'énumérer ces sous-ensembles de cardinalité paire. On obtient alors   Avant de considérer le cas général, on fait quelques remarques. Notons . On peut voir que le nombre de sous-ensembles de cardinalité pair de est équivalent au nombre de sous-ensembles de . En effet, on peut voir un lien entre ceux-ci si on liste les sous-ensembles de .   Si on compare les sous-ensembles aux sous-ensembles , on remarque que ceux ayant un indice pair sont égaux, c'est-à-dire que , , et . De même, chaque sous-ensemble ayant un indice impair est obtenu à partir du sous-ensemble , auquel on a ajouté l'élément , c'est-à-dire que , , et .  On utilisera cette remarque pour déterminer la solution dans le cas général.   est un entier quelconque. .  Supposons qu'on écrit et posons . Notons le nombre de sous-ensembles de de cardinalité pair. On choisit un sous-ensemble de cardinalité pair de la façon suivante. Tout d'abord, on remarque que soit , ou bien . Ainsi, par le principe de la somme, on a que , où est le nombre de sous-ensembles de cardinalité paire contenant , et le nombre de ces sous-ensembles qui ne contiennent pas .  D'un côté, on remarque que si et seulement si et est pair. Ainsi, est le nombre de sous-ensembles de de cardinalité paire.  De l'autre côté, on remarque aussi que si et seulement si avec impair. Ainsi, est le nombre de sous-ensembles de de cardinalité impair.  Par ce qui précède, on a que est aussi le nombre de sous-ensembles de . Or, on sait que ce nombre est .   "
},
{
  "id": "ex-combProdSomme2",
  "level": "2",
  "url": "sec_prodSomme.html#ex-combProdSomme2",
  "type": "Exemple",
  "number": "4.1.17",
  "title": "Nombre de mots de passe.",
  "body": " Nombre de mots de passe  Un site internet vous demande de choisir un mot de passe lors de la création de votre compte. Ce mot de passe doit être formé de caractères alphanumériques. De plus, chaque mot de passe doit contenir au moins un chiffre. Combien de mots de passe possible y a-t-il?   On note le nombre de mots de passe total, et le nombre de mots de passe à caractères, pour . Par le principe de la somme, on a .  Pour calculer , on compte tous les mots de passe à caractères. Par la suite, on lui soustrait le nombre de mots de passe à caractères qui ne contiennent pas de chiffres. En effet, par le principe de la somme , et donc .  Par le principe du produit, il y a chaîne de caractères alphanumériques. De plus, de ces chaînes ne contiennent que des lettres, c'est-à-dire ne contiennent pas de chiffres. Ainsi, par l'argument donné au paragraphe précédent, . On utilise le même argument pour et .  Pour , on obtient  Pour , on obtient  Ainsi, on a .    "
},
{
  "id": "ex-incluExcluIntro",
  "level": "2",
  "url": "sec_prodSomme.html#ex-incluExcluIntro",
  "type": "Exemple",
  "number": "4.1.18",
  "title": "Le nombre de costumes bleus ou vert!",
  "body": " Le nombre de costumes bleus ou vert!  Supposons qu'un de vos amis doit choisir un costume pour animer un spectacle. Si votre ami doit choisir parmi 5 chapeaux dont 3 sont bleus, 2 chandails et 6 pantalons, dont 4 sont verts. De combien de façons différentes peut-il s'habiller, s'il doit porter un chapeau bleau ou un pantalon vert?   On note le nombre de costumes avec chapeau bleu ou pantalon vert. Pour déterminer , on sépare la tâche de choisir le costume en deux catégories: la première catégorie est celle formée des costumes avec un chapeau bleu, alors que la deuxième est celle formée des costumes avec un pantalon vert.  On note le nombre de costumes avec chapeau bleu, et le nombre de costumes avec un pantalon vert. Par le principe du produit, on a que . De même, on obtient  Cependant, ! En effet, dans l'expression , on a compté les costumes avec chapeau bleu et pantalon vert deux fois. Une fois dans , et une fois dans .  Ainsi, on note le nombre de costumes avec chapeau bleu et pantalon vert. On obtient . On a alors .   "
},
{
  "id": "subs-incExclu-4",
  "level": "2",
  "url": "sec_prodSomme.html#subs-incExclu-4",
  "type": "Remarque",
  "number": "4.1.19",
  "title": "",
  "body": " On aurait pu résoudre l'exemple en séparant le choix des costumes en trois catégories, les costumes avec chapeau bleu mais pantalon non vert (il y en a ), les costumes avec chapeau bleu et pantalon vert (il y en a ), et finalement les costumes avec chapeau non bleu et pantalon vert (il y en a ).  De cette façon, on peut utiliser le principe de la somme directement et obtenir le nombre de costumes avec chapeau bleu ou pantalon vert, qui est .  "
},
{
  "id": "prop-incExclu",
  "level": "2",
  "url": "sec_prodSomme.html#prop-incExclu",
  "type": "Proposition",
  "number": "4.1.20",
  "title": "Principe d’inclusion-exclusion.",
  "body": " Principe d'inclusion-exclusion    Supposons qu'on peut séparer les façons d'effectuer une tâche en deux catégories. Si la première catégorie est formée de façons d'accomplir la tâche, la deuxième catégorie est formée de façons d'accomplir la tâche, et si de ces façons d'accomplir la tâche font partie des deux catégories en même temps, alors il y a façons d'effectuer la tâche.  Soit et deux ensembles, alors    "
},
{
  "id": "ex-incExclu",
  "level": "2",
  "url": "sec_prodSomme.html#ex-incExclu",
  "type": "Exemple",
  "number": "4.1.21",
  "title": "Exemple de base du principe d’inclusion-exclusion.",
  "body": " Exemple de base du principe d'inclusion-exclusion  Une chaîne binaire est une chaîne de caractères où chaque caractère est soit un , soit un . Combien de chaînes binaires de longueur qui commencent par un ou finissent avec deux ?  Soit le nombre de chaînes binaires voulues, et soit le nombre de chaînes binaires de longueur commençant par un et le nombre de chaînes binaires de longueur se terminant avec deux .  Si on utilise directement le principe de la somme (de façon erronée), on obtient Cependant, on ne peut pas utiliser le principe de la somme, car il existe des chaînes binaires de longueur qui commencent par un  ET se terminent par deux . On note le nombre de ces chaînes .  Ainsi, par le principe d'inclusion-exclusion, on a  Par le principe du produit, on a que . En effet, chaque caractère, sauf le premier (qui est fixé à ), peut être un ou un . Il reste donc choix à faire, avec possibilités pour chaque choix.  De même, on peut voir que , car cette fois deux des caractères sont fixés.  Enfin, on peut également voir par le principe du produit que , car trois des caractères sont fixés.  Finalement, on a    "
},
{
  "id": "ex-divIntro",
  "level": "2",
  "url": "sec_prodSomme.html#ex-divIntro",
  "type": "Exemple",
  "number": "4.1.22",
  "title": "Choisir trois personnes parmi quatre.",
  "body": " Choisir trois personnes parmi quatre   On doit choisir trois personnes parmi un groupe de quatre personnes afin de former un comité.    De combien de façons peut-on choisir ces trois personnes, si on doit choisir un président, un vice-président et un trésorier?   On doit choisir un président, et ensuite choisir un vice-président, et finalement choisir un trésorier. Par le principe du produit, il y a façons de former le comité.    De combien de façons peut-on choisir ces trois personnes, si on ne leur attribue pas un rôle particulier?   Tout d'abord, on rappel qu'en , on a vu qu'il y a façons de choisir un président, un vice-président et un trésorier. Ensuite, on remarque qu'on peut séparer cette tâche en deux étapes.  Premièrement, on choisit trois personnes parmi quatre. On note le nombre de façons d'accomplir cette étape. Ensuite, on choisit un rôle pour chacune des personnes. À l'aide du principe du produit, on sait qu'il y a façons d'accomplir cette étape.  Ainsi, on sait que . On peut alors isoler pour obtenir .   "
},
{
  "id": "prop-div",
  "level": "2",
  "url": "sec_prodSomme.html#prop-div",
  "type": "Proposition",
  "number": "4.1.23",
  "title": "Principe de la division.",
  "body": " Principe de la division    S'il est possible d'accomplir une procédure de façons, mais que pour chacune de ces façons, il y a exactement façons qui sont équivalentes, alors il y aura façons différentes d'accomplir la tâche.  Soit et deux ensembles finis et non vides, alors .  Si est une fonction de vers deux ensembles finis, et si pour chaque , il existe exactement préimages de , c'est-à-dire que , alors    "
},
{
  "id": "ex-div",
  "level": "2",
  "url": "sec_prodSomme.html#ex-div",
  "type": "Exemple",
  "number": "4.1.24",
  "title": "Exemple de base du principe de la division.",
  "body": " Exemple de base du principe de la division   Supposons qu'il faille placer quatre personnes, Damien, Jean-Michel, Alexandre et Valérie, autour d'une table ronde (à quatre chaises).  De combien de façons différentes peut-on accomplir cette tâche, si deux façons de s'assoir sont considérées les mêmes si chaque personne possède le même voisin à gauche et le même voisin à droite.     On commence par assigner une première chaise à Valérie. Celle-ci choisit arbitrairement une chaise qu'on numérote par . Ensuite, on numérote les autres chaises de à de façon systématique (disons en tournant dans le sens horaire). Il y aura façons différentes de faire ceci, car le résultat dépend uniquement du choix de Valérie.  Par la suite, on assigne arbitrairement une personne à la chaise (il y aura façons de faire ce choix). On continue pour la chaise ( façons) et finalement la chaise ( seule façon de faire).  Par le principe du produit, il y a façons d'accomplir cette tâche.  Cependant, on se rend compte que le choix de la première chaise n'a pas d'impacte sur l'arrangement final, car on distingue deux arrangements seulement si les voisins des gens sont différents. Par le principe de la division, on doit diviser par le résultat précédent, et il y aura donc façons différentes d'assoir les gens.   "
},
{
  "id": "rq-prodSomme-2",
  "level": "2",
  "url": "sec_prodSomme.html#rq-prodSomme-2",
  "type": "Question de compréhension",
  "number": "4.1.6.1",
  "title": "",
  "body": " Un test est formé de questions à choix multiples. Chaque question possède réponse possible.  De combien de façons un étudiant peut-il répondre aux questions s'il répond à toutes les questions? De combien de façons un étudiant peut-il répondre aux questions s'il peut laisser une réponse vide à certaines questions? "
},
{
  "id": "rq-prodSomme-3",
  "level": "2",
  "url": "sec_prodSomme.html#rq-prodSomme-3",
  "type": "Question de compréhension",
  "number": "4.1.6.2",
  "title": "",
  "body": "Une marque populaire de vêtements produit des chandails en couleurs, en version à manches courtes ou à manches longues et est offert en trois tailles différentes. Combien de types de chandails différents sont produit par cette marque? "
},
{
  "id": "rq-prodSomme-4",
  "level": "2",
  "url": "sec_prodSomme.html#rq-prodSomme-4",
  "type": "Question de compréhension",
  "number": "4.1.6.3",
  "title": "",
  "body": "Combien d'entiers : sont divisible par ? sont divisible par , mais pas par ? sont divisible par et par ? sont divisible par ou par ? sont divisible par exactement un des entiers ou ? ne sont divisible ni par ni par ? ont des chiffres différents les uns des autres? ont des chiffres différents les uns des autres et sont pair? "
},
{
  "id": "rq-prodSomme-5",
  "level": "2",
  "url": "sec_prodSomme.html#rq-prodSomme-5",
  "type": "Question de compréhension",
  "number": "4.1.6.4",
  "title": "",
  "body": " On considère des chaînes de trois caractères de chiffres en base . Combien de ces chaînes:  ne contiennent pas le même chiffre trois fois? ont exactement deux chiffres qui sont des ? "
},
{
  "id": "rq-prodSomme-6",
  "level": "2",
  "url": "sec_prodSomme.html#rq-prodSomme-6",
  "type": "Question de compréhension",
  "number": "4.1.6.5",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-prodSomme-2-3",
  "level": "2",
  "url": "sec_prodSomme.html#exo-prodSomme-2-3",
  "type": "Exercice",
  "number": "4.1.7.1",
  "title": "",
  "body": " Combien de chaînes de quatre chiffres  sont formées de chiffres différents? . Lorsqu'on choisit le premier chiffre, il y a possibilités. Pour chaque chiffre qu'on choisit par la suite, il y a toujours un choix de moins que pour le chiffre précédent. Ainsi, par le principe du produit, on a  se terminent par un nombre pair? On commence par choisir le dernier chiffre. Pour que celui-ci soit pair, il y a choix possibles. Pour chacun des autres chiffres, il y a possibilités, car les chiffres peuvent se répéter. ont exactement trois chiffres qui sont des ?  On conditionne sur la position du chiffre qui n'est pas un . C'est-à-dire qu'on utilise le principe de la somme selon la position du chiffre qui n'est pas .  Le chiffre est soit à la position , soit à la position , soit à la position ou bien à la position . Dans chacun des cas, il ne reste qu'à trouver la valeur de ce chiffre, car on sait que les autres chiffres sont des . Il y aura donc possibilités, soit , , , , , , , ou .  Ainsi, par le principe de la somme, il y a possibilités.  "
},
{
  "id": "exo-prodSomme-2-4",
  "level": "2",
  "url": "sec_prodSomme.html#exo-prodSomme-2-4",
  "type": "Exercice",
  "number": "4.1.7.2",
  "title": "",
  "body": "Lors de la finale de la course du mètres aux derniers jeux Olympiques, il y avait coureurs. De combien de manières possibles le podium pouvait-il être composé?   "
},
{
  "id": "exo-prodSomme-2-5",
  "level": "2",
  "url": "sec_prodSomme.html#exo-prodSomme-2-5",
  "type": "Exercice",
  "number": "4.1.7.3",
  "title": "",
  "body": "Combien de chaînes de sept lettres minuscules y a-t-il si les lettres peuvent se répéter? si les lettres ne peuvent pas se répéter? qui commencent par un x , si les lettres peuvent se répéter? qui commencent par un x , si les lettres ne peuvent pas se répéter? qui commencent et se terminent par un x , si les lettres peuvent se répéter? qui commencent par les lettres bo (dans cet ordre), si les lettres peuvent se répéter? qui commencent et se terminent par les lettres bo (dans cet ordre), si les lettres peuvent se répéter? qui commencent ou se terminent par les lettres bo (dans cet ordre), si les lettres peuvent se répéter? "
},
{
  "id": "exo-prodSomme-2-6",
  "level": "2",
  "url": "sec_prodSomme.html#exo-prodSomme-2-6",
  "type": "Exercice",
  "number": "4.1.7.4",
  "title": "",
  "body": "Soit un ensemble tel que . Combien de sous-ensembles de possède plus d'un élément? Il y a sous-ensemble au total. Il y a un sous-ensemble qui ne contient aucun élément (l'esemble vide) et il y a sous-ensemble contenant un seul élément. Ainsi, il y aura sous-ensembles avec plus d'un élément. "
},
{
  "id": "exo-prodSomme-2-7",
  "level": "2",
  "url": "sec_prodSomme.html#exo-prodSomme-2-7",
  "type": "Exercice",
  "number": "4.1.7.5",
  "title": "",
  "body": "On considère les entiers , . Combien de ces entiers sont divisibles par ou ? Pour être divisible par et par , il faut et il suffit d'être divisible par . Combien de ces entiers ne sont divisibles ni par ni par ? L'énoncé n'est divisible ni par , ni par est la négation de l'éoncé est divisible par ou par . "
},
{
  "id": "exo-prodSomme-2-8",
  "level": "2",
  "url": "sec_prodSomme.html#exo-prodSomme-2-8",
  "type": "Exercice",
  "number": "4.1.7.6",
  "title": "",
  "body": "Supposons qu'un mot de passe pour un système informatique doit avoir entre et (inclusivement) caractères, où chaque caractère est soit une lettre minuscule ou majuscule, un chiffre ou l'un des caractères spéciaux . Combien de mots de passe différents sont disponibles pour ce système informatique? Pour chaque caractère, il y a possibilités. Il faut utiliser le principe de la somme selon le nombre de caractères. Combien de ces mots de passe contiennent au moins un des caractères spéciaux? Combien de ces mots de passe ne contiennt pas de caractères spéciaux? "
},
{
  "id": "exo-prodSomme-2-9",
  "level": "2",
  "url": "sec_prodSomme.html#exo-prodSomme-2-9",
  "type": "Exercice",
  "number": "4.1.7.7",
  "title": "",
  "body": "On considère l'ensemble des propositions formées à partir de propositions atomiques. Combien de lignes possède le tableau de vérité d'une de ces propositions? Chaque de ligne dans le tableau de vérité correspond à une combinaison des valeurs de vérités des propositions atomiques. Combien de tableaux de vérité différents y a-t-il pour ces propositions? On considère que deux tableaux sont les mêmes si leur dernière colone sont les mêmes. On considère que deux tableaux de vérités sont les mêmes si les propositions se trouvant à la dernière colone sont équivalentes. Si est une proposition de cet ensemble, pour chaque ligne du tableau de vérité, combien de valeur de vérité est-ce que peut avoir ? "
},
{
  "id": "exo-prodSomme-2-10",
  "level": "2",
  "url": "sec_prodSomme.html#exo-prodSomme-2-10",
  "type": "Exercice",
  "number": "4.1.7.8",
  "title": "",
  "body": "On considère les fonctions où . Conbien de ces fonctions sont injectives? Si , il y en a . Si , il y en a aussi 2. Si , il y en a . Combien de ces fonctions sont telles que ? Si ou , il y en a une seule. Si , il y en a . Combien de ces fonctions sont telles que ? Ici, on doit supposer que , car sinon la notation n'est pas cohérente. Si , alors il y aura fonctions qui respectent la condition. "
},
{
  "id": "exo-prodSomme-2-11",
  "level": "2",
  "url": "sec_prodSomme.html#exo-prodSomme-2-11",
  "type": "Exercice",
  "number": "4.1.7.9",
  "title": "",
  "body": "Pour un mariage, de combien de façons différentes est-ce qu'un photographe peu arranger en une ligne personnes d'un groupe de , où les mariés sont dans le groupe de , si la mariée doit être sur la photo? On commence par placer la mariée. Une fois la mariée placée, il reste à placer personnes parmi les personnes restantes.  les mariés doivent tous deux être sur la photo? On commence par placer la mariée. Une fois la mariée placée, on place le marié. Une fois les mariés placé, il reste à placer personnes parmi les personnes restantes.  exactement un des mariés doit être sur la photo? On commence par choisir si c'est la marié ou le marié qui est sur la photo. On peut aussi utiliser le principe de la somme selon lequel des deux est sur la photo. "
},
{
  "id": "exo-prodSomme-2-12",
  "level": "2",
  "url": "sec_prodSomme.html#exo-prodSomme-2-12",
  "type": "Exercice",
  "number": "4.1.7.10",
  "title": "",
  "body": "Pour un mariage, de combien de façons différentes est-ce qu'un photographe peu arranger en une ligne personnes, incluant les mariés, si les mariés doivent être l'un à côté de l'autre? On peut considérer les mariés comme une seule personne! Il suffit de choisir qui est à gauche, et qui est à droite! la mariée n'est pas à côté du marié? On vient d'énumérer les façons d'accomplir cette tâche si les mariés sont l'un à côté de l'autre. Comment faire pour calculer le complément? De combien de façons peut-on accomplir la tâche sans aucune restriction? la mariée est quelque part à gauche du marié? De combien de façons peut-on accomplir la tâche sans aucune restriction? Parmi ces façons, y a-t-il plus de façons d'avoir la mariée à droite ou à gauche du marié? "
},
{
  "id": "dur",
  "level": "2",
  "url": "sec_prodSomme.html#dur",
  "type": "Exercice",
  "number": "4.1.7.11",
  "title": "",
  "body": " Combien de chaînes binaires de longueur contiennent cinq consécutifs ou cinq consécutifs?  Utiliser le principe de la somme en séparant selon l'endroit où commence la séquence de longueur cinq. Il y aura plusieurs cas à considérer.  Il faudra aussi utiliser le principe d'inclusion-exclusion.  Attention! La chaîne binaire peut contenir plus de cinq ( ou ) consécutifs. C'est à dire qu'il faut compter la chaîne  On commence par compter celles qui ont une séquence de cinq consécutifs. De plus, on conditionne sur la position du premier de la première séquence de consécutifs.  Si la séquence commence à la première position, les chaînes seront de la forme , où les sont quelconques ( ). Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la deuxième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la troisième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la quatrième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la cinquième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la sixième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Ainsi, il y a chaînes ayant une séquence de cinq consécutifs. Par symétrie du problème, on sait qu'il y aura autant de chaînes ayant une chaîne de cinq consécutifs.  Finalement, on doit remarquer qu'il y a deux chaînes qui possèdent une séquences de cinq consécutifs et une séquence de cinq consécutifs. Il s'agit de et  Par le principe d'inclusion-exclusion, on a  "
},
{
  "id": "Tresdur",
  "level": "2",
  "url": "sec_prodSomme.html#Tresdur",
  "type": "Exercice",
  "number": "4.1.7.12",
  "title": "",
  "body": "Combien de chaînes binaires de longueur contiennent quatre consécutifs ou trois consécutifs? Cette question est similaire au numéro précédent , mais plus dificile, car on peut avoir plusieurs fois trois consécutifs dans la même chaîne.  On commence par compter celles qui ont une séquence de quatre consécutifs. De plus, on conditionne sur la position du premier de la première séquence de consécutifs.  Si la séquence commence à la première position, les chaînes seront de la forme , où les sont quelconques ( ). Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la deuxième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la troisième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la quatrième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Si la séquence commence à la cinquième position, les chaînes seront de la forme . Il y a donc chaînes dont la séquence de commence à cette position.  Ainsi, il y a chaînes ayant une séquence de cinq consécutifs.  Par la suite, on compte celles qui ont une séquence de trois consécutifs. De plus, on conditionne sur la position du premier de la première séquence de consécutifs.  Si la séquence commence à la première position, les chaînes seront de la forme , où les sont quelconques ( ). Il y a donc chaînes dont la première séquence de commence à cette position.  Si la séquence commence à la deuxième position, les chaînes seront de la forme . Il y a donc chaînes dont la première séquence de commence à cette position.  Si la séquence commence à la troisième position, les chaînes seront de la forme . Il y a donc chaînes dont la première séquence de commence à cette position.  Si la séquence commence à la quatrième position, les chaînes seront de la forme , mais ne peut pas être car la première séquence doit commencer à la quatrième position! Il y a donc chaînes dont la première séquence de commence à cette position.  Si la séquence commence à la cinquième position, les chaînes seront de la forme . Cependant, il y a chaînes ayant une séquence d'au moins trois au début de la chaîne. Il s'agit de , et . Il y a donc chaînes dont la première séquence de commence à cette position.  Ainsi, il y a chaînes ayant une séquence de cinq consécutifs.  Finalement, on doit remarquer qu'il y a huit chaînes qui possèdent une séquences de quatre consécutifs et une séquence de trois consécutifs.  Par le principe d'inclusion-exclusion, on a .  "
},
{
  "id": "sec_arrCombinaison",
  "level": "1",
  "url": "sec_arrCombinaison.html",
  "type": "Section",
  "number": "4.2",
  "title": "Permutations et combinaisons",
  "body": " Permutations et combinaisons   On peut remarquer que plusieurs des exemples et exercices faits à la section font intervenir des méthodes et des expressions qui se ressemblent. Par exemple, on voit souvent apparaître des termes de la forme .  Ces expressions sont reliées à des concepts importants en le dénombrement, c'est-à-dire les permutations et les combinaisons. On remarque également que plusieurs problèmes difficiles peuvent être résolus en utilisant les mêmes méthodes. On présente donc quelques exemples typiques qu'on peut utiliser pour résoudre une grande catégorie de problèmes.  Finalement, on présente le triangle de Pascal, qui permet de calculer de manière différente le nombre de combinaisons, ainsi que le binôme de Newton, qui utilise le nombre de combinaisons afin de calculer rapidement des expressions de la forme .    Les permutations   On considère les deux problèmes de dénombrement suivants. Premièrement, on veut choisir trois personnes parmi un groupe de personnes. Deuxièmement, on considère le nombre de podiums différents qu'il peut y avoir dans une course de personnes.  Dans les deux cas, on doit choisir trois personnes parmi . Cependant, pour le premier exemple, l'ordre dans lequel on choisit les trois personnes n'a pas d'importance, alors que pour le deuxième exemple, l'ordre est très important! Dans le premier cas, on dira que l’on compte les combinaisons, alors que dans le deuxième cas, on compte les permutations.  Étrangement, il est plus facile de compter le nombre de podiums que de compter le nombre de façons de choisir trois personnes. On commence donc par considérer le deuxième problème, et on retournera au problème de choisir trois personnes parmi en .  En utilisant le principe du produit, on voit rapidement qu'il y a podiums différents. Le concept de permutation permet de généraliser cet exemple.     Une permutation d'un ensemble d'objets est un arrangement ordonné de ces objets.  Une permutation d'un ensemble d'objets est un arrangement ordonné de objets de l'ensemble.     Une première permutation  Soit . Combien y a-t-il de permutations différentes de l'ensemble ?     Si on veut arranger (de façon ordonnée) les éléments de l'ensemble , cela veut dire qu'on choisit un élément à la première position, un à la deuxième et finalement un à la troisième.  Lorsqu'on choisit l'élément en première position, il y a choix possibles. Une fois l'élément fixé à la première position, il reste choix pour l'élément à la deuxième position. Finalement, il ne reste qu'un seul choix pour la dernière position. Ainsi, par le principe du produit, il y a permutations possible.    L'exemple précédent semble montrer qu'on peut déterminer le nombre de permutations d'un ensemble de taille finie quelconque. Pour cela, on utilise la notation ci-dessous.   Soit , on définit (on dit la factorielle de , ou bien factorielle) de la façon suivante. Si , alors . Si , alors .    Nous allons insister sur la définition alternative de par récurrence un peu plus tard.   Avec cette nouvelle notation, on est prêt à démontrer la proposition suivante.   Soit un ensemble de cardinalité finie , alors il existe différentes permutations de l'ensemble .  Une méthode pour démontrer cette proposition est de généraliser la solution de l'exemple . Une autre méthode est de remarquer que de trouver un arrangement ordonné des éléments de est équivalent à trouver une fonction injective . Par l'exemple , on sait qu'il y a telles fonctions.   De façon similaire, on peut déterminer le nombre de -permutations d'un ensemble de cardinalité finie . En effet, décrire une -permutation est équivalent à décrire une fonction injective . On utilisera une notation particulière pour ce nombre.   Le nombre de permutations d'un ensemble tel que est noté      .  Encore une fois, il suffit de remarquer que ceci est équivalent à compter des fonctions injectives . Par l'exemple , on sait qu'il y a telles fonctions.   On regarde maintenant deux problèmes typiques faisant intervenir des permutations.   Des anagrammes  Une anagramme d'une suite de lettres est une permutation de ces lettres. Lorsqu'on compte le nombre d'anagrammes possibles, on ne s'intéresse pas à savoir si la permutation est un vrai mot. Combien d'anagrammes des lettres sont telles que les lettres doivent apparaître dans cet ordre en un seul bloc?  Puisque la suite doit apparaître dans cet ordre en un seul bloc, il suffit de compter les permutations de lettres différentes (on considère comme une seule lettre). Ainsi, il y en a .    Le parcours d'un vendeur  Un vendeur doit visiter huit villes différentes, l'une d'elles étant Saint-Rémi, pour son travail. Sachant qu'il doit terminer son voyage à Saint-Rémi, de combien de façons différentes peut-il visiter ces huit villes ?  Puisqu'il doit terminer ces visites à Saint-Rémi, il ne reste qu'à déterminer l'ordre des sept premières villes qu'il doit visiter. Ainsi, il s'agit d'une permutation de sept objets, et on sait qu'il y en a .     Les combinaisons   Tel que mentionné précédemment, il est à priori un peu plus complexe de choisir trois personnes parmi que d'ordonner trois de ces personnes.  Pour arriver à déterminer le nombre de choix possibles, on commence par définir le concept de combinaison. Par la suite, on utilise le lien qu'il existe entre les permutations et les combinaisons afin de déterminer le nombre de façons de choisir objets parmi .     Soit un ensemble de cardinalité finie une combinaison de est une sélection non ordonnée de éléments de .  Le nombre de -combinaisons d'un ensemble de cardinalité finie est noté .  Les expressions de la forme , sont appelées les coefficients binomiaux.     Soit un ensemble de cardinalité finie et soit tel que , alors .   On sait que le nombre de permutations est . Nous allons utiliser le principe du produit afin de compter d'une autre façon. On peut séparer la tâche de choisir une permutation en deux étapes. Premièrement, on choisit éléments de . Deuxièmement, on choisit un ordre pour ces éléments (on permute ces éléments).  Le nombre de façons de choisir les éléments de est . Pour chaque choix de éléments , le nombre de façons d'ordonner ceux-ci est (le nombre de permutations des éléments). Ainsi, par le principe du produit, on a . On a alors .    On regarde maintenant deux exemples typiques faisant intervenir les combinaisons.   Mains de poker  Combien de mains de cinq cartes peuvent être formées à partir d'un jeu de cartes standard de cartes?  Il s'agit de compter les combinaisons de cartes parmi . On sait qu'il y en a .    Des chaînes binaires  Combien de chaînes binaires de longueur contiennent exactement caractères ?   Pour dénombrer ces chaînes, on remarque que pour choisir une telle chaîne binaire, il suffit de choisir positions où l'on place les parmi les positions possibles. Il s'agit donc de compter les combinaisons de parmi . Il y en a .  On peut également remarquer que, s'il y a exactement caractères , alors il y aura caractères . Ainsi, on aurait également pu choisir les positions des . Il y a donc façons de le faire.  Ainsi, on devrait avoir que .         Les coefficients binomiaux sont utilisés dans plusieurs branches des mathématiques. Voici quelques propriétés qu'on peut déduire facilement à l'aide de la définition et de la proposition .   Soit tels que alors est un entier naturel.   Puisque la proposition nous donne que , et que est un nombre de combinaisons, alors ce nombre est nécessairement un entier naturel.     Soit tels que alors .  Il suffit d'utiliser la proposition et la commutativité du produit dans .   Un corollaire est une proposition qui découle directement d'une autre proposition.    Le triangle de Pascal et le binôme de Newton   Les combinaisons apparaissent à plusieurs moments dans l'histoire des mathématiques. Le triangle de Pascal est un exemple où l'on peut représenter visuellement les termes afin de les calculer rapidement.  Un autre exemple est lorsqu'on veut développer l'expression . On explore ici ces deux situations.    Le triangle de Pascal    Le triangle de Pascal est une représentation des coefficients dans un tableau triangulaire. On représente ici les six premières lignes.   Le premier et le dernier nombre de chaque ligne sont des . Les autres nombres sont obtenus successivement (ligne par ligne) en additionnant les deux nombres se trouvant au-dessus.  En terme des coefficients , le triangle nous donne     En fait, la construction du triangle de Pascal laisse deviner qu'on peut déterminer les coefficients à l'aide de sommes, plutôt qu'à l'aide de la définition. On peut en déduire la formule de Pascal, qu'on donne à la proposition .    Soit tels que , alors    On a      Le binôme de Newton   Après avoir calculé à de nombreuses reprises des expressions comme ou encore , on peut deviner que   On peut voir une certaine structure dans cette expression, et on peut se demander s'il est possible de généraliser cette formule.  Par exemple, avec un peu de travail, on obtient que .  En comparant les expressions de et de aux lignes du triangle de Pascal, on voit que les coefficients devant les termes sont ceux qu'on retrouve aux lignes appropriées du triangle de Pascal. Ce résultat est vrai en général, et est énoncé à la proposition ci-dessous .     Soit et tels que , alors le coefficient devant le terme de l'expression est donné par .   Une preuve par récurrence sera présentée plus tard.    Les coefficients de  Utiliser la proposition afin de développer l'expression .   On devra utiliser les coefficients , pour allant de à . On peut les calculer à partir de la définition, ou bien à partir du triangle de Pascal. On obtient:   Ainsi, par la proposition , on a que        Les permutations et combinaisons généralisées   On veut maintenant généraliser les concepts de permutations et de combinaisons. Une première généralisation est de considérer les dénombrements d'objets indiscernables. Un exemple typique sera les anagrammes de mots avec des lettres qui se répètent.  Une deuxième façon de généraliser est de considérer des permutations et des combinaisons lorsqu'on peut répéter les éléments de l'ensemble que l'on choisit.  On a déjà fait plusieurs exemples qui sont des permutations avec répétition (voir entre autres , et ). Le dénombrement de ces situations se fait assez facilement grâce au principe du produit.  Cependant, le dénombrement de combinaisons avec répétition est un problème plus complexe. Il faudra développer une technique plus sophistiquée.    Permutations avec des objets indiscernables   On commence par considérer l'exemple le plus simple, c'est-à-dire lorsque les objets sont séparés en deux types d'objets indiscernables. En fait, on revisite l'exemple , mais on adopte une stratégie différente qu'on pourra utiliser plus tard. Cette méthode permet de généraliser la formule des permutations de types d'objets indiscernables. On peut également généraliser la méthode utilisée à l'exemple , mais la notation est un peu plus lourde.    Des chaînes binaires  Combien de chaînes binaires sont:  formées de quatre caractères et trois caractères ?  Une première solution est d'étiqueter les et les par   et , ainsi que  et . Le nombre de permutations de ces nouveaux caractères est .  Cependant, lorsqu'on enlève l'étiquetage, on remarque que pour chaque permutation qu'on vient de dénombrer, il y en a plusieurs autres qui sont équivalentes. Par exemple, lorsqu'on a les étiquettes, la chaîne est initialement considérée comme différente à la chaîne . Cependant, lorsqu'on enlève les étiquettes, les deux chaînes donnent la même, soit .  Pour chaque chaîne obtenue, on en a qui sont équivalents. Le provient des permutations des quatre alors que le correspond aux permutations des .  Par le principe de la division, on a que le nombre de chaînes binaires est .   Une autre solution est de voir le problème comme étant une combinaison, comme on a fait à l'exemple . En effet, on peut choisir une telle chaîne binaire en choisissant les positions des . Puisqu'il y aura positions au total et qu'on doit choisir la position pour les quatre caractères . Ainsi, il s'agit d'une combinaison de objets parmi .   formées de caractères dont de ces caractères sont des ?  On commence par compter le nombre de permutations de tous les objets en supposant qu'ils sont tous différents. Il y a alors permutations.  Cependant, pour chacune de ces permutations, il y a en qui sont équivalentes.  Le provient des permutations des objets de type alors que le correspond aux permutations des objets de type .  On doit choisir les positions des caractères parmi les positions. Ainsi, la réponse sera .   On veut maintenant considérer le cas où les objets sont séparés en types d'objets indiscernables.    Le nombre de permutations différentes de objets, où il y objets indiscernables de type , objets indiscernables de type , et objets indiscernables de type est     On commence par compter le nombre de permutations de tous les objets en supposant qu'ils sont tous différents. Il y a alors permutations.  Cependant, pour chacune de ces permutations, il y a en qui sont équivalentes.  Le provient des permutations des objets de type le correspond aux permutations des objets de type , et ainsi de suite jusqu'aux permutations des objets de type .  Par le principe de la division, on a que le nombre de permutations de nos objets est .    On commence par choisir les positions parmi les positions totales pour les objets de type . Il y a façons de le faire.  Par la suite, on choisit les positions parmi les positions restantes pour les objets de type . Il y a façons de le faire.  On doit maintenant choisir les positions parmi les positions restantes pour les objets de type . Il y a façons de le faire.  En poursuivant ainsi, jusqu'aux objets de type , et en utilisant le principe du produit, on a que le nombre de permutations est       Permutations avec répétitions  On peut généraliser la méthode pour résoudre l'exemple afin de trouver le nombre de permutations avec répétitions. En fait, on peut même utiliser le résultat de cet exemple afin de démontrer directement la formule suivante.   Le nombre de permutations d'un ensemble de objets si on accepte les répétitions est .  Choisir une telle permutation est équivalent à choisir une fonction . Par l'exemple , on a que le nombre de permutations de objets avec répétition est .     Combinaisons avec répétitions   On considère l'exemple suivant. Un magasin de bagels vend quatre sortes de bagels différents: nature, sésame, pavot et bleuet. En supposant que le magasin possède plus de bagels de chaque sorte, de combien de façons peut-on choisir bagels. Ceci est un exemple de combinaisons avec répétition. Ici, on pourrait par exemple choisir   On pourrait aussi s'imaginer qu'on tire billes de couleur rouge, bleu, vert ou jaune d'une urne contenant au moins billes de chaque couleur.  Une façon de représenter l'exemple précédent de façon un peu plus algébrique est la suivante. On considère pour . De combien de façons peut-on choisir les pour que ?  Pour pouvoir compter le nombre de solutions, on fait la transformation suivante. Pour chaque solution , on considère la chaîne binaire formée comme ceci: on échange chaque par une séquence de de longueur , et on ajoute un unique entre chaque séquence de (ça revient à échanger chaque en un ).  Par exemple, la solution sera transformée en la chaîne .  Ainsi, on vient de trouver une bijection entre les solutions à l'équation et les chaînes binaires de longueur formées de huit caractères et de trois caractères .  On sait qu'il existe telles chaînes. On peut généraliser cet argument pour trouver le nombre de combinaisons avec répétition.    Soit pour , le nombre de solutions à l'équation est .  On peut définir une bijection entre ces solutions et les chaînes binaires de longueur formées de caractères et caractères en utilisant la méthode précédente. Ainsi, le nombre de solutions est bien .   Pour ce genre de problèmes, il arrive souvent qu'on ajoute certaines conditions. L'exemple ci-dessous montre comment traiter ces conditions.   Combinaisons avec répétition  Déterminer le nombre de solutions à l'équation , pour et , si :  il n'y a pas d'autre condition?  pour tout ?  Pour s'assurer que , on introduit des variables intermédiaires telles que . Ainsi, en remplaçant dans l'équation, on a , ce qui devient .  Ainsi, il y aura solutions.     Pour s'assurer que , on introduit la variable intermédiaire telle que . Ainsi, en remplaçant dans l'équation, on a , ce qui devient .  Ainsi, il y aura solutions.     On compte toutes les solutions à l'équation (sans restriction) et on retire les solutions qui ne respectent pas la condition, c'est-à-dire les solutions telles que . Pour s'assurer que , on introduit la variable intermédiaire telle que . Ainsi, en remplaçant dans l'équation , on obtient .  Ainsi, il y aura solutions.        Les points importants de cette section sont:  Les permutations ;  Les combinaisons ;  Le triangle de Pascal et le binôme de Newton ;  Les permutations d'objets indiscernables ;  Les permutations avec répétition ;  Les combinaisons avec répétitions .        Ces questions sont à faire avant de venir en classe et à remettre au début du cours.   Sans utiliser une calculatrice (ou un autre outil informatique), expliquer comment calculer .  On considère l'ensemble Combien de permutations de l'ensemble y a-t-il? Combien de permutations de l'ensemble commencent par ? Combien de sous-ensembles de possèdent quatre éléments? Combien de sous-ensembles de possèdent trois éléments?  Que peut-on remarquer lorsqu'on compare les résultats de et de ? Donner une explication intuitive de ce qu'on observe.   Combien de mots peut-on former avec les lettres du mots ?   On forme des chaînes binaires de longueur , formés de quatres caractères \" \" et quatre caractères \" \". Combien de ces chaînes binaires y a-t-il?   Soit pour , trouver le nombre de solutions à l'équation    Trouver le coefficient devant dans l'expression .   Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.     Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.   On forme des chaînes binaires de longueur , formés de caractères \" \" et cinq caractères \" \". Combiens de ces chaînes binaires y a-t-il?  Combiens de ces chaînes binaires contiennent cinq \" \" consécutifs? Considérer le bloc comme étant un seul caractère.    Combiens de ces chaînes binaires contiennent cinq \" \" consécutifs ou cinq \" \"?  Utiliser l'inclusion-exclusion.    On forme des chaînes binaires de longueur , formés de cinq caractères \" \" et trois caractères \" \". Combiens de ces chaînes binaires y a-t-il?  Combiens de ces chaînes binaires contiennent cinq \" \" consécutifs?  Combiens de ces chaînes binaires contiennent trois \" \" consécutifs?  Combiens de ces chaînes binaires contiennent cinq \" \" consécutifs ou trois \" \"?  On lance une pièce à deux faces à reprises. Le résultat est Pile ou Face. Combien de résultats: y a-t-il au total? . contiennent exactement deux Face? On choisit deux positions parmi les possibles pour les Face. contiennent exactement trois Pile?  contiennent le même nombre de Pile que de Face?   De combien de manières peut-on sélectionner volontaires dans la classe? (On suppose qu'il y a personnes dans la classe.) Soit le nombre de personnes dans la classe. Si , alors c'est impossible. Sinon,  Aux olympiades scolaire de l'école du Bonheur, tous les participants gagnent une médaille. S'il y a élèves et qu'on attribue médailles d'or, médailles d'argent et le reste en bronze, de combien de manières est-ce que la distribution peut être faite?  Dans un groupe de personnes, on veut former deux équipes. La première sera composée de attaquants, défenseurs, gardiens et réservistes. La deuxième équipe sera formée de avants, passeur, arrières et réservistes. On suppose que personne ne fait partie des deux équipes. Combien y a-t-il de possibilités?  Pour une fin de semaine au chalet, on veut apporter jeux de société. Dans la collection, on trouve jeux coopératifs et jeux de stratégies. Combien de possibilités y a-t-il si: On ne donne aucune restriction?  On souhaite avoir exactement deux jeux coopératifs?  On utilise le principe du produit pour séparer la tâche en deux étapes. Premièrement, on choisit deux jeux coopratifs et ensuite on choisit trois jeux de stratégies. Ainsi, la réponse sera . Pour des raisons évidentes, on décide d'exclure des jeux coopératifs le jeu Pandémie et si on veut absolument apporter le jeu de stratégie Smallworld ?  Pour mon anniversaire, je souhaite faire un petit événement avec invités. J'ai bons amis hommes et bonnes amies femmes que je considère inviter. Combien de choix est-ce que j'ai si: Je ne mets aucune restriction? Je veux hommes et femmes? Roxanne et Samuel forme un couple. Si je décide d'en inviter un des deux, l'autre doit venir aussi. Combien de possibilités s'il n'y a pas d'autres restrictions? On commence par décider si le couple est invité ou non. On obtient leur présence ou absence entraine deux sous-ensembles disjoints de possibilités. Si le couple fait partie des invités, alors il reste places à combler, à choisir parmi les autres personnes. Cela fait .  À cela, on ajoute les possibilités où Roxanne et Samuel ne sont pas invités. Il faut alors choisir les invités parmi les personnes. Cela fait .  Par le principe d'addition, on a un total de possibilités.  Parmi celles-ci, combien comprennent le couple? Combien de possibilités si je veux avoir au total hommes et femmes? Encore une fois, on sépare en deux cas distincts, selon si Roxanne et Samuel sont présents ou non. Dans le cas où ils sont présent, on doit ensute choisir hommes parmi les restant et femmes parmi les restant. Selon le principe de multiplication, ceci donnera .  À cela, on doit ajouter les possiblités où Roxanne et Samuel sont absents. Il faut choisir hommes parmi les qui ne sont pas Samuel et femmes parmi les qui ne sont pas Roxanne. On obtient alors, par le principe de multiplication .  On combine finalement avec le principe d'addition pour avoir un total de possibilités.  Parmi celles-ci, combien comprennent le couple? Parmi mes amis, il y a aussi Christian et Sophie, qui sont en chicane et ne peuvent pas être tous les deux présents. Combien de possibilités y a-t-il s'il n'y a pas d'autres restrictions? Cette-fois, on distingue trois cas: Christian est présent, mais pas Sophie, Sophie est présent, mais pas Christian ou ni Sophie ni Christian sont présents. Ces trois cas sont disctincts et le principe d'addition permettra d'obtenir l'ensemble des possibilités.  Si Christian est présent, il faut ensuite choisir les autres invités parmi les personnes qui ne sont pas Sophie (ou Christian). Cela donne . Le même argument montre que si Sophie est présente, mais pas Christian, le nombre de possibilités est aussi .  Finalement, si les deux sont absents, il faut choisir les invités parmi les autres possibilités. On obtient alors .  En combinant le tout, il y a possibilités.  Combien de possibilités si je veux avoir au total hommes et femmes?  Soit et Combien y a-t-il de fonctions et ? Il y a fonctions , alors qu'il y a fonctions . Combien y a-t-il de fonctions qui sont surjectives?   Pour que la fonction soit surjective, on doit avoir pour , et on doit aussi avoir . Ainsi, il doit y avoir avoir exactement un élément tel que alors que tous les autres éléments aurons une seule préimage.  Donc, pour définir une fonction surjective , on doit choisir l'élément de ayant deux préimages ( possibilité). Enusite, on choisit les deux préimage de (il y possibilités.) Finalement, on doit choisir la préimage des autres éléments de . Ceci evient à permuter trois éléments (il y a possibilités).  Ainsi, par le principe du produit, il y en a  Combien y a-t-il de fonctions qui sont injectives?  Soit . Combien de solutions y a-t-il si sont des naturels (plus grands ou égaux à )?   sont des naturels plus grands ou égaux à ?   Soit un ensemble à éléments. Une -partition de est un ensemble de sous-ensembles de qui ont les propriétés suivantes:  ils sont non vides, c'est à dire ;  leur intersection deux à deux sont vides, c'est-à-dire si ;  leur union donne , c'est-à-dire .   Par exemple, pour , les ensembles et forment une -partition de . Combien y a-t-il de -partition de ?  Chaque -partition de est formé de deux ensembles de cardinalité et un ensemble de cardinalité . Chaque -partition est uniquement définie par le sous-ensemble de carinalité qu'elle contient.    Une éducatrice en garderie a un groupe de enfants. De combien de manières peut-elle former trois sous-groupes? On suppose qu'un groupe n'est pas vide, mais pourrait contenir un seul enfant.        Le problème est un problème de combinaisons avec répétitions ( voir ) avec certaines conditions.     Une boite de beignes d'une chaine populaire contient six compartiments qu'un employé remplit pour un client selon les règles suivantes. Il y a trois sortes de beignes, par exemple Chocolat, Erable et Vanille et on remplit la boite. Par exemple VVECCV est une configuration. Même chose, mais on permet de laisser un compartiment vide (et le client sera potentiellement déçu). Par exemple, VVE_C_ est une configuration où _ représente l'absence d'un beigne. On remplit tous les compartiments, en s'assurant que chaque sorte de beignes soit présente dans la boite. Il faut utiliser le principe d'inclusion-exclusion à plusieurs reprises. On remplit tous les compartiments, mais il y a maintenant sortes de beignes! L'employé, un peu maladroit remplit la boite avec six beignes à la vanille, mais en met potentiellement plus d'un par compartiment. Par exemple VV,V,_,VV,_,V est une configuration possible. Il faut compter le nombre de solution entières positives à l'équation . Il y a Même chose que la partie , mais on utilise six beignes différents.  Le problèmes revient à compter le nombre de façons d'attribuer à chaque beigne un compartiment. Pour chaque beigne, il y a compartiments possibles. Par le principe du produit, il y a façons de faire. C'est presque l'heure de la fermeture et il ne reste que beignes dans le présentoir, tous de différentes sortes. On veut remplir la boite de . On doit choisir beignes parmi les restants. De plus, on doit les placer en ordre, car on en place un seul dans chaque compartiment. On compte donc les -permutations de objets. Il y a façons de le faire. On ne met que des beignes au chocolat, en laissant possiblement des compartiments vides. C'est le printemps, le sirop d'érable coule en flot. Obtenez dix beignes à l'érable dans une boite de six! (Aucun compartiment ne sera laissé vide). Par exemple, EE,E,EEE,E,EE,E représenterait une configuration où deux beignes sont placés dans les compartiments 1 et 5, trois beignes sont placés dans le compartiment 3 et un beigne est placé dans chacun des compartiments 2,4 et 6. Il n'y a plus de boite, alors on met les beignes dans des sacs identiques. On veut mettre six beignes à la vanille dans trois sacs (évidemment, aucun sac ne sera vide, pour éviter le gaspillage). Énumérer les possibilités, il n'y en a pas beaucoup. Voici les manières différentes:  Un sac avec quatre beignes et deux sacs avec un beignes;  Un sac avec trois beignes, un sac avec deux beignes et un sac avec un beigne;  Trois sacs avec deux beignes.  Même chose que précédemment, mais avec six beignes différents. C'est un cas plus difficile que ce qu'on a vue en classe! C'est un défi pour le moment! Cela correspond à compter les -partition d'un ensemble à éléments. Si on note le nombre de -partitions d'un ensemble de cardinalité , on peut montrer (comment?) que . Cela correspond à compter les -partition d'un ensemble à éléments. Il y aurait manières de le faire.    "
},
{
  "id": "def_perm",
  "level": "2",
  "url": "sec_arrCombinaison.html#def_perm",
  "type": "Définition",
  "number": "4.2.1",
  "title": "",
  "body": "  Une permutation d'un ensemble d'objets est un arrangement ordonné de ces objets.  Une permutation d'un ensemble d'objets est un arrangement ordonné de objets de l'ensemble.   "
},
{
  "id": "ex_introPerm",
  "level": "2",
  "url": "sec_arrCombinaison.html#ex_introPerm",
  "type": "Exemple",
  "number": "4.2.2",
  "title": "Une première permutation.",
  "body": " Une première permutation  Soit . Combien y a-t-il de permutations différentes de l'ensemble ?     Si on veut arranger (de façon ordonnée) les éléments de l'ensemble , cela veut dire qu'on choisit un élément à la première position, un à la deuxième et finalement un à la troisième.  Lorsqu'on choisit l'élément en première position, il y a choix possibles. Une fois l'élément fixé à la première position, il reste choix pour l'élément à la deuxième position. Finalement, il ne reste qu'un seul choix pour la dernière position. Ainsi, par le principe du produit, il y a permutations possible.   "
},
{
  "id": "def_facto",
  "level": "2",
  "url": "sec_arrCombinaison.html#def_facto",
  "type": "Définition",
  "number": "4.2.3",
  "title": "",
  "body": " Soit , on définit (on dit la factorielle de , ou bien factorielle) de la façon suivante. Si , alors . Si , alors .  "
},
{
  "id": "subs_permArr-7",
  "level": "2",
  "url": "sec_arrCombinaison.html#subs_permArr-7",
  "type": "Remarque",
  "number": "4.2.4",
  "title": "",
  "body": " Nous allons insister sur la définition alternative de par récurrence un peu plus tard.  "
},
{
  "id": "prop_nbrPerm",
  "level": "2",
  "url": "sec_arrCombinaison.html#prop_nbrPerm",
  "type": "Proposition",
  "number": "4.2.5",
  "title": "",
  "body": " Soit un ensemble de cardinalité finie , alors il existe différentes permutations de l'ensemble .  Une méthode pour démontrer cette proposition est de généraliser la solution de l'exemple . Une autre méthode est de remarquer que de trouver un arrangement ordonné des éléments de est équivalent à trouver une fonction injective . Par l'exemple , on sait qu'il y a telles fonctions.  "
},
{
  "id": "def_nbrRPerm",
  "level": "2",
  "url": "sec_arrCombinaison.html#def_nbrRPerm",
  "type": "Définition",
  "number": "4.2.6",
  "title": "",
  "body": " Le nombre de permutations d'un ensemble tel que est noté   "
},
{
  "id": "prop_nbrRPerm",
  "level": "2",
  "url": "sec_arrCombinaison.html#prop_nbrRPerm",
  "type": "Proposition",
  "number": "4.2.7",
  "title": "",
  "body": "  .  Encore une fois, il suffit de remarquer que ceci est équivalent à compter des fonctions injectives . Par l'exemple , on sait qu'il y a telles fonctions.  "
},
{
  "id": "subs_permArr-14",
  "level": "2",
  "url": "sec_arrCombinaison.html#subs_permArr-14",
  "type": "Exemple",
  "number": "4.2.8",
  "title": "Des anagrammes.",
  "body": " Des anagrammes  Une anagramme d'une suite de lettres est une permutation de ces lettres. Lorsqu'on compte le nombre d'anagrammes possibles, on ne s'intéresse pas à savoir si la permutation est un vrai mot. Combien d'anagrammes des lettres sont telles que les lettres doivent apparaître dans cet ordre en un seul bloc?  Puisque la suite doit apparaître dans cet ordre en un seul bloc, il suffit de compter les permutations de lettres différentes (on considère comme une seule lettre). Ainsi, il y en a .  "
},
{
  "id": "subs_permArr-15",
  "level": "2",
  "url": "sec_arrCombinaison.html#subs_permArr-15",
  "type": "Exemple",
  "number": "4.2.9",
  "title": "Le parcours d’un vendeur.",
  "body": " Le parcours d'un vendeur  Un vendeur doit visiter huit villes différentes, l'une d'elles étant Saint-Rémi, pour son travail. Sachant qu'il doit terminer son voyage à Saint-Rémi, de combien de façons différentes peut-il visiter ces huit villes ?  Puisqu'il doit terminer ces visites à Saint-Rémi, il ne reste qu'à déterminer l'ordre des sept premières villes qu'il doit visiter. Ainsi, il s'agit d'une permutation de sept objets, et on sait qu'il y en a .  "
},
{
  "id": "def_combBin",
  "level": "2",
  "url": "sec_arrCombinaison.html#def_combBin",
  "type": "Définition",
  "number": "4.2.10",
  "title": "",
  "body": "  Soit un ensemble de cardinalité finie une combinaison de est une sélection non ordonnée de éléments de .  Le nombre de -combinaisons d'un ensemble de cardinalité finie est noté .  Les expressions de la forme , sont appelées les coefficients binomiaux.   "
},
{
  "id": "prop_nbrRComb",
  "level": "2",
  "url": "sec_arrCombinaison.html#prop_nbrRComb",
  "type": "Proposition",
  "number": "4.2.11",
  "title": "",
  "body": " Soit un ensemble de cardinalité finie et soit tel que , alors .   On sait que le nombre de permutations est . Nous allons utiliser le principe du produit afin de compter d'une autre façon. On peut séparer la tâche de choisir une permutation en deux étapes. Premièrement, on choisit éléments de . Deuxièmement, on choisit un ordre pour ces éléments (on permute ces éléments).  Le nombre de façons de choisir les éléments de est . Pour chaque choix de éléments , le nombre de façons d'ordonner ceux-ci est (le nombre de permutations des éléments). Ainsi, par le principe du produit, on a . On a alors .   "
},
{
  "id": "subs_combBinomial-6",
  "level": "2",
  "url": "sec_arrCombinaison.html#subs_combBinomial-6",
  "type": "Exemple",
  "number": "4.2.12",
  "title": "Mains de poker.",
  "body": " Mains de poker  Combien de mains de cinq cartes peuvent être formées à partir d'un jeu de cartes standard de cartes?  Il s'agit de compter les combinaisons de cartes parmi . On sait qu'il y en a .  "
},
{
  "id": "ex-chaineBin",
  "level": "2",
  "url": "sec_arrCombinaison.html#ex-chaineBin",
  "type": "Exemple",
  "number": "4.2.13",
  "title": "Des chaînes binaires.",
  "body": " Des chaînes binaires  Combien de chaînes binaires de longueur contiennent exactement caractères ?   Pour dénombrer ces chaînes, on remarque que pour choisir une telle chaîne binaire, il suffit de choisir positions où l'on place les parmi les positions possibles. Il s'agit donc de compter les combinaisons de parmi . Il y en a .  On peut également remarquer que, s'il y a exactement caractères , alors il y aura caractères . Ainsi, on aurait également pu choisir les positions des . Il y a donc façons de le faire.  Ainsi, on devrait avoir que .        "
},
{
  "id": "cor_divEntier",
  "level": "2",
  "url": "sec_arrCombinaison.html#cor_divEntier",
  "type": "Corollaire",
  "number": "4.2.14",
  "title": "",
  "body": " Soit tels que alors est un entier naturel.   Puisque la proposition nous donne que , et que est un nombre de combinaisons, alors ce nombre est nécessairement un entier naturel.   "
},
{
  "id": "cor_combComplement",
  "level": "2",
  "url": "sec_arrCombinaison.html#cor_combComplement",
  "type": "Corollaire",
  "number": "4.2.15",
  "title": "",
  "body": " Soit tels que alors .  Il suffit d'utiliser la proposition et la commutativité du produit dans .  "
},
{
  "id": "subs_combBinomial-11",
  "level": "2",
  "url": "sec_arrCombinaison.html#subs_combBinomial-11",
  "type": "Remarque",
  "number": "4.2.16",
  "title": "",
  "body": "Un corollaire est une proposition qui découle directement d'une autre proposition. "
},
{
  "id": "def-trianglePascal",
  "level": "2",
  "url": "sec_arrCombinaison.html#def-trianglePascal",
  "type": "Définition",
  "number": "4.2.17",
  "title": "",
  "body": "  Le triangle de Pascal est une représentation des coefficients dans un tableau triangulaire. On représente ici les six premières lignes.   Le premier et le dernier nombre de chaque ligne sont des . Les autres nombres sont obtenus successivement (ligne par ligne) en additionnant les deux nombres se trouvant au-dessus.  En terme des coefficients , le triangle nous donne    "
},
{
  "id": "prop-formulePascal",
  "level": "2",
  "url": "sec_arrCombinaison.html#prop-formulePascal",
  "type": "Proposition",
  "number": "4.2.18",
  "title": "",
  "body": "  Soit tels que , alors    On a   "
},
{
  "id": "prop-binomNewton",
  "level": "2",
  "url": "sec_arrCombinaison.html#prop-binomNewton",
  "type": "Proposition",
  "number": "4.2.19",
  "title": "",
  "body": "  Soit et tels que , alors le coefficient devant le terme de l'expression est donné par .   Une preuve par récurrence sera présentée plus tard.  "
},
{
  "id": "ex-binomNewton",
  "level": "2",
  "url": "sec_arrCombinaison.html#ex-binomNewton",
  "type": "Exemple",
  "number": "4.2.20",
  "title": "Les coefficients de <span class=\"process-math\">\\((x+y)^5\\)<\/span>.",
  "body": " Les coefficients de  Utiliser la proposition afin de développer l'expression .   On devra utiliser les coefficients , pour allant de à . On peut les calculer à partir de la définition, ou bien à partir du triangle de Pascal. On obtient:   Ainsi, par la proposition , on a que    "
},
{
  "id": "subsub-permInd-3",
  "level": "2",
  "url": "sec_arrCombinaison.html#subsub-permInd-3",
  "type": "Exemple",
  "number": "4.2.21",
  "title": "Des chaînes binaires.",
  "body": " Des chaînes binaires  Combien de chaînes binaires sont:  formées de quatre caractères et trois caractères ?  Une première solution est d'étiqueter les et les par   et , ainsi que  et . Le nombre de permutations de ces nouveaux caractères est .  Cependant, lorsqu'on enlève l'étiquetage, on remarque que pour chaque permutation qu'on vient de dénombrer, il y en a plusieurs autres qui sont équivalentes. Par exemple, lorsqu'on a les étiquettes, la chaîne est initialement considérée comme différente à la chaîne . Cependant, lorsqu'on enlève les étiquettes, les deux chaînes donnent la même, soit .  Pour chaque chaîne obtenue, on en a qui sont équivalents. Le provient des permutations des quatre alors que le correspond aux permutations des .  Par le principe de la division, on a que le nombre de chaînes binaires est .   Une autre solution est de voir le problème comme étant une combinaison, comme on a fait à l'exemple . En effet, on peut choisir une telle chaîne binaire en choisissant les positions des . Puisqu'il y aura positions au total et qu'on doit choisir la position pour les quatre caractères . Ainsi, il s'agit d'une combinaison de objets parmi .   formées de caractères dont de ces caractères sont des ?  On commence par compter le nombre de permutations de tous les objets en supposant qu'ils sont tous différents. Il y a alors permutations.  Cependant, pour chacune de ces permutations, il y a en qui sont équivalentes.  Le provient des permutations des objets de type alors que le correspond aux permutations des objets de type .  On doit choisir les positions des caractères parmi les positions. Ainsi, la réponse sera .  "
},
{
  "id": "prop-permInd",
  "level": "2",
  "url": "sec_arrCombinaison.html#prop-permInd",
  "type": "Proposition",
  "number": "4.2.22",
  "title": "",
  "body": "  Le nombre de permutations différentes de objets, où il y objets indiscernables de type , objets indiscernables de type , et objets indiscernables de type est     On commence par compter le nombre de permutations de tous les objets en supposant qu'ils sont tous différents. Il y a alors permutations.  Cependant, pour chacune de ces permutations, il y a en qui sont équivalentes.  Le provient des permutations des objets de type le correspond aux permutations des objets de type , et ainsi de suite jusqu'aux permutations des objets de type .  Par le principe de la division, on a que le nombre de permutations de nos objets est .    On commence par choisir les positions parmi les positions totales pour les objets de type . Il y a façons de le faire.  Par la suite, on choisit les positions parmi les positions restantes pour les objets de type . Il y a façons de le faire.  On doit maintenant choisir les positions parmi les positions restantes pour les objets de type . Il y a façons de le faire.  En poursuivant ainsi, jusqu'aux objets de type , et en utilisant le principe du produit, on a que le nombre de permutations est    "
},
{
  "id": "prop-permRep",
  "level": "2",
  "url": "sec_arrCombinaison.html#prop-permRep",
  "type": "Proposition",
  "number": "4.2.23",
  "title": "",
  "body": " Le nombre de permutations d'un ensemble de objets si on accepte les répétitions est .  Choisir une telle permutation est équivalent à choisir une fonction . Par l'exemple , on a que le nombre de permutations de objets avec répétition est .  "
},
{
  "id": "subsub-combRep-2-2",
  "level": "2",
  "url": "sec_arrCombinaison.html#subsub-combRep-2-2",
  "type": "Remarque",
  "number": "4.2.24",
  "title": "",
  "body": "On pourrait aussi s'imaginer qu'on tire billes de couleur rouge, bleu, vert ou jaune d'une urne contenant au moins billes de chaque couleur. "
},
{
  "id": "prop-combRep",
  "level": "2",
  "url": "sec_arrCombinaison.html#prop-combRep",
  "type": "Proposition",
  "number": "4.2.25",
  "title": "",
  "body": " Soit pour , le nombre de solutions à l'équation est .  On peut définir une bijection entre ces solutions et les chaînes binaires de longueur formées de caractères et caractères en utilisant la méthode précédente. Ainsi, le nombre de solutions est bien .  "
},
{
  "id": "subsub-combRep-5",
  "level": "2",
  "url": "sec_arrCombinaison.html#subsub-combRep-5",
  "type": "Exemple",
  "number": "4.2.26",
  "title": "Combinaisons avec répétition.",
  "body": " Combinaisons avec répétition  Déterminer le nombre de solutions à l'équation , pour et , si :  il n'y a pas d'autre condition?  pour tout ?  Pour s'assurer que , on introduit des variables intermédiaires telles que . Ainsi, en remplaçant dans l'équation, on a , ce qui devient .  Ainsi, il y aura solutions.     Pour s'assurer que , on introduit la variable intermédiaire telle que . Ainsi, en remplaçant dans l'équation, on a , ce qui devient .  Ainsi, il y aura solutions.     On compte toutes les solutions à l'équation (sans restriction) et on retire les solutions qui ne respectent pas la condition, c'est-à-dire les solutions telles que . Pour s'assurer que , on introduit la variable intermédiaire telle que . Ainsi, en remplaçant dans l'équation , on obtient .  Ainsi, il y aura solutions.   "
},
{
  "id": "rq-arrCombinaison-2",
  "level": "2",
  "url": "sec_arrCombinaison.html#rq-arrCombinaison-2",
  "type": "Question de compréhension",
  "number": "4.2.5.1",
  "title": "",
  "body": "Sans utiliser une calculatrice (ou un autre outil informatique), expliquer comment calculer . "
},
{
  "id": "rq-arrCombinaison-3",
  "level": "2",
  "url": "sec_arrCombinaison.html#rq-arrCombinaison-3",
  "type": "Question de compréhension",
  "number": "4.2.5.2",
  "title": "",
  "body": "On considère l'ensemble Combien de permutations de l'ensemble y a-t-il? Combien de permutations de l'ensemble commencent par ? Combien de sous-ensembles de possèdent quatre éléments? Combien de sous-ensembles de possèdent trois éléments?  Que peut-on remarquer lorsqu'on compare les résultats de et de ? Donner une explication intuitive de ce qu'on observe.  "
},
{
  "id": "rq-arrCombinaison-4",
  "level": "2",
  "url": "sec_arrCombinaison.html#rq-arrCombinaison-4",
  "type": "Question de compréhension",
  "number": "4.2.5.3",
  "title": "",
  "body": "Combien de mots peut-on former avec les lettres du mots ? "
},
{
  "id": "rq-arrCombinaison-5",
  "level": "2",
  "url": "sec_arrCombinaison.html#rq-arrCombinaison-5",
  "type": "Question de compréhension",
  "number": "4.2.5.4",
  "title": "",
  "body": " On forme des chaînes binaires de longueur , formés de quatres caractères \" \" et quatre caractères \" \". Combien de ces chaînes binaires y a-t-il? "
},
{
  "id": "rq-arrCombinaison-6",
  "level": "2",
  "url": "sec_arrCombinaison.html#rq-arrCombinaison-6",
  "type": "Question de compréhension",
  "number": "4.2.5.5",
  "title": "",
  "body": " Soit pour , trouver le nombre de solutions à l'équation  "
},
{
  "id": "rq-arrCombinaison-7",
  "level": "2",
  "url": "sec_arrCombinaison.html#rq-arrCombinaison-7",
  "type": "Question de compréhension",
  "number": "4.2.5.6",
  "title": "",
  "body": " Trouver le coefficient devant dans l'expression .  "
},
{
  "id": "rq-arrCombinaison-8",
  "level": "2",
  "url": "sec_arrCombinaison.html#rq-arrCombinaison-8",
  "type": "Question de compréhension",
  "number": "4.2.5.7",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-moinsDur",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-moinsDur",
  "type": "Exercice",
  "number": "4.2.6.1",
  "title": "",
  "body": " On forme des chaînes binaires de longueur , formés de caractères \" \" et cinq caractères \" \". Combiens de ces chaînes binaires y a-t-il?  Combiens de ces chaînes binaires contiennent cinq \" \" consécutifs? Considérer le bloc comme étant un seul caractère.    Combiens de ces chaînes binaires contiennent cinq \" \" consécutifs ou cinq \" \"?  Utiliser l'inclusion-exclusion.  "
},
{
  "id": "exo-unPeuMoinsDur",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-unPeuMoinsDur",
  "type": "Exercice",
  "number": "4.2.6.2",
  "title": "",
  "body": " On forme des chaînes binaires de longueur , formés de cinq caractères \" \" et trois caractères \" \". Combiens de ces chaînes binaires y a-t-il?  Combiens de ces chaînes binaires contiennent cinq \" \" consécutifs?  Combiens de ces chaînes binaires contiennent trois \" \" consécutifs?  Combiens de ces chaînes binaires contiennent cinq \" \" consécutifs ou trois \" \"? "
},
{
  "id": "exo-combinatoire-2-5",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-5",
  "type": "Exercice",
  "number": "4.2.6.3",
  "title": "",
  "body": "On lance une pièce à deux faces à reprises. Le résultat est Pile ou Face. Combien de résultats: y a-t-il au total? . contiennent exactement deux Face? On choisit deux positions parmi les possibles pour les Face. contiennent exactement trois Pile?  contiennent le même nombre de Pile que de Face?  "
},
{
  "id": "exo-combinatoire-2-6",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-6",
  "type": "Exercice",
  "number": "4.2.6.4",
  "title": "",
  "body": "De combien de manières peut-on sélectionner volontaires dans la classe? (On suppose qu'il y a personnes dans la classe.) Soit le nombre de personnes dans la classe. Si , alors c'est impossible. Sinon, "
},
{
  "id": "exo-combinatoire-2-7",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-7",
  "type": "Exercice",
  "number": "4.2.6.5",
  "title": "",
  "body": "Aux olympiades scolaire de l'école du Bonheur, tous les participants gagnent une médaille. S'il y a élèves et qu'on attribue médailles d'or, médailles d'argent et le reste en bronze, de combien de manières est-ce que la distribution peut être faite? "
},
{
  "id": "exo-combinatoire-2-8",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-8",
  "type": "Exercice",
  "number": "4.2.6.6",
  "title": "",
  "body": "Dans un groupe de personnes, on veut former deux équipes. La première sera composée de attaquants, défenseurs, gardiens et réservistes. La deuxième équipe sera formée de avants, passeur, arrières et réservistes. On suppose que personne ne fait partie des deux équipes. Combien y a-t-il de possibilités? "
},
{
  "id": "exo-combinatoire-2-9",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-9",
  "type": "Exercice",
  "number": "4.2.6.7",
  "title": "",
  "body": "Pour une fin de semaine au chalet, on veut apporter jeux de société. Dans la collection, on trouve jeux coopératifs et jeux de stratégies. Combien de possibilités y a-t-il si: On ne donne aucune restriction?  On souhaite avoir exactement deux jeux coopératifs?  On utilise le principe du produit pour séparer la tâche en deux étapes. Premièrement, on choisit deux jeux coopratifs et ensuite on choisit trois jeux de stratégies. Ainsi, la réponse sera . Pour des raisons évidentes, on décide d'exclure des jeux coopératifs le jeu Pandémie et si on veut absolument apporter le jeu de stratégie Smallworld ? "
},
{
  "id": "exo-combinatoire-2-10",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-10",
  "type": "Exercice",
  "number": "4.2.6.8",
  "title": "",
  "body": "Pour mon anniversaire, je souhaite faire un petit événement avec invités. J'ai bons amis hommes et bonnes amies femmes que je considère inviter. Combien de choix est-ce que j'ai si: Je ne mets aucune restriction? Je veux hommes et femmes? Roxanne et Samuel forme un couple. Si je décide d'en inviter un des deux, l'autre doit venir aussi. Combien de possibilités s'il n'y a pas d'autres restrictions? On commence par décider si le couple est invité ou non. On obtient leur présence ou absence entraine deux sous-ensembles disjoints de possibilités. Si le couple fait partie des invités, alors il reste places à combler, à choisir parmi les autres personnes. Cela fait .  À cela, on ajoute les possibilités où Roxanne et Samuel ne sont pas invités. Il faut alors choisir les invités parmi les personnes. Cela fait .  Par le principe d'addition, on a un total de possibilités.  Parmi celles-ci, combien comprennent le couple? Combien de possibilités si je veux avoir au total hommes et femmes? Encore une fois, on sépare en deux cas distincts, selon si Roxanne et Samuel sont présents ou non. Dans le cas où ils sont présent, on doit ensute choisir hommes parmi les restant et femmes parmi les restant. Selon le principe de multiplication, ceci donnera .  À cela, on doit ajouter les possiblités où Roxanne et Samuel sont absents. Il faut choisir hommes parmi les qui ne sont pas Samuel et femmes parmi les qui ne sont pas Roxanne. On obtient alors, par le principe de multiplication .  On combine finalement avec le principe d'addition pour avoir un total de possibilités.  Parmi celles-ci, combien comprennent le couple? Parmi mes amis, il y a aussi Christian et Sophie, qui sont en chicane et ne peuvent pas être tous les deux présents. Combien de possibilités y a-t-il s'il n'y a pas d'autres restrictions? Cette-fois, on distingue trois cas: Christian est présent, mais pas Sophie, Sophie est présent, mais pas Christian ou ni Sophie ni Christian sont présents. Ces trois cas sont disctincts et le principe d'addition permettra d'obtenir l'ensemble des possibilités.  Si Christian est présent, il faut ensuite choisir les autres invités parmi les personnes qui ne sont pas Sophie (ou Christian). Cela donne . Le même argument montre que si Sophie est présente, mais pas Christian, le nombre de possibilités est aussi .  Finalement, si les deux sont absents, il faut choisir les invités parmi les autres possibilités. On obtient alors .  En combinant le tout, il y a possibilités.  Combien de possibilités si je veux avoir au total hommes et femmes? "
},
{
  "id": "exo-combinatoire-2-11",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-11",
  "type": "Exercice",
  "number": "4.2.6.9",
  "title": "",
  "body": "Soit et Combien y a-t-il de fonctions et ? Il y a fonctions , alors qu'il y a fonctions . Combien y a-t-il de fonctions qui sont surjectives?   Pour que la fonction soit surjective, on doit avoir pour , et on doit aussi avoir . Ainsi, il doit y avoir avoir exactement un élément tel que alors que tous les autres éléments aurons une seule préimage.  Donc, pour définir une fonction surjective , on doit choisir l'élément de ayant deux préimages ( possibilité). Enusite, on choisit les deux préimage de (il y possibilités.) Finalement, on doit choisir la préimage des autres éléments de . Ceci evient à permuter trois éléments (il y a possibilités).  Ainsi, par le principe du produit, il y en a  Combien y a-t-il de fonctions qui sont injectives? "
},
{
  "id": "exo-combinatoire-2-12",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-12",
  "type": "Exercice",
  "number": "4.2.6.10",
  "title": "",
  "body": "Soit . Combien de solutions y a-t-il si sont des naturels (plus grands ou égaux à )?   sont des naturels plus grands ou égaux à ?  "
},
{
  "id": "exo-combinatoire-2-13",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-13",
  "type": "Exercice",
  "number": "4.2.6.11",
  "title": "",
  "body": "Soit un ensemble à éléments. Une -partition de est un ensemble de sous-ensembles de qui ont les propriétés suivantes:  ils sont non vides, c'est à dire ;  leur intersection deux à deux sont vides, c'est-à-dire si ;  leur union donne , c'est-à-dire .   Par exemple, pour , les ensembles et forment une -partition de . Combien y a-t-il de -partition de ?  Chaque -partition de est formé de deux ensembles de cardinalité et un ensemble de cardinalité . Chaque -partition est uniquement définie par le sous-ensemble de carinalité qu'elle contient.   "
},
{
  "id": "exo-combinatoire-2-14",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-14",
  "type": "Exercice",
  "number": "4.2.6.12",
  "title": "",
  "body": "Une éducatrice en garderie a un groupe de enfants. De combien de manières peut-elle former trois sous-groupes? On suppose qu'un groupe n'est pas vide, mais pourrait contenir un seul enfant.        Le problème est un problème de combinaisons avec répétitions ( voir ) avec certaines conditions.   "
},
{
  "id": "exo-combinatoire-2-15",
  "level": "2",
  "url": "sec_arrCombinaison.html#exo-combinatoire-2-15",
  "type": "Exercice",
  "number": "4.2.6.13",
  "title": "",
  "body": "Une boite de beignes d'une chaine populaire contient six compartiments qu'un employé remplit pour un client selon les règles suivantes. Il y a trois sortes de beignes, par exemple Chocolat, Erable et Vanille et on remplit la boite. Par exemple VVECCV est une configuration. Même chose, mais on permet de laisser un compartiment vide (et le client sera potentiellement déçu). Par exemple, VVE_C_ est une configuration où _ représente l'absence d'un beigne. On remplit tous les compartiments, en s'assurant que chaque sorte de beignes soit présente dans la boite. Il faut utiliser le principe d'inclusion-exclusion à plusieurs reprises. On remplit tous les compartiments, mais il y a maintenant sortes de beignes! L'employé, un peu maladroit remplit la boite avec six beignes à la vanille, mais en met potentiellement plus d'un par compartiment. Par exemple VV,V,_,VV,_,V est une configuration possible. Il faut compter le nombre de solution entières positives à l'équation . Il y a Même chose que la partie , mais on utilise six beignes différents.  Le problèmes revient à compter le nombre de façons d'attribuer à chaque beigne un compartiment. Pour chaque beigne, il y a compartiments possibles. Par le principe du produit, il y a façons de faire. C'est presque l'heure de la fermeture et il ne reste que beignes dans le présentoir, tous de différentes sortes. On veut remplir la boite de . On doit choisir beignes parmi les restants. De plus, on doit les placer en ordre, car on en place un seul dans chaque compartiment. On compte donc les -permutations de objets. Il y a façons de le faire. On ne met que des beignes au chocolat, en laissant possiblement des compartiments vides. C'est le printemps, le sirop d'érable coule en flot. Obtenez dix beignes à l'érable dans une boite de six! (Aucun compartiment ne sera laissé vide). Par exemple, EE,E,EEE,E,EE,E représenterait une configuration où deux beignes sont placés dans les compartiments 1 et 5, trois beignes sont placés dans le compartiment 3 et un beigne est placé dans chacun des compartiments 2,4 et 6. Il n'y a plus de boite, alors on met les beignes dans des sacs identiques. On veut mettre six beignes à la vanille dans trois sacs (évidemment, aucun sac ne sera vide, pour éviter le gaspillage). Énumérer les possibilités, il n'y en a pas beaucoup. Voici les manières différentes:  Un sac avec quatre beignes et deux sacs avec un beignes;  Un sac avec trois beignes, un sac avec deux beignes et un sac avec un beigne;  Trois sacs avec deux beignes.  Même chose que précédemment, mais avec six beignes différents. C'est un cas plus difficile que ce qu'on a vue en classe! C'est un défi pour le moment! Cela correspond à compter les -partition d'un ensemble à éléments. Si on note le nombre de -partitions d'un ensemble de cardinalité , on peut montrer (comment?) que . Cela correspond à compter les -partition d'un ensemble à éléments. Il y aurait manières de le faire. "
},
{
  "id": "sec-combinatoireExoSupp",
  "level": "1",
  "url": "sec-combinatoireExoSupp.html",
  "type": "Section",
  "number": "4.3",
  "title": "Exercices supplémentaires",
  "body": "  Exercices supplémentaires          Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  On a placé 16 cubes de couleur rouge, vert, bleu et orange en quatre colonnes tel qu'illustré ci-dessous. De combien de façons peut-on ramasser ces cubes, si on doit toujours ramasser un cube se trouvant au-dessus d'une colonne.   Disposition des cubes     Utiliser les lettres et pour représenter, respectivement, les cubes de couleur rouge, vert, bleu et orange. Utiliser ces lettres pour compter le nombre de façons de ramasser les cubes.  On considère l'ensemble . Combien de permutations de sont telles que les nombres sont en ordre croissant. Par exemple, et sont en ordre croissant, mais ne l'est pas.  .  Ici, on utilisera le principe du produit afin de résoudre le problème. On montrera ainsi qu'il exsite  permutations de qui sont en orde croissant. Avant de montrer la démarche, on fait quelsques remarques, puisque la réponse à ce problème est parfois contre-inbtuitive. En effet, dans la question, on cherche le nombre de permutations de avec un ordre particulier. Il est donc tentant d'utiliser l'expression . Cependant, comme on veut uniquement les -permutations de qui ont un ordre particulier. On verra que ceci revient à choisir les objets sans considérer l'ordre.  On fait maintenant la démarche. On sépare la tâche en deux étapes. Tout d'abord, on choisit trois objets parmi les dix éléments de , et ensuite on les mets en ordre croissant. On sait qu'il y a façons de choisir trois objets parmi dix. Par la suite, si on a trois éléments , il y a une seule façon de choisir l'ordre, car on doit nécessairement les mettre en ordre croissant! Par le principe du produit, il y a donc façons d'accomplir cette tâche.   On veut assoir huit personnes autour d'une table circulaire.  De combien de façons peut-on accomplir cette tâche si deux compositions sont équivalentes lorsque tout le monde a les mêmes voisins à gauche et à droite?  .     De combien de façons peut-on accomplir cette tâche si deux compositions sont équivalentes lorsque tout le monde a les mêmes voisins, peu importe qu'ils soient à gauche ou à droite?  .     On veut assoir personnes autour de deux tables circulaires. On peut assoir personnes à la première table, et les cinq autres à la seconde table. De combien de façons peut-on accomplir cette tâche si deux compositions sont équivalentes lorsque tout le monde a les mêmes voisins à gauche et à droite? Commencer par choisir les personnes qui seront à la première table, et ensuite placer tout le monde sur les tables.  Combien de mots différents peut-on former à partir des lettres du mot ? Parmi les mots formés à la première partie, combien d'entres eux ont tous les ensembles? Parmi les mots formés à la première partie, combien d'entres eux ont tous les ensembles? Parmi les mots formés à la première partie, combien d'entres eux ont tous les ensembles et tous les ensembles? Parmi les mots formés à la première partie, combien d'entres eux ont tous les ensembles ou tous les ensembles?  De combien de façons peut-on placer livres différents sur quatre étagères? Représenter un placement à l'aide des nombres à pour les livres et des barres pour séparer les étagères. Par exemple représente le placement avec les livres , et sur la première étagère, les livres et sur la deuxième étagère, les livres et sur la troisième étagère et les livres à sur la dernière.  Un palindrome est un mot qui est le même si on le lit à l'endroit que si on le lit à l'envers. Par exemple, est un palindrome.  Combien de palindromes de cinq lettres peut-on former avec les lettres de l'alphabet ?  Il suffit de choisir les trois premières lettres. .  Combien de palindromes de six lettres peut-on former avec les lettres de l'alphabet ?  Il suffit de choisir les trois premières lettres. .  Combien de palindromes de lettres peut-on former avec les lettres de l'alphabet ?  La réponse dépend de la parité de . Si est pair, on pose . Si est impair, on pose . La réponse est alors .  Combien de palindromes de cinq lettres peut-on former avec les lettres de l'alphabet si chaque lettre ne peut pas être utilisée plus de deux fois?  .  On place huit points, notés de à sur un cercle à égale distance. Combien de triangles peut-on former à partir de ces points, tel qu'illustré sur la figure ci-dessous?   Un triangle dans un cercle     Il suffit de choisir trois points parmi les huit points pour former chaque triangle.    De combien de façons peut-on placer quatre billes noires (indiscernables) dans cinq urnes différentes?      Il faut compter le nombre de solutions à l'équation où .   Déterminer le coefficient du terme dans le développement de:  Un joueur de poker pige cinq cartes d'un paquet de cartes standard. Combien de mains différentes peut-il obtenir: telles que les cinq cartes sont de la même sorte? qui contiennent quatre as? qui contiennent quatre cartes de la même valeur? qui contiennent trois as et deux valets? qui contiennent trois as et une paire? qui contiennent deux paires (et une carte d'une troisième valeur)?  Déterminer le nombre de solutions entières à l'équation où pour . pour . et .  Déterminer le nombre de solutions entières à l'équation où pour . pour .   Combien de solutions entières positives y a-t-il pour la paire d'équations     "
},
{
  "id": "exo-blocsAnagrammes",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-blocsAnagrammes",
  "type": "Exercice",
  "number": "4.3.1",
  "title": "",
  "body": "On a placé 16 cubes de couleur rouge, vert, bleu et orange en quatre colonnes tel qu'illustré ci-dessous. De combien de façons peut-on ramasser ces cubes, si on doit toujours ramasser un cube se trouvant au-dessus d'une colonne.   Disposition des cubes     Utiliser les lettres et pour représenter, respectivement, les cubes de couleur rouge, vert, bleu et orange. Utiliser ces lettres pour compter le nombre de façons de ramasser les cubes. "
},
{
  "id": "exo-ordrePasOrdre",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-ordrePasOrdre",
  "type": "Exercice",
  "number": "4.3.2",
  "title": "",
  "body": "On considère l'ensemble . Combien de permutations de sont telles que les nombres sont en ordre croissant. Par exemple, et sont en ordre croissant, mais ne l'est pas.  .  Ici, on utilisera le principe du produit afin de résoudre le problème. On montrera ainsi qu'il exsite  permutations de qui sont en orde croissant. Avant de montrer la démarche, on fait quelsques remarques, puisque la réponse à ce problème est parfois contre-inbtuitive. En effet, dans la question, on cherche le nombre de permutations de avec un ordre particulier. Il est donc tentant d'utiliser l'expression . Cependant, comme on veut uniquement les -permutations de qui ont un ordre particulier. On verra que ceci revient à choisir les objets sans considérer l'ordre.  On fait maintenant la démarche. On sépare la tâche en deux étapes. Tout d'abord, on choisit trois objets parmi les dix éléments de , et ensuite on les mets en ordre croissant. On sait qu'il y a façons de choisir trois objets parmi dix. Par la suite, si on a trois éléments , il y a une seule façon de choisir l'ordre, car on doit nécessairement les mettre en ordre croissant! Par le principe du produit, il y a donc façons d'accomplir cette tâche.  "
},
{
  "id": "exo-combinatoireExoSupp-2-5",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-5",
  "type": "Exercice",
  "number": "4.3.3",
  "title": "",
  "body": "On veut assoir huit personnes autour d'une table circulaire.  De combien de façons peut-on accomplir cette tâche si deux compositions sont équivalentes lorsque tout le monde a les mêmes voisins à gauche et à droite?  .     De combien de façons peut-on accomplir cette tâche si deux compositions sont équivalentes lorsque tout le monde a les mêmes voisins, peu importe qu'ils soient à gauche ou à droite?  .    "
},
{
  "id": "exo-combinatoireExoSupp-2-6",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-6",
  "type": "Exercice",
  "number": "4.3.4",
  "title": "",
  "body": "On veut assoir personnes autour de deux tables circulaires. On peut assoir personnes à la première table, et les cinq autres à la seconde table. De combien de façons peut-on accomplir cette tâche si deux compositions sont équivalentes lorsque tout le monde a les mêmes voisins à gauche et à droite? Commencer par choisir les personnes qui seront à la première table, et ensuite placer tout le monde sur les tables. "
},
{
  "id": "exo-combinatoireExoSupp-2-7",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-7",
  "type": "Exercice",
  "number": "4.3.5",
  "title": "",
  "body": "Combien de mots différents peut-on former à partir des lettres du mot ? Parmi les mots formés à la première partie, combien d'entres eux ont tous les ensembles? Parmi les mots formés à la première partie, combien d'entres eux ont tous les ensembles? Parmi les mots formés à la première partie, combien d'entres eux ont tous les ensembles et tous les ensembles? Parmi les mots formés à la première partie, combien d'entres eux ont tous les ensembles ou tous les ensembles? "
},
{
  "id": "exo-combinatoireExoSupp-2-8",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-8",
  "type": "Exercice",
  "number": "4.3.6",
  "title": "",
  "body": "De combien de façons peut-on placer livres différents sur quatre étagères? Représenter un placement à l'aide des nombres à pour les livres et des barres pour séparer les étagères. Par exemple représente le placement avec les livres , et sur la première étagère, les livres et sur la deuxième étagère, les livres et sur la troisième étagère et les livres à sur la dernière. "
},
{
  "id": "exo-combinatoireExoSupp-2-9",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-9",
  "type": "Exercice",
  "number": "4.3.7",
  "title": "",
  "body": "Un palindrome est un mot qui est le même si on le lit à l'endroit que si on le lit à l'envers. Par exemple, est un palindrome.  Combien de palindromes de cinq lettres peut-on former avec les lettres de l'alphabet ?  Il suffit de choisir les trois premières lettres. .  Combien de palindromes de six lettres peut-on former avec les lettres de l'alphabet ?  Il suffit de choisir les trois premières lettres. .  Combien de palindromes de lettres peut-on former avec les lettres de l'alphabet ?  La réponse dépend de la parité de . Si est pair, on pose . Si est impair, on pose . La réponse est alors .  Combien de palindromes de cinq lettres peut-on former avec les lettres de l'alphabet si chaque lettre ne peut pas être utilisée plus de deux fois?  . "
},
{
  "id": "exo-combinatoireExoSupp-2-10",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-10",
  "type": "Exercice",
  "number": "4.3.8",
  "title": "",
  "body": "On place huit points, notés de à sur un cercle à égale distance. Combien de triangles peut-on former à partir de ces points, tel qu'illustré sur la figure ci-dessous?   Un triangle dans un cercle     Il suffit de choisir trois points parmi les huit points pour former chaque triangle.  "
},
{
  "id": "exo-combinatoireExoSupp-2-11",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-11",
  "type": "Exercice",
  "number": "4.3.9",
  "title": "",
  "body": "De combien de façons peut-on placer quatre billes noires (indiscernables) dans cinq urnes différentes?      Il faut compter le nombre de solutions à l'équation où .  "
},
{
  "id": "exo-combinatoireExoSupp-2-12",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-12",
  "type": "Exercice",
  "number": "4.3.10",
  "title": "",
  "body": "Déterminer le coefficient du terme dans le développement de: "
},
{
  "id": "exo-combinatoireExoSupp-2-13",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-13",
  "type": "Exercice",
  "number": "4.3.11",
  "title": "",
  "body": "Un joueur de poker pige cinq cartes d'un paquet de cartes standard. Combien de mains différentes peut-il obtenir: telles que les cinq cartes sont de la même sorte? qui contiennent quatre as? qui contiennent quatre cartes de la même valeur? qui contiennent trois as et deux valets? qui contiennent trois as et une paire? qui contiennent deux paires (et une carte d'une troisième valeur)? "
},
{
  "id": "exo-combinatoireExoSupp-2-14",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-14",
  "type": "Exercice",
  "number": "4.3.12",
  "title": "",
  "body": "Déterminer le nombre de solutions entières à l'équation où pour . pour . et . "
},
{
  "id": "exo-combinatoireExoSupp-2-15",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-15",
  "type": "Exercice",
  "number": "4.3.13",
  "title": "",
  "body": "Déterminer le nombre de solutions entières à l'équation où pour . pour . "
},
{
  "id": "exo-combinatoireExoSupp-2-16",
  "level": "2",
  "url": "sec-combinatoireExoSupp.html#exo-combinatoireExoSupp-2-16",
  "type": "Exercice",
  "number": "4.3.14",
  "title": "",
  "body": "Combien de solutions entières positives y a-t-il pour la paire d'équations  "
},
{
  "id": "sec_methodePreuve",
  "level": "1",
  "url": "sec_methodePreuve.html",
  "type": "Section",
  "number": "5.1",
  "title": "Méthodes de preuves",
  "body": " Méthodes de preuves   Depuis le début du cours (et dans vos autres cours de mathématiques), nous avons présenté plusieurs propriétés pour lesquelles nous avons également fourni une démonstration.  Dans ce chapitre, nous allons explorer plus en détail les différentes méthodes de preuves utilisées en mathématiques.  Dans la présente section, nous présenterons les méthodes de preuves de base, soit les preuves directes, les preuves indirectes et les preuves par contradiction.  Dans les prochaines sections, nous présenterons des méthodes de preuves plus avancées, telles que les preuves pas récurrence et les preuves utilisant le principe des tiroirs de Dirichlet.    Un peu de terminologie   Un théorème ou une proposition est un énoncé que l'on peut montrer être vrai. L'argument permettant de vérifier qu'un théorème est vrai est appelé une preuve.  Beaucoup de théorèmes peuvent être énoncés sous la forme d'une implication logique (avec ou sans quantificateurs). Dans ce cas, pour démontrer le théorème, on peut supposer que l'hypothèse est vraie, et à l'aide de propriétés connues et de raisonnements d'inférence, montrer que la conclusion est alors vraie.  Dans n'importe quelle théorie mathématique, il y aura des énoncés qui seront considérés comme étant vrais, sans que l'on puisse les démontrer. On appelle ces énoncés des axiomes . Certains théorèmes sont moins importants que d'autres, et on leur donne des noms particuliers. Un lemme est un théorème qu'on utilise principalement pour en démontrer un autre, alors qu'un corollaire est un théorème qui découle directement d'un autre.     Différentes méthodes de preuves   Preuve directe   Une preuve directe sert à démontrer qu'un énoncé de la forme est vrai, en montrant que si est vraie, alors est nécessairement vraie. D'un point de vue logique, cette technique est simple, mais elle peut être difficile à utiliser et peut demander de l'intuition.   La parité et les carrés  Pour si est pair, alors est pair.   Si est pair, alors . Ainsi, . On a alors que est pair.     Les carrés parfaits  Donner une preuve directe que si et sont des carrés parfaits, alors est aussi un carré parfait. Un carré parfait est un entier tel que , pour un entier.   Si et sont des entiers parfaits, alors par définition, il existe des entiers et tels que et .  Ainsi on a que , où on a utilisé la commutativité et l'associativité du produit dans les entiers. Par définition d'un carré parfait, on peut conclure que est un carré parfait.     Formellement, la plupart des théorèmes sont des énoncés avec quantificateurs. L'énoncé de l'exercice précédent aurait pu être écrit sous la forme suivante. , où est la proposition est un carré parfait .  Pour montrer que l'énoncé est vrai pour tout entier et pour tout entier , il suffit de choisir et des entiers quelconques , c'est-à-dire qu'on utilise uniquement le fait qu'ils sont des entiers, et rien d'autre!   Pour plusieurs des exemples et exercices de la section, on démontrera des propriétés des nombres rationnels et des nombres irrationnels. On rappelle ici les définitions.   L'ensemble des nombres rationnels est l'ensemble    L'ensemble des nombres irrationnels est l'ensemble    Le produit de rationnels  Montrer que si alors .   Si , alors il existe tels que , , et .  Ainsi, on a , par définition du produit dans . De plus, puisque est fermé sous le produit, et . Finalement, puisque et , alors . Ainsi, .     Le produit d'irrationnels  Soit , peut-on conclure que ou bien que ?   On ne peut pas conclure!  En effet, on peut montrer que et (voir l'exercice ). Dans ce cas, si on pose , alors .  Cependant, si , alors (voir l'exercice ). Dans ce cas, .     La somme de rationnels  Montrer que si alors .   Si , alors il existe tels que , , et .  Ainsi, on a , par définition de la somme dans . De plus, puisque est fermé sous l'adition et le produit, et . De plus, puisque et , alors . Ainsi, .      Preuve indirecte   Il est parfois difficile de trouver un chemin direct pour montrer que . Dans certains cas, il sera plus facile de passer par la contraposée! On rappelle que la contraposée de est l'implication et que .  Ainsi, au lieu de montrer que si est vrai alors , on montre que si est fausse, alors est fausse.    Une preuve indirecte  Montrer que, si pour alors ou .   On suppose que la conclusion est fausse, c'est-à-dire que est vraie. Par les lois de De Morgan, on suppose que la proposition est vraie, et on veut montrer que la proposition est vraie.  On rappel que si et , alors .  Ainsi, si et , on aura . En particulier, si , alors .     La parité et les carrés, prise 2  Pour si est pair, alors est pair.   On montre que si est impair, alors est impair.  Si est impair, alors . Ainsi, . On a alors que est impair.      Preuve par contradiction   Supposons qu'on veuille montrer qu'une proposition est vraie. Suppons également que l'on arrive a montrer que est vraie, où une contradiction (une proposition qui est toujours fausse).  Si est vraie et que est fausse, alors nécessairement est fausse, c'est-à-dire que est vraie. La contradiction sera souvent formé par .    Un premier nombre irrationnel  Montrer que .   On suppose que , et on cherche à montrer que celà implique une contradiction.  Si , alors , où et . De plus, on peut supposer que cette faction est réduite, c'est-à-dire que .  On a alors . En isolant, on obtient . Ainsi, par un des exemples précédents on a que est un nombre pair, et donc l'est également. On peut donc écrire , pour , d'où .  En divisant par des deux côtés, on a . Par le même argument que précédemment, on a que est pair. Or, si et sont pair, on a que . Ceci est une contradiction, car est faux.     La somme d'un rationnel et d'un irrationnel  Montrer par contradiction que la somme d'un nombre rationnel et d'un nombre irrationnel est un nombre irrationnel.   Soit et , on suppose que . On cherche une contradiction.  En isolant on a On sait que par , et donc par . Ceci est une contradiction, car .  Ainsi, .     Une implication par contradiction  Soit Montrer par contradiction que si et sont pairs, alors est pair.   On a une implication , où et  On fait une preuve par contradiction. Puisque , la négation de est  Ainsi, on suppose que et sont pairs, mais que est impair. On cherche ensuite une contradiction.  On sait que la somme de deux nombres pairs est paire et la somme d'un nombre pair et d'un nombre impair est impaire (on demande la preuve de ceci dans les questions de compréhension de la lecture). Ainsi, est impair, mais est donc pair. On a ainsi une contradiction.  On a montré qu'il est impossible que les nombres et soient pairs et que soit impair. Ainsi, si et sont pairs, alors est pair.      La double implication  On rappelle que la proposition est équivalente à . Ainsi, pour montrer que est vraie, il faut montrer que et sont vraies.  Si l'on veut montrer plusieurs doubles implications, on peut souvent négliger certaines implications si on arrive à faire le tour des propositions impliquées. Par exemple, pour montrer que les doubles implications , et sont vraies, il est suffisant de montrer que les implications , et sont vraies.    Si et seulement si  Soit montrer que si et seulement si ou .   On suppose d'abord que On veut montrer que Puisque on a Ainsi, soit ou bien , c'est-à-dire que ou .  On supposons maintenant que ou . Dans ce cas, ou bien , et donc d'où .     Un petit raccourci  Montrer que si est un entier, alors les trois énoncés suivants sont équivalents.   est pair,   est impair,   est pair.       On montre que est vraie.  Puisque est pair, on a Ainsi, d'où est impair.    On montre que est vraie.  Puisque est impair, on a Ainsi, et donc c'est-à-dire que est pair.    Finalement, on montre que est vraie.  Puisque est pair, on sait que est pair, et donc En remplaçant, on a Ainsi, est pair.          Les éléments importants de cette section sont les différentes méthodes de preuves:  Les preuves directes .  Les preuves indirectes .  Les preuves par contradiction .   Le cas d'une ou plusieurs implications, en particulier, le cas de la double implication .       Ces questions sont à faire avant de venir en classe et à remettre au début du cours.   Utiliser une preuve directe pour démontrer que la somme de deux entiers impairs est paire.  Utiliser une preuve directe pour démontrer que la somme de deux entiers pairs est paire.  Utiliser une preuve directe pour démontrer que tout nombre entier impair est la différence de deux carrés parfaits.  Utiliser une preuve indirecte pour démontrer que pour tout si est impair, alors est pair.  Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.     À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Montrer que si et , alors . Par preuve directe.  On suppose que et on veut montrer que .  Puisque , par définition de , on sait qu'il existe tel que que , avec . Puisque , on sait également que .  Ainsi, car .   Montrer que si alors où est la plus petite valeur entre et alors que est la plus grande valeur entre et . Séparer la preuve en deux cas. Le premier cas lorsque , et le deuxième cas lorsque . Faites une preuve directe dans les deux cas.  On suppose d'abord que Dans ce cas, on a que et Ainsi, par commutativité de l'addition dans .  On ensuite que Dans ce cas, on a que et Ainsi, .   Montrer que si et sont des entiers de parité différente, alors est un entier impair. Sans perdre de généralité, on peut supposer que est pair alors que est impair.  On suppose que est pair et que est impair. Ainsi, alors que .  Ainsi, on a d'où est un entier impair.   Montrer que pour un entier, si est pair, alors est pair. Par preuve indirecte.  On suppose que est un entier impair. On veut montrer qu'alors est impair.  Puisque est impair, on sait que .  Ainsi, d'où est un nombre impair.  On a montré que si est un entier impair, alors est impair. Ainsi, si est pair, on doit nécessairement avoir que est pair.   Soit et soit et des entiers plus grand que . Montrer que Ici il est utile de séparer la question en deux cas. On fait une première preuve en supposant que est pair (c'est-à-dire que ). Par la suite , on montre que la proposition est vraie lorsque est impair (c'est-à-dire lorsque ).  Supposons que Par les proporiétés de l'équivalence modulo on a que d'où est pair. On remarque ici qu'on a utilisé le fait que et sont non null, car n'est pas défini.  Supposons maintenant que Par les proporiétés de l'équivalence modulo on a que d'où est pair.  Puisque est nécessairement pair ou impair, on a montrer dans tous les cas que est pair.   Montrer que si alors . Par preuve indirecte.  On suppose que On veut montrer que Puisque on sait que . Aussi, , car .  Par le numéro , on a que Or, on sait aussi que On a donc .  On vient de montrer que si alors . Ainsi, si on doit nécessairement avoir que .   Soit , montrer que si alors ou . Par preuve indirecte.  On suppose que et On veut montrer que Puisque et on a que .  On a montré que si et alors Ainsi, si on doit nécessairement avoir que ou .   Soit montrer que si est pair, alors est pair ou est pair. Par preuve indirecte.  On suppose que et sont tous les deux impairs. On veut alors montrer que le produit est également impair.  Puisque et sont impairs, on a que et Ainsi, c'est-à-dire que est impair.  On a montrer que si et sont tous deux impairs, alors est également impair. Ainsi, si est pair, on doit nécessairement avoir que ou est pair.   Montrer qu'au moins un des nombres réels est plus grand ou égal à la moyenne de ces nombres. Par contradiction.  On note la moyenne des et on suppose que pour allant de à  Par les propriétés de la somme dans on a que  Ainsi, .  On vient donc de montrer que ce qui est une contradiction. Il doit donc nécessairement y avoir au moins un des qui est plus grand ou égal à .   Soit un nombre premier et . Montrer que si divise alors divise ou . Par preuve directe, en passant par et en utilisant l'inverse modulo . Faire la preuve en deux étapes. Soit ou bien .  On suppose que divise et on veut montrer que divise ou . Si , on a terminer. Si ne divise pas on doit montrer que divise  Puisque ne divise pas et puisque est un nombre premier, on a que Ainsi, on sait que possède un inverse modulo c'est-à-dire qu'il existe un entier tel que .  D'un autre côté, puisque divise , on a que .  On a alors c'est-à-dire que    Montrer que et . Par contradiction. Revoir l'exemple .  Posons . On suppose que On peut allors écrire avec et Sans perdre de généralité, on peut également supposer que cette fraction est réduite, c'est-à-dire que .  On a donc , d'où . En particulier, on a que . Par l'exercice , on a que . On peut donc écrire où est un entier quelconque. En remplaçant dans la dernière égalité, on a Ainsi, est pair, et donc est pair, par .  On a donc montrer que et d'où ce qui est une contradiction. Ainsi, on doit nécessairement avoir .   Posons . On suppose que On peut allors écrire avec et Sans perdre de généralité, on peut également supposer que cette fraction est réduite, c'est-à-dire que .  On a donc , d'où . En particulier, on a que . Encore une fois, par , on a que . On peut donc écrire où est un entier quelconque. En remplaçant dans la dernière égalité, on a Ainsi, est pair, et donc est pair, par .  On a donc montrer que et d'où ce qui est une contradiction. Ainsi, on doit nécessairement avoir .   Montrer par contradiction qu'il n'y a pas de nombre tel que . Supposer que où . En remplaçant dans l'équation et en multipliant par , que peut-on dire sur la parité de et ?  On suppose que où . Ainsi, on a   On veut montrer que et sont pairs.  Supposons que soit impair. On a alors ce qui est une contradiction. Ainsi, on doit avoir que est pair.  Sachant que est pair, on veut également montrer que est pair. Puisque est pair, on a Ainsi, est pair, d'où est également pair par .  Avec tout ce travail, on a montrer que et , mais alors ce qui est une contradiction. Il n'y a donc pas de solution rationnelle à l'équation .    Montrer ou réfuter que le produit d'un nombre rationnel différent de par un irrationnel est un irrationel. C'est vrai! Par contradiction.  Soit et supposons que Puisque par l'exercice , on sait que Ainsi, par l'exemple .  Ceci est une contradiction, car on avait supposer On doit donc avoir .   Montrer qu'il existe un entier tel que . En posant on a bien que   Montrer que si est un entier, alors les quatre énoncés suivants sont équivalents.   est pair,  est impair,  est impair,  est pair.   Montrer que les implications sont vraies.  Supposons que par les propriétés des équivalences modulo on a que .  Supposons que par les propriétés des équivalences modulo on a que .  Supposons que par les propriétés des équivalences modulo on a que .  Supposons que par les propriétés des équivalences modulo on a que Ainsi, on a que est pair. Par l'exercice , on a que car on sait que est impair.   Montrer ou réfuter que si et , alors . C'est faux!  Pour réfuter cet énoncé, il est suffisant de trouver une paire tel que .  En prenant et , on a que .   Montrer ou réfuter qu'il existe et tel que . C'est vrai! Considérer . Si on a terminer, on a montrer que l'énoncé est vrai. Sinon, que peut-on dire de ?  On considère . À priori, on ne sait pas si ou si . On étudie ces deux possibilités.  Si , on a déjà terminé. En effet, on peut poser . On aurait alors .  Si on a plutôt , on doit travailler un peu plus. On pose , et . On a alors    Montrer ou réfuter qu'il existe un et un tels que . C'est vrai! Considérer . Si , on a montrer que c'est vrai. Sinon, que peut-on dire sur ?  On va montrer qu'un tel et un tel existe.  Tout d'abord, on remarque que et Il y a alors deux cas possible. Soit ou bien .  Supposons que alors on peut poser et , et on a terminé.  Si on peut alors poser et , par l'exercise . On a alors .  Ainsi, on n'a pas explicitement trouver un et un tel que mais on a montrer qu'une telle paire existe.     "
},
{
  "id": "exe-nPairnCarrePair",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-nPairnCarrePair",
  "type": "Exemple",
  "number": "5.1.1",
  "title": "La parité et les carrés.",
  "body": " La parité et les carrés  Pour si est pair, alors est pair.   Si est pair, alors . Ainsi, . On a alors que est pair.   "
},
{
  "id": "exe-carreParfait",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-carreParfait",
  "type": "Exemple",
  "number": "5.1.2",
  "title": "Les carrés parfaits.",
  "body": " Les carrés parfaits  Donner une preuve directe que si et sont des carrés parfaits, alors est aussi un carré parfait. Un carré parfait est un entier tel que , pour un entier.   Si et sont des entiers parfaits, alors par définition, il existe des entiers et tels que et .  Ainsi on a que , où on a utilisé la commutativité et l'associativité du produit dans les entiers. Par définition d'un carré parfait, on peut conclure que est un carré parfait.   "
},
{
  "id": "subsub-preuveDirecte-5",
  "level": "2",
  "url": "sec_methodePreuve.html#subsub-preuveDirecte-5",
  "type": "Remarque",
  "number": "5.1.3",
  "title": "",
  "body": " Formellement, la plupart des théorèmes sont des énoncés avec quantificateurs. L'énoncé de l'exercice précédent aurait pu être écrit sous la forme suivante. , où est la proposition est un carré parfait .  Pour montrer que l'énoncé est vrai pour tout entier et pour tout entier , il suffit de choisir et des entiers quelconques , c'est-à-dire qu'on utilise uniquement le fait qu'ils sont des entiers, et rien d'autre!  "
},
{
  "id": "def-nbrQ",
  "level": "2",
  "url": "sec_methodePreuve.html#def-nbrQ",
  "type": "Définition",
  "number": "5.1.4",
  "title": "",
  "body": " L'ensemble des nombres rationnels est l'ensemble  "
},
{
  "id": "def-nbrQc",
  "level": "2",
  "url": "sec_methodePreuve.html#def-nbrQc",
  "type": "Définition",
  "number": "5.1.5",
  "title": "",
  "body": " L'ensemble des nombres irrationnels est l'ensemble  "
},
{
  "id": "exe-prodQisQ",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-prodQisQ",
  "type": "Exemple",
  "number": "5.1.6",
  "title": "Le produit de rationnels.",
  "body": " Le produit de rationnels  Montrer que si alors .   Si , alors il existe tels que , , et .  Ainsi, on a , par définition du produit dans . De plus, puisque est fermé sous le produit, et . Finalement, puisque et , alors . Ainsi, .   "
},
{
  "id": "exe-prodQcisWhat",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-prodQcisWhat",
  "type": "Exemple",
  "number": "5.1.7",
  "title": "Le produit d’irrationnels.",
  "body": " Le produit d'irrationnels  Soit , peut-on conclure que ou bien que ?   On ne peut pas conclure!  En effet, on peut montrer que et (voir l'exercice ). Dans ce cas, si on pose , alors .  Cependant, si , alors (voir l'exercice ). Dans ce cas, .   "
},
{
  "id": "exe-sommeQisQ",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-sommeQisQ",
  "type": "Exemple",
  "number": "5.1.8",
  "title": "La somme de rationnels.",
  "body": " La somme de rationnels  Montrer que si alors .   Si , alors il existe tels que , , et .  Ainsi, on a , par définition de la somme dans . De plus, puisque est fermé sous l'adition et le produit, et . De plus, puisque et , alors . Ainsi, .   "
},
{
  "id": "exe-preuveInd1",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-preuveInd1",
  "type": "Exemple",
  "number": "5.1.9",
  "title": "Une preuve indirecte.",
  "body": " Une preuve indirecte  Montrer que, si pour alors ou .   On suppose que la conclusion est fausse, c'est-à-dire que est vraie. Par les lois de De Morgan, on suppose que la proposition est vraie, et on veut montrer que la proposition est vraie.  On rappel que si et , alors .  Ainsi, si et , on aura . En particulier, si , alors .   "
},
{
  "id": "exe-nCarrePairnPair",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-nCarrePairnPair",
  "type": "Exemple",
  "number": "5.1.10",
  "title": "La parité et les carrés, prise 2.",
  "body": " La parité et les carrés, prise 2  Pour si est pair, alors est pair.   On montre que si est impair, alors est impair.  Si est impair, alors . Ainsi, . On a alors que est impair.   "
},
{
  "id": "exe-sqrt2Qc",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-sqrt2Qc",
  "type": "Exemple",
  "number": "5.1.11",
  "title": "Un premier nombre irrationnel.",
  "body": " Un premier nombre irrationnel  Montrer que .   On suppose que , et on cherche à montrer que celà implique une contradiction.  Si , alors , où et . De plus, on peut supposer que cette faction est réduite, c'est-à-dire que .  On a alors . En isolant, on obtient . Ainsi, par un des exemples précédents on a que est un nombre pair, et donc l'est également. On peut donc écrire , pour , d'où .  En divisant par des deux côtés, on a . Par le même argument que précédemment, on a que est pair. Or, si et sont pair, on a que . Ceci est une contradiction, car est faux.   "
},
{
  "id": "exe-sommeQQc",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-sommeQQc",
  "type": "Exemple",
  "number": "5.1.12",
  "title": "La somme d’un rationnel et d’un irrationnel.",
  "body": " La somme d'un rationnel et d'un irrationnel  Montrer par contradiction que la somme d'un nombre rationnel et d'un nombre irrationnel est un nombre irrationnel.   Soit et , on suppose que . On cherche une contradiction.  En isolant on a On sait que par , et donc par . Ceci est une contradiction, car .  Ainsi, .   "
},
{
  "id": "subsub-preuveContradiction-5",
  "level": "2",
  "url": "sec_methodePreuve.html#subsub-preuveContradiction-5",
  "type": "Exemple",
  "number": "5.1.13",
  "title": "Une implication par contradiction.",
  "body": " Une implication par contradiction  Soit Montrer par contradiction que si et sont pairs, alors est pair.   On a une implication , où et  On fait une preuve par contradiction. Puisque , la négation de est  Ainsi, on suppose que et sont pairs, mais que est impair. On cherche ensuite une contradiction.  On sait que la somme de deux nombres pairs est paire et la somme d'un nombre pair et d'un nombre impair est impaire (on demande la preuve de ceci dans les questions de compréhension de la lecture). Ainsi, est impair, mais est donc pair. On a ainsi une contradiction.  On a montré qu'il est impossible que les nombres et soient pairs et que soit impair. Ainsi, si et sont pairs, alors est pair.   "
},
{
  "id": "exe-Equiv",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-Equiv",
  "type": "Exemple",
  "number": "5.1.14",
  "title": "Si et seulement si.",
  "body": " Si et seulement si  Soit montrer que si et seulement si ou .   On suppose d'abord que On veut montrer que Puisque on a Ainsi, soit ou bien , c'est-à-dire que ou .  On supposons maintenant que ou . Dans ce cas, ou bien , et donc d'où .   "
},
{
  "id": "exe-plusieursEquiv",
  "level": "2",
  "url": "sec_methodePreuve.html#exe-plusieursEquiv",
  "type": "Exemple",
  "number": "5.1.15",
  "title": "Un petit raccourci.",
  "body": " Un petit raccourci  Montrer que si est un entier, alors les trois énoncés suivants sont équivalents.   est pair,   est impair,   est pair.       On montre que est vraie.  Puisque est pair, on a Ainsi, d'où est impair.    On montre que est vraie.  Puisque est impair, on a Ainsi, et donc c'est-à-dire que est pair.    Finalement, on montre que est vraie.  Puisque est pair, on sait que est pair, et donc En remplaçant, on a Ainsi, est pair.     "
},
{
  "id": "rq-methodePreuve-2",
  "level": "2",
  "url": "sec_methodePreuve.html#rq-methodePreuve-2",
  "type": "Question de compréhension",
  "number": "5.1.3.1",
  "title": "",
  "body": "Utiliser une preuve directe pour démontrer que la somme de deux entiers impairs est paire. "
},
{
  "id": "rq-methodePreuve-3",
  "level": "2",
  "url": "sec_methodePreuve.html#rq-methodePreuve-3",
  "type": "Question de compréhension",
  "number": "5.1.3.2",
  "title": "",
  "body": "Utiliser une preuve directe pour démontrer que la somme de deux entiers pairs est paire. "
},
{
  "id": "rq-methodePreuve-4",
  "level": "2",
  "url": "sec_methodePreuve.html#rq-methodePreuve-4",
  "type": "Question de compréhension",
  "number": "5.1.3.3",
  "title": "",
  "body": "Utiliser une preuve directe pour démontrer que tout nombre entier impair est la différence de deux carrés parfaits. "
},
{
  "id": "rq-methodePreuve-5",
  "level": "2",
  "url": "sec_methodePreuve.html#rq-methodePreuve-5",
  "type": "Question de compréhension",
  "number": "5.1.3.4",
  "title": "",
  "body": "Utiliser une preuve indirecte pour démontrer que pour tout si est impair, alors est pair. "
},
{
  "id": "rq-methodePreuve-6",
  "level": "2",
  "url": "sec_methodePreuve.html#rq-methodePreuve-6",
  "type": "Question de compréhension",
  "number": "5.1.3.5",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-invQisQ",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-invQisQ",
  "type": "Exercice",
  "number": "5.1.4.1",
  "title": "",
  "body": "Montrer que si et , alors . Par preuve directe.  On suppose que et on veut montrer que .  Puisque , par définition de , on sait qu'il existe tel que que , avec . Puisque , on sait également que .  Ainsi, car .  "
},
{
  "id": "exo-methodePreuve-1-4",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-methodePreuve-1-4",
  "type": "Exercice",
  "number": "5.1.4.2",
  "title": "",
  "body": "Montrer que si alors où est la plus petite valeur entre et alors que est la plus grande valeur entre et . Séparer la preuve en deux cas. Le premier cas lorsque , et le deuxième cas lorsque . Faites une preuve directe dans les deux cas.  On suppose d'abord que Dans ce cas, on a que et Ainsi, par commutativité de l'addition dans .  On ensuite que Dans ce cas, on a que et Ainsi, .  "
},
{
  "id": "exo-methodePreuve-1-5",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-methodePreuve-1-5",
  "type": "Exercice",
  "number": "5.1.4.3",
  "title": "",
  "body": "Montrer que si et sont des entiers de parité différente, alors est un entier impair. Sans perdre de généralité, on peut supposer que est pair alors que est impair.  On suppose que est pair et que est impair. Ainsi, alors que .  Ainsi, on a d'où est un entier impair.  "
},
{
  "id": "exo-cubeEvenBaseEven",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-cubeEvenBaseEven",
  "type": "Exercice",
  "number": "5.1.4.4",
  "title": "",
  "body": "Montrer que pour un entier, si est pair, alors est pair. Par preuve indirecte.  On suppose que est un entier impair. On veut montrer qu'alors est impair.  Puisque est impair, on sait que .  Ainsi, d'où est un nombre impair.  On a montré que si est un entier impair, alors est impair. Ainsi, si est pair, on doit nécessairement avoir que est pair.  "
},
{
  "id": "exo-sommePuissancePair",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-sommePuissancePair",
  "type": "Exercice",
  "number": "5.1.4.5",
  "title": "",
  "body": "Soit et soit et des entiers plus grand que . Montrer que Ici il est utile de séparer la question en deux cas. On fait une première preuve en supposant que est pair (c'est-à-dire que ). Par la suite , on montre que la proposition est vraie lorsque est impair (c'est-à-dire lorsque ).  Supposons que Par les proporiétés de l'équivalence modulo on a que d'où est pair. On remarque ici qu'on a utilisé le fait que et sont non null, car n'est pas défini.  Supposons maintenant que Par les proporiétés de l'équivalence modulo on a que d'où est pair.  Puisque est nécessairement pair ou impair, on a montrer dans tous les cas que est pair.  "
},
{
  "id": "exo-invIrrIsIrr",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-invIrrIsIrr",
  "type": "Exercice",
  "number": "5.1.4.6",
  "title": "",
  "body": "Montrer que si alors . Par preuve indirecte.  On suppose que On veut montrer que Puisque on sait que . Aussi, , car .  Par le numéro , on a que Or, on sait aussi que On a donc .  On vient de montrer que si alors . Ainsi, si on doit nécessairement avoir que .  "
},
{
  "id": "exo-methodePreuve-1-9",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-methodePreuve-1-9",
  "type": "Exercice",
  "number": "5.1.4.7",
  "title": "",
  "body": "Soit , montrer que si alors ou . Par preuve indirecte.  On suppose que et On veut montrer que Puisque et on a que .  On a montré que si et alors Ainsi, si on doit nécessairement avoir que ou .  "
},
{
  "id": "exo-methodePreuve-1-10",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-methodePreuve-1-10",
  "type": "Exercice",
  "number": "5.1.4.8",
  "title": "",
  "body": "Soit montrer que si est pair, alors est pair ou est pair. Par preuve indirecte.  On suppose que et sont tous les deux impairs. On veut alors montrer que le produit est également impair.  Puisque et sont impairs, on a que et Ainsi, c'est-à-dire que est impair.  On a montrer que si et sont tous deux impairs, alors est également impair. Ainsi, si est pair, on doit nécessairement avoir que ou est pair.  "
},
{
  "id": "exo-plusMoyenne",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-plusMoyenne",
  "type": "Exercice",
  "number": "5.1.4.9",
  "title": "",
  "body": "Montrer qu'au moins un des nombres réels est plus grand ou égal à la moyenne de ces nombres. Par contradiction.  On note la moyenne des et on suppose que pour allant de à  Par les propriétés de la somme dans on a que  Ainsi, .  On vient donc de montrer que ce qui est une contradiction. Il doit donc nécessairement y avoir au moins un des qui est plus grand ou égal à .  "
},
{
  "id": "exo-prime",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-prime",
  "type": "Exercice",
  "number": "5.1.4.10",
  "title": "",
  "body": "Soit un nombre premier et . Montrer que si divise alors divise ou . Par preuve directe, en passant par et en utilisant l'inverse modulo . Faire la preuve en deux étapes. Soit ou bien .  On suppose que divise et on veut montrer que divise ou . Si , on a terminer. Si ne divise pas on doit montrer que divise  Puisque ne divise pas et puisque est un nombre premier, on a que Ainsi, on sait que possède un inverse modulo c'est-à-dire qu'il existe un entier tel que .  D'un autre côté, puisque divise , on a que .  On a alors c'est-à-dire que   "
},
{
  "id": "exo-irrCubique",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-irrCubique",
  "type": "Exercice",
  "number": "5.1.4.11",
  "title": "",
  "body": "Montrer que et . Par contradiction. Revoir l'exemple .  Posons . On suppose que On peut allors écrire avec et Sans perdre de généralité, on peut également supposer que cette fraction est réduite, c'est-à-dire que .  On a donc , d'où . En particulier, on a que . Par l'exercice , on a que . On peut donc écrire où est un entier quelconque. En remplaçant dans la dernière égalité, on a Ainsi, est pair, et donc est pair, par .  On a donc montrer que et d'où ce qui est une contradiction. Ainsi, on doit nécessairement avoir .   Posons . On suppose que On peut allors écrire avec et Sans perdre de généralité, on peut également supposer que cette fraction est réduite, c'est-à-dire que .  On a donc , d'où . En particulier, on a que . Encore une fois, par , on a que . On peut donc écrire où est un entier quelconque. En remplaçant dans la dernière égalité, on a Ainsi, est pair, et donc est pair, par .  On a donc montrer que et d'où ce qui est une contradiction. Ainsi, on doit nécessairement avoir .  "
},
{
  "id": "exo-methodePreuve-1-14",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-methodePreuve-1-14",
  "type": "Exercice",
  "number": "5.1.4.12",
  "title": "",
  "body": "Montrer par contradiction qu'il n'y a pas de nombre tel que . Supposer que où . En remplaçant dans l'équation et en multipliant par , que peut-on dire sur la parité de et ?  On suppose que où . Ainsi, on a   On veut montrer que et sont pairs.  Supposons que soit impair. On a alors ce qui est une contradiction. Ainsi, on doit avoir que est pair.  Sachant que est pair, on veut également montrer que est pair. Puisque est pair, on a Ainsi, est pair, d'où est également pair par .  Avec tout ce travail, on a montrer que et , mais alors ce qui est une contradiction. Il n'y a donc pas de solution rationnelle à l'équation .  "
},
{
  "id": "exo-pordQQcisQc",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-pordQQcisQc",
  "type": "Exercice",
  "number": "5.1.4.13",
  "title": "",
  "body": "Montrer ou réfuter que le produit d'un nombre rationnel différent de par un irrationnel est un irrationel. C'est vrai! Par contradiction.  Soit et supposons que Puisque par l'exercice , on sait que Ainsi, par l'exemple .  Ceci est une contradiction, car on avait supposer On doit donc avoir .  "
},
{
  "id": "exo-methodePreuve-1-16",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-methodePreuve-1-16",
  "type": "Exercice",
  "number": "5.1.4.14",
  "title": "",
  "body": "Montrer qu'il existe un entier tel que . En posant on a bien que  "
},
{
  "id": "exo-methodePreuve-1-17",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-methodePreuve-1-17",
  "type": "Exercice",
  "number": "5.1.4.15",
  "title": "",
  "body": "Montrer que si est un entier, alors les quatre énoncés suivants sont équivalents.   est pair,  est impair,  est impair,  est pair.   Montrer que les implications sont vraies.  Supposons que par les propriétés des équivalences modulo on a que .  Supposons que par les propriétés des équivalences modulo on a que .  Supposons que par les propriétés des équivalences modulo on a que .  Supposons que par les propriétés des équivalences modulo on a que Ainsi, on a que est pair. Par l'exercice , on a que car on sait que est impair.  "
},
{
  "id": "exo-methodePreuve-1-18",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-methodePreuve-1-18",
  "type": "Exercice",
  "number": "5.1.4.16",
  "title": "",
  "body": "Montrer ou réfuter que si et , alors . C'est faux!  Pour réfuter cet énoncé, il est suffisant de trouver une paire tel que .  En prenant et , on a que .  "
},
{
  "id": "exo-methodePreuve-1-19",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-methodePreuve-1-19",
  "type": "Exercice",
  "number": "5.1.4.17",
  "title": "",
  "body": "Montrer ou réfuter qu'il existe et tel que . C'est vrai! Considérer . Si on a terminer, on a montrer que l'énoncé est vrai. Sinon, que peut-on dire de ?  On considère . À priori, on ne sait pas si ou si . On étudie ces deux possibilités.  Si , on a déjà terminé. En effet, on peut poser . On aurait alors .  Si on a plutôt , on doit travailler un peu plus. On pose , et . On a alors   "
},
{
  "id": "exo-methodePreuve-1-20",
  "level": "2",
  "url": "sec_methodePreuve.html#exo-methodePreuve-1-20",
  "type": "Exercice",
  "number": "5.1.4.18",
  "title": "",
  "body": "Montrer ou réfuter qu'il existe un et un tels que . C'est vrai! Considérer . Si , on a montrer que c'est vrai. Sinon, que peut-on dire sur ?  On va montrer qu'un tel et un tel existe.  Tout d'abord, on remarque que et Il y a alors deux cas possible. Soit ou bien .  Supposons que alors on peut poser et , et on a terminé.  Si on peut alors poser et , par l'exercise . On a alors .  Ainsi, on n'a pas explicitement trouver un et un tel que mais on a montrer qu'une telle paire existe.  "
},
{
  "id": "sec_induction",
  "level": "1",
  "url": "sec_induction.html",
  "type": "Section",
  "number": "5.2",
  "title": "Les preuves par récurrence (par induction)",
  "body": " Les preuves par récurrence (par induction)   Si on considère la proposition Comment peut-on montrer que la proposition est vraie pour tout En remplaçant par différentes valeurs, on peut remarquer que la proposition est vraie, mais il est difficile (mais pas impossible) de le montrer directement en utilisant les méthodes utilisées jusqu'à maintenant.  Une méthode efficace permettant de démontrer ce genre de théorème est ce qu'on appelle une preuve par récurrence. Pour illustrer l'idée, considérons l'exemple suivant.  On s'imagine une échelle infinie (avec une infinité de barreaux). On se demande jusqu'à quel barreau est-ce qu'on peut se rendre si on sait les informations suivantes. Premièrement, on suppose qu'on est en mesure d'atteindre le premier barreau. Ensuite, on suppose que si on est en mesure d'atteindre le ième barreau, alors on est également capable d'atteindre le ième barreau. Jusqu'où peut-on se rendre?  Par ce qui précède, on peut conclure qu'on peut se rendre à tous les barreaux de l'échelle! En effet, puisqu'on peut se rendre au premier, on peut se rendre au deuxième. Puisqu'on peut se rendre au deuxième, on peut se rendre au troisième. Puisqu'on peut se rendre au troisième, on peut se rendre au quatrième. Puisqu'on peut se rendre au quatrième... et ainsi de suite.    Les différentes étapes   Si on garde l'exemple de l'échelle infinie en tête, on remarque qu'il y avait deux parties à notre argument . Tout d'abord, on a supposé qu'on pouvait se rendre au premier barreau. C'est l'étape de base.  Par la suite, on a dit que si on pouvait se rendre au ième barreau, alors on pouvait se rendre au ième barreau. C'est l'étape d'induction.    Preuve par récurrence   Pour démontrer qu'une proposition est vraie pour tout on peut procéder de la façon suivante.   Étape de base: On montre que est vraie.   Étape d'induction: On montre que l'implication est vraie pour un entier positif quelconque, c'est-à-dire que si on suppose vraie, alors on montre que sera vraie également.    À l'étape d'induction, lorsqu'on suppose que est vraie, on dit qu'on fait une hypothèse d'induction. On notera souvent H.I. pour indiquer qu'on utilise cette hypothèse.     Une petite généralisation  En modifiant l'étape de base de la preuve par induction, on peut montrer qu'une proposition est vraie pour tout entier , où est un entier quelconque. L'étape de base sera alors de montrer que est vraie. L'étape d'induction sera alors de montrer que est vraie pour tout .     Exemples de preuves par récurrence  Regardons maintenant quelques exemples pour illustrer la méthode, en commençant par la formule de la somme des entiers positifs.   La somme des premiers entiers positifs  Montrer par récurrence que, pour on a    On pose   Étape de base: On veut montrer que est vraie. Tout d'abord on remarque que est la proposition . Ceci est clairement vraie, car  Étape d'induction: On suppose maintenant que est vraie, c'est-à-dire que où est un entier. On veut montrer que est vraie.  On remarque que est la proposition En partant de l'égalité à gauche, on a   Ainsi, puisqu'on a montré que la proposition est vraie pour , et qu'on a montré que si elle est vraie pour , alors elle est également vraie pour , on a montré que la proposition est vraie pour tout .     Une preuve de divisibilité  Montrer par récurrence que est divisible par pour tout entier naturel .   Étape de base: On montre que la proposition est vraie pour . Pour , on a Puisque , la proposition est bien vraie en .  Étape d'induction: On suppose que est divisible par pour un entier naturel quelconque. Ainsi, on peut écrire pour On veut montrer que est divisible par . Or, on a que   Par la fermeture de la somme dans on a que , et donc est divisible par .  Puisque la proposition est vraie pour , et que si la proposition est vraie pour , elle est aussi vraie pour alors la proposition est vraie pour tout .     Démonstration d'une inégalité  Montrer par récurrence que pour tout entier naturel , on a que .   Étape de base: On veut montrer que la proposition est vraie pour En la proposition devient ce qui est vrai.  Étape d'induction: On suppose que la proposition est vraie pour un entier naturel quelconque. Ainsi, on suppose que On veut montrer qu'elle est vraie pour , c'est-à-dire que .  On a que Ainsi, sous l'H.I., la proposition est également vraie pour .  Puisque la proposition est vraie pour , et que si la proposition est vraie pour , elle est aussi vraie pour alors la proposition est vraie pour tout .    Lorsqu'on utilise une preuve par récurrence, il faut s'assurer que l'argument utilisé pour l'étape d'induction fonctionne pour toutes les valeurs de . Voici un exemple d'une mauvaise utilisation d'une preuve par récurrence pour montrer une proposition qui est fausse.   Erreur commune d'une preuve par récurrence  Trouver l'erreur dans le raisonnement suivant permettant de montrer que pour tout ensemble de droites dans le plan, si aucune n'est parallèle à une autre, alors il existe un point commun à toutes ces droites:  Étape de base : On doit montrer que la proposition est vraie pour Or, si on a deux droites qui ne sont pas parallèles dans le plan, elles ont nécessairement un point en commun.  Étape d'induction : On suppose que la proposition est vraie pour , et on veut montrer qu'elle est vraie pour pour un entier tel que .  On considère un ensemble de droites dans le plan qui sont deux à deux non-parallèles. Si on regarde les premières droites, alors par l'H.I., il existe un point qui est en commun aux premières droites.  Par le même argument, il existe un point qui est en commun au dernières droites. On veut montrer que .  Supposons que ces points soient distincts. Alors toutes les droites contenant ces deux points seront les mêmes droites (car il y a une seule droite passant par deux points dans le plan). Ceci est une contradiction, car ces droites sont distinctes. On doit donc avoir , et donc toutes les droites possèdent un point en commun.   À l'étape d'induction, l'argument démontrant que ne fonctionne pas en En effet, si alors et est un point de la première et de la deuxième droite, alors que est un point de la deuxième et la troisième droite. Ainsi, seule la deuxième droite contient les points et ce qui n'est pas une contradiction!    Une autre preuve par récurrence  Trouver l'erreur dans le raisonnement suivant permettant de montrer que toutes les voitures sont de la même couleur:  On considère un ensemble de voitures . On pose la proposition: Toutes les voitures de l'ensemble sont de la même couleur.  Étape de base : On doit montrer que la proposition est vraie pour . Or, si , , et on a bien que toutes les voitures sont de la même couleur (celle de ).  Étape d'induction : On suppose que la proposition est vraie pour tous les ensembles de voitures, et on veut montrer qu'elle est vraie pour tous les ensembles de voitures, pour un entier tel que .  On considère l'ensemble formé de voiture. On a alors que Par l'H.I., toutes les voitures de sont de la même couleur que la voiture . De même, toutes les voitures de sont de la même couleur que la voiture .  Ainsi, toutes les voitures de sont de la même couleur que la voiture .    À l'étape d'induction, l'argument démontrant que toutes les voitures sont de la même couleur ne fonctionne pas pour . En effet, dans ce cas, .  On a encore , mais il n'y a pas d'élément en commun dans ces deux ensembles (car ). L'argument ne fonctionne donc pas à cet étape! La proposition n'est donc pas vraie pour .     La somme des entiers positifs impairs  Montrer par récurrence que, pour la somme des premiers entiers positifs impairs est    Tout d'abord, on remarque qu'on peut écrire le -ième entier positif impair comme . Ainsi, on peut écrire la proposition comme .  Étape de base : On veut montrer que la proposition est vraie pour . Or, en la proposition est ce qui est vrai.  Étape d'induction : On suppose que la proposition est vraie pour où est un entier positif. On veut montrer qu'elle sera alors vraie pour .   Ainsi, la proposition est vraie pour  Puisque la proposition est vraie pour , et que si la proposition est vraie pour , elle est aussi vraie pour alors la proposition est vraie pour tout .     Une autre preuve de divisibilité   Montrer par récurrence que pour un entier naturel, alors est divisible par .   Étape de base: On montre que la proposition est vraie pour . Pour , on a . Puisque , la proposition est bien vraie en .  Étape d'induction: On suppose que est divisible par pour un entier naturel quelconque. Ainsi, on peut écrire pour On veut montrer que est divisible par . Or, on a que   Puisque , on a que est divisible par .  Puisque la proposition est vraie pour , et que si la proposition est vraie pour , elle est aussi vraie pour alors la proposition est vraie pour tout .       Les points importants de cette section sont:  L'idée de base d'une preuve par récurrence;   Les étapes d'une preuve par récurrence;   L'erreur à ne pas faire!        Ces questions sont à faire avant de venir en classe et à remettre au début du cours.    Expliquer le principe d'une preuve par récurrence.    Soit , , et soit des ensembles quelconques pour allant de à . On considère la proposition .   Rappel: On a et    Faire l'étape de base d'une preuve par récurrence.   L'étape de base est lorsque .   Énoncer l'étape d'induction, sans la faire.    Montrer par récurrence que pour .   Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.     À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Sans utiliser les classes d'équivalences modulo un entier, montrer par réccurence que:   est divisible par pour , c'est-à-dire que pour un entier .   On pose la proposition est divisible par pour .  Étape de base: On Doit montrer que est vraie. Or, on a que , et donc, en , la proposition est est divisible par . Cette proposition est vraie, puisque .  Étape d'induction: On suppose que est un entier quelconque et que est vraie (c'est-à-dire que pour un entier est notre H.I.), on veut alors montrer que est vraie.  Ainsi, on veut montrer que pour un entier , à l'aide de l'H.I.  On part de l'expression , et on veut y faire apparaître . On a: Ainsi, est bien divisible par .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .    est divisible par pour , c'est-à-dire que pour un entier .   On pose la proposition est divisible par pour .  Étape de base: On Doit montrer que est vraie. Or, on a que , et donc, en , la proposition est est divisible par . Cette proposition est vraie, puisque .  Étape d'induction: On suppose que est un entier quelconque et que est vraie (c'est-à-dire que pour un entier est notre H.I.), on veut alors montrer que est vraie.  Ainsi, on veut montrer que pour un entier , à l'aide de l'H.I.  On part de l'expression , et on veut y faire apparaître . On a: Ainsi, est bien divisible par .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .    est divisible par pour , c'est-à-dire que pour un entier .   On pose la proposition est divisible par pour .  Étape de base: On Doit montrer que est vraie. Or, on a que , et donc, en , la proposition est est divisible par . Cette proposition est vraie, puisque .  Étape d'induction: On suppose que est un entier quelconque et que est vraie (c'est-à-dire que pour un entier est notre H.I.), on veut alors montrer que est vraie.  Ainsi, on veut montrer que pour un entier , à l'aide de l'H.I.  On part de l'expression , et on veut y faire apparaître . On a: Ainsi, est bien divisible par .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .   Montrer par récurrence que pour un entier, alors .  On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque et .  Étape d'induction: On suppose que est un entier quelconque et on veut montrer que est vraie. On suppose donc que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'égalité, on a   On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .   Montrer par récurrence que si est un entier naturel, alors .  On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque et .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. Tout d'abord, remarquons que . Ensuite, en partant du membre de gauche de l'égalité, on a   On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .   Montrer par récurrence que si est un entier, alors .  On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque et .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'égalité, on a   On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .   Montrer par récurrence que si est un entier, alors  On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'égalité, on a   On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .    Soit un ensemble de cardinalité , c'est-à-dire que . Montrer par récurrence que le nombre de sous-ensemblea de est .   On pose la proposition si , alors .  Étape de base: On montre que est vraie. Or, si , alors et .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que notre H.I. est que pour tout ensemble tel que , alors ), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que si , alors   On note et . Ansi, on a que .  On sépare la tâche de choisir un sous-ensemble de en deux étapes. Premièrement, on choisit un sous-ensemble de et ensuite on choisit si ou si . Par l'H.I., il y a sous-ensemble de , et il y a choix pour décider si .  Par le principe du produit, on a façons de choisir . On a donc bien que .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .   Montrer par récurrence que si est un entier plus grand que .  On pose la proposition pour et .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'inégalité, on a c'est-à-dire que .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .   Montrer par récurrence que si est un entier plus grand que .  On pose la proposition pour et .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'inégalité, on a c'est-à-dire que .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .   On considère l'expression . En remplaçant par certaines valeurs, trouver une formule pour l'expression de . Remarquer que   et  Montrer par récurrence que votre formule est bonne.  On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'égalité, on a   On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .    On considère l'expression pour un entier naturel.  Montrer par récurrence que   On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'inégalité, on a c'est-à-dire que .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .     "
},
{
  "id": "def-induction",
  "level": "2",
  "url": "sec_induction.html#def-induction",
  "type": "Définition",
  "number": "5.2.1",
  "title": "Preuve par récurrence.",
  "body": " Preuve par récurrence   Pour démontrer qu'une proposition est vraie pour tout on peut procéder de la façon suivante.   Étape de base: On montre que est vraie.   Étape d'induction: On montre que l'implication est vraie pour un entier positif quelconque, c'est-à-dire que si on suppose vraie, alors on montre que sera vraie également.    À l'étape d'induction, lorsqu'on suppose que est vraie, on dit qu'on fait une hypothèse d'induction. On notera souvent H.I. pour indiquer qu'on utilise cette hypothèse.   "
},
{
  "id": "subs_introInduction-4",
  "level": "2",
  "url": "sec_induction.html#subs_introInduction-4",
  "type": "Remarque",
  "number": "5.2.2",
  "title": "Une petite généralisation.",
  "body": " Une petite généralisation  En modifiant l'étape de base de la preuve par induction, on peut montrer qu'une proposition est vraie pour tout entier , où est un entier quelconque. L'étape de base sera alors de montrer que est vraie. L'étape d'induction sera alors de montrer que est vraie pour tout .  "
},
{
  "id": "exe-sommeEntiers",
  "level": "2",
  "url": "sec_induction.html#exe-sommeEntiers",
  "type": "Exemple",
  "number": "5.2.3",
  "title": "La somme des <span class=\"process-math\">\\(n\\)<\/span> premiers entiers positifs.",
  "body": " La somme des premiers entiers positifs  Montrer par récurrence que, pour on a    On pose   Étape de base: On veut montrer que est vraie. Tout d'abord on remarque que est la proposition . Ceci est clairement vraie, car  Étape d'induction: On suppose maintenant que est vraie, c'est-à-dire que où est un entier. On veut montrer que est vraie.  On remarque que est la proposition En partant de l'égalité à gauche, on a   Ainsi, puisqu'on a montré que la proposition est vraie pour , et qu'on a montré que si elle est vraie pour , alors elle est également vraie pour , on a montré que la proposition est vraie pour tout .   "
},
{
  "id": "exe-divisibilite",
  "level": "2",
  "url": "sec_induction.html#exe-divisibilite",
  "type": "Exemple",
  "number": "5.2.4",
  "title": "Une preuve de divisibilité.",
  "body": " Une preuve de divisibilité  Montrer par récurrence que est divisible par pour tout entier naturel .   Étape de base: On montre que la proposition est vraie pour . Pour , on a Puisque , la proposition est bien vraie en .  Étape d'induction: On suppose que est divisible par pour un entier naturel quelconque. Ainsi, on peut écrire pour On veut montrer que est divisible par . Or, on a que   Par la fermeture de la somme dans on a que , et donc est divisible par .  Puisque la proposition est vraie pour , et que si la proposition est vraie pour , elle est aussi vraie pour alors la proposition est vraie pour tout .   "
},
{
  "id": "exe-inegalite1",
  "level": "2",
  "url": "sec_induction.html#exe-inegalite1",
  "type": "Exemple",
  "number": "5.2.5",
  "title": "Démonstration d’une inégalité.",
  "body": " Démonstration d'une inégalité  Montrer par récurrence que pour tout entier naturel , on a que .   Étape de base: On veut montrer que la proposition est vraie pour En la proposition devient ce qui est vrai.  Étape d'induction: On suppose que la proposition est vraie pour un entier naturel quelconque. Ainsi, on suppose que On veut montrer qu'elle est vraie pour , c'est-à-dire que .  On a que Ainsi, sous l'H.I., la proposition est également vraie pour .  Puisque la proposition est vraie pour , et que si la proposition est vraie pour , elle est aussi vraie pour alors la proposition est vraie pour tout .   "
},
{
  "id": "exe-faussePreuve",
  "level": "2",
  "url": "sec_induction.html#exe-faussePreuve",
  "type": "Exemple",
  "number": "5.2.6",
  "title": "Erreur commune d’une “preuve” par récurrence.",
  "body": " Erreur commune d'une preuve par récurrence  Trouver l'erreur dans le raisonnement suivant permettant de montrer que pour tout ensemble de droites dans le plan, si aucune n'est parallèle à une autre, alors il existe un point commun à toutes ces droites:  Étape de base : On doit montrer que la proposition est vraie pour Or, si on a deux droites qui ne sont pas parallèles dans le plan, elles ont nécessairement un point en commun.  Étape d'induction : On suppose que la proposition est vraie pour , et on veut montrer qu'elle est vraie pour pour un entier tel que .  On considère un ensemble de droites dans le plan qui sont deux à deux non-parallèles. Si on regarde les premières droites, alors par l'H.I., il existe un point qui est en commun aux premières droites.  Par le même argument, il existe un point qui est en commun au dernières droites. On veut montrer que .  Supposons que ces points soient distincts. Alors toutes les droites contenant ces deux points seront les mêmes droites (car il y a une seule droite passant par deux points dans le plan). Ceci est une contradiction, car ces droites sont distinctes. On doit donc avoir , et donc toutes les droites possèdent un point en commun.   À l'étape d'induction, l'argument démontrant que ne fonctionne pas en En effet, si alors et est un point de la première et de la deuxième droite, alors que est un point de la deuxième et la troisième droite. Ainsi, seule la deuxième droite contient les points et ce qui n'est pas une contradiction!  "
},
{
  "id": "exe-faussePreuve2",
  "level": "2",
  "url": "sec_induction.html#exe-faussePreuve2",
  "type": "Exemple",
  "number": "5.2.7",
  "title": "Une autre “preuve” par récurrence.",
  "body": " Une autre preuve par récurrence  Trouver l'erreur dans le raisonnement suivant permettant de montrer que toutes les voitures sont de la même couleur:  On considère un ensemble de voitures . On pose la proposition: Toutes les voitures de l'ensemble sont de la même couleur.  Étape de base : On doit montrer que la proposition est vraie pour . Or, si , , et on a bien que toutes les voitures sont de la même couleur (celle de ).  Étape d'induction : On suppose que la proposition est vraie pour tous les ensembles de voitures, et on veut montrer qu'elle est vraie pour tous les ensembles de voitures, pour un entier tel que .  On considère l'ensemble formé de voiture. On a alors que Par l'H.I., toutes les voitures de sont de la même couleur que la voiture . De même, toutes les voitures de sont de la même couleur que la voiture .  Ainsi, toutes les voitures de sont de la même couleur que la voiture .    À l'étape d'induction, l'argument démontrant que toutes les voitures sont de la même couleur ne fonctionne pas pour . En effet, dans ce cas, .  On a encore , mais il n'y a pas d'élément en commun dans ces deux ensembles (car ). L'argument ne fonctionne donc pas à cet étape! La proposition n'est donc pas vraie pour .   "
},
{
  "id": "exe-sommeEntierImp",
  "level": "2",
  "url": "sec_induction.html#exe-sommeEntierImp",
  "type": "Exemple",
  "number": "5.2.8",
  "title": "La somme des entiers positifs impairs.",
  "body": " La somme des entiers positifs impairs  Montrer par récurrence que, pour la somme des premiers entiers positifs impairs est    Tout d'abord, on remarque qu'on peut écrire le -ième entier positif impair comme . Ainsi, on peut écrire la proposition comme .  Étape de base : On veut montrer que la proposition est vraie pour . Or, en la proposition est ce qui est vrai.  Étape d'induction : On suppose que la proposition est vraie pour où est un entier positif. On veut montrer qu'elle sera alors vraie pour .   Ainsi, la proposition est vraie pour  Puisque la proposition est vraie pour , et que si la proposition est vraie pour , elle est aussi vraie pour alors la proposition est vraie pour tout .   "
},
{
  "id": "subs-exemples-10",
  "level": "2",
  "url": "sec_induction.html#subs-exemples-10",
  "type": "Exemple",
  "number": "5.2.9",
  "title": "Une autre preuve de divisibilité.",
  "body": " Une autre preuve de divisibilité   Montrer par récurrence que pour un entier naturel, alors est divisible par .   Étape de base: On montre que la proposition est vraie pour . Pour , on a . Puisque , la proposition est bien vraie en .  Étape d'induction: On suppose que est divisible par pour un entier naturel quelconque. Ainsi, on peut écrire pour On veut montrer que est divisible par . Or, on a que   Puisque , on a que est divisible par .  Puisque la proposition est vraie pour , et que si la proposition est vraie pour , elle est aussi vraie pour alors la proposition est vraie pour tout .   "
},
{
  "id": "rq-induction-2",
  "level": "2",
  "url": "sec_induction.html#rq-induction-2",
  "type": "Question de compréhension",
  "number": "5.2.3.1",
  "title": "",
  "body": " Expliquer le principe d'une preuve par récurrence.  "
},
{
  "id": "rq-induction-3",
  "level": "2",
  "url": "sec_induction.html#rq-induction-3",
  "type": "Question de compréhension",
  "number": "5.2.3.2",
  "title": "",
  "body": " Soit , , et soit des ensembles quelconques pour allant de à . On considère la proposition .   Rappel: On a et    Faire l'étape de base d'une preuve par récurrence.   L'étape de base est lorsque .   Énoncer l'étape d'induction, sans la faire.  "
},
{
  "id": "rq-induction-4",
  "level": "2",
  "url": "sec_induction.html#rq-induction-4",
  "type": "Question de compréhension",
  "number": "5.2.3.3",
  "title": "",
  "body": " Montrer par récurrence que pour .  "
},
{
  "id": "rq-induction-5",
  "level": "2",
  "url": "sec_induction.html#rq-induction-5",
  "type": "Question de compréhension",
  "number": "5.2.3.4",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-induction-1-3",
  "level": "2",
  "url": "sec_induction.html#exo-induction-1-3",
  "type": "Exercice",
  "number": "5.2.4.1",
  "title": "",
  "body": "Sans utiliser les classes d'équivalences modulo un entier, montrer par réccurence que:   est divisible par pour , c'est-à-dire que pour un entier .   On pose la proposition est divisible par pour .  Étape de base: On Doit montrer que est vraie. Or, on a que , et donc, en , la proposition est est divisible par . Cette proposition est vraie, puisque .  Étape d'induction: On suppose que est un entier quelconque et que est vraie (c'est-à-dire que pour un entier est notre H.I.), on veut alors montrer que est vraie.  Ainsi, on veut montrer que pour un entier , à l'aide de l'H.I.  On part de l'expression , et on veut y faire apparaître . On a: Ainsi, est bien divisible par .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .    est divisible par pour , c'est-à-dire que pour un entier .   On pose la proposition est divisible par pour .  Étape de base: On Doit montrer que est vraie. Or, on a que , et donc, en , la proposition est est divisible par . Cette proposition est vraie, puisque .  Étape d'induction: On suppose que est un entier quelconque et que est vraie (c'est-à-dire que pour un entier est notre H.I.), on veut alors montrer que est vraie.  Ainsi, on veut montrer que pour un entier , à l'aide de l'H.I.  On part de l'expression , et on veut y faire apparaître . On a: Ainsi, est bien divisible par .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .    est divisible par pour , c'est-à-dire que pour un entier .   On pose la proposition est divisible par pour .  Étape de base: On Doit montrer que est vraie. Or, on a que , et donc, en , la proposition est est divisible par . Cette proposition est vraie, puisque .  Étape d'induction: On suppose que est un entier quelconque et que est vraie (c'est-à-dire que pour un entier est notre H.I.), on veut alors montrer que est vraie.  Ainsi, on veut montrer que pour un entier , à l'aide de l'H.I.  On part de l'expression , et on veut y faire apparaître . On a: Ainsi, est bien divisible par .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .  "
},
{
  "id": "exo-induction-1-4",
  "level": "2",
  "url": "sec_induction.html#exo-induction-1-4",
  "type": "Exercice",
  "number": "5.2.4.2",
  "title": "",
  "body": "Montrer par récurrence que pour un entier, alors .  On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque et .  Étape d'induction: On suppose que est un entier quelconque et on veut montrer que est vraie. On suppose donc que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'égalité, on a   On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .  "
},
{
  "id": "exo-induction-1-5",
  "level": "2",
  "url": "sec_induction.html#exo-induction-1-5",
  "type": "Exercice",
  "number": "5.2.4.3",
  "title": "",
  "body": "Montrer par récurrence que si est un entier naturel, alors .  On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque et .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. Tout d'abord, remarquons que . Ensuite, en partant du membre de gauche de l'égalité, on a   On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .  "
},
{
  "id": "exo-induction-1-6",
  "level": "2",
  "url": "sec_induction.html#exo-induction-1-6",
  "type": "Exercice",
  "number": "5.2.4.4",
  "title": "",
  "body": "Montrer par récurrence que si est un entier, alors .  On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque et .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'égalité, on a   On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .  "
},
{
  "id": "exo-induction-1-7",
  "level": "2",
  "url": "sec_induction.html#exo-induction-1-7",
  "type": "Exercice",
  "number": "5.2.4.5",
  "title": "",
  "body": "Montrer par récurrence que si est un entier, alors  On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'égalité, on a   On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .  "
},
{
  "id": "exo-nmbrSsEnsInd",
  "level": "2",
  "url": "sec_induction.html#exo-nmbrSsEnsInd",
  "type": "Exercice",
  "number": "5.2.4.6",
  "title": "",
  "body": " Soit un ensemble de cardinalité , c'est-à-dire que . Montrer par récurrence que le nombre de sous-ensemblea de est .   On pose la proposition si , alors .  Étape de base: On montre que est vraie. Or, si , alors et .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que notre H.I. est que pour tout ensemble tel que , alors ), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que si , alors   On note et . Ansi, on a que .  On sépare la tâche de choisir un sous-ensemble de en deux étapes. Premièrement, on choisit un sous-ensemble de et ensuite on choisit si ou si . Par l'H.I., il y a sous-ensemble de , et il y a choix pour décider si .  Par le principe du produit, on a façons de choisir . On a donc bien que .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .  "
},
{
  "id": "exo-induction-1-9",
  "level": "2",
  "url": "sec_induction.html#exo-induction-1-9",
  "type": "Exercice",
  "number": "5.2.4.7",
  "title": "",
  "body": "Montrer par récurrence que si est un entier plus grand que .  On pose la proposition pour et .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'inégalité, on a c'est-à-dire que .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .  "
},
{
  "id": "exo-induction-1-10",
  "level": "2",
  "url": "sec_induction.html#exo-induction-1-10",
  "type": "Exercice",
  "number": "5.2.4.8",
  "title": "",
  "body": "Montrer par récurrence que si est un entier plus grand que .  On pose la proposition pour et .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'inégalité, on a c'est-à-dire que .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .  "
},
{
  "id": "exo-induction-1-11",
  "level": "2",
  "url": "sec_induction.html#exo-induction-1-11",
  "type": "Exercice",
  "number": "5.2.4.9",
  "title": "",
  "body": "On considère l'expression . En remplaçant par certaines valeurs, trouver une formule pour l'expression de . Remarquer que   et  Montrer par récurrence que votre formule est bonne.  On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'égalité, on a   On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .  "
},
{
  "id": "exo-induction-1-12",
  "level": "2",
  "url": "sec_induction.html#exo-induction-1-12",
  "type": "Exercice",
  "number": "5.2.4.10",
  "title": "",
  "body": " On considère l'expression pour un entier naturel.  Montrer par récurrence que   On pose la proposition pour .  Étape de base: On montre que est vraie. Or, on a que ce qui est vrai, puisque .  Étape d'induction: On suppose que est un entier quelconque et on suppose que est vraie (c'est-à-dire que est notre H.I.), et on veut montrer que est alors vraie.  Ainsi, on veut montrer que à l'aide de l'H.I. En partant du membre de gauche de l'inégalité, on a c'est-à-dire que .  On a montré que est vraie, et que si est vraie pour un entier , alors est vraie. Ainsi, par le principe d'induction, on a montré que la proposition est vraie pour tout .  "
},
{
  "id": "sec_pidgeonHoles",
  "level": "1",
  "url": "sec_pidgeonHoles.html",
  "type": "Section",
  "number": "5.3",
  "title": "Principe des tiroirs de Dirichlet",
  "body": " Principe des tiroirs de Dirichlet   Introduction  Le principe des tiroirs de Dirichlet (ou le principe des nids de pigeons), est un principe très simple, qui peut être utilisé afin de démontrer des résultats complexes, si on l'utilise de façon intelligente .    Principe des tiroirs de Dirichlet  Soit , et supposons qu'on veut placer au moins objets dans boites, alors il existe au moins une boite contenant au moins de ces objets.    Un petit échauffement  Soit une classe formée de étudiants ou plus, alors il existe au moins deux étudiants tels que leur prénom commence par la même lettre.  On étiquette boites de A à Z. On place chaque étudiant dans la boite correspondant à la première lettre de son prénom. Par le principe des tiroirs de Dirichlet, il y a au moins deux étudiants dans la même boite. Ainsi, il y a au moins deux étudiants dont la première lettre de leur prénom est la même.   Tel que mentionné plus haut (et comme on peut le constater avec l'exemple précédent), le principe est assez simple et semble même anodin. Cependant, avec un peu d'imagination, on peut s'en servir pour résoudre des problèmes complexes. La partie importante ici est avec un peu d'imagination .    Exemples   Montrer que pour n'importe quel , il existe un multiple de qui est écrit uniquement avec des et des dans sa représentation en base dix.   On considère les nombres suivants: , où le dernier nombre est l'entier formé de chiffres dans sa représentation en base dix. On numérote boites de à . Ensuite on place chacun des nombres précédents dans la boite étiquetée par son reste lors de la division par .  Puisqu'il y a nombres et boites (restes), par le principe des tiroirs de Dirichlet, il existe deux de ces entiers, disons , tels que . Par la définition de la congruence modulo , on a .  Ainsi, est un multiple de et il s'écrit avec uniquement des et des .      Durant un mois de jours, une équipe de baseball joue au moins une partie par jour, mais au plus parties durant le mois. Montrer qu'il existe un nombre de jours consécutifs durant lesquels l'équipe doit jouer exactement parties.   On note le nombre de parties jouées avant et durant le jour pour Puisque l'équipe joue au moins une partie par jour et moins de parties dans le mois, on a En particulier, on a que si .  On considère également les entiers pour On aura alors Encore une fois, on a si .  On a donc les entiers compris entre et Il y aura donc au moins deux de ces entiers qui sont égaux. Par ce qui précède, on doit avoir Ainsi, le nombre de parties jouées entre le jour et le jour est .     Montrer que si on prend n'importe quel ensemble formé de nombres entiers strictement positifs et inférieurs ou égaux à , alors au moins un des éléments de divise un autre élément de . Symboliquement, si avec , alors il existe et tels que et .   Tout entier peut s'écrire comme où est un entier naturel et est impair. Supposons que la représentation en base deux de est . Ainsi, la représentation en base deux de est  .  Puisqu'il y a éléments de et nombres impairs de il existe tels que et En supposant on a alors Ainsi, on a .           Ces questions sont à faire avant de venir en classe et à remettre au début du cours.    Utiliser le principe des tiroirs de Dirichlet pour montrer les propositions suivantes.  Lorsqu'on utilise la méthode des tiroirs de Dirichlet, il faut indiquer quels sont les objets, quelles sont les boites et comment on place les objets dans ces boites.  On forme un groupe de dix personnes pour travailler sur un projet informatique. Montrer qu'il existe au moins deux personnes qui sont nées la même journée de la semaine. On écrit aléatoirement nombres entiers positifs. Montrer qu'il existe au moins deux nombres ayant les mêmes trois derniers chiffres. On choisit aléatoirement sept entiers dans l'ensemble Montrer qu'il doit y avoir une paire telle que sa somme est .  Considérer les ensembles et . Soit un sous-ensemble , on définit la fonction par si , et comme la somme des éléments de sinon.  On choisit aléatoirement sous-ensembles de contenant trois éléments ou moins (c'est-à-dire, des sous-ensembles tels que . Montrer qu'il existe au moins deux sous-ensembles et tels que .   Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative.     Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.  Montrer que si un élève assiste à six cours durant la semaine, chacun des cours se déroulant la même journée à chaque semaine, alors il y a un jour durant lequel l'élève assiste à au moins deux cours.  En supposant qu'aucun cours n'est durant la fin de semaine, il y a cours (objets) et jours (boites). Il y a donc deux objets dans la même boites, c'est-à-dire qu'il y a deux cours durant le même jour.   Une urne contient billes rouges et billes bleues. Une personne pige au hasard des billes sans les remettre dans l'urne. Combien de billes doit-elle piger avant d'être certaine d'avoir deux billes de la même couleur? billes.  On place les objets (billes) dans les boites (rouge, bleu) selon la couleur de la bille. Puisqu'il y a plus d'objets que de boites, il y aura au moins deux objets dans la même boite, et donc deux billes de la même couleur.  Combien de billes doit-elle piger avant d'être certaine d'avoir deux billes bleue? billes.  On suppose que les premières billes pigées sont des billes rouge. Par la suite, si on pige deux billes supplémentaires, elles seront nécessairement bleu.   Montrer que si on choisit aléatoirement cinq nombres entiers, alors il y en aura au moins deux ayant le même reste lorsque divisé par .  On place les objets (les nombres entiers) dans les boites représentant les classes d'équivalence modulo . On place chaque entier dans sa propre classe d'équivalence. Puisqu'il y a plus d'objets que de boites, il ya aura au moins deux objets dans la même boite.  Ainsi, il y aura deux entiers dans la même classe d'équivalence modulo c'est-à-dire que ces deux entiers auront le même reste lorsque divisé par .   Soit . Montrer que si on choisit aléatoirement nombres entiers, alors il y en aura au moins deux ayant le même reste lorsque divisé par . Remplacer par et par dans la solution de l'exercice .  On choisit aléatoirement nombres parmi les éléments de . Montrer qu'il existe au moins deux nombres qui somment à . Condidérer les ensembles .  Combien d'entiers doit-on choisir aléatoirement dans l'ensemble afin de garantir qu'au moins une paire aura une somme de ? On doit en choisir .  Soit est une fonction . En utilisant le principe des tiroirs de Dirichlet, montrer que si , alors la fonction n'est pas injective.    Objets: Les élément de  Boites: Les éléments de   On place un objet dans une boite si .  Puisqu'il ya plus d'objets que de boites, il y aura au moins deux objets dans la même boite. Ainsi, il exsite tels que La fonction n'est donc pas injective.   Soit des paires d'entiers ordonnés (c'est-à-dire ) pour Montrer qu'il existe, parmi ces paires d'entiers, deux paires d'entiers et telles que et    Objets: Les paires  Boites: Les paires de classes d'équivalence pour .  On place un objet dans une boite si et c'est à dire que et .  Puisqu'il ya plus d'objets que de boites, il y aura au moins deux objets dans la même boite. Ainsi, on aura et tels que et .   Soit cinq points du plan cartésien . Montrer que si pour alors le point milieu d'au moins un des segments reliant une paire de ces points a des coordonnées entières. Le point milieu entre le point et le point est le point . À quel moment est-ce que et sont des entiers?    Exercices supplémentaires   Soit un entier. Démontrer que si on choisit aléatoirement entiers quelconques, alors deux de ces entiers ont exactement le même reste lorsqu'ils sont divisé par .    Soit un entier. Démontrer que, dans tout ensemble de entiers consécutifs, il y a exactement un entier qui est divisible par .   Soit neuf points de l'espace . Montrer que si pour tout alors le point milieu d'au moins un des segments reliant une paire de ces points a des coordonnées entières.   On suppose qu'une université offre, durant une session cours différents. Sachant qu'il existe périodes durant lesquels on peut donner un cours, combien de salles de classes sont nécessaires?     "
},
{
  "id": "subs_statement-3",
  "level": "2",
  "url": "sec_pidgeonHoles.html#subs_statement-3",
  "type": "Proposition",
  "number": "5.3.1",
  "title": "Principe des tiroirs de Dirichlet.",
  "body": " Principe des tiroirs de Dirichlet  Soit , et supposons qu'on veut placer au moins objets dans boites, alors il existe au moins une boite contenant au moins de ces objets.  "
},
{
  "id": "ex_basePigeon",
  "level": "2",
  "url": "sec_pidgeonHoles.html#ex_basePigeon",
  "type": "Exemple",
  "number": "5.3.2",
  "title": "Un petit échauffement.",
  "body": " Un petit échauffement  Soit une classe formée de étudiants ou plus, alors il existe au moins deux étudiants tels que leur prénom commence par la même lettre.  On étiquette boites de A à Z. On place chaque étudiant dans la boite correspondant à la première lettre de son prénom. Par le principe des tiroirs de Dirichlet, il y a au moins deux étudiants dans la même boite. Ainsi, il y a au moins deux étudiants dont la première lettre de leur prénom est la même.  "
},
{
  "id": "ex_complexPigeon",
  "level": "2",
  "url": "sec_pidgeonHoles.html#ex_complexPigeon",
  "type": "Exemple",
  "number": "5.3.3",
  "title": "",
  "body": " Montrer que pour n'importe quel , il existe un multiple de qui est écrit uniquement avec des et des dans sa représentation en base dix.   On considère les nombres suivants: , où le dernier nombre est l'entier formé de chiffres dans sa représentation en base dix. On numérote boites de à . Ensuite on place chacun des nombres précédents dans la boite étiquetée par son reste lors de la division par .  Puisqu'il y a nombres et boites (restes), par le principe des tiroirs de Dirichlet, il existe deux de ces entiers, disons , tels que . Par la définition de la congruence modulo , on a .  Ainsi, est un multiple de et il s'écrit avec uniquement des et des .   "
},
{
  "id": "ex_elegantPigeon1",
  "level": "2",
  "url": "sec_pidgeonHoles.html#ex_elegantPigeon1",
  "type": "Exemple",
  "number": "5.3.4",
  "title": "",
  "body": " Durant un mois de jours, une équipe de baseball joue au moins une partie par jour, mais au plus parties durant le mois. Montrer qu'il existe un nombre de jours consécutifs durant lesquels l'équipe doit jouer exactement parties.   On note le nombre de parties jouées avant et durant le jour pour Puisque l'équipe joue au moins une partie par jour et moins de parties dans le mois, on a En particulier, on a que si .  On considère également les entiers pour On aura alors Encore une fois, on a si .  On a donc les entiers compris entre et Il y aura donc au moins deux de ces entiers qui sont égaux. Par ce qui précède, on doit avoir Ainsi, le nombre de parties jouées entre le jour et le jour est .   "
},
{
  "id": "ex_elegantPigeon2",
  "level": "2",
  "url": "sec_pidgeonHoles.html#ex_elegantPigeon2",
  "type": "Exemple",
  "number": "5.3.5",
  "title": "",
  "body": " Montrer que si on prend n'importe quel ensemble formé de nombres entiers strictement positifs et inférieurs ou égaux à , alors au moins un des éléments de divise un autre élément de . Symboliquement, si avec , alors il existe et tels que et .   Tout entier peut s'écrire comme où est un entier naturel et est impair. Supposons que la représentation en base deux de est . Ainsi, la représentation en base deux de est  .  Puisqu'il y a éléments de et nombres impairs de il existe tels que et En supposant on a alors Ainsi, on a .   "
},
{
  "id": "rq-pigeonHoles-2",
  "level": "2",
  "url": "sec_pidgeonHoles.html#rq-pigeonHoles-2",
  "type": "Question de compréhension",
  "number": "5.3.3.1",
  "title": "",
  "body": " Utiliser le principe des tiroirs de Dirichlet pour montrer les propositions suivantes.  Lorsqu'on utilise la méthode des tiroirs de Dirichlet, il faut indiquer quels sont les objets, quelles sont les boites et comment on place les objets dans ces boites.  On forme un groupe de dix personnes pour travailler sur un projet informatique. Montrer qu'il existe au moins deux personnes qui sont nées la même journée de la semaine. On écrit aléatoirement nombres entiers positifs. Montrer qu'il existe au moins deux nombres ayant les mêmes trois derniers chiffres. On choisit aléatoirement sept entiers dans l'ensemble Montrer qu'il doit y avoir une paire telle que sa somme est .  Considérer les ensembles et . Soit un sous-ensemble , on définit la fonction par si , et comme la somme des éléments de sinon.  On choisit aléatoirement sous-ensembles de contenant trois éléments ou moins (c'est-à-dire, des sous-ensembles tels que . Montrer qu'il existe au moins deux sous-ensembles et tels que .  "
},
{
  "id": "rq-pigeonHoles-3",
  "level": "2",
  "url": "sec_pidgeonHoles.html#rq-pigeonHoles-3",
  "type": "Question de compréhension",
  "number": "5.3.3.2",
  "title": "",
  "body": "Noter toute question qui demeure suite à la lecture de la section et la résolution des exercices ci-dessus ou toute précision\/clarification à apporter. Note: cette question est facultative. "
},
{
  "id": "exo-pigeonHoles-2-3",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-2-3",
  "type": "Exercice",
  "number": "5.3.4.1",
  "title": "",
  "body": "Montrer que si un élève assiste à six cours durant la semaine, chacun des cours se déroulant la même journée à chaque semaine, alors il y a un jour durant lequel l'élève assiste à au moins deux cours.  En supposant qu'aucun cours n'est durant la fin de semaine, il y a cours (objets) et jours (boites). Il y a donc deux objets dans la même boites, c'est-à-dire qu'il y a deux cours durant le même jour.  "
},
{
  "id": "exo-pigeonHoles-2-4",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-2-4",
  "type": "Exercice",
  "number": "5.3.4.2",
  "title": "",
  "body": "Une urne contient billes rouges et billes bleues. Une personne pige au hasard des billes sans les remettre dans l'urne. Combien de billes doit-elle piger avant d'être certaine d'avoir deux billes de la même couleur? billes.  On place les objets (billes) dans les boites (rouge, bleu) selon la couleur de la bille. Puisqu'il y a plus d'objets que de boites, il y aura au moins deux objets dans la même boite, et donc deux billes de la même couleur.  Combien de billes doit-elle piger avant d'être certaine d'avoir deux billes bleue? billes.  On suppose que les premières billes pigées sont des billes rouge. Par la suite, si on pige deux billes supplémentaires, elles seront nécessairement bleu.  "
},
{
  "id": "exo-mod4",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-mod4",
  "type": "Exercice",
  "number": "5.3.4.3",
  "title": "",
  "body": "Montrer que si on choisit aléatoirement cinq nombres entiers, alors il y en aura au moins deux ayant le même reste lorsque divisé par .  On place les objets (les nombres entiers) dans les boites représentant les classes d'équivalence modulo . On place chaque entier dans sa propre classe d'équivalence. Puisqu'il y a plus d'objets que de boites, il ya aura au moins deux objets dans la même boite.  Ainsi, il y aura deux entiers dans la même classe d'équivalence modulo c'est-à-dire que ces deux entiers auront le même reste lorsque divisé par .  "
},
{
  "id": "exo-pigeonHoles-2-6",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-2-6",
  "type": "Exercice",
  "number": "5.3.4.4",
  "title": "",
  "body": "Soit . Montrer que si on choisit aléatoirement nombres entiers, alors il y en aura au moins deux ayant le même reste lorsque divisé par . Remplacer par et par dans la solution de l'exercice . "
},
{
  "id": "exo-pigeonHoles-2-7",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-2-7",
  "type": "Exercice",
  "number": "5.3.4.5",
  "title": "",
  "body": "On choisit aléatoirement nombres parmi les éléments de . Montrer qu'il existe au moins deux nombres qui somment à . Condidérer les ensembles . "
},
{
  "id": "exo-pigeonHoles-2-8",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-2-8",
  "type": "Exercice",
  "number": "5.3.4.6",
  "title": "",
  "body": "Combien d'entiers doit-on choisir aléatoirement dans l'ensemble afin de garantir qu'au moins une paire aura une somme de ? On doit en choisir . "
},
{
  "id": "exo-pigeonHoles-2-9",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-2-9",
  "type": "Exercice",
  "number": "5.3.4.7",
  "title": "",
  "body": "Soit est une fonction . En utilisant le principe des tiroirs de Dirichlet, montrer que si , alors la fonction n'est pas injective.    Objets: Les élément de  Boites: Les éléments de   On place un objet dans une boite si .  Puisqu'il ya plus d'objets que de boites, il y aura au moins deux objets dans la même boite. Ainsi, il exsite tels que La fonction n'est donc pas injective.  "
},
{
  "id": "exo-pigeonHoles-2-10",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-2-10",
  "type": "Exercice",
  "number": "5.3.4.8",
  "title": "",
  "body": "Soit des paires d'entiers ordonnés (c'est-à-dire ) pour Montrer qu'il existe, parmi ces paires d'entiers, deux paires d'entiers et telles que et    Objets: Les paires  Boites: Les paires de classes d'équivalence pour .  On place un objet dans une boite si et c'est à dire que et .  Puisqu'il ya plus d'objets que de boites, il y aura au moins deux objets dans la même boite. Ainsi, on aura et tels que et .  "
},
{
  "id": "exo-pigeonHoles-2-11",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-2-11",
  "type": "Exercice",
  "number": "5.3.4.9",
  "title": "",
  "body": "Soit cinq points du plan cartésien . Montrer que si pour alors le point milieu d'au moins un des segments reliant une paire de ces points a des coordonnées entières. Le point milieu entre le point et le point est le point . À quel moment est-ce que et sont des entiers? "
},
{
  "id": "exo-pigeonHoles-3-2",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-3-2",
  "type": "Exercice",
  "number": "5.3.4.10",
  "title": "",
  "body": " Soit un entier. Démontrer que si on choisit aléatoirement entiers quelconques, alors deux de ces entiers ont exactement le même reste lorsqu'ils sont divisé par .  "
},
{
  "id": "exo-pigeonHoles-3-3",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-3-3",
  "type": "Exercice",
  "number": "5.3.4.11",
  "title": "",
  "body": " Soit un entier. Démontrer que, dans tout ensemble de entiers consécutifs, il y a exactement un entier qui est divisible par .  "
},
{
  "id": "exo-pigeonHoles-3-4",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-3-4",
  "type": "Exercice",
  "number": "5.3.4.12",
  "title": "",
  "body": "Soit neuf points de l'espace . Montrer que si pour tout alors le point milieu d'au moins un des segments reliant une paire de ces points a des coordonnées entières. "
},
{
  "id": "exo-pigeonHoles-3-5",
  "level": "2",
  "url": "sec_pidgeonHoles.html#exo-pigeonHoles-3-5",
  "type": "Exercice",
  "number": "5.3.4.13",
  "title": "",
  "body": " On suppose qu'une université offre, durant une session cours différents. Sachant qu'il existe périodes durant lesquels on peut donner un cours, combien de salles de classes sont nécessaires?  "
},
{
  "id": "sec-preuvesSupp",
  "level": "1",
  "url": "sec-preuvesSupp.html",
  "type": "Section",
  "number": "5.4",
  "title": "Exercices supplémentaires",
  "body": "  Exercices supplémentaires          Exercices    À faire en classe  Ces exercices sont faits pour travailler en classe. Ils servent à approfondir les notions de la section et à atteindre les objectifs d'apprentissage plus avancés.   Soit , montrer que disvie .   On travaille modulo . On a . Ainsi, dans tous les cas, on a , ou encore , c'est-à-dire que divise .   Montrer que, si est tel que , alors est un nombre composé (c'est-à-dire, n'est pas un nombre premier). On travaille modulo . On a alors , et donc c'est-à-dire que . Puisque , on a que . Ainsi, n'est pas un nombre premier.   Déterminer quels sont les entiers qui respectent l'inégalité . Démontrer votre réponse à l'aide d'une preuve par récurrence.   On peut vérifier que pour . On veut montrer que pour .  Étape de base: En , on a . Ainsi, la proposition est vraie pour  Étape d'induction: On suppose que pour un certain entier (H.I.). On a alors . Ainsi, la proposition est vraie pour .  On a montré que la proposition est vraie pour , et que si elle est vraie pour , alors est est aussi vraie pour . Ainsi, par le principe de récurrence, la proposition est vraie pour tout entier .    Soit et tels que , alors le coefficient devant le terme de l'expression est donné par .   procède par récurrence sur .  Étape de base: On montre que la proposition est vrai pour . Dans ce cas, on a nécessairement , et , et on a bien que le coefficient devant est .  Étape d'induction: On suppose que la proposition est vrai pour , c'est-à-dire que  Ainsi, on a Ainsi, la proposition est vrai pour .  On a montré que la proposition est vraie pour , et que si elle est vraie pour , alors elle est vraie pour . Ainsi, la proposition est vraie pour tout .    Montrer qu'il existe une infinité de nombres premiers.   Faire une preuve par contradiction.    Montrer que, pour , la somme des premiers cubes est .  Ainsi, on veut montrer que   Étape de base: On vérifie que la proposition est vraie pour . En effet, on a .  Étape d'induction: On suppose que pour (H.I.).  Ici, il sera plus facile de travailler en posant , et donc . Avec ce changement de variables, on a . Ainsi, la proposition est vrai pour .  On a montré que la proposition est vraie pour , et que si elle est vraie pour , alors elle est vraie pour . Ainsi, la proposition est vraie pour tout .   Soit , montrer que si divise , alors divise .  On peut simplement remarquer que . Ainsi, on a que le seul moment où est lorsque . On peut conclure que si , alors .    Montrer que est un irrationnel.   On procède à l'aide d'une preuve par contradiction. On suppose que . On peut alors écrire , avec et . On peut également supposer que la fraction est réduite au maximum, c'est-à-dire que  On a alors . Ainsi, on a que divise . Par l'exercice , on a que divise . On peut alors écrire , pour . En remplaçant dans l'expression précédente, on obtient . Ainsi, on a que , et par le même argument, on a que . On a donc que , ce qui est un contradiction. On peut alors conclure que .    Soit un nombre premier. Montrer que si et seulement si ou .   Si , on a clairement que  De l'autre côté, si , on a .  Si , alors possède un inverse modulo . Notons cet inverse. On a alors .  Ainsi, soit , ou bien .    Montrer que ou encore (avec la sommation)    On peut utiliser plusieurs méthodes pour cette preuve. La première solution, qui ressemble plus aux méthodes utilisées dans ce chapitre, se fera à l'aide du binôme de Newton . La deuxième méthode utilise un argument combinatoire à l'aide du nombre de sous-ensembles .   On remarque que . En posant , la formule du binôme de Newton nous donne   Ici, il est possible d'utiliser la notation sigma. On obtient alors    On pose comme étant le nombre de sous-ensembles d'un ensemble de cardinalité . D'un côté, on a que , par . D'un autre côté, on peut utiliser le principe de la somme pour compter cette quatité. En effet, on rappel que le nombre de sous-ensembles de l'ensemble de taille est donné par . Lorsqu'on veut choisir un sous-ensemble quelconque de , celui-ci peut être de cardinalité , ou bien de cardinalité , ou bien de cardinalité , , ou bien de cardinalité ou bien de cardinalité . Ainsi, par le principe de la somme: Par ce qui précède, on a .    Soit tel que . En utilisant une preuve par récurrence, montrer que .  Étape de base: En , alors .  Étape d'induction: Supposons que . On a alors .    Soit , on note la propposition suivante,  Pour tout , si , alors ou .  On considère tel que . Montrer que si la proposition est vraie, alors est un nombre premier.   Par contradiction, supposons que n'est pas un nombre premier tel que est vrai. Puisque n'est pas premier, on peut écrire pour et . En particulier, , mais ne divise ni , ni . La proposition est donc fausse, ce qui est en contradiction avec notre hypothèse.    Soit , . Montrer par récurrence que si est un nombre premier et si , alors il existe un , tel que .   Étape de base: On veut montrer que la proposition est vraie pour . Or, pour , ceci est vraie par .  Étape d'induction: On suppose que la proposition est vraie pour . Supposons que . Par , on a que ou bien . Si , on a terminé. Si , par notre hypothèse d'induction, on a que pour . Ainsi, la proposition est vraie pour .  On a montré que la proposition est vraie pour , et que si elle est vraie pour , alors elle est vraie pour . Ainsi, la proposition est vraie pour tout les entiers .    Montrer que si est tel que la somme de ses diviseurs , alors est un nombre premier.   Par contradiction, supposons que la somme des diviseurs de est , mais que n'est pas un nombre premier. Si n'est pas un nombre premier, alors possède au moins trois facteurs différents, soit , et . La somme des facteurs est donc au moins de , ce qui est en contradiction avec notre hypothèse. Ainsi, on doit avoir que est un nombre premier.    On place les entiers à autour d'un cercle, dans n'importe quel ordre. Montrer qu'il existe trois entiers dans des emplacements consécutifs autour du cercle dont la somme est plus grande ou égale à .  Supposons que les entiers sont dans l'ordre . On veut regrouper toutes les sommes de trois voisins consécutifs. Notons donc , , et pour .  On a alors que la moyenne des est . Par l'exercice , on a qu'au moins un des . Puisque est un entier, on a bien que .    On considère la proposition Pour tout entier positif , si et sont des entiers positifs, et si , alors .  On rappelle aussiq que .  Clairement, la proposition est fausse. Trouver l'erreur dans la démarche ci-dessous.   Étape de base: Pour , si , alors , d'où . De même, , d'où   Étape d'induction: Soit un entier positif. On suppose que si et sont des entiers positifs, alors implique que .  On veut montrer que si et sont des entiers positifs tels que , alors .  Si , alors . Par hypothèse d'induction, on a que , donc .  Par le principe de récurrence, la proposition est vraie.  À l'étape d'induction, si avec , on peu avoir ou . On ne pourrait alors pas utiliser l'hypothèse d'induction.     "
},
{
  "id": "exo-preuvesSupp-2-3",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-3",
  "type": "Exercice",
  "number": "5.4.1",
  "title": "",
  "body": " Soit , montrer que disvie .   On travaille modulo . On a . Ainsi, dans tous les cas, on a , ou encore , c'est-à-dire que divise .  "
},
{
  "id": "exo-preuvesSupp-2-4",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-4",
  "type": "Exercice",
  "number": "5.4.2",
  "title": "",
  "body": "Montrer que, si est tel que , alors est un nombre composé (c'est-à-dire, n'est pas un nombre premier). On travaille modulo . On a alors , et donc c'est-à-dire que . Puisque , on a que . Ainsi, n'est pas un nombre premier. "
},
{
  "id": "exo-preuvesSupp-2-5",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-5",
  "type": "Exercice",
  "number": "5.4.3",
  "title": "",
  "body": " Déterminer quels sont les entiers qui respectent l'inégalité . Démontrer votre réponse à l'aide d'une preuve par récurrence.   On peut vérifier que pour . On veut montrer que pour .  Étape de base: En , on a . Ainsi, la proposition est vraie pour  Étape d'induction: On suppose que pour un certain entier (H.I.). On a alors . Ainsi, la proposition est vraie pour .  On a montré que la proposition est vraie pour , et que si elle est vraie pour , alors est est aussi vraie pour . Ainsi, par le principe de récurrence, la proposition est vraie pour tout entier .  "
},
{
  "id": "exo-preuvesSupp-2-6",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-6",
  "type": "Exercice",
  "number": "5.4.4",
  "title": "",
  "body": " Soit et tels que , alors le coefficient devant le terme de l'expression est donné par .   procède par récurrence sur .  Étape de base: On montre que la proposition est vrai pour . Dans ce cas, on a nécessairement , et , et on a bien que le coefficient devant est .  Étape d'induction: On suppose que la proposition est vrai pour , c'est-à-dire que  Ainsi, on a Ainsi, la proposition est vrai pour .  On a montré que la proposition est vraie pour , et que si elle est vraie pour , alors elle est vraie pour . Ainsi, la proposition est vraie pour tout .  "
},
{
  "id": "exo-preuvesSupp-2-7",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-7",
  "type": "Exercice",
  "number": "5.4.5",
  "title": "",
  "body": " Montrer qu'il existe une infinité de nombres premiers.   Faire une preuve par contradiction.  "
},
{
  "id": "exo-preuvesSupp-2-8",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-8",
  "type": "Exercice",
  "number": "5.4.6",
  "title": "",
  "body": " Montrer que, pour , la somme des premiers cubes est .  Ainsi, on veut montrer que   Étape de base: On vérifie que la proposition est vraie pour . En effet, on a .  Étape d'induction: On suppose que pour (H.I.).  Ici, il sera plus facile de travailler en posant , et donc . Avec ce changement de variables, on a . Ainsi, la proposition est vrai pour .  On a montré que la proposition est vraie pour , et que si elle est vraie pour , alors elle est vraie pour . Ainsi, la proposition est vraie pour tout .  "
},
{
  "id": "exo-petitThFermatTrois",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-petitThFermatTrois",
  "type": "Exercice",
  "number": "5.4.7",
  "title": "",
  "body": "Soit , montrer que si divise , alors divise .  On peut simplement remarquer que . Ainsi, on a que le seul moment où est lorsque . On peut conclure que si , alors .  "
},
{
  "id": "exo-preuvesSupp-2-10",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-10",
  "type": "Exercice",
  "number": "5.4.8",
  "title": "",
  "body": " Montrer que est un irrationnel.   On procède à l'aide d'une preuve par contradiction. On suppose que . On peut alors écrire , avec et . On peut également supposer que la fraction est réduite au maximum, c'est-à-dire que  On a alors . Ainsi, on a que divise . Par l'exercice , on a que divise . On peut alors écrire , pour . En remplaçant dans l'expression précédente, on obtient . Ainsi, on a que , et par le même argument, on a que . On a donc que , ce qui est un contradiction. On peut alors conclure que .  "
},
{
  "id": "exo-preuvesSupp-2-11",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-11",
  "type": "Exercice",
  "number": "5.4.9",
  "title": "",
  "body": " Soit un nombre premier. Montrer que si et seulement si ou .   Si , on a clairement que  De l'autre côté, si , on a .  Si , alors possède un inverse modulo . Notons cet inverse. On a alors .  Ainsi, soit , ou bien .  "
},
{
  "id": "exo-preuvesSupp-2-12",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-12",
  "type": "Exercice",
  "number": "5.4.10",
  "title": "",
  "body": " Montrer que ou encore (avec la sommation)    On peut utiliser plusieurs méthodes pour cette preuve. La première solution, qui ressemble plus aux méthodes utilisées dans ce chapitre, se fera à l'aide du binôme de Newton . La deuxième méthode utilise un argument combinatoire à l'aide du nombre de sous-ensembles .   On remarque que . En posant , la formule du binôme de Newton nous donne   Ici, il est possible d'utiliser la notation sigma. On obtient alors    On pose comme étant le nombre de sous-ensembles d'un ensemble de cardinalité . D'un côté, on a que , par . D'un autre côté, on peut utiliser le principe de la somme pour compter cette quatité. En effet, on rappel que le nombre de sous-ensembles de l'ensemble de taille est donné par . Lorsqu'on veut choisir un sous-ensemble quelconque de , celui-ci peut être de cardinalité , ou bien de cardinalité , ou bien de cardinalité , , ou bien de cardinalité ou bien de cardinalité . Ainsi, par le principe de la somme: Par ce qui précède, on a .  "
},
{
  "id": "exo-preuvesSupp-2-13",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-13",
  "type": "Exercice",
  "number": "5.4.11",
  "title": "",
  "body": "Soit tel que . En utilisant une preuve par récurrence, montrer que .  Étape de base: En , alors .  Étape d'induction: Supposons que . On a alors .  "
},
{
  "id": "exo-preuvesSupp-2-14",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-14",
  "type": "Exercice",
  "number": "5.4.12",
  "title": "",
  "body": " Soit , on note la propposition suivante,  Pour tout , si , alors ou .  On considère tel que . Montrer que si la proposition est vraie, alors est un nombre premier.   Par contradiction, supposons que n'est pas un nombre premier tel que est vrai. Puisque n'est pas premier, on peut écrire pour et . En particulier, , mais ne divise ni , ni . La proposition est donc fausse, ce qui est en contradiction avec notre hypothèse.  "
},
{
  "id": "exo-preuvesSupp-2-15",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-15",
  "type": "Exercice",
  "number": "5.4.13",
  "title": "",
  "body": " Soit , . Montrer par récurrence que si est un nombre premier et si , alors il existe un , tel que .   Étape de base: On veut montrer que la proposition est vraie pour . Or, pour , ceci est vraie par .  Étape d'induction: On suppose que la proposition est vraie pour . Supposons que . Par , on a que ou bien . Si , on a terminé. Si , par notre hypothèse d'induction, on a que pour . Ainsi, la proposition est vraie pour .  On a montré que la proposition est vraie pour , et que si elle est vraie pour , alors elle est vraie pour . Ainsi, la proposition est vraie pour tout les entiers .  "
},
{
  "id": "exo-preuvesSupp-2-16",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-16",
  "type": "Exercice",
  "number": "5.4.14",
  "title": "",
  "body": " Montrer que si est tel que la somme de ses diviseurs , alors est un nombre premier.   Par contradiction, supposons que la somme des diviseurs de est , mais que n'est pas un nombre premier. Si n'est pas un nombre premier, alors possède au moins trois facteurs différents, soit , et . La somme des facteurs est donc au moins de , ce qui est en contradiction avec notre hypothèse. Ainsi, on doit avoir que est un nombre premier.  "
},
{
  "id": "exo-preuvesSupp-2-17",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-17",
  "type": "Exercice",
  "number": "5.4.15",
  "title": "",
  "body": " On place les entiers à autour d'un cercle, dans n'importe quel ordre. Montrer qu'il existe trois entiers dans des emplacements consécutifs autour du cercle dont la somme est plus grande ou égale à .  Supposons que les entiers sont dans l'ordre . On veut regrouper toutes les sommes de trois voisins consécutifs. Notons donc , , et pour .  On a alors que la moyenne des est . Par l'exercice , on a qu'au moins un des . Puisque est un entier, on a bien que .  "
},
{
  "id": "exo-preuvesSupp-2-18",
  "level": "2",
  "url": "sec-preuvesSupp.html#exo-preuvesSupp-2-18",
  "type": "Exercice",
  "number": "5.4.16",
  "title": "",
  "body": " On considère la proposition Pour tout entier positif , si et sont des entiers positifs, et si , alors .  On rappelle aussiq que .  Clairement, la proposition est fausse. Trouver l'erreur dans la démarche ci-dessous.   Étape de base: Pour , si , alors , d'où . De même, , d'où   Étape d'induction: Soit un entier positif. On suppose que si et sont des entiers positifs, alors implique que .  On veut montrer que si et sont des entiers positifs tels que , alors .  Si , alors . Par hypothèse d'induction, on a que , donc .  Par le principe de récurrence, la proposition est vraie.  À l'étape d'induction, si avec , on peu avoir ou . On ne pourrait alors pas utiliser l'hypothèse d'induction. "
},
{
  "id": "sec-sommation",
  "level": "1",
  "url": "sec-sommation.html",
  "type": "Section",
  "number": "A.1",
  "title": "Symbole de sommation",
  "body": "  Symbole de sommation    À quelques occasions déjà, on a travaillé avec des sommes de beaucoups de termes, ou bien d'un nombre indéterminé de termes. Il est alors parfois lourd de travailler ces expressions du point de vue de la notaiton. On introduit donc ici un symbole permettant d'écrire une somme de termes, même lorsque est inconnu.  Dans cette section, on commence par donner la définition du symbole de sommation. Par la suite, on énonce quelques propriétés de la sommation, pour finalement revisiter quelques exemples vus précédemment à l'aide de notre nouvel outil.   La notation introduite dans cette section n'est pas obligatoire pour le cours. Toutes les sommes seront aussi écrites sans le symbole de sommation. Cependant, vous pourrez l'utiliser pour simplifier certaines expressions. Elle permet également de décrire certaines sommes de façon plus évidente, et de clarifier les démarches (en particulier pour les preuves par récurrences ).     Définition du symbole de sommation   On veut introduire une notation permettant d'écrire une somme de plusieurs termes. Par exemple, on veut écrire la somme suivante de façon condensée. L'idée est de trouver un symbole indiquant qu'on veut prendre une somme (on utilisera le sigma majuscule, c'est-à-dire le S grecque) de tous les termes pour allant de à .    L'expression est définie comme étant la somme de tous les termes , pour prennant toutes les valeurs entières entre et . Oralement, on lit cette expressions comme étant la sommation, pour allant de à , des .  Le est appelé l'indice de sommation, le est la borne inférieire de sommation et le est la borne supérieure de sommation.    On dit que l'indice de sommation est une variable muette, car on peut changer cette variable sans changer la valeur de l'expression. Voir la partie de la proposition .   On regarde maintenant quelques exemples de base pour se familiariser avec cette notation.                       Une des raisons pour laquelle on utilise la notation sigma est de simplifier nos démarches. Pour ce faire, on peut utiliser des propriétés de la sommation. En voici quelques-unes, sont données sans démonstrations.    Soit une suite de nombres et une constante, alors                                               "
},
{
  "id": "intro-sommation-3",
  "level": "2",
  "url": "sec-sommation.html#intro-sommation-3",
  "type": "Remarque",
  "number": "A.1.1",
  "title": "",
  "body": " La notation introduite dans cette section n'est pas obligatoire pour le cours. Toutes les sommes seront aussi écrites sans le symbole de sommation. Cependant, vous pourrez l'utiliser pour simplifier certaines expressions. Elle permet également de décrire certaines sommes de façon plus évidente, et de clarifier les démarches (en particulier pour les preuves par récurrences ).  "
},
{
  "id": "def-symboleSommation",
  "level": "2",
  "url": "sec-sommation.html#def-symboleSommation",
  "type": "Définition",
  "number": "A.1.2",
  "title": "",
  "body": " L'expression est définie comme étant la somme de tous les termes , pour prennant toutes les valeurs entières entre et . Oralement, on lit cette expressions comme étant la sommation, pour allant de à , des .  Le est appelé l'indice de sommation, le est la borne inférieire de sommation et le est la borne supérieure de sommation.  "
},
{
  "id": "rem-indiceMuet",
  "level": "2",
  "url": "sec-sommation.html#rem-indiceMuet",
  "type": "Remarque",
  "number": "A.1.3",
  "title": "",
  "body": " On dit que l'indice de sommation est une variable muette, car on peut changer cette variable sans changer la valeur de l'expression. Voir la partie de la proposition .  "
},
{
  "id": "exe-symboleSommation",
  "level": "2",
  "url": "sec-sommation.html#exe-symboleSommation",
  "type": "Exemple",
  "number": "A.1.4",
  "title": "",
  "body": "                    "
},
{
  "id": "prop-notationSigma",
  "level": "2",
  "url": "sec-sommation.html#prop-notationSigma",
  "type": "Proposition",
  "number": "A.1.5",
  "title": "",
  "body": "  Soit une suite de nombres et une constante, alors                                             "
},
{
  "id": "sec-utilisationSigma",
  "level": "1",
  "url": "sec-utilisationSigma.html",
  "type": "Section",
  "number": "A.2",
  "title": "Retour sur des exemples à l’aide de la notation Sigma",
  "body": " Retour sur des exemples à l'aide de la notation Sigma   Ici, on illustre comment la notation sigma peut être utilisée afin de rendre plus concis certaines de nos démarches. Il est important de se rappeller que cette notation est un outil suplémentaire, mais n'est pas sujet à évation dans le cours. Aussi, une mauvaise utilisation de la notation peut mener à plusieurs erreurs, il est donc déconseillé de l'utiliser lorsqu'on ne la maîtrise pas suffisemment.    Retour sur le binome de Newton   Soit tel que , alors     "
},
{
  "id": "prop-binomNewtonPrise2",
  "level": "2",
  "url": "sec-utilisationSigma.html#prop-binomNewtonPrise2",
  "type": "Proposition",
  "number": "A.2.1",
  "title": "Retour sur le binome de Newton.",
  "body": " Retour sur le binome de Newton   Soit tel que , alors    "
},
{
  "id": "ann-systemeNombre",
  "level": "1",
  "url": "ann-systemeNombre.html",
  "type": "Appendice",
  "number": "B",
  "title": "",
  "body": "  "
},
{
  "id": "ann-propositionClasse",
  "level": "1",
  "url": "ann-propositionClasse.html",
  "type": "Appendice",
  "number": "C",
  "title": "",
  "body": "  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
