## Configuration du Projet

Assurez-vous d'avoir Node.js installé. Si ce n'est pas le cas, téléchargez-le depuis [le site officiel](https://nodejs.org/).

### Installation des Dépendances

Exécutez la commande suivante pour installer les dépendances du projet :

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn run lint
```
## Bibliothèques Utilisées

Ce projet utilise les bibliothèques suivantes :

- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire.

# Déploiement sur Vercel

Ce guide explique comment déployer un fichier ou un projet sur la plateforme de déploiement Vercel.

## Étapes de déploiement

1. **Créez un compte Vercel** : Si vous n'avez pas encore de compte Vercel, rendez-vous
   sur [Vercel](https://vercel.com/) et inscrivez-vous.

2. **Installation de Vercel CLI (facultatif)** : Vous pouvez installer l'interface en ligne de commande Vercel (Vercel
   CLI) en utilisant la commande suivante :

- `npm i -g vercel`

3. **Configuration du projet** : Assurez-vous que votre projet est prêt à être déployé. Vérifiez que tous les fichiers
   nécessaires sont inclus et que le fichier de configuration (par exemple, vercel.json) est correctement configuré.

4. **Connectez votre compte Vercel** : Si vous utilisez la CLI, exécutez la commande suivante pour vous connecter à
   votre compte Vercel :

- `vercel login`

5. **Déploiement** :

- **Déploiement via l'interface Vercel** :
    - Accédez à la page d'accueil de Vercel.
    - Cliquez sur le bouton "Nouvelle Importation" ou "Nouveau Projet".
    - Suivez les instructions pour importer votre projet depuis GitHub, GitLab, Bitbucket ou en utilisant un fichier
      ZIP.

- **Déploiement via la CLI (facultatif)** :
    - Naviguez dans le répertoire de votre projet à l'aide de la ligne de commande.
    - Exécutez la commande suivante pour déployer votre projet :
  ```
  vercel
  ```

6. **Configuration des paramètres de déploiement** : Vous pouvez personnaliser les paramètres de déploiement via
   l'interface Vercel ou en modifiant le fichier de configuration (vercel.json).

7. **Accès à votre déploiement** : Une fois le déploiement terminé, Vercel vous fournira une URL (par
   exemple, https://skipper-test.vercel.app/) où votre projet est accessible.
