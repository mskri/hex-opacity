# hex-opacity

Convert opacity percentage into a hex value, or opacity hex to percent value.

## Inspiration

After getting tired of always googling this gist https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4 to convert opacity into hex value decided to create this nifty npm package to quickly convert any opacity value into hex directly in my cli.

## Install

```bash
npm install -g @mskri/hex-opacity
```

## Usage

Convert percent to hex

```bash
hex-opacity <percent value>

// or
hex-opacity --percent <percent value>
```

Convert hex to percent

```bash
hex-opacity <hex value>

// or
hex-opacity --hex <hex value>
```

### Examples

#### Converting percent to hex

```bash
$ hex-opacity 100
FF

$ hex-opacity --percent 50
80
```

You can also include the percentage sign if you want

```bash
$ hex-opacity 50%
80
```

#### Converting hex to percent

```bash
$ hex-opacity 0xFF
100%

$ hex-opacity --hex 0x80
50%
```

## License

[MIT](https://github.com/mskri/hex-opacity/blob/master/LICENSE)

