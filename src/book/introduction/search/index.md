## Search

From the homepage it is possible to quickly find samples using the `Search for sample` query box.

<img src='search.png'>

In this box you may simply enter a text and the system will look in the following fields:

- reference
- names and description
- molecular formula
- keywords

It is also possible to target a specific field by using as syntax: `<fieldName>:<operator><value>`

The following fields are allowed:

- nbNmr, nb1d, nb2d, nb13c, nb1h
- nbMass, nbIR, nbTGA, nbDSC
- mf, mw

Some examples:

- `nb1d:>0` : all the samples that have at least one 1D NMR spectrum
- `mw:>100 mw:<150` : all samples with molecular weight between 100 and 150
- `jacs` : all the sample that contains `jacs` in any of the fields (reference, names, ...)
- `mf:C10` : all the sample that have a MF that contains `C10` (string search)
