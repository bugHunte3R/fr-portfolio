# Utiliser l'image officielle de Nginx
FROM nginx:alpine

# Supprime la configuration par défaut de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copie le fichier de configuration personnalisé
COPY nginx.conf /etc/nginx/conf.d/

# Copie tout le projet (HTML, CSS, JS, images)
COPY . /usr/share/nginx/html

# Expose le port 80
EXPOSE 80

# Lance Nginx
CMD ["nginx", "-g", "daemon off;"]
