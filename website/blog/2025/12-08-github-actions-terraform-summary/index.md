---
authors:
  - progala
comments: true
date: "2025-12-08"
description: "Dowiedz się, jak dodać czytelne podsumowanie planu Terraform do swoich workflow w GitHub Actions za pomocą wtyczki Terraform Summary Action."
keywords:
  - github actions
  - terraform
  - azure
  - devops
  - automation
  - ci/cd
  - terraform summary
tags:
  - github
  - actions
  - terraform
  - azure
  - devops
  - terraform summary
title: "Czytelne podsumowanie wdrożenia Terraform w GitHub Actions - Terraform Summary"
---

Jeśli korzystasz z **GitHub Actions** i **Terraform**, ta wtyczka z pewnością Ci się spodoba. W rozbudowanych środowiskach, gdzie zarządzamy wieloma repozytoriami i pipeline'ami, a wdrożenia Terraform są obszerne i często modyfikowane, kluczowa jest szybka identyfikacja zmian oraz potencjalnych błędów. Przeglądanie surowych logów z `terraform plan` bywa męczące.

Z pomocą przychodzi wtyczka: [Terraform summary action](https://github.com/marketplace/actions/terraform-summary-report).

Pozwala ona na przetworzenie wyniku polecenia `terraform plan` i wyświetlenie go w formie czytelnego podsumowania bezpośrednio w widoku "Summary" uruchomionego workflow.

Oto jak dodać ją do swojego pipeline'u:

```yaml
      - name: Terraform Plan
        working-directory: ${{ env.WORKING_DIR }}
        env:
          ARM_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}
          ARM_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
          ARM_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}
          ARM_USE_OIDC: true
        # Dla wywołania terraform plan należy dodać: "| tee terraform_plan_output.txt"
        run: terraform plan -var-file="production.tfvars" | tee terraform_plan_output.txt

      # Po terraform plan należy dodać uruchomienie terraform summary
      - name: Terraform Plan Summary
        uses: sgametrio/terraform-summary-action@main
        with:
          log-file: ${{ env.WORKING_DIR }}/terraform_plan_output.txt
          title: 'Terraform Plan Summary'
```

![Podsumowanie zmian Terraform w GitHub Actions](images/2025-12-08_20-28-11.png)

<!-- truncate -->

Poniżej znajdziesz kompletny przykład workflow wdrożeniowego:

```yaml
name: 'github-actions-terraform-summary'

on:
  push:
    branches:
      - main
    paths:
      - 'vm-test-02/**'
      - '.github/workflows/github-actions-terraform-summary.yml'
  workflow_dispatch:

permissions:
  id-token: write
  contents: read

env:
  WORKING_DIR: './vm-test-02'
  TF_VERSION: '1.6.0'

jobs:
  terraform-plan:
    name: 'Terraform Plan'
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v3
        with:
          terraform_version: ${{ env.TF_VERSION }}

      - name: Azure Login
        uses: azure/login@v2
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}

      - name: Terraform Init
        working-directory: ${{ env.WORKING_DIR }}
        env:
          ARM_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}
          ARM_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
          ARM_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}
          ARM_USE_OIDC: true
        run: terraform init

      - name: Terraform Validate
        working-directory: ${{ env.WORKING_DIR }}
        env:
          ARM_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}
          ARM_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
          ARM_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}
          ARM_USE_OIDC: true
        run: terraform validate

      - name: Terraform Plan
        working-directory: ${{ env.WORKING_DIR }}
        env:
          ARM_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}
          ARM_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
          ARM_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}
          ARM_USE_OIDC: true
        run: terraform plan -var-file="production.tfvars" | tee terraform_plan_output.txt

      - name: Terraform Plan Summary
        uses: sgametrio/terraform-summary-action@main
        with:
          log-file: ${{ env.WORKING_DIR }}/terraform_plan_output.txt
          title: 'Terraform Plan Summary'

  terraform-apply:
    name: 'Terraform Apply'
    runs-on: ubuntu-latest
    needs: terraform-plan
    if: github.event_name == 'workflow_dispatch'
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v3
        with:
          terraform_version: ${{ env.TF_VERSION }}

      - name: Azure Login
        uses: azure/login@v2
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}

      - name: Terraform Init
        working-directory: ${{ env.WORKING_DIR }}
        env:
          ARM_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}
          ARM_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
          ARM_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}
          ARM_USE_OIDC: true
        run: terraform init

      - name: Terraform Apply
        working-directory: ${{ env.WORKING_DIR }}
        env:
          ARM_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}
          ARM_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
          ARM_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}
          ARM_USE_OIDC: true
        run: terraform apply -var-file="production.tfvars" -auto-approve
```

Po rozwinięciu sekcji w podsumowaniu, możemy zobaczyć szczegóły zmian bez konieczności wchodzenia w logi konkretnego kroku. W powyższym przykładzie wykorzystałem logowanie do Azure za pomocą OIDC. Jeśli chcesz dowiedzieć się, jak to skonfigurować, zajrzyj do mojego artykułu: [Bezpieczne wdrażanie do Azure z GitHub Actions: Konfiguracja OIDC](https://blog.justcloud.pl/2025/11/20/github-actions-oidc-federation-azure)

![Szczegółowy widok zmian Terraform](images/2025-12-08_20-29-00.png)

Taki widok bezpośrednio w pipeline pozwala na szybką weryfikację planowanych zmian.

**Ważna uwaga:**
Wtyczka świetnie sprawdza się w większości przypadków, ale warto przetestować ją w swoim środowisku. Zauważyłem, że przy błędach krytycznych (np. `Error:` czy inne błędy providera), output może zostać źle sparsowany i pokazać 0 zmian, mimo błędu. Miej to na uwadze przy konfiguracji.

Jeśli interesuje Cię wdrożenie podobnych rozwiązań, daj znać w komentarzu!