/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
	
		//Contributed by Brent Wong (bdewong)
	
		var keywords =	'abs accelerate accept access aclass acopy acos activate activatecell activecolumn activecontrol activedoc activeform activeobjectid ' +
						'activepage activeproject activerow adatabases adbobjects add addbs addcolumn additem additive addlinefeeds addlistitem addobject ' +
						'addproperty addrelationtoenv addtableschema addtabletoenv addtoscc adel adir adjustobjectsize adlls admin adockstate adocodepage ' +
						'aelement aerror aevents afields afont after afterband afterbuild afterclosetables aftercursorattach aftercursorclose aftercursordetach ' +
						'aftercursorfill aftercursorrefresh aftercursorupdate afterdelete afterdock afterinsert afterrecordrefresh afterreport afterrowcolchange ' +
						'afterupdate again agetclass agetfileversion aindent ains ainstance alanguage alen ' +
						'alias align alignment alignright alines all allowaddnew allowautocolumnfit allowcellselection ' +
						'allowdelete allowexternal allowheadersizing allowinsert allowmodalmessages allowoutput allowresize allowrowsizing allowsimultaneousfetch ' +
						'allowtabs allowtabs+ allowupdate alltrim alt alter alternate alwaysonbottom alwaysontop ' +
						'amembers amouseobj anchor and anetresources ansi ansitooem any aplabout ' +
						'app append application applydiffgram aprinters aprocinfo array as asc ' +
						'ascan ascending ascii aselobj asessions asin asort asqlhandles assert ' +
						'asserts assist astackinfo asubscript asynchronous at at_c ataginfo atan ' +
						'atc atcc atcline atgetcolors atline atlistcolors atn2 attach attributes ' +
						'aused autoactivate autocenter autoclosetables autocomplete autocompsource autocomptable autofit autoform ' +
						'autohidescrollbar autoinc autoincerror autoincrement automatic autoopen autoopentables autorelease autoreport ' +
						'autosave autosize autoverbmenu autoyield availnum avcxclasses average avg backcolor ' +
						'backstyle bar barcount barprompt baseclass batchmode batchupdatecount before beforeband ' +
						'beforebuild beforecursorattach beforecursorclose beforecursordetach beforecursorfill beforecursorrefresh beforecursorupdate beforedelete beforedock ' +
						'beforeinsert beforeopentables beforerecordrefresh beforereport beforerowcolchange beforeupdate begin bell bellsound ' +
						'between bind bindcontrols bindevent bintoc bitand bitclear bitlshift bitmap ' +
						'bitnot bitor bitrshift bitset bittest bitxor blank blink blob ' +
						'blocksize bof border bordercolor borderstyle borderwidth bottom bound boundcolumn ' +
						'boundto box breakonerror browse browsealignment browsecellmarg browsedestwidth browseime browseimecontrol ' +
						'browserefresh brstatus bucket buffering buffermode buffermodeoverride buffers build builddatetime ' +
						'builderlock buttoncount buttonindex buttons buttonsbof by calculate call canaccelerate cancel cancelreport ' +
						'candidate cangetfocus canlosefocus capslock caption carry cascade case cast catalog catch ' +
						'cd cdow cdx ceiling center centered central century cga change changestocursor ' +
						'char character chdir check checkbox checkin checkout childalias childorder childtable chr ' +
						'chrsaw chrtran chrtranc circle class classlib classlibrary clauses cleanup clear cleardata ' +
						'clearresultset clearstatus click clipcontrols cliprect clock cloneobject closable close closeeditor closetables ' +
						'cls clsid cmonth cmonth cnt cntbar cntpad codepage col collate collection ' +
						'color colorscheme colorsource column columncount columnheaders columnlines columnorder columns columnwidths com ' +
						'com1 com2 comarray combobox comclassinfo command commandbutton commandclauses commandgroup commandtargetexec commandtargetquery ' +
						'comment compact comparememo compatible compile completed compobj compress comprop compute comreturnerror ' +
						'concat confirm conflictcheckcmd conflictchecktype connectbusy connecthandle connection connections connectname connectstring connecttimeout ' +
						'connstring console container containerrelease containerreleasetype continue continuousscroll control controlbox controlcount controlindex ' +
						'controls controlsource conversionfunc copies copy cos cot count coverage cpcompile cpconvert ' +
						'cpcurrent cpdbf cpdialog cpnotrans create createbinary createobject createobjectex createoffline crsbuffering crsfetchmemo ' +
						'crsfetchsize crsmaxrows crsmethodused crsnumbatch crsshareconnection crsusememosize crswhereclause csv ctobin ctod ctot ' +
						'curdate curdir currency currentcontrol currentdatasession currentpass currentx currenty currleft currsymbol cursor ' +
						'cursoradapter cursorattach cursordetach cursorfill cursorgetprop cursorrefresh cursorschema cursorsetprop cursorsource cursorstatus cursortors ' +
						'cursortoxml curtime curval curvature custom cycle data database databases dataenvironment dataobject ' +
						'datasession datasessionid datasource datasourceobj datasourcetype datatoclip datatype date dateformat datemark datetime ' +
						'day dayname dayofmonth dayofweek dayofyear db4 db_buflockrow db_buflocktable db_bufoff db_bufoptrow db_bufopttable ' +
						'db_complette db_deleteinsert db_keyandmodified db_keyandtimestamp db_keyandupdatable db_localsql db_noprompt db_prompt db_remotesql db_transauto db_transmanual ' +
						'db_transnone db_update dbalias dbc dbc_activate dbc_afteraddrelation dbc_afteraddtable dbc_afterappendproc dbc_afterclosetable dbc_aftercopyproc dbc_aftercreateconnection ' +
						'dbc_aftercreateoffline dbc_aftercreatetable dbc_aftercreateview dbc_afterdbgetprop dbc_afterdbsetprop dbc_afterdeleteconnection dbc_afterdropoffline dbc_afterdroprelation  dbc_afterdroptable dbc_afterdropview dbc_aftermodifyconnection ' +
						'dbc_aftermodifyproc dbc_aftermodifytable dbc_aftermodifyview dbc_afteropentable dbc_afterremovetable dbc_afterrenameconnection dbc_afterrenametable dbc_afterrenameview dbc_aftervalidatedata dbc_beforeaddrelation dbc_beforeaddtable ' +
						'dbc_beforeappendproc dbc_beforeclosetable dbc_beforecopyproc dbc_beforecreateconnection dbc_beforecreateoffline dbc_beforecreatetable dbc_beforecreateview dbc_beforedbgetprop dbc_beforedbsetprop dbc_beforedeleteconnection dbc_beforedropoffline ' +
						'dbc_beforedroprelation dbc_beforedroptable dbc_beforedropview dbc_beforemodifyconnection dbc_beforemodifyproc dbc_beforemodifytable dbc_beforemodifyview dbc_beforeopentable dbc_beforeremovetable dbc_beforerenameconnection dbc_beforerenametable ' +
						'dbc_beforerenameview dbc_beforevalidatedata dbc_closedata dbc_deactivate dbc_modifydata dbc_opendata dbc_packdata dbf dbfdblclick dbgetprop dblclick ' +
						'dbmemo3 dbsetprop dbtrap dbused dde ddeaborttrans ddeadvise ddeenabled ddeexecute ddeinitiate ddelasterror ' +
						'ddepoke dderequest ddesetoption ddesetservice ddesettopic ddeterminate deactivate debug debugger debugout decimals ' +
						'declare declarexmlprefix declass declasslibrary default defaultext defaultfilepath defaultsource defaultvalue defbutton defbuttonorig ' +
						'defheight define definewindows defleft defolelcid deftop defwidth degrees delaybind delayedmemofetch delete ' +
						'deletecmd deletecmddatasource deletecmddatasourcetype deletecolumn deleted deletemark deletetables deletetrigger delimited delimiters desc ' +
						'descending description design desktop destroy details development device dif difference dimension ' +
						'dir directory disabled disabledbackcolor disabledbyeof disabledforecolor disableditembackcolor disableditemforecolor disabledpicture disableencode disconnected ' +
						'diskspace display displaycount displayorientation displaypath displayvalue displayvaluedirty displogin disppageheight disppagewidth dispwarnings ' +
						'distinct dll dlls dmy do doc dock dockable docked dockposition docmd ' +
						'docreate documentfile dodefault doevents dohistory domessage dos doscroll dosmem dostatus double ' +
						'doverb dow down downclick downpicture drag dragdrop dragicon dragmode dragover dragstate ' +
						'draw drawmode drawstyle drawwidth driver drivetype drop dropdown dropoffline dtoc dtor ' +
						'dtos dtot duplex dynamicalignment dynamicbackcolor dynamiccurrentcontrol dynamicfontbold dynamicfontitalic dynamicfontname dynamicfontoutline dynamicfontshadow ' +
						'dynamicfontsize dynamicfontstrikethru dynamicfontunderline dynamicforecolor dynamicinputmask dynamiclineheight each echo edit editbox editflags ' +
						'editoroptions editsource editwork ega25 ega43 eject elif else empty ems ems64 ' +
						'enabled enabledbyreadlock enablehyperlinks encrypt encrypted encryption end endcase enddefine enddo endfor ' +
						'endfunc endif endprintjob endproc endscan endtext endtry endwith enginebehavior enterfocus environment ' +
						'envlevel eof erase erasepage error errormessage errorno escape eval evaluate evaluatecontents ' +
						'eventhandler eventlist events eventtracking evl exact except exception exclude exclusive exe ' +
						'execscript exists exit exitfocus exp export expression extended external f11f12 fchsize ' +
						'fclose fcount fcreate fdate fdow feof ferror fetch fetchasneeded fetchmemo fetchmemo ' +
						'fetchmemocmdlist fetchmemodatasource fetchmemodatasourcetype fetchsize fflush fgets field fields fieldsf file fileclass ' +
						'fileclasslibrary filer files filetostr fill fillcolor fillstyle filter finally find firstelement ' +
						'firstnestedtable fixed fklabel fkmax flags fldcount fldlist float flock floor flush ' +
						'foldconst font fontbold fontcharset fontclass fontcondense fontextend fontitalic fontmetric fontname fontoutline ' +
						'fontshadow fontsize fontstrikethru fontunderline footer fopen for force forceclosetag forceext forcefocus ' +
						'forcepath forecolor foreign form format formatchange formattedoutput formcount formindex formpagecount formpageindex ' +
						'forms formsclass formset formsetclass formsetlib formslib found fox2x foxcode foxdoc foxfont ' +
						'foxgen foxgraph foxobject foxplus foxpro foxtask foxview fputs fractiondigits fread free ' +
						'freeze french from frxdatasession fseek fsize ftime full fullname fullpath function ' +
						'fv fw2 fweek fwrite gather gdiplusgraphics general german get get getautoincvalue ' +
						'getbar getcolor getcp getcursoradapter getdata getdir getdockstate getenv getexpr getfile getfldstate ' +
						'getfont getformat gethost getinterface getkey getlatestversion getnextmodified getobject getpad getpageheight getpagewidth ' +
						'getpem getpict getprinter getresultset gets getwordcount getwordnum global go goback gofirst ' +
						'goforward golast gomonth gotfocus goto graph grid gridhittest gridhorz gridlinecolor gridlines ' +
						'gridlinewidth gridshow gridshowpos gridsnap gridvert group grow halfheight halfheightcaption handler hasclip ' +
						'having header headerclass headerclasslibrary headergap headerheight heading headings height help helpcontextid ' +
						'helpfilter helpon helpto hidden hide hideappobj hidedoc hideselection highlight highlightbackcolor highlightforecolor ' +
						'highlightrow highlightrowlinewidth highlightstyle history hmemory home homedir hostname hotkey hour hours ' +
						'hproj hscrollsmallchange hwnd hyperlink iblock icase icon id idhistory idletimeout idxcollate ' +
						'if ifdef ifndef ignoreinsert iif image imemode imestatus import in include ' +
						'includepageinoutput increment incrementalsearch indbc index indexes indexseek indextoitemid information init initialselectedalias ' +
						'inkey inlist inner input inputbox inputmask inresize insert insertcmd insertcmddatasource insertcmddatasourcetype ' +
						'insertcmdrefreshcmd insertcmdrefreshfieldlist insertcmdrefreshkeyfieldlist inserttrigger insmode instancing instruct int integer integralheight intensity ' +
						'interactivechange intersect interval into is isalpha isattribute isbase64 isbinary isblank iscolor ' +
						'isdiffgram isdigit isexclusive isflocked ishosted isleadbyte isloaded islower ismemofetched ismouse isnull ' +
						'isometric ispen isreadonly isrlocked istransactable isupper isxmldomelement italian item itembackcolor itemdata ' +
						'itemforecolor itemiddata itemidtoindex itemtips ixmldomelement japan join justdrive justext justfname justpath ' +
						'justreadlocked juststem key keyboard keyboardhighvalue keyboardlowvalue keycolumns keycomp keyfield keyfieldlist keymatch ' +
						'keypress keypreview keyset keysort label languageoptions last lastkey lastproject lcase ldcheck ' +
						'ledit left leftc leftcolumn len lenc length level library like likec ' +
						'line linecontents lineno lineslant linked linkmaster list listbox listcount listenertype listindex ' +
						'listitem listitemid load loadpicture loadreport loadxml local locate locfile lock lockcolumns ' +
						'lockcolumnsleft lockdatasource lockscreen log log10 logerrors logout long lookup loop lostfocus ' +
						'lower lparameter lparameters lpartition ltrim ltrjustify lupdate mac macdesktop machelp mackey ' +
						'macro macros macscreen mail mainfile maketransactable map19_4tocurrency mapbinary mapn19_4tocurrency mapvarchar margin ' +
						'mark master max maxbutton maxheight maxleft maxlength maxmem maxrecords maxtop maxwidth ' +
						'mblock mcol md mdi mdiform mdown mdx mdy memberclass memberclasslibrary memlimit ' +
						'memlines memo memory memos memowidth memowindow memvar menu menus message messagebox ' +
						'messages method middle middleclick min minbutton minheight minimize minus minute minwidth ' +
						'mkdir mline mod modal modify module mono mono43 month monthname mouse ' +
						'mousedown mouseenter mouseicon mouseleave mousemove mousepointer mouseup mousewheel movable move moved ' +
						'moveitem moverbars movers mrkbar mrkpad mrow mtdll mton multilocks multiselect mvarsiz ' +
						'mvcount mwindow name naptime native navigateto ndx near negotiate nest nestedinto ' +
						'network newindex newitemid newobject next nextsiblingtable nextvalue noalias noappend noclear noclose ' +
						'noconsole nocptrans nodata nodataonload nodebug nodefault nodefine nodelete nodialog nodup noedit ' +
						'noeject noenvironment nofilter nofloat nofollow nogrow noinit nolgrid nolink nolock nolog ' +
						'nomargin nomdi nomenu nominimize nomodify nomouse none nooptimize noorganize nooverwrite noprojecthook ' +
						'noprompt noread norefresh norequery norgrid norm normal normalize nosave noshadow noshow ' +
						'nospace not notab note notify notifycontainer noupdate novalidate noverify now nowait ' +
						'nowindow nowrap nozoom npv ntom null nulldisplay nullstring number numberofelements numeric ' +
						'numlock nvl object objects objnum objref objtoclient objvar occurs odbchdbc odbchstmt ' +
						'odometer oemtoansi of off oldval olebasecontrol oleboundcontrol oleclass oleclassid oleclassidispout olecompletedrag ' +
						'olecontrol olecontrolcontainer oledrag oledragdrop oledragmode oledragover oledragpicture oledropeffects oledrophasdata oledropmode oledroptextinsertion ' +
						'olegivefeedback oleidispatchincoming oleidispatchoutgoing oleidispinvalue oleidispoutvalue olelcid oleobject oleobjects olepublic olerequestpendingtimeout olerequestpendingtimou ' +
						'oleserverbusyraiseerro oleserverbusyraiseerror oleserverbusytimeout oleserverbusytimout olesetdata olestartdrag oletypeallowed on onetomany online only ' +
						'onmoveitem onpreviewclose onresize open openeditor opentables openviews openwindow optimize optionbutton optiongroup ' +
						'or oracle order orderdirection orientation os otherwise outer output outputpage outputpagecount ' +
						'outputtype outshow overlay overwrite pack packetsize pad padc padl padl padprompt ' +
						'padr page pagecount pageframe pageheight pageno pageorder pages pagetotal pagewidth paint ' +
						'palette panel panellink paperlength papersize paperwidth parameters parent parentalias parentclass parenttable ' +
						'partition password passwordchar path pattern pause payment pcol pcount pdox pdsetup ' +
						'pemstatus pen percent pfs pi picture picturemargin pictureposition pictureselectiondisplay picturespacing pictureval ' +
						'pivot pixels plain platform play point polypoints pop popup popups power ' +
						'precision preference prepared preservewhitespace pretext preview previewcontainer primary primarykey print printer ' +
						'printform printjob printjobname printquality printstatus private prmbar prmpad procedure procedures processid ' +
						'production progcache progid program programmaticchange progwork project projectclick projecthook projecthookclass projecthooklibrary ' +
						'prompt proper protected prow prtinfo pset public push putfile pv qpr ' +
						'ppr quarter query queryaddfile querymodifyfile querynewfile queryremovefile queryrunfile querytimeout queryunload quietmode ' +
						'quit radians raise raiseevent rand random range rangehigh rangelow rat ratc ' +
						'ratline rd rdlevel read readactivate readbackcolor readborder readcolors readcycle readdeactivate readerror ' +
						'readexpression readfiller readforecolor readkey readlock readmethod readmouse readobject readonly readsave readshow ' +
						'readsize readtimeout readvalid readwhen recall reccount recentlyusedfiles recno recompile record recordmark ' +
						'recordrefresh recordsource recordsourcetype recover recsize rect rectclass recycle redit reference references ' +
						'refresh refreshalias refreshcmd refreshcmddatasource refreshcmddatasourcetype refreshignorefieldlist refreshtimestamp reindex relatedchild relatedtable relatedtag ' +
						'relation relationalexpr relative relativecolumn relativerow release releaseerase releasetype releasewindows releasexml remote ' +
						'remove removefromscc removeitem removelistitem removeobject removeproperty rename render repeat replace replicate ' +
						'report reportbehavior reportlistener reprocess requery requestdata required reset resettodefault resheight resizable ' +
						'resize resource resourceon resources resourceto respectcursorcp respectnesting rest restore restrict resume ' +
						'reswidth retry return revertoffline rgb rgbscheme right rightc rightclick righttoleft rlock ' +
						'rmdir rollback rollover rotateflip rotation round row rowcolchange rowheight rowset rowsource ' +
						'rowsourcetype rpd rstocursor rtljustify rtod rtrim ruleexpression ruletext run runscript runtime ' +
						'rview safety same sample save saveas saveasclass savepicture say scale scalemode ' +
						'scaleunits scan scatter sccdestroy sccinit sccprovider sccstatus scheme scols scoreboard screen ' +
						'screens scroll scrollbars scrolled scrollscrollbars sdf sdiform sec second seconds seek ' +
						'select selectcmd selected selectedbackcolor selectedforecolor selectedid selecteditembackcolor selecteditemforecolor selection selectionnamespaces selectonentry ' +
						'selfedit sellength selstart seltext sendgdiplusimage sendupdates separator serverclass serverclasslibrary serverhelpfile servername ' +
						'serverproject set setall setdata setdefault setfldstate setfocus setformat setmain setresultset setup ' +
						'setvar setviewport shadows shape shareconnection shared sheet shell shift shortcut show ' +
						'showdoc showintaskbar showolecontrols showoleinsertable showtips showvcxs showwhatsthis showwindow shutdown sign sin ' +
						'single sizable size sizebox skip skipform skpbar skpbar skppad som some ' +
						'sort sorted sortwork soundex sourcename sourcetype space sparse specialeffect spinner spinnerhighvalue ' +
						'spinnerlowvalue splitbar sql sqlasynchronous sqlbatchmode sqlcancel sqlcolumns sqlcommit sqlconnect sqlconnecttimeout sqldisconnect ' +
						'sqldisplogin sqldispwarnings sqlexec sqlgetprop sqlidledisconnect sqlidletimeout sqll sqlmoreresults sqlprepare sqlquerytimeout sqlrollback ' +
						'sqlsetprop sqlstringconnect sqltables sqltransactions sqlwaittime sqrt srows stacklevel standalone startmode status ' +
						'statusbar statusbartext std step sticky store str strconv stretch strextract strictdate ' +
						'strictdateentry string strtofile strtran structure stuff stuffc style subclass substr substrc ' +
						'substring sum summary supportslistenertype suspend sylk sys sysformats sysmenu sysmenus sysmetric ' +
						'system systemrefcount tab tabfixedheight tabfixedwidth tabhit tabindex table tableprompt tablerefresh tablerevert ' +
						'tables tableupdate tablevalidate tabordering taborientation tabs tabstop tabstretch tabstyle tag tagcount ' +
						'tagno talk tan target taskpane tedit terminateread text textbox textheight textmerge ' +
						'textwidth themes then this thisform thisformset threadid throw time timeout timer ' +
						'timestamp timestampdiff timestampfieldlist titlebar titles tmpfiles to tocursor toolbar toolbox tooltiptext ' +
						'top topic topindex topitemid total toxml toxml tracking transaction transactions transform ' +
						'trap trbetween trigger trim truncate try ttoc ttod ttoption twopassprocess txnlevel ' +
						'txtwidth type typeahead typelibclsid typelibdesc typelibname ucase udfparms uienable unbindevent unbinds ' +
						'undefine undocheckout undock unicode union unique unload unloadreport unlock unlockdatasource unnest ' +
						'unpack up upclick updatable updatablefieldlist update updatecmd updatecmddatasource updatecmddatasourcetype updatecmdrefreshcmd updatecmdrefreshfieldlist ' +
						'updatecmdrefreshkeyfieldlist updatecmdsource updatecmdsourcetype updated updatedatasource updategram updategramschemalocation updatename updatenamelist updatestatus updatetrigger ' +
						'updatetype upper upsizing usa use usecodepage usecursorschema used usededatasource usememosize userid ' +
						'users uservalue usetransactions utf8encoded val valid validate value valuedirty values var ' +
						'varbinary varchar varcharmapping varread vartype verb version versioncomments versioncompany versioncopyright versiondescription ' +
						'versionnumber versionproduct versiontrademarks vfpxmlprogid vga25 vga50 view viewportheight viewportleft viewporttop viewportwidth ' +
						'views visible visualeffect volume vscrollsmallchange wait waittime wasactive wasopen wborder wchild ' +
						'wcols wdockable week wexist wfont whatsthisbutton whatsthishelp whatsthishelpid whatsthismode when where ' +
						'wheretype wherewheretype while width windcmd windhelp windmemo windmenu windmodify window windowlist ' +
						'windowntilist windows windowstate windowtype windquery windscreen windsnip windstproc with wizardprompt wk1 ' +
						'wk3 wks wlast wlcol wlrow wmaximum wminimum wontop wordwrap workarea woutput ' +
						'wp wparent wr1 wrap wrapcharincdata wrapincdata wrapmemoincdata wread write writeexpression writemethod ' +
						'wrk wrows wtitle wvisible xcmdfile xl5 xl8 xls xml xmladapter xmlconstraints ' +
						'xmlfield xmlname xmlnameisxpath xmlnamespace xmlprefix xmlschemalocation xmltable xmltocursor xmltype xmlupdategram xsdfractiondigits ' +
						'xsdmaxlength xsdtotaldigits xsdtype year yresolution zap zoom zoom window zoombox zorder zorderset ' +
						'and not null or t f .and. .not. .null. .or. .t. .f.' +
						'_activatehandler _activateidle _activatemenu _alen _alignment _alloca _allochand _allocmemo _asciicols _asciirows _assist ' +
						'_beautify _box _breakpoint _browser _builder _calcmem _calcvalue _cliptext _codesense _converter _countitems ' +
						'_coverage _curobj _datetimeformat _dbappend _dblclick _dblock _dbread _dbreccount _dbrecno _dbreplace _dbrewind ' +
						'_dbseek _dbskip _dbstatus _dbunlock _dbunwind _dbwrite _deactivatehandler _deactivateidle _deactivatemenu _defaultprocess _dialog ' +
						'_diarydate _disposeitem _disposemenu _dos _edactive _edclosefile _edcopy _edcut _eddelete _edgetchar _edgetenv ' +
						'_edgetlinenum _edgetlinepos _edgetpos _edgetstr _edindent _edinsert _edlasterror _edopenfile _edpaste _edposinview _edredo ' +
						'_edrevert _edsave _edscrolltopos _edscrolltosel _edselect _edsendkey _edsetenv _edsetpos _edskiplines _edundo _edundoon ' +
						'_error _errorinfo _evaluate _execute _fchsize _fclose _fcopy _fcreate _feof _ferror _fflush ' +
						'_fgets _findmemo _findvar _findwindow _findwindowp _fontclass _fopen _foxbaseclass _foxcode _foxdoc _foxdragdrop ' +
						'_foxdroptarget _foxgraph _foxref _foxtask _fputs _fread _freehand _freeobject _fseek _fwrite _gallery ' +
						'_gengraph _genhtml _genmenu _genpd _genscrn _genxtab _getapihandle _getexpr _gethandsize _getitemcmdkey _getitemid ' +
						'_getitemsubmenu _getitemtext _getnewitemid _getnewmenuid _getnextevent _getobjectproperty _globaltolocal _globaltolocalp _handtoptr _helpwebdevonly _helpwebdirectory ' +
						'_helpwebfiller1 _helpwebfiller2 _helpwebmsdnonline _helpwebmsfthomepage _helpwebsearch _helpwebtutorial _helpwebvfpfaq _helpwebvfpfreestuff _helpwebvfphomepage _helpwebvfponlinesupport _helpwebvfpsendfeedback ' +
						'_helpwebvsprodnews _hlock _hunlock _include _incseek _indent _inkey _lmargin _load _mac _mac ' +
						'_mbr_appnd _mbr_cpart _mbr_delet _mbr_font _mbr_goto _mbr_grid _mbr_link _mbr_mode _mbr_mvfld _mbr_mvprt _mbr_seek ' +
						'_mbr_sp100 _mbr_sp200 _mbr_szfld _mbrowse _mda_appnd _mda_avg _mda_brow _mda_calc _mda_copy _mda_count _mda_label ' +
						'_mda_pack _mda_reprt _mda_rindx _mda_setup _mda_sort _mda_sp100 _mda_sp200 _mda_sp300 _mda_sum _mda_total _mdata ' +
						'_mdiary _med_beaut _med_bldex _med_clear _med_copy _med_cut _med_cvtst _med_exblk _med_find _med_finda _med_goto ' +
						'_med_insob _med_link _med_obj _med_paste _med_pref _med_pstlk _med_redo _med_repl _med_repla _med_slcta _med_sp100 ' +
						'_med_sp200 _med_sp300 _med_sp400 _med_sp500 _med_sp600 _med_undo _medit _memavail _memberdata _memcmp _memfill ' +
						'_memmove _memochan _memosize _menudesigner _menuid _menuinteract _mfi_clall _mfi_close _mfi_export _mfi_import _mfi_new ' +
						'_mfi_open _mfi_pgset _mfi_prevu _mfi_print _mfi_printonecopy _mfi_quit _mfi_revrt _mfi_savas _mfi_save _mfi_saveashtml _mfi_send ' +
						'_mfi_setup _mfi_sp100 _mfi_sp200 _mfi_sp300 _mfi_sp400 _mfi_sysprint _mfile _mfiler _mfirst _mlabel _mlast ' +
						'_mline _mmacro _mmacro _mmb_delet _mmb_gener _mmb_gopts _mmb_insbr _mmb_insrt _mmb_mopts _mmb_prevu _mmb_quick ' +
						'_mmb_sp100 _mmb_sp200 _mmb_sp300 _mmbldr _mouseevents _mouseeventsnodbl _mousepos _mouseposp _mpr_beaut _mpr_cancl _mpr_compl ' +
						'_mpr_do _mpr_docum _mpr_formwz _mpr_gener _mpr_graph _mpr_resum _mpr_sp100 _mpr_sp200 _mpr_sp300 _mpr_suspend _mprog ' +
						'_mproj _mrc_appnd _mrc_chnge _mrc_cont _mrc_delet _mrc_goto _mrc_locat _mrc_recal _mrc_repl _mrc_seek _mrc_sp100 ' +
						'_mrc_sp200 _mrecord _mreport _mrqbe _mscreen _msm_data _msm_edit _msm_file _msm_format _msm_prog _msm_recrd ' +
						'_msm_systm _msm_text _msm_tools _msm_view _msm_windo _mst_about _mst_ascii _mst_calcu _mst_captr _mst_dbase _mst_diary ' +
						'_mst_docum _mst_filer _mst_help _mst_hphow _mst_hpsch _mst_macro _mst_msdnc _mst_msdni _mst_msdns _mst_office _mst_puzzl ' +
						'_mst_samp _mst_sp100 _mst_sp200 _mst_sp300 _mst_specl _mst_techs _msysmenu _msystem _mtable _mtb_appnd _mtb_cpart ' +
						'_mtb_delet _mtb_delrc _mtb_goto _mtb_link _mtb_mvfld _mtb_mvprt _mtb_props _mtb_recal _mtb_sp100 _mtb_sp200 _mtb_sp300 ' +
						'_mtb_sp400 _mtb_szfld _mti_callstack _mti_dbgout _mti_locals _mti_runactivedoc _mti_trace _mti_watch _mtl_browser _mtl_coverage _mtl_debugger ' +
						'_mtl_gallery _mtl_macro _mtl_optns _mtl_sp100 _mtl_sp200 _mtl_sp300 _mtl_sp400 _mtl_spell _mtl_wzrds _mtools _mvi_toolb ' +
						'_mview _mwi_arran _mwi_clear _mwi_cmd _mwi_color _mwi_debug _mwi_hide _mwi_hidea _mwi_min _mwi_move _mwi_rotat ' +
						'_mwi_showa _mwi_size _mwi_sp100 _mwi_sp200 _mwi_toolb _mwi_trace _mwi_view _mwi_zoom _mwindow _mwizards _mwz_all ' +
						'_mwz_applic _mwz_application _mwz_database _mwz_form _mwz_foxdoc _mwz_import _mwz_label _mwz_mail _mwz_pivot _mwz_query _mwz_reprt ' +
						'_mwz_setup _mwz_table _mwz_upsizing _mwz_webpublishing _nametableindex _netware _newitem _newmenu _newvar _objectbrowser _objectcmp ' +
						'_objectreference _objectrelease _olebasecontrol _oledragdrop _onselection _oracle _padvance _pageno _pagetotal _pbpage _pcolno ' +
						'_pcopies _pdparms _pdriver _pdsetup _pecode _peject _pepage _pform _plength _plineno _ploffset ' +
						'_ppitch _pquality _pretext _pscode _pspacing _putchr _putstr _putvalue _pwait _rectclass _release ' +
						'_reportbuilder _reportoutput _reportpreview _retchar _retcurrency _retdatestr _retdatetimestr _retfloat _retint _retlogical _retval ' +
						'_rmargin _runactivedoc _samples _scctext _screen _sethandsize _setitemcmdkey _setitemsubmenu _setitemtext _setmenupoint _setmenupointp ' +
						'_setobjectproperty _shell _spellchk _sqlserver _startup _store _strcmp _strcpy _strlen _tabs _tally ' +
						'_tasklist _taskpane _text _throttle _toolbox _tooltiptimeout _transport _triggerlevel _unix _usererror _vfp ' +
						'_viewport _vsbuild _wattr _wbottom _wbottomp _wclear _wclearrect _wclearrectp _wclose _webdevonly _webmenu ' +
						'_webmsfthomepage _webvfphomepage _webvfponlinesupport _wfindtitle _wgetcursor _wgetcursorp _wgetobjectclientwindow _wgetobjectwindow _wgetport _wheight _wheightp ' +
						'_whide _whtohwnd _windows _wizard _wleft _wleftp _wmainwindow _wmove _wmovep _wontop _wopen ' +
						'_wopenp _wposcursor _wposcursorp _wputchr _wputstr _wrap _wright _wrightp _wscroll _wscrollp _wselect ' +
						'_wsendbehind _wsetattr _wsetport _wsettitle _wshow _wsize _wsizep _wtitle _wtop _wtopp _wwidth ' +
						'_wwidthp _wzoom';

		this.regexList = [
			{ regex: /^\s*\*.*$/g,									css: 'comments' },			// one line comments
			{ regex: /&&.*$/g,										css: 'comments' },			// inline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,	css: 'string' },			// strings
			{ regex: /^\s*#.*$/g,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gi'),	css: 'keyword' }			// vb keyword
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['foxpro'];

	SyntaxHighlighter.brushes.Foxpro = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
