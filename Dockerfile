# Utilisez l'image officielle de NGINX
FROM nginx:alpine

# Copiez tous les fichiers dans le répertoire de travail du conteneur
COPY . /usr/share/nginx/html

# Copiez la configuration nginx (si vous avez une configuration personnalisée)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exposez le port 80
EXPOSE 80
