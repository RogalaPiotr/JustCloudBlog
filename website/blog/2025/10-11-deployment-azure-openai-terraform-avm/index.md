---
authors:
  - progala
comments: true
date: "2025-10-11"
description: "Dowiedz się, jak szybko wdrożyć usługę Azure OpenAI Service przy użyciu Terraform i modułów Azure Verified Modules (AVM). Gotowy kod i instrukcja."
keywords:
  - Azure OpenAI
  - Terraform
  - AVM
  - Azure Verified Modules
  - IaC
  - Azure AI Foundry
slug: deployment-azure-openai-terraform-avm
tags:
  - Azure
  - Terraform
  - OpenAI
  - AVM
title: Szybkie wdrożenie Azure OpenAI z Terraform i AVM
---

Moduły AVM (Azure Verified Modules) oferują gotowe i sprawdzone rozwiązania do tworzenia zasobów w Azure. Poniżej pokażę, jak błyskawicznie wdrożyć usługę Azure OpenAI Service przy użyciu Terraform. Prezentowana konfiguracja korzysta z publicznego dostępu sieciowego, co jest odpowiednie do testów i nauki (w środowiskach produkcyjnych zaleca się wdrożenie przy użyciu Private Endpoints).

* **Link do modułu:** [avm-res-cognitiveservices-account](https://registry.terraform.io/modules/Azure/avm-res-cognitiveservices-account/azurerm/latest)
* **Więcej modeli AVM:** [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/indexes/terraform/tf-resource-modules/)

## Jak tego użyć?

W pliku `main.tf` definiujemy grupę zasobów oraz wywołujemy moduł AVM:

```hcl
resource "azurerm_resource_group" "this" {
  name     = var.resource_group_name
  location = var.location

  tags = var.tags
}

module "openai" {
  source  = "Azure/avm-res-cognitiveservices-account/azurerm"
  version = "~> 0.7"

  name                = var.openai_service_name
  resource_group_name = azurerm_resource_group.this.name
  location            = azurerm_resource_group.this.location
  kind                = "OpenAI"
  sku_name            = "S0"

  cognitive_deployments = { for d in var.openai_models : d.deployment_name => {
    name = d.deployment_name
    model = {
      format  = "OpenAI"
      name    = d.model_name
      version = d.model_version
    }
    scale = {
      type     = d.sku_name
      capacity = d.sku_capacity
    }
  } }

  public_network_access_enabled      = var.public_network_access == "Enabled"
  outbound_network_access_restricted = !var.outbound_network_access_enabled

  tags = var.tags

  depends_on = [azurerm_resource_group.this]
}
```

<!-- truncate -->

Pełny kod źródłowy znajdziesz w moim repozytorium GitHub: [simple-openai-terraform](https://github.com/RogalaPiotr/JustCloudPublic/tree/master/simple-openai-terraform). Udostępniłem tam kompletną konfigurację gotową do przetestowania w Twoim środowisku. Wykorzystanie modułu AVM znacząco upraszcza proces wdrażania i ułatwia późniejszą rozbudowę o dodatkowe funkcje bezpieczeństwa czy nowe modele.

Poniżej widok Azure AI Foundry po wdrożeniu wraz z dwoma modelami:

![Azure AI Foundry](images/2025-11-20_22-15-22.png)

## Weryfikacja dostępnych modeli

Dostępność modeli w danym regionie warto zweryfikować przy użyciu Azure CLI. Poniższa komenda wyświetli listę modeli dla wdrożonego zasobu:

```bash
az cognitiveservices account list-models \
  --resource-group rg-openai-simple-dev \
  --name oai-simple-dev \
  --output table
```

Komenda zwraca czytelną tabelę z informacjami. Jest to bardzo przydatne, ponieważ dostępność wersji modeli różni się w zależności od regionu Azure. Możesz to również sprawdzić w [oficjalnej dokumentacji](https://learn.microsoft.com/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure?view=foundry-classic&WT.mc_id=AZ-MVP-5002690).

![Lista modeli w CLI](images/2025-11-20_22-13-27.png)


Jeśli interesuje Cię wdrożenie prywatnej i bezpiecznej instancji OpenAI, daj znać w komentarzu!
