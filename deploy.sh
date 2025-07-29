#!/bin/bash

# Script de deploy para MC Prime Outdoor Solutions
echo "🚀 Iniciando deploy do MC Prime..."

# Navegar para o diretório do projeto
cd /var/www/mcprime/mcprime-elevate

# Fazer backup do build atual
echo "📦 Fazendo backup do build atual..."
if [ -d "dist" ]; then
    cp -r dist dist_backup_$(date +%Y%m%d_%H%M%S)
fi

# Pull das alterações mais recentes
echo "⬇️ Baixando alterações do GitHub..."
git pull origin main

# Instalar dependências
echo "📦 Instalando dependências..."
npm ci --production=false

# Build do projeto
echo "🔨 Fazendo build do projeto..."
npm run build

# Verificar se o build foi bem-sucedido
if [ ! -d "dist" ]; then
    echo "❌ Erro: Build falhou!"
    exit 1
fi

# Recarregar nginx
echo "🔄 Recarregando nginx..."
sudo systemctl reload nginx

# Limpar backups antigos (manter apenas os últimos 3)
echo "🧹 Limpando backups antigos..."
ls -t dist_backup_* | tail -n +4 | xargs -r rm -rf

echo "✅ Deploy concluído com sucesso!"
echo "🌐 Site disponível em: https://mcprimeoutdoor.com" 