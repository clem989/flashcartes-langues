# Flashcartes Langue

Application web installable (PWA) de flashcartes de français et d'anglais.

## Mise en ligne sur GitHub Pages

1. Créez un dépôt **public** sur GitHub, par exemple `flashcartes-langue`.
2. Déposez-y le contenu de ce dossier (`index.html`, `sw.js`, `manifest.webmanifest`, les icônes et ce fichier).
3. Dans le dépôt : **Settings → Pages**.
4. Sous *Build and deployment* → *Source*, choisissez **Deploy from a branch**.
5. Branche : `main`, dossier : `/ (root)`. Cliquez sur **Save**.
6. Patientez une minute : l'adresse s'affiche en haut de la page Pages, sous la forme
   `https://VOTRE-NOM.github.io/flashcartes-langue/`.

## Installer sur le téléphone

Ouvrez cette adresse dans **Chrome**, puis menu **⋮ → « Installer l'application »**.
Un bandeau en bas de l'écran le propose également.

## Mettre à jour l'application

Remplacez les fichiers dans le dépôt (glisser-déposer sur GitHub suffit), puis
rafraîchissez la page sur le téléphone. Le numéro de cache dans `sw.js`
(`const CACHE='fcl-vNN'`) est incrémenté à chaque nouvelle version pour forcer
la mise à jour.

## Vos données

Séries, gels, flashcartes ajoutées et réglages sont stockés sur l'appareil
(localStorage). Ils sont conservés lors d'une mise à jour, mais restent liés à
l'adresse du site : changer de domaine (Netlify → GitHub Pages) repart d'une
base vierge. Pensez à utiliser **Réglages → Sauvegarder mes données** avant de
migrer, puis à réimporter le fichier une fois sur la nouvelle adresse.
