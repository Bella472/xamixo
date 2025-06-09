from PIL import Image
import os

# Pasta onde estão as imagens originais
pasta_origem = "fotos"
# Pasta onde as imagens redimensionadas serão salvas
pasta_destino = "fotos_otimizadas"

# Tamanho desejado
nova_largura = 600
nova_altura = 800

# Criar pasta de destino se não existir
os.makedirs(pasta_destino, exist_ok=True)

# Percorrer todas as imagens da pasta
for nome_arquivo in os.listdir(pasta_origem):
    if nome_arquivo.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        caminho_img = os.path.join(pasta_origem, nome_arquivo)
        imagem = Image.open(caminho_img)
        imagem = imagem.convert("RGB")  # Garante que salva em JPG
        imagem_redimensionada = imagem.resize(
            (nova_largura, nova_altura),
            Image.Resampling.LANCZOS
        )

        # Caminho de saída
        caminho_saida = os.path.join(pasta_destino, nome_arquivo.replace(".png", ".jpg"))
        imagem_redimensionada.save(caminho_saida, optimize=True, quality=85)

        print(f"Redimensionada: {nome_arquivo}")
