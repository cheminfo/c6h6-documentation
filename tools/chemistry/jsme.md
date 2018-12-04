# JSME

### [JSME](http://peter-ertl.com/jsme/) Help and Basic Instructions

#### JSME Menu

![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/smiles.png) shows molecule [SMILES](http://en.wikipedia.org/wiki/Simplified_molecular-input_line-entry_system)  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/clean.png) clears the editing area \(or the current molecule, if structure contains several parts\)  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/new.png) starts new molecule component \(when multipart option or reaction input are enabled\)  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/del.png) delete mode \(click on atom or bond to delete it\)  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/delr.png) deletes functional group - choose this option and then click bond connecting the group with the main skeleton  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/123.png) starts atom numbering or reaction mapping \(when this option is enabled\)  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/smarts.png) query atom / [SMARTS](http://en.wikipedia.org/wiki/Smiles_arbitrary_target_specification) \(when this option is enabled\)  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/charge.png) switches between allowed charged states on clicked atom  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/react.png) reaction input \(when reactions are enabled\)  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/undo.png) undo  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/redo.png) redo  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/spiro.png) next ring will be added as a spiro ring  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/info.png) version information and link to the help page  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/stereo.png) input stereo bond, click existing stereo bond to cycle through possible types \(up, dowm, orientation\)  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/chain.png) powerful chain tool, allows creation of various chains and rings; click single bond to change it to double  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/xatom.png) allows input of inorganic atoms or atoms in nonstandard valence state \(in this case enter the atom symbol enclosed in \[\], for example the carbene carbon will be \[C\]\)  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/fg.png) opens functional group popup menu  
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/movea.png) move selected atom useful when drawing crowded structures \(visible when enabled in options\)

#### Basic Editing

**Rings** are added connected by a single bond \(when not added to a terminal atom\); if you want to add a **spiro ring** press Shift when adding it. An alternative way to add a spiro ring \(that may be used also on touch devices\) is to press the ![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/spiro.png)icon; the next ring will be then added as spiro.  
With single bond selected, a click on existing single bond changes it to double.  
With the powerful chain tool ![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/chain.png) you can draw chains, saturated rings and by clicking on single bond change it to a double bond.  
Molecule may be **moved** by "dragging" free space and **rotated** by pressing also the Shift key.  


#### JSME Keyboard Shortcuts

If you are using JSME often, learn the following shortcuts. They will speed-up your editing considerably.

**ESC** returns to the standard editing state \(carbon, single bond\)  
**d** or **Del** starts delete mode  
**atoms** C, N, O, P, S, F, L \(for Cl\), B \(for Br\), I, H, R  
**bonds** - for single bond, = for double bond  
**rings** 3..8 for 3 to 8 membered rings, 1 for phenyl and 0 for furyl  
**groups** a - COOH, y - NO2, z - SO3H, t - tert. butyl, ft - CF3

#### Stereochemistry

Stereochemistry at C4 centers, double bonds and allenes is supported. Use the up / down wedge bonds to indicate stereochemistry at the C4 centers. Remember, that only bonds with a "sharp point" towards the atom are considered. When creating SMILES the editor tries to guess missing stereo features, in unresolvable cases an error message is issued and the SMILES without stereo information is created.  
When the "autoez" option is set, SMILES with E,Z stereochemistry on all non-ring double bonds will be generated automatically. Without this keyword \(or for ring double bonds\) you have to mark a double bond as stereo by clicking on it with the stereo bond button selected. The bond color will change to magenta.  
Stereochemistry may be completely disabled by the "nostereo" option.

#### Atom Numbering

Atom numbering \(marking\) is enabled by the option "number" \(for reaction input this is default\). Button ![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/123.png) appears in the menu. To mark an atom the "numbering mode" must be on, selected by clicking the 123 button. The atom number is chosen by pressing respective keys on your keyboard \(i.e. 2 or 12\); then atom\(s\) must be clicked. To delete the number pres 0 at your keyboard and then click the atom.

#### Input of Multipart Structures

By default only non-disconnected structures may be entered. This may be changed by a "multipart" option. A button ![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/new.png)appears in the menu. A new molecule may be started only after clicking this button, then selecting a proper template \(atom, ring or bond\) and clicking free space in the drawing area. Without clicking the NEW button first clicking the free space has the same effect as in the standard mode \(i.e moving or rotation of the last touched molecule\). In the multipart mode the ![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/clean.png) button deletes the last touched molecule.

#### Reaction Input

Reaction input is enabled with the option "reaction". Buttons ![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/react.png), ![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/new.png) and ![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/123.png) appear in the menu and arrow appears also in the drawing area. Now simply draw reactant\(s\), product\(s\) and modulator\(s\) \(modulators have to be above the arrow\) as explained in the description of input of multipart structures. The arrow button enables simplified input of reactions. After clicking it, the reactant will be copied to the product \(including atom numbering, if any\).

#### Query Features

Query button ![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/smarts.png) \(when enabled in the options\) launches a query window that allows creation of SMARTS atom or bond queries by combining various atom attributes. Select the SMARTS options in this panel and then click the respective atom or bond in the molecule.

![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/querywindow.png)

#### Copy and Paste

Right mouse click opens the Copy and Paste pop-up menu that allows to copy the molecule as SMILES or MOL file or paste MOL , SDF, or RXN files into the editor.

![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/copypaste.png)

On supported touch devices, the menu can be opened by �touch and hold� on the surface of the editor.  
Keyboard shortcuts Ctrl C \(for copy\) and Ctrl V \(for paste\) are supported on most browsers.

#### Drag and Drop of Files in the Editor

Some HTML 5 compatible browsers support the drag and drop of files. Starting with version 2013-03-24, JSME accepts dropping of text files in the format MOL, SDF and RXN.   
![](https://www.lactame.com/visualizer/v2.99.0/modules/types/science/chemistry/jsme/help/dragdrop.png)   
To drag molecule from the editor into the appropriate destination \(for example Word or text document, or desktop\) drag the icon in the lower right corner of the editor.



