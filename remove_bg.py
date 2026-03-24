from PIL import Image

def process():
    img = Image.open('assets/images/Author Photo.jpeg').convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        # Replace strict white or near-white with transparency
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save('assets/images/Author Photo.png', "PNG")

process()
