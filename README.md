# Portfolio Montassar TOUATI

Portfolio personnel moderne, responsive et multilingue (FR/EN/AR) pour Montassar TOUATI, CTO & Ingénieur Logiciel.

## 🚀 Caractéristiques

- **100% Vanilla** : HTML, CSS, JavaScript pur - zéro dépendance externe
- **Multilingue** : Support complet FR/EN/AR avec RTL pour l'arabe
- **Dark/Light Mode** : Thème auto-détecté + toggle manuel
- **Responsive** : Optimisé mobile, tablette et desktop
- **Accessible** : WCAG AA compliant
- **SEO-Friendly** : Meta tags, Open Graph, JSON-LD, sitemap
- **Performance** : Lazy loading images, animations CSS pures
- **PWA-Ready** : Peut être étendu en Progressive Web App

## 📁 Structure du projet

```
portfolio/
├── index.html              # Page principale
├── styles.css              # Styles globaux avec CSS variables
├── main.js                 # JavaScript principal (i18n, thème, filtres)
├── data.js                 # Données multilingues et projets
├── assets/                 # Images et médias
│   ├── mecacentre.jpg
│   ├── mecamarket.jpg
│   └── ...
├── projects/               # Pages détail projets
│   ├── mecacentre-mecacomm.html
│   └── ...
└── static/                 # Fichiers statiques
    ├── robots.txt
    ├── sitemap.xml
    └── favicon.svg
```

## 🎯 Démarrage rapide

### Option 1 : Ouvrir directement

1. Ouvrez `index.html` dans votre navigateur
2. C'est tout ! Le site fonctionne immédiatement

### Option 2 : Serveur local (recommandé)

#### Avec Python 3
```bash
python3 -m http.server 8000
```

#### Avec Node.js (npx)
```bash
npx serve
```

#### Avec PHP
```bash
php -S localhost:8000
```

Puis ouvrez http://localhost:8000 dans votre navigateur.

## ✏️ Personnalisation

### Modifier les contenus

Tous les contenus (textes, projets, compétences, expériences) sont centralisés dans `data.js`.

**Exemple : Ajouter un projet**

```javascript
// Dans data.js, section projects
{
  slug: 'mon-nouveau-projet',
  title: {
    fr: 'Mon Nouveau Projet',
    en: 'My New Project',
    ar: 'مشروعي الجديد'
  },
  role: {
    fr: 'Lead Developer',
    en: 'Lead Developer',
    ar: 'المطور الرئيسي'
  },
  period: '2025',
  stack: ['React', 'Node.js', 'PostgreSQL'],
  summary: {
    fr: 'Description du projet en français',
    en: 'Project description in English',
    ar: 'وصف المشروع بالعربية'
  },
  keyFacts: {
    fr: ['Fait clé 1', 'Fait clé 2'],
    en: ['Key fact 1', 'Key fact 2'],
    ar: ['حقيقة رئيسية 1', 'حقيقة رئيسية 2']
  },
  status: 'production', // ou 'development', 'completed', 'archived'
  image: '/assets/mon-projet.jpg',
  links: []
}
```

### Modifier les couleurs

Les couleurs sont définies via CSS variables dans `styles.css` :

```css
:root {
  --color-primary: #dc2626;      /* Rouge principal */
  --color-primary-dark: #b91c1c;
  --color-accent: #f43f5e;
  /* ... */
}
```

### Ajouter des images

1. Placez vos images dans le dossier `assets/`
2. Référencez-les dans `data.js` : `image: '/assets/nom-image.jpg'`
3. Utilisez `loading="lazy"` pour le lazy loading automatique

### Formulaire de contact

Le formulaire est actuellement en mode "mock" (simulation). Pour l'intégrer avec un vrai backend :

**Option A : Formspree** (le plus simple)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B : Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
```

**Option C : Backend personnalisé**
Modifier la fonction `handleFormSubmit()` dans `main.js` :
```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## 🌐 Déploiement

### Netlify (recommandé)

1. Connectez votre repo GitHub
2. Build command : (vide)
3. Publish directory : `/`
4. Deploy !

### Vercel

1. Import votre repo
2. Framework Preset : Other
3. Build command : (vide)
4. Output directory : `.`
5. Deploy !

### GitHub Pages

1. Settings → Pages
2. Source : Deploy from branch
3. Branch : `main` ou `master`, folder : `/ (root)`
4. Save

### OVH / VPS traditionnel

1. Upload les fichiers via FTP/SFTP
2. Pointez votre domaine vers le dossier
3. Configurez HTTPS (Let's Encrypt recommandé)

## 🎨 Thèmes

Le site détecte automatiquement la préférence système (dark/light). L'utilisateur peut override via le bouton toggle.

**Forcer un thème par défaut :**
```javascript
// Dans main.js, ligne ~6
const state = {
  currentTheme: 'dark', // 'light' ou 'dark'
  // ...
}
```

## 🌍 Langues

**Langue par défaut :** Français (configurable dans `data.js`)

```javascript
config: {
  defaultLang: 'fr', // 'fr', 'en' ou 'ar'
  // ...
}
```

**Ajouter une langue :**
1. Ajouter les traductions dans `data.js` section `translations`
2. Ajouter la langue dans `supportedLangs`
3. Ajouter l'option dans le menu langue de `index.html`

## 📊 Analytics

Pour ajouter Google Analytics, Plausible ou autre :

```html
<!-- Dans index.html, avant </body> -->
<script>
  // Votre code analytics ici
  // Exemple Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🔍 SEO

### Checklist déploiement

- [ ] Remplacer `https://montassar-touati.com` par votre domaine réel
- [ ] Mettre à jour `robots.txt` avec votre domaine
- [ ] Mettre à jour `sitemap.xml` avec votre domaine et dates
- [ ] Ajouter vraies images Open Graph dans `/assets/`
- [ ] Tester avec [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Soumettre sitemap à Google Search Console

## 🛠️ Développement

### Organisation du code

- **data.js** : Source unique de vérité pour tous les contenus
- **main.js** : Logique applicative (i18n, thème, filtres, formulaire)
- **styles.css** : Styles organisés par sections avec BEM-like naming
- **index.html** : Structure sémantique HTML5

### Conventions

- CSS : Variables + utility classes
- JS : Vanilla ES6+, pas de transpilation nécessaire
- HTML : Sémantique, attributs `data-i18n` pour traductions

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari iOS 14+
- Chrome Android 90+

## 📝 Licence

© 2025 Montassar TOUATI. Tous droits réservés.

## 📧 Contact

- **Email** : montassar.touati@gmail.com
- **WhatsApp** : +216 57 03 93 34
- **LinkedIn** : [montassar-touati](https://linkedin.com/in/montassar-touati)
- **GitHub** : [montassar-touati](https://github.com/montassar-touati)

---

Développé avec ❤️ à Tunis, Tunisie
