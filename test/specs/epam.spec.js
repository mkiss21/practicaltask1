describe('EPAM website', () => {
  it('should open the EPAM homepage', async () => {
    await browser.url('https://www.epam.com');

    await expect(browser).toHaveTitle(
      expect.stringContaining('EPAM'),
    );
  });

it('should navigate to the Careers page', async () => {
  await browser.url('https://www.epam.com');

  const careersLinks = await $$('=Careers');

  for (const link of careersLinks) {
    if (await link.isDisplayed()) {
      await link.click();
      break;
    }
  }

  await expect(browser).toHaveUrl(
    expect.stringContaining('/careers'),
  );
});

it('should display the About page heading', async () => {
  await browser.url('https://www.epam.com/about');

  const heading = await $('//h1');

  await expect(heading).toBeDisplayed();
});

it('should display the main navigation on the homepage', async () => {
  await browser.url('https://www.epam.com');

  const navigation = await $('header');

  await expect(navigation).toBeDisplayed();
});

it('should navigate to the Services page', async () => {
  await browser.url('https://www.epam.com');

  const servicesLinks = await $$('*=Services');

  for (const link of servicesLinks) {
    if (await link.isDisplayed()) {
      await link.click();
      break;
    }
  }

  await expect(browser).toHaveUrl(
    expect.stringContaining('/services'),
  );
});

});