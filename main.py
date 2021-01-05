while True:
    print("Light Level: " + input.light_level())
    if input.light_level() <= 200: 
        light.clear
    elif 105 >= input.light_level() < 200:
        light.set_all(light.rgb(250, 250, 250))
        light.set_brightness(5)
    elif input.light_level() >= 150:
        light.clear
    else:
        light.set_all(light.rgb(0, 0, 100))