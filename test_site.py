from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service


def create_driver():
    options = Options()

    options.binary_location = "/usr/bin/chromium-browser"

    options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1920,1080")

    service = Service("/usr/bin/chromedriver")

    return webdriver.Chrome(
        service=service,
        options=options
    )


driver = create_driver()

try:
    driver.get("http://127.0.0.1:8000")

    assert "Astrophysics" in driver.title
    print("PASS: Homepage loaded.")

    driver.find_element(By.LINK_TEXT, "Stars").click()

    assert "Module 1" in driver.page_source
    print("PASS: Stars module loaded.")

    driver.find_element(
        By.LINK_TEXT,
        "Take Module Quiz"
    ).click()

    assert "Stars Module Quiz" in driver.page_source
    print("PASS: Stars quiz loaded.")

    driver.get(
        "http://127.0.0.1:8000/blackholes.html"
    )

    assert "Black Holes" in driver.page_source
    print("PASS: Black Holes module loaded.")

    driver.find_element(
        By.LINK_TEXT,
        "Take Module Quiz"
    ).click()

    assert "Black Holes Module Quiz" in driver.page_source
    print("PASS: Black Holes quiz loaded.")

finally:
    driver.quit()