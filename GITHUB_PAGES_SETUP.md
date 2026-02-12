# 🚀 Deploy no GitHub Pages - Guia Completo

## 📋 Pré-requisitos
- Ter uma conta no GitHub (grátis)
- Git instalado no seu computador

---

## 🎯 Passo a Passo (5 minutos)

### **1. Criar um repositório no GitHub**

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name**: `skills-allocation-presentation` (ou o nome que preferir)
   - **Description**: "Skills-Based Talent Allocation Presentation"
   - Deixe como **Public** (necessário para GitHub Pages grátis)
   - **NÃO** marque "Add a README file"
3. Clique em **"Create repository"**

---

### **2. Fazer upload do código**

Você tem 2 opções:

#### **Opção A: Usando Git (Linha de comando)**

```bash
# Navegue até a pasta do projeto no terminal
cd /caminho/para/o/projeto

# Inicialize o Git (se ainda não estiver inicializado)
git init

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Initial commit - Skills Allocation Presentation"

# Conecte ao repositório do GitHub (substitua SEU-USUARIO e NOME-DO-REPO)
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git

# Faça o push
git branch -M main
git push -u origin main
```

#### **Opção B: Usando GitHub Desktop (Interface visual)**

1. Baixe e instale: https://desktop.github.com/
2. Abra o GitHub Desktop
3. File → Add Local Repository
4. Selecione a pasta do projeto
5. Clique em "Publish repository"
6. Escolha o nome e clique em "Publish"

---

### **3. Habilitar GitHub Pages**

1. Vá para o seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral esquerdo, clique em **Pages**
4. Em **"Source"** (Origem), selecione:
   - **Source**: GitHub Actions
   
   ![Screenshot mostrando onde configurar](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

5. Clique em **Save**

---

### **4. Aguardar o Deploy**

1. Vá para a aba **Actions** no seu repositório
2. Você verá o workflow "Deploy to GitHub Pages" rodando
3. Aguarde ~2 minutos (vai mostrar um checkmark verde ✓ quando terminar)

---

### **5. Acessar sua apresentação! 🎉**

Sua apresentação estará disponível em:

```
https://SEU-USUARIO.github.io/NOME-DO-REPO/
```

Por exemplo:
- Se seu usuário é `joaosilva`
- E o repositório é `skills-allocation-presentation`
- O link será: `https://joaosilva.github.io/skills-allocation-presentation/`

---

## 🔄 Como atualizar a apresentação depois

Sempre que você fizer mudanças:

```bash
git add .
git commit -m "Atualização da apresentação"
git push
```

O GitHub Actions vai fazer o deploy automaticamente! ✨

---

## 🆘 Problemas Comuns

### **Erro: "npm ci" failed**
- Certifique-se que o arquivo `package.json` está no repositório

### **Página mostra 404**
1. Verifique se GitHub Pages está habilitado em Settings → Pages
2. Aguarde alguns minutos (pode levar até 5 minutos na primeira vez)
3. Certifique-se que o workflow em Actions terminou com sucesso

### **Página carrega mas está quebrada**
- Verifique se o `base: './',` está correto no `vite.config.ts`

---

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código enviado para o repositório
- [ ] GitHub Pages habilitado (Settings → Pages → Source: GitHub Actions)
- [ ] Workflow executado com sucesso (Actions tab mostra ✓ verde)
- [ ] Site acessível em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`

---

## 📤 Compartilhar com outras pessoas

Basta enviar o link:
```
https://SEU-USUARIO.github.io/NOME-DO-REPO/
```

✅ Funciona em qualquer dispositivo  
✅ Sem instalação necessária  
✅ Todas as interações funcionam  
✅ 100% gratuito  
✅ Sempre disponível online

---

## 🎨 Personalização (Opcional)

Se quiser um domínio personalizado tipo `presentation.seusite.com`:

1. Vá em Settings → Pages
2. Em "Custom domain", adicione seu domínio
3. Siga as instruções para configurar o DNS

---

**Precisa de ajuda?** Abra uma issue no repositório ou me avise! 🚀
