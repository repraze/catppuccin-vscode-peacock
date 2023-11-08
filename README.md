<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/repraze/catppuccin-vscode-peacock">VSCode Peacock</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/repraze/catppuccin-vscode-peacock/stargazers"><img src="https://img.shields.io/github/stars/repraze/catppuccin-vscode-peacock?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/repraze/catppuccin-vscode-peacock/issues"><img src="https://img.shields.io/github/issues/catppuccin/template?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/repraze/catppuccin-vscode-peacock/contributors"><img src="https://img.shields.io/github/contributors/repraze/catppuccin-vscode-peacock?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
	<img src="assets/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="assets/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="assets/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="assets/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="assets/mocha.webp"/>
</details>

Previews with [Catppuccin for VSCode](https://github.com/catppuccin/vscode).

## Usage

1. Launch VSCode
2. [Install Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
3. Within the command pallette, <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, search for `Preferences: Open User Settings (JSON)`
4. Choose your _flavour_ (frappe, latte, macchiato, mocha)
5. Copy the peacock property of _flavour.json_ into your `settings.json`:

```json
{
  // other vscode settings
  "peacock.favoriteColors": [
    // catppuccin flavour colors
    // other favorite colors
  ]
}
```

6. Save and exit
7. Within the command pallette, <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, search for `Peacock: Change to a Favorite Color`
8. Select your favorite one 🌈

As a bonus, you can set Peacock to `Surprise Me From Favorites Only` and `Surprise Me On Startup`.

<!-- this section is optional -->

## 💻 Development

The `.json` files can be regenerated when the palette is updated.

1. Clone the repo.
2. Run `npm install`
3. Run `npm run generate`
4. All `.json` files should be regenerated

## 💝 Thanks to

- [Thomas Dubosc](https://github.com/repraze)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
