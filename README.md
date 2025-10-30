# 🧭 Projeto Atividade 4

Este projeto implementa um fluxo Git profissional com **GitFlow**, **commits semânticos** e **versionamento semântico (SemVer)**, garantindo um histórico de desenvolvimento limpo, rastreável e automatizável.

---

## 📂 Estrutura do Projeto

```
atividade4/
├── src/
│   ├── index.html
│   ├── cadastro.html
│   └── projetosocial.html
├── assets/
│   ├── css/
│   └── js/
├── README.md
├── .gitattributes
└── .gitignore
```

---

## 🚀 Estratégia de Branching — GitFlow

O fluxo de trabalho segue o modelo **GitFlow**, ideal para projetos com ciclos de versões claros.

### 🌳 Branches principais
- **`main`** → contém a versão estável em produção  
- **`develop`** → código em desenvolvimento ativo  

### 🌿 Branches auxiliares
- **`feature/*`** → novas funcionalidades  
- **`release/*`** → preparação para novas versões  
- **`hotfix/*`** → correções emergenciais em produção  

### ⚙️ Configuração
```bash
# inicializar o GitFlow
git flow init

# usar nomes padrão
# Branch principal: main
# Branch de desenvolvimento: develop
```

---

## 🧩 Commits Semânticos (Conventional Commits)

Os commits seguem o padrão **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** para manter a clareza e automatizar versões.

| Tipo | Descrição |
|------|------------|
| `feat:` | nova funcionalidade |
| `fix:` | correção de bug |
| `docs:` | alteração na documentação |
| `style:` | mudanças visuais ou de formatação |
| `refactor:` | refatoração sem alterar comportamento |
| `test:` | inclusão/ajuste de testes |
| `chore:` | manutenção e tarefas auxiliares |

### 💡 Exemplos:
```bash
feat(index): adicionar seção de apresentação
feat(cadastro): implementar validação de formulário
fix(cadastro): corrigir bug no envio sem e-mail
docs(readme): adicionar instruções de uso
style(css): padronizar cores e espaçamentos
```

---

## 🏷️ Versionamento Semântico (SemVer)

O projeto segue o padrão **SemVer**:  
`MAJOR.MINOR.PATCH`

| Tipo de alteração | Exemplo | Descrição |
|-------------------|----------|------------|
| **MAJOR** | 2.0.0 | Mudanças incompatíveis |
| **MINOR** | 1.1.0 | Novas funcionalidades compatíveis |
| **PATCH** | 1.0.1 | Correções de bugs |

### 💻 Exemplo de fluxo de release
```bash
# iniciar release
git flow release start v1.0.0

# revisar, testar e atualizar changelog
git flow release finish v1.0.0

# enviar para repositório remoto
git push origin main --tags
```

---

## 🧾 Changelog

Crie o arquivo `CHANGELOG.md` com o histórico de versões:

```markdown
# Changelog

## [1.0.0] - 2025-10-30
### Added
- Página inicial (`index.html`)
- Formulário de cadastro
- Página de projeto social

### Fixed
- Corrigido layout do formulário em telas pequenas
```

---

## ⚙️ Automação de Commits e Releases

Instale ferramentas para automatizar commits e geração de versões:

```bash
npm install -g commitizen cz-conventional-changelog standard-version
```

### 🔧 Uso
```bash
cz                     # cria commit semântico interativo
npx standard-version   # gera nova versão + changelog automaticamente
```

---

## 🧠 Roteiro GitFlow Completo

```bash
# inicializar repositório
git init
git add .
git commit -m "chore: inicializar projeto"

# configurar GitFlow
git flow init

# criar branch de desenvolvimento
git checkout -b develop

# criar feature
git flow feature start validacao-formulario
# (editar código)
git add .
git commit -m "feat(cadastro): implementar validação de formulário"
git flow feature finish validacao-formulario

# criar release
git flow release start v1.0.0
git add CHANGELOG.md
git commit -m "docs(changelog): adicionar notas da versão 1.0.0"
git flow release finish v1.0.0
git push origin main --tags
```

---

## 🧰 Requisitos Recomendados
- **Git >= 2.30**
- **Node.js >= 18**
- **commitizen** e **standard-version** instalados globalmente

---

## 👨‍💻 Autor
**Marcelo Honda**  
Implementação e estruturação GitFlow + Versionamento Semântico  
📅 *2025-10-30*

---

## 📄 Licença
Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` (se aplicável) para mais detalhes.
