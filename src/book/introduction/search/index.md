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
- nbMass, nbIR, nbTGA, nbDSC, nbRaman, nbMass, nbUV, nbXray
- mf, mw, em
- title
- meta

Some examples:

- `nb1d:>0` : all the samples that have at least one 1D NMR spectrum
- `mw:>100 mw:<150` : all samples with molecular weight between 100 and 150
- `jacs` : all the sample that contains `jacs` in any of the fields (reference, names, ...)
- `mf:C10` : all the sample that have a MF that contains `C10` (string search)

### Meta

A product is allowed to have an unlimited number of meta information. Meta information is characterized by a property followed by a value. The name of the property is searchable in the quick search.

For example if you add a meta information having as property 'country' you may search using 'country:colombia'.
