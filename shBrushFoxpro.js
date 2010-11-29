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
	
		var keywords =	'ABS ACCELERATE ACCEPT ACCESS ACLASS ACOPY ACOS ACTIVATE ACTIVATECELL ACTIVECOLUMN ACTIVECONTROL ACTIVEDOC ACTIVEFORM ACTIVEOBJECTID ' +
						'ACTIVEPAGE ACTIVEPROJECT ACTIVEROW ADATABASES ADBOBJECTS ADD ADDBS ADDCOLUMN ADDITEM ADDITIVE ADDLINEFEEDS ADDLISTITEM ADDOBJECT ' +
						'ADDPROPERTY ADDRELATIONTOENV ADDTABLESCHEMA ADDTABLETOENV ADDTOSCC ADEL ADIR ADJUSTOBJECTSIZE ADLLS ADMIN ADOCKSTATE ADOCODEPAGE ' +
						'AELEMENT AERROR AEVENTS AFIELDS AFONT AFTER AFTERBAND AFTERBUILD AFTERCLOSETABLES AFTERCURSORATTACH AFTERCURSORCLOSE AFTERCURSORDETACH ' +
						'AFTERCURSORFILL AFTERCURSORREFRESH AFTERCURSORUPDATE AFTERDELETE AFTERDOCK AFTERINSERT AFTERRECORDREFRESH AFTERREPORT AFTERROWCOLCHANGE ' +
						'AFTERUPDATE AGAIN AGETCLASS AGETFILEVERSION AINDENT AINS AINSTANCE ALANGUAGE ALEN ' +
						'ALIAS ALIGN ALIGNMENT ALIGNRIGHT ALINES ALL ALLOWADDNEW ALLOWAUTOCOLUMNFIT ALLOWCELLSELECTION ' +
						'ALLOWDELETE ALLOWEXTERNAL ALLOWHEADERSIZING ALLOWINSERT ALLOWMODALMESSAGES ALLOWOUTPUT ALLOWRESIZE ALLOWROWSIZING ALLOWSIMULTANEOUSFETCH ' +
						'ALLOWTABS ALLOWTABS+ ALLOWUPDATE ALLTRIM ALT ALTER ALTERNATE ALWAYSONBOTTOM ALWAYSONTOP ' +
						'AMEMBERS AMOUSEOBJ ANCHOR AND ANETRESOURCES ANSI ANSITOOEM ANY APLABOUT ' +
						'APP APPEND APPLICATION APPLYDIFFGRAM APRINTERS APROCINFO ARRAY AS ASC ' +
						'ASCAN ASCENDING ASCII ASELOBJ ASESSIONS ASIN ASORT ASQLHANDLES ASSERT ' +
						'ASSERTS ASSIST ASTACKINFO ASUBSCRIPT ASYNCHRONOUS AT AT_C ATAGINFO ATAN ' +
						'ATC ATCC ATCLINE ATGETCOLORS ATLINE ATLISTCOLORS ATN2 ATTACH ATTRIBUTES ' +
						'AUSED AUTOACTIVATE AUTOCENTER AUTOCLOSETABLES AUTOCOMPLETE AUTOCOMPSOURCE AUTOCOMPTABLE AUTOFIT AUTOFORM ' +
						'AUTOHIDESCROLLBAR AUTOINC AUTOINCERROR AUTOINCREMENT AUTOMATIC AUTOOPEN AUTOOPENTABLES AUTORELEASE AUTOREPORT ' +
						'AUTOSAVE AUTOSIZE AUTOVERBMENU AUTOYIELD AVAILNUM AVCXCLASSES AVERAGE AVG BACKCOLOR ' +
						'BACKSTYLE BAR BARCOUNT BARPROMPT BASECLASS BATCHMODE BATCHUPDATECOUNT BEFORE BEFOREBAND ' +
						'BEFOREBUILD BEFORECURSORATTACH BEFORECURSORCLOSE BEFORECURSORDETACH BEFORECURSORFILL BEFORECURSORREFRESH BEFORECURSORUPDATE BEFOREDELETE BEFOREDOCK ' +
						'BEFOREINSERT BEFOREOPENTABLES BEFORERECORDREFRESH BEFOREREPORT BEFOREROWCOLCHANGE BEFOREUPDATE BEGIN BELL BELLSOUND ' +
						'BETWEEN BIND BINDCONTROLS BINDEVENT BINTOC BITAND BITCLEAR BITLSHIFT BITMAP ' +
						'BITNOT BITOR BITRSHIFT BITSET BITTEST BITXOR BLANK BLINK BLOB ' +
						'BLOCKSIZE BOF BORDER BORDERCOLOR BORDERSTYLE BORDERWIDTH BOTTOM BOUND BOUNDCOLUMN ' +
						'BOUNDTO BOX BREAKONERROR BROWSE BROWSEALIGNMENT BROWSECELLMARG BROWSEDESTWIDTH BROWSEIME BROWSEIMECONTROL ' +
						'BROWSEREFRESH BRSTATUS BUCKET BUFFERING BUFFERMODE BUFFERMODEOVERRIDE BUFFERS BUILD BUILDDATETIME ' +
						'BUILDERLOCK BUTTONCOUNT BUTTONINDEX BUTTONS BUTTONSBOF BY CALCULATE CALL CANACCELERATE CANCEL CANCELREPORT ' +
						'CANDIDATE CANGETFOCUS CANLOSEFOCUS CAPSLOCK CAPTION CARRY CASCADE CASE CAST CATALOG CATCH ' +
						'CD CDOW CDX CEILING CENTER CENTERED CENTRAL CENTURY CGA CHANGE CHANGESTOCURSOR ' +
						'CHAR CHARACTER CHDIR CHECK CHECKBOX CHECKIN CHECKOUT CHILDALIAS CHILDORDER CHILDTABLE CHR ' +
						'CHRSAW CHRTRAN CHRTRANC CIRCLE CLASS CLASSLIB CLASSLIBRARY CLAUSES CLEANUP CLEAR CLEARDATA ' +
						'CLEARRESULTSET CLEARSTATUS CLICK CLIPCONTROLS CLIPRECT CLOCK CLONEOBJECT CLOSABLE CLOSE CLOSEEDITOR CLOSETABLES ' +
						'CLS CLSID CMONTH CMONTH CNT CNTBAR CNTPAD CODEPAGE COL COLLATE COLLECTION ' +
						'COLOR COLORSCHEME COLORSOURCE COLUMN COLUMNCOUNT COLUMNHEADERS COLUMNLINES COLUMNORDER COLUMNS COLUMNWIDTHS COM ' +
						'COM1 COM2 COMARRAY COMBOBOX COMCLASSINFO COMMAND COMMANDBUTTON COMMANDCLAUSES COMMANDGROUP COMMANDTARGETEXEC COMMANDTARGETQUERY ' +
						'COMMENT COMPACT COMPAREMEMO COMPATIBLE COMPILE COMPLETED COMPOBJ COMPRESS COMPROP COMPUTE COMRETURNERROR ' +
						'CONCAT CONFIRM CONFLICTCHECKCMD CONFLICTCHECKTYPE CONNECTBUSY CONNECTHANDLE CONNECTION CONNECTIONS CONNECTNAME CONNECTSTRING CONNECTTIMEOUT ' +
						'CONNSTRING CONSOLE CONTAINER CONTAINERRELEASE CONTAINERRELEASETYPE CONTINUE CONTINUOUSSCROLL CONTROL CONTROLBOX CONTROLCOUNT CONTROLINDEX ' +
						'CONTROLS CONTROLSOURCE CONVERSIONFUNC COPIES COPY COS COT COUNT COVERAGE CPCOMPILE CPCONVERT ' +
						'CPCURRENT CPDBF CPDIALOG CPNOTRANS CREATE CREATEBINARY CREATEOBJECT CREATEOBJECTEX CREATEOFFLINE CRSBUFFERING CRSFETCHMEMO ' +
						'CRSFETCHSIZE CRSMAXROWS CRSMETHODUSED CRSNUMBATCH CRSSHARECONNECTION CRSUSEMEMOSIZE CRSWHERECLAUSE CSV CTOBIN CTOD CTOT ' +
						'CURDATE CURDIR CURRENCY CURRENTCONTROL CURRENTDATASESSION CURRENTPASS CURRENTX CURRENTY CURRLEFT CURRSYMBOL CURSOR ' +
						'CURSORADAPTER CURSORATTACH CURSORDETACH CURSORFILL CURSORGETPROP CURSORREFRESH CURSORSCHEMA CURSORSETPROP CURSORSOURCE CURSORSTATUS CURSORTORS ' +
						'CURSORTOXML CURTIME CURVAL CURVATURE CUSTOM CYCLE DATA DATABASE DATABASES DATAENVIRONMENT DATAOBJECT ' +
						'DATASESSION DATASESSIONID DATASOURCE DATASOURCEOBJ DATASOURCETYPE DATATOCLIP DATATYPE DATE DATEFORMAT DATEMARK DATETIME ' +
						'DAY DAYNAME DAYOFMONTH DAYOFWEEK DAYOFYEAR DB4 DB_BUFLOCKROW DB_BUFLOCKTABLE DB_BUFOFF DB_BUFOPTROW DB_BUFOPTTABLE ' +
						'DB_COMPLETTE DB_DELETEINSERT DB_KEYANDMODIFIED DB_KEYANDTIMESTAMP DB_KEYANDUPDATABLE DB_LOCALSQL DB_NOPROMPT DB_PROMPT DB_REMOTESQL DB_TRANSAUTO DB_TRANSMANUAL ' +
						'DB_TRANSNONE DB_UPDATE DBALIAS DBC DBC_ACTIVATE DBC_AFTERADDRELATION DBC_AFTERADDTABLE DBC_AFTERAPPENDPROC DBC_AFTERCLOSETABLE DBC_AFTERCOPYPROC DBC_AFTERCREATECONNECTION ' +
						'DBC_AFTERCREATEOFFLINE DBC_AFTERCREATETABLE DBC_AFTERCREATEVIEW DBC_AFTERDBGETPROP DBC_AFTERDBSETPROP DBC_AFTERDELETECONNECTION DBC_AFTERDROPOFFLINE DBC_AFTERDROPRELATION  DBC_AFTERDROPTABLE DBC_AFTERDROPVIEW DBC_AFTERMODIFYCONNECTION ' +
						'DBC_AFTERMODIFYPROC DBC_AFTERMODIFYTABLE DBC_AFTERMODIFYVIEW DBC_AFTEROPENTABLE DBC_AFTERREMOVETABLE DBC_AFTERRENAMECONNECTION DBC_AFTERRENAMETABLE DBC_AFTERRENAMEVIEW DBC_AFTERVALIDATEDATA DBC_BEFOREADDRELATION DBC_BEFOREADDTABLE ' +
						'DBC_BEFOREAPPENDPROC DBC_BEFORECLOSETABLE DBC_BEFORECOPYPROC DBC_BEFORECREATECONNECTION DBC_BEFORECREATEOFFLINE DBC_BEFORECREATETABLE DBC_BEFORECREATEVIEW DBC_BEFOREDBGETPROP DBC_BEFOREDBSETPROP DBC_BEFOREDELETECONNECTION DBC_BEFOREDROPOFFLINE ' +
						'DBC_BEFOREDROPRELATION DBC_BEFOREDROPTABLE DBC_BEFOREDROPVIEW DBC_BEFOREMODIFYCONNECTION DBC_BEFOREMODIFYPROC DBC_BEFOREMODIFYTABLE DBC_BEFOREMODIFYVIEW DBC_BEFOREOPENTABLE DBC_BEFOREREMOVETABLE DBC_BEFORERENAMECONNECTION DBC_BEFORERENAMETABLE ' +
						'DBC_BEFORERENAMEVIEW DBC_BEFOREVALIDATEDATA DBC_CLOSEDATA DBC_DEACTIVATE DBC_MODIFYDATA DBC_OPENDATA DBC_PACKDATA DBF DBFDBLCLICK DBGETPROP DBLCLICK ' +
						'DBMEMO3 DBSETPROP DBTRAP DBUSED DDE DDEABORTTRANS DDEADVISE DDEENABLED DDEEXECUTE DDEINITIATE DDELASTERROR ' +
						'DDEPOKE DDEREQUEST DDESETOPTION DDESETSERVICE DDESETTOPIC DDETERMINATE DEACTIVATE DEBUG DEBUGGER DEBUGOUT DECIMALS ' +
						'DECLARE DECLAREXMLPREFIX DECLASS DECLASSLIBRARY DEFAULT DEFAULTEXT DEFAULTFILEPATH DEFAULTSOURCE DEFAULTVALUE DEFBUTTON DEFBUTTONORIG ' +
						'DEFHEIGHT DEFINE DEFINEWINDOWS DEFLEFT DEFOLELCID DEFTOP DEFWIDTH DEGREES DELAYBIND DELAYEDMEMOFETCH DELETE ' +
						'DELETECMD DELETECMDDATASOURCE DELETECMDDATASOURCETYPE DELETECOLUMN DELETED DELETEMARK DELETETABLES DELETETRIGGER DELIMITED DELIMITERS DESC ' +
						'DESCENDING DESCRIPTION DESIGN DESKTOP DESTROY DETAILS DEVELOPMENT DEVICE DIF DIFFERENCE DIMENSION ' +
						'DIR DIRECTORY DISABLED DISABLEDBACKCOLOR DISABLEDBYEOF DISABLEDFORECOLOR DISABLEDITEMBACKCOLOR DISABLEDITEMFORECOLOR DISABLEDPICTURE DISABLEENCODE DISCONNECTED ' +
						'DISKSPACE DISPLAY DISPLAYCOUNT DISPLAYORIENTATION DISPLAYPATH DISPLAYVALUE DISPLAYVALUEDIRTY DISPLOGIN DISPPAGEHEIGHT DISPPAGEWIDTH DISPWARNINGS ' +
						'DISTINCT DLL DLLS DMY DO DOC DOCK DOCKABLE DOCKED DOCKPOSITION DOCMD ' +
						'DOCREATE DOCUMENTFILE DODEFAULT DOEVENTS DOHISTORY DOMESSAGE DOS DOSCROLL DOSMEM DOSTATUS DOUBLE ' +
						'DOVERB DOW DOWN DOWNCLICK DOWNPICTURE DRAG DRAGDROP DRAGICON DRAGMODE DRAGOVER DRAGSTATE ' +
						'DRAW DRAWMODE DRAWSTYLE DRAWWIDTH DRIVER DRIVETYPE DROP DROPDOWN DROPOFFLINE DTOC DTOR ' +
						'DTOS DTOT DUPLEX DYNAMICALIGNMENT DYNAMICBACKCOLOR DYNAMICCURRENTCONTROL DYNAMICFONTBOLD DYNAMICFONTITALIC DYNAMICFONTNAME DYNAMICFONTOUTLINE DYNAMICFONTSHADOW ' +
						'DYNAMICFONTSIZE DYNAMICFONTSTRIKETHRU DYNAMICFONTUNDERLINE DYNAMICFORECOLOR DYNAMICINPUTMASK DYNAMICLINEHEIGHT EACH ECHO EDIT EDITBOX EDITFLAGS ' +
						'EDITOROPTIONS EDITSOURCE EDITWORK EGA25 EGA43 EJECT ELIF ELSE EMPTY EMS EMS64 ' +
						'ENABLED ENABLEDBYREADLOCK ENABLEHYPERLINKS ENCRYPT ENCRYPTED ENCRYPTION END ENDCASE ENDDEFINE ENDDO ENDFOR ' +
						'ENDFUNC ENDIF ENDPRINTJOB ENDPROC ENDSCAN ENDTEXT ENDTRY ENDWITH ENGINEBEHAVIOR ENTERFOCUS ENVIRONMENT ' +
						'ENVLEVEL EOF ERASE ERASEPAGE ERROR ERRORMESSAGE ERRORNO ESCAPE EVAL EVALUATE EVALUATECONTENTS ' +
						'EVENTHANDLER EVENTLIST EVENTS EVENTTRACKING EVL EXACT EXCEPT EXCEPTION EXCLUDE EXCLUSIVE EXE ' +
						'EXECSCRIPT EXISTS EXIT EXITFOCUS EXP EXPORT EXPRESSION EXTENDED EXTERNAL F11F12 FCHSIZE ' +
						'FCLOSE FCOUNT FCREATE FDATE FDOW FEOF FERROR FETCH FETCHASNEEDED FETCHMEMO FETCHMEMO ' +
						'FETCHMEMOCMDLIST FETCHMEMODATASOURCE FETCHMEMODATASOURCETYPE FETCHSIZE FFLUSH FGETS FIELD FIELDS FIELDSF FILE FILECLASS ' +
						'FILECLASSLIBRARY FILER FILES FILETOSTR FILL FILLCOLOR FILLSTYLE FILTER FINALLY FIND FIRSTELEMENT ' +
						'FIRSTNESTEDTABLE FIXED FKLABEL FKMAX FLAGS FLDCOUNT FLDLIST FLOAT FLOCK FLOOR FLUSH ' +
						'FOLDCONST FONT FONTBOLD FONTCHARSET FONTCLASS FONTCONDENSE FONTEXTEND FONTITALIC FONTMETRIC FONTNAME FONTOUTLINE ' +
						'FONTSHADOW FONTSIZE FONTSTRIKETHRU FONTUNDERLINE FOOTER FOPEN FOR FORCE FORCECLOSETAG FORCEEXT FORCEFOCUS ' +
						'FORCEPATH FORECOLOR FOREIGN FORM FORMAT FORMATCHANGE FORMATTEDOUTPUT FORMCOUNT FORMINDEX FORMPAGECOUNT FORMPAGEINDEX ' +
						'FORMS FORMSCLASS FORMSET FORMSETCLASS FORMSETLIB FORMSLIB FOUND FOX2X FOXCODE FOXDOC FOXFONT ' +
						'FOXGEN FOXGRAPH FOXOBJECT FOXPLUS FOXPRO FOXTASK FOXVIEW FPUTS FRACTIONDIGITS FREAD FREE ' +
						'FREEZE FRENCH FROM FRXDATASESSION FSEEK FSIZE FTIME FULL FULLNAME FULLPATH FUNCTION ' +
						'FV FW2 FWEEK FWRITE GATHER GDIPLUSGRAPHICS GENERAL GERMAN GET GET GETAUTOINCVALUE ' +
						'GETBAR GETCOLOR GETCP GETCURSORADAPTER GETDATA GETDIR GETDOCKSTATE GETENV GETEXPR GETFILE GETFLDSTATE ' +
						'GETFONT GETFORMAT GETHOST GETINTERFACE GETKEY GETLATESTVERSION GETNEXTMODIFIED GETOBJECT GETPAD GETPAGEHEIGHT GETPAGEWIDTH ' +
						'GETPEM GETPICT GETPRINTER GETRESULTSET GETS GETWORDCOUNT GETWORDNUM GLOBAL GO GOBACK GOFIRST ' +
						'GOFORWARD GOLAST GOMONTH GOTFOCUS GOTO GRAPH GRID GRIDHITTEST GRIDHORZ GRIDLINECOLOR GRIDLINES ' +
						'GRIDLINEWIDTH GRIDSHOW GRIDSHOWPOS GRIDSNAP GRIDVERT GROUP GROW HALFHEIGHT HALFHEIGHTCAPTION HANDLER HASCLIP ' +
						'HAVING HEADER HEADERCLASS HEADERCLASSLIBRARY HEADERGAP HEADERHEIGHT HEADING HEADINGS HEIGHT HELP HELPCONTEXTID ' +
						'HELPFILTER HELPON HELPTO HIDDEN HIDE HIDEAPPOBJ HIDEDOC HIDESELECTION HIGHLIGHT HIGHLIGHTBACKCOLOR HIGHLIGHTFORECOLOR ' +
						'HIGHLIGHTROW HIGHLIGHTROWLINEWIDTH HIGHLIGHTSTYLE HISTORY HMEMORY HOME HOMEDIR HOSTNAME HOTKEY HOUR HOURS ' +
						'HPROJ HSCROLLSMALLCHANGE HWND HYPERLINK IBLOCK ICASE ICON ID IDHISTORY IDLETIMEOUT IDXCOLLATE ' +
						'IF IFDEF IFNDEF IGNOREINSERT IIF IMAGE IMEMODE IMESTATUS IMPORT IN INCLUDE ' +
						'INCLUDEPAGEINOUTPUT INCREMENT INCREMENTALSEARCH INDBC INDEX INDEXES INDEXSEEK INDEXTOITEMID INFORMATION INIT INITIALSELECTEDALIAS ' +
						'INKEY INLIST INNER INPUT INPUTBOX INPUTMASK INRESIZE INSERT INSERTCMD INSERTCMDDATASOURCE INSERTCMDDATASOURCETYPE ' +
						'INSERTCMDREFRESHCMD INSERTCMDREFRESHFIELDLIST INSERTCMDREFRESHKEYFIELDLIST INSERTTRIGGER INSMODE INSTANCING INSTRUCT INT INTEGER INTEGRALHEIGHT INTENSITY ' +
						'INTERACTIVECHANGE INTERSECT INTERVAL INTO IS ISALPHA ISATTRIBUTE ISBASE64 ISBINARY ISBLANK ISCOLOR ' +
						'ISDIFFGRAM ISDIGIT ISEXCLUSIVE ISFLOCKED ISHOSTED ISLEADBYTE ISLOADED ISLOWER ISMEMOFETCHED ISMOUSE ISNULL ' +
						'ISOMETRIC ISPEN ISREADONLY ISRLOCKED ISTRANSACTABLE ISUPPER ISXMLDOMELEMENT ITALIAN ITEM ITEMBACKCOLOR ITEMDATA ' +
						'ITEMFORECOLOR ITEMIDDATA ITEMIDTOINDEX ITEMTIPS IXMLDOMELEMENT JAPAN JOIN JUSTDRIVE JUSTEXT JUSTFNAME JUSTPATH ' +
						'JUSTREADLOCKED JUSTSTEM KEY KEYBOARD KEYBOARDHIGHVALUE KEYBOARDLOWVALUE KEYCOLUMNS KEYCOMP KEYFIELD KEYFIELDLIST KEYMATCH ' +
						'KEYPRESS KEYPREVIEW KEYSET KEYSORT LABEL LANGUAGEOPTIONS LAST LASTKEY LASTPROJECT LCASE LDCHECK ' +
						'LEDIT LEFT LEFTC LEFTCOLUMN LEN LENC LENGTH LEVEL LIBRARY LIKE LIKEC ' +
						'LINE LINECONTENTS LINENO LINESLANT LINKED LINKMASTER LIST LISTBOX LISTCOUNT LISTENERTYPE LISTINDEX ' +
						'LISTITEM LISTITEMID LOAD LOADPICTURE LOADREPORT LOADXML LOCAL LOCATE LOCFILE LOCK LOCKCOLUMNS ' +
						'LOCKCOLUMNSLEFT LOCKDATASOURCE LOCKSCREEN LOG LOG10 LOGERRORS LOGOUT LONG LOOKUP LOOP LOSTFOCUS ' +
						'LOWER LPARAMETER LPARAMETERS LPARTITION LTRIM LTRJUSTIFY LUPDATE MAC MACDESKTOP MACHELP MACKEY ' +
						'MACRO MACROS MACSCREEN MAIL MAINFILE MAKETRANSACTABLE MAP19_4TOCURRENCY MAPBINARY MAPN19_4TOCURRENCY MAPVARCHAR MARGIN ' +
						'MARK MASTER MAX MAXBUTTON MAXHEIGHT MAXLEFT MAXLENGTH MAXMEM MAXRECORDS MAXTOP MAXWIDTH ' +
						'MBLOCK MCOL MD MDI MDIFORM MDOWN MDX MDY MEMBERCLASS MEMBERCLASSLIBRARY MEMLIMIT ' +
						'MEMLINES MEMO MEMORY MEMOS MEMOWIDTH MEMOWINDOW MEMVAR MENU MENUS MESSAGE MESSAGEBOX ' +
						'MESSAGES METHOD MIDDLE MIDDLECLICK MIN MINBUTTON MINHEIGHT MINIMIZE MINUS MINUTE MINWIDTH ' +
						'MKDIR MLINE MOD MODAL MODIFY MODULE MONO MONO43 MONTH MONTHNAME MOUSE ' +
						'MOUSEDOWN MOUSEENTER MOUSEICON MOUSELEAVE MOUSEMOVE MOUSEPOINTER MOUSEUP MOUSEWHEEL MOVABLE MOVE MOVED ' +
						'MOVEITEM MOVERBARS MOVERS MRKBAR MRKPAD MROW MTDLL MTON MULTILOCKS MULTISELECT MVARSIZ ' +
						'MVCOUNT MWINDOW NAME NAPTIME NATIVE NAVIGATETO NDX NEAR NEGOTIATE NEST NESTEDINTO ' +
						'NETWORK NEWINDEX NEWITEMID NEWOBJECT NEXT NEXTSIBLINGTABLE NEXTVALUE NOALIAS NOAPPEND NOCLEAR NOCLOSE ' +
						'NOCONSOLE NOCPTRANS NODATA NODATAONLOAD NODEBUG NODEFAULT NODEFINE NODELETE NODIALOG NODUP NOEDIT ' +
						'NOEJECT NOENVIRONMENT NOFILTER NOFLOAT NOFOLLOW NOGROW NOINIT NOLGRID NOLINK NOLOCK NOLOG ' +
						'NOMARGIN NOMDI NOMENU NOMINIMIZE NOMODIFY NOMOUSE NONE NOOPTIMIZE NOORGANIZE NOOVERWRITE NOPROJECTHOOK ' +
						'NOPROMPT NOREAD NOREFRESH NOREQUERY NORGRID NORM NORMAL NORMALIZE NOSAVE NOSHADOW NOSHOW ' +
						'NOSPACE NOT NOTAB NOTE NOTIFY NOTIFYCONTAINER NOUPDATE NOVALIDATE NOVERIFY NOW NOWAIT ' +
						'NOWINDOW NOWRAP NOZOOM NPV NTOM NULL NULLDISPLAY NULLSTRING NUMBER NUMBEROFELEMENTS NUMERIC ' +
						'NUMLOCK NVL OBJECT OBJECTS OBJNUM OBJREF OBJTOCLIENT OBJVAR OCCURS ODBCHDBC ODBCHSTMT ' +
						'ODOMETER OEMTOANSI OF OFF OLDVAL OLEBASECONTROL OLEBOUNDCONTROL OLECLASS OLECLASSID OLECLASSIDISPOUT OLECOMPLETEDRAG ' +
						'OLECONTROL OLECONTROLCONTAINER OLEDRAG OLEDRAGDROP OLEDRAGMODE OLEDRAGOVER OLEDRAGPICTURE OLEDROPEFFECTS OLEDROPHASDATA OLEDROPMODE OLEDROPTEXTINSERTION ' +
						'OLEGIVEFEEDBACK OLEIDISPATCHINCOMING OLEIDISPATCHOUTGOING OLEIDISPINVALUE OLEIDISPOUTVALUE OLELCID OLEOBJECT OLEOBJECTS OLEPUBLIC OLEREQUESTPENDINGTIMEOUT OLEREQUESTPENDINGTIMOU ' +
						'OLESERVERBUSYRAISEERRO OLESERVERBUSYRAISEERROR OLESERVERBUSYTIMEOUT OLESERVERBUSYTIMOUT OLESETDATA OLESTARTDRAG OLETYPEALLOWED ON ONETOMANY ONLINE ONLY ' +
						'ONMOVEITEM ONPREVIEWCLOSE ONRESIZE OPEN OPENEDITOR OPENTABLES OPENVIEWS OPENWINDOW OPTIMIZE OPTIONBUTTON OPTIONGROUP ' +
						'OR ORACLE ORDER ORDERDIRECTION ORIENTATION OS OTHERWISE OUTER OUTPUT OUTPUTPAGE OUTPUTPAGECOUNT ' +
						'OUTPUTTYPE OUTSHOW OVERLAY OVERWRITE PACK PACKETSIZE PAD PADC PADL PADL PADPROMPT ' +
						'PADR PAGE PAGECOUNT PAGEFRAME PAGEHEIGHT PAGENO PAGEORDER PAGES PAGETOTAL PAGEWIDTH PAINT ' +
						'PALETTE PANEL PANELLINK PAPERLENGTH PAPERSIZE PAPERWIDTH PARAMETERS PARENT PARENTALIAS PARENTCLASS PARENTTABLE ' +
						'PARTITION PASSWORD PASSWORDCHAR PATH PATTERN PAUSE PAYMENT PCOL PCOUNT PDOX PDSETUP ' +
						'PEMSTATUS PEN PERCENT PFS PI PICTURE PICTUREMARGIN PICTUREPOSITION PICTURESELECTIONDISPLAY PICTURESPACING PICTUREVAL ' +
						'PIVOT PIXELS PLAIN PLATFORM PLAY POINT POLYPOINTS POP POPUP POPUPS POWER ' +
						'PRECISION PREFERENCE PREPARED PRESERVEWHITESPACE PRETEXT PREVIEW PREVIEWCONTAINER PRIMARY PRIMARYKEY PRINT PRINTER ' +
						'PRINTFORM PRINTJOB PRINTJOBNAME PRINTQUALITY PRINTSTATUS PRIVATE PRMBAR PRMPAD PROCEDURE PROCEDURES PROCESSID ' +
						'PRODUCTION PROGCACHE PROGID PROGRAM PROGRAMMATICCHANGE PROGWORK PROJECT PROJECTCLICK PROJECTHOOK PROJECTHOOKCLASS PROJECTHOOKLIBRARY ' +
						'PROMPT PROPER PROTECTED PROW PRTINFO PSET PUBLIC PUSH PUTFILE PV QPR ' +
						'PPR QUARTER QUERY QUERYADDFILE QUERYMODIFYFILE QUERYNEWFILE QUERYREMOVEFILE QUERYRUNFILE QUERYTIMEOUT QUERYUNLOAD QUIETMODE ' +
						'QUIT RADIANS RAISE RAISEEVENT RAND RANDOM RANGE RANGEHIGH RANGELOW RAT RATC ' +
						'RATLINE RD RDLEVEL READ READACTIVATE READBACKCOLOR READBORDER READCOLORS READCYCLE READDEACTIVATE READERROR ' +
						'READEXPRESSION READFILLER READFORECOLOR READKEY READLOCK READMETHOD READMOUSE READOBJECT READONLY READSAVE READSHOW ' +
						'READSIZE READTIMEOUT READVALID READWHEN RECALL RECCOUNT RECENTLYUSEDFILES RECNO RECOMPILE RECORD RECORDMARK ' +
						'RECORDREFRESH RECORDSOURCE RECORDSOURCETYPE RECOVER RECSIZE RECT RECTCLASS RECYCLE REDIT REFERENCE REFERENCES ' +
						'REFRESH REFRESHALIAS REFRESHCMD REFRESHCMDDATASOURCE REFRESHCMDDATASOURCETYPE REFRESHIGNOREFIELDLIST REFRESHTIMESTAMP REINDEX RELATEDCHILD RELATEDTABLE RELATEDTAG ' +
						'RELATION RELATIONALEXPR RELATIVE RELATIVECOLUMN RELATIVEROW RELEASE RELEASEERASE RELEASETYPE RELEASEWINDOWS RELEASEXML REMOTE ' +
						'REMOVE REMOVEFROMSCC REMOVEITEM REMOVELISTITEM REMOVEOBJECT REMOVEPROPERTY RENAME RENDER REPEAT REPLACE REPLICATE ' +
						'REPORT REPORTBEHAVIOR REPORTLISTENER REPROCESS REQUERY REQUESTDATA REQUIRED RESET RESETTODEFAULT RESHEIGHT RESIZABLE ' +
						'RESIZE RESOURCE RESOURCEON RESOURCES RESOURCETO RESPECTCURSORCP RESPECTNESTING REST RESTORE RESTRICT RESUME ' +
						'RESWIDTH RETRY RETURN REVERTOFFLINE RGB RGBSCHEME RIGHT RIGHTC RIGHTCLICK RIGHTTOLEFT RLOCK ' +
						'RMDIR ROLLBACK ROLLOVER ROTATEFLIP ROTATION ROUND ROW ROWCOLCHANGE ROWHEIGHT ROWSET ROWSOURCE ' +
						'ROWSOURCETYPE RPD RSTOCURSOR RTLJUSTIFY RTOD RTRIM RULEEXPRESSION RULETEXT RUN RUNSCRIPT RUNTIME ' +
						'RVIEW SAFETY SAME SAMPLE SAVE SAVEAS SAVEASCLASS SAVEPICTURE SAY SCALE SCALEMODE ' +
						'SCALEUNITS SCAN SCATTER SCCDESTROY SCCINIT SCCPROVIDER SCCSTATUS SCHEME SCOLS SCOREBOARD SCREEN ' +
						'SCREENS SCROLL SCROLLBARS SCROLLED SCROLLSCROLLBARS SDF SDIFORM SEC SECOND SECONDS SEEK ' +
						'SELECT SELECTCMD SELECTED SELECTEDBACKCOLOR SELECTEDFORECOLOR SELECTEDID SELECTEDITEMBACKCOLOR SELECTEDITEMFORECOLOR SELECTION SELECTIONNAMESPACES SELECTONENTRY ' +
						'SELFEDIT SELLENGTH SELSTART SELTEXT SENDGDIPLUSIMAGE SENDUPDATES SEPARATOR SERVERCLASS SERVERCLASSLIBRARY SERVERHELPFILE SERVERNAME ' +
						'SERVERPROJECT SET SETALL SETDATA SETDEFAULT SETFLDSTATE SETFOCUS SETFORMAT SETMAIN SETRESULTSET SETUP ' +
						'SETVAR SETVIEWPORT SHADOWS SHAPE SHARECONNECTION SHARED SHEET SHELL SHIFT SHORTCUT SHOW ' +
						'SHOWDOC SHOWINTASKBAR SHOWOLECONTROLS SHOWOLEINSERTABLE SHOWTIPS SHOWVCXS SHOWWHATSTHIS SHOWWINDOW SHUTDOWN SIGN SIN ' +
						'SINGLE SIZABLE SIZE SIZEBOX SKIP SKIPFORM SKPBAR SKPBAR SKPPAD SOM SOME ' +
						'SORT SORTED SORTWORK SOUNDEX SOURCENAME SOURCETYPE SPACE SPARSE SPECIALEFFECT SPINNER SPINNERHIGHVALUE ' +
						'SPINNERLOWVALUE SPLITBAR SQL SQLASYNCHRONOUS SQLBATCHMODE SQLCANCEL SQLCOLUMNS SQLCOMMIT SQLCONNECT SQLCONNECTTIMEOUT SQLDISCONNECT ' +
						'SQLDISPLOGIN SQLDISPWARNINGS SQLEXEC SQLGETPROP SQLIDLEDISCONNECT SQLIDLETIMEOUT SQLL SQLMORERESULTS SQLPREPARE SQLQUERYTIMEOUT SQLROLLBACK ' +
						'SQLSETPROP SQLSTRINGCONNECT SQLTABLES SQLTRANSACTIONS SQLWAITTIME SQRT SROWS STACKLEVEL STANDALONE STARTMODE STATUS ' +
						'STATUSBAR STATUSBARTEXT STD STEP STICKY STORE STR STRCONV STRETCH STREXTRACT STRICTDATE ' +
						'STRICTDATEENTRY STRING STRTOFILE STRTRAN STRUCTURE STUFF STUFFC STYLE SUBCLASS SUBSTR SUBSTRC ' +
						'SUBSTRING SUM SUMMARY SUPPORTSLISTENERTYPE SUSPEND SYLK SYS SYSFORMATS SYSMENU SYSMENUS SYSMETRIC ' +
						'SYSTEM SYSTEMREFCOUNT TAB TABFIXEDHEIGHT TABFIXEDWIDTH TABHIT TABINDEX TABLE TABLEPROMPT TABLEREFRESH TABLEREVERT ' +
						'TABLES TABLEUPDATE TABLEVALIDATE TABORDERING TABORIENTATION TABS TABSTOP TABSTRETCH TABSTYLE TAG TAGCOUNT ' +
						'TAGNO TALK TAN TARGET TASKPANE TEDIT TERMINATEREAD TEXT TEXTBOX TEXTHEIGHT TEXTMERGE ' +
						'TEXTWIDTH THEMES THEN THIS THISFORM THISFORMSET THREADID THROW TIME TIMEOUT TIMER ' +
						'TIMESTAMP TIMESTAMPDIFF TIMESTAMPFIELDLIST TITLEBAR TITLES TMPFILES TO TOCURSOR TOOLBAR TOOLBOX TOOLTIPTEXT ' +
						'TOP TOPIC TOPINDEX TOPITEMID TOTAL TOXML TOXML TRACKING TRANSACTION TRANSACTIONS TRANSFORM ' +
						'TRAP TRBETWEEN TRIGGER TRIM TRUNCATE TRY TTOC TTOD TTOPTION TWOPASSPROCESS TXNLEVEL ' +
						'TXTWIDTH TYPE TYPEAHEAD TYPELIBCLSID TYPELIBDESC TYPELIBNAME UCASE UDFPARMS UIENABLE UNBINDEVENT UNBINDS ' +
						'UNDEFINE UNDOCHECKOUT UNDOCK UNICODE UNION UNIQUE UNLOAD UNLOADREPORT UNLOCK UNLOCKDATASOURCE UNNEST ' +
						'UNPACK UP UPCLICK UPDATABLE UPDATABLEFIELDLIST UPDATE UPDATECMD UPDATECMDDATASOURCE UPDATECMDDATASOURCETYPE UPDATECMDREFRESHCMD UPDATECMDREFRESHFIELDLIST ' +
						'UPDATECMDREFRESHKEYFIELDLIST UPDATECMDSOURCE UPDATECMDSOURCETYPE UPDATED UPDATEDATASOURCE UPDATEGRAM UPDATEGRAMSCHEMALOCATION UPDATENAME UPDATENAMELIST UPDATESTATUS UPDATETRIGGER ' +
						'UPDATETYPE UPPER UPSIZING USA USE USECODEPAGE USECURSORSCHEMA USED USEDEDATASOURCE USEMEMOSIZE USERID ' +
						'USERS USERVALUE USETRANSACTIONS UTF8ENCODED VAL VALID VALIDATE VALUE VALUEDIRTY VALUES VAR ' +
						'VARBINARY VARCHAR VARCHARMAPPING VARREAD VARTYPE VERB VERSION VERSIONCOMMENTS VERSIONCOMPANY VERSIONCOPYRIGHT VERSIONDESCRIPTION ' +
						'VERSIONNUMBER VERSIONPRODUCT VERSIONTRADEMARKS VFPXMLPROGID VGA25 VGA50 VIEW VIEWPORTHEIGHT VIEWPORTLEFT VIEWPORTTOP VIEWPORTWIDTH ' +
						'VIEWS VISIBLE VISUALEFFECT VOLUME VSCROLLSMALLCHANGE WAIT WAITTIME WASACTIVE WASOPEN WBORDER WCHILD ' +
						'WCOLS WDOCKABLE WEEK WEXIST WFONT WHATSTHISBUTTON WHATSTHISHELP WHATSTHISHELPID WHATSTHISMODE WHEN WHERE ' +
						'WHERETYPE WHEREWHERETYPE WHILE WIDTH WINDCMD WINDHELP WINDMEMO WINDMENU WINDMODIFY WINDOW WINDOWLIST ' +
						'WINDOWNTILIST WINDOWS WINDOWSTATE WINDOWTYPE WINDQUERY WINDSCREEN WINDSNIP WINDSTPROC WITH WIZARDPROMPT WK1 ' +
						'WK3 WKS WLAST WLCOL WLROW WMAXIMUM WMINIMUM WONTOP WORDWRAP WORKAREA WOUTPUT ' +
						'WP WPARENT WR1 WRAP WRAPCHARINCDATA WRAPINCDATA WRAPMEMOINCDATA WREAD WRITE WRITEEXPRESSION WRITEMETHOD ' +
						'WRK WROWS WTITLE WVISIBLE XCMDFILE XL5 XL8 XLS XML XMLADAPTER XMLCONSTRAINTS ' +
						'XMLFIELD XMLNAME XMLNAMEISXPATH XMLNAMESPACE XMLPREFIX XMLSCHEMALOCATION XMLTABLE XMLTOCURSOR XMLTYPE XMLUPDATEGRAM XSDFRACTIONDIGITS ' +
						'XSDMAXLENGTH XSDTOTALDIGITS XSDTYPE YEAR YRESOLUTION ZAP ZOOM ZOOM WINDOW ZOOMBOX ZORDER ZORDERSET ' +
						'AND NOT NULL OR T F .AND. .NOT. .NULL. .OR. .T. .F.' +
						'_ACTIVATEHANDLER _ACTIVATEIDLE _ACTIVATEMENU _ALEN _ALIGNMENT _ALLOCA _ALLOCHAND _ALLOCMEMO _ASCIICOLS _ASCIIROWS _ASSIST ' +
						'_BEAUTIFY _BOX _BREAKPOINT _BROWSER _BUILDER _CALCMEM _CALCVALUE _CLIPTEXT _CODESENSE _CONVERTER _COUNTITEMS ' +
						'_COVERAGE _CUROBJ _DATETIMEFORMAT _DBAPPEND _DBLCLICK _DBLOCK _DBREAD _DBRECCOUNT _DBRECNO _DBREPLACE _DBREWIND ' +
						'_DBSEEK _DBSKIP _DBSTATUS _DBUNLOCK _DBUNWIND _DBWRITE _DEACTIVATEHANDLER _DEACTIVATEIDLE _DEACTIVATEMENU _DEFAULTPROCESS _DIALOG ' +
						'_DIARYDATE _DISPOSEITEM _DISPOSEMENU _DOS _EDACTIVE _EDCLOSEFILE _EDCOPY _EDCUT _EDDELETE _EDGETCHAR _EDGETENV ' +
						'_EDGETLINENUM _EDGETLINEPOS _EDGETPOS _EDGETSTR _EDINDENT _EDINSERT _EDLASTERROR _EDOPENFILE _EDPASTE _EDPOSINVIEW _EDREDO ' +
						'_EDREVERT _EDSAVE _EDSCROLLTOPOS _EDSCROLLTOSEL _EDSELECT _EDSENDKEY _EDSETENV _EDSETPOS _EDSKIPLINES _EDUNDO _EDUNDOON ' +
						'_ERROR _ERRORINFO _EVALUATE _EXECUTE _FCHSIZE _FCLOSE _FCOPY _FCREATE _FEOF _FERROR _FFLUSH ' +
						'_FGETS _FINDMEMO _FINDVAR _FINDWINDOW _FINDWINDOWP _FONTCLASS _FOPEN _FOXBASECLASS _FOXCODE _FOXDOC _FOXDRAGDROP ' +
						'_FOXDROPTARGET _FOXGRAPH _FOXREF _FOXTASK _FPUTS _FREAD _FREEHAND _FREEOBJECT _FSEEK _FWRITE _GALLERY ' +
						'_GENGRAPH _GENHTML _GENMENU _GENPD _GENSCRN _GENXTAB _GETAPIHANDLE _GETEXPR _GETHANDSIZE _GETITEMCMDKEY _GETITEMID ' +
						'_GETITEMSUBMENU _GETITEMTEXT _GETNEWITEMID _GETNEWMENUID _GETNEXTEVENT _GETOBJECTPROPERTY _GLOBALTOLOCAL _GLOBALTOLOCALP _HANDTOPTR _HELPWEBDEVONLY _HELPWEBDIRECTORY ' +
						'_HELPWEBFILLER1 _HELPWEBFILLER2 _HELPWEBMSDNONLINE _HELPWEBMSFTHOMEPAGE _HELPWEBSEARCH _HELPWEBTUTORIAL _HELPWEBVFPFAQ _HELPWEBVFPFREESTUFF _HELPWEBVFPHOMEPAGE _HELPWEBVFPONLINESUPPORT _HELPWEBVFPSENDFEEDBACK ' +
						'_HELPWEBVSPRODNEWS _HLOCK _HUNLOCK _INCLUDE _INCSEEK _INDENT _INKEY _LMARGIN _LOAD _MAC _MAC ' +
						'_MBR_APPND _MBR_CPART _MBR_DELET _MBR_FONT _MBR_GOTO _MBR_GRID _MBR_LINK _MBR_MODE _MBR_MVFLD _MBR_MVPRT _MBR_SEEK ' +
						'_MBR_SP100 _MBR_SP200 _MBR_SZFLD _MBROWSE _MDA_APPND _MDA_AVG _MDA_BROW _MDA_CALC _MDA_COPY _MDA_COUNT _MDA_LABEL ' +
						'_MDA_PACK _MDA_REPRT _MDA_RINDX _MDA_SETUP _MDA_SORT _MDA_SP100 _MDA_SP200 _MDA_SP300 _MDA_SUM _MDA_TOTAL _MDATA ' +
						'_MDIARY _MED_BEAUT _MED_BLDEX _MED_CLEAR _MED_COPY _MED_CUT _MED_CVTST _MED_EXBLK _MED_FIND _MED_FINDA _MED_GOTO ' +
						'_MED_INSOB _MED_LINK _MED_OBJ _MED_PASTE _MED_PREF _MED_PSTLK _MED_REDO _MED_REPL _MED_REPLA _MED_SLCTA _MED_SP100 ' +
						'_MED_SP200 _MED_SP300 _MED_SP400 _MED_SP500 _MED_SP600 _MED_UNDO _MEDIT _MEMAVAIL _MEMBERDATA _MEMCMP _MEMFILL ' +
						'_MEMMOVE _MEMOCHAN _MEMOSIZE _MENUDESIGNER _MENUID _MENUINTERACT _MFI_CLALL _MFI_CLOSE _MFI_EXPORT _MFI_IMPORT _MFI_NEW ' +
						'_MFI_OPEN _MFI_PGSET _MFI_PREVU _MFI_PRINT _MFI_PRINTONECOPY _MFI_QUIT _MFI_REVRT _MFI_SAVAS _MFI_SAVE _MFI_SAVEASHTML _MFI_SEND ' +
						'_MFI_SETUP _MFI_SP100 _MFI_SP200 _MFI_SP300 _MFI_SP400 _MFI_SYSPRINT _MFILE _MFILER _MFIRST _MLABEL _MLAST ' +
						'_MLINE _MMACRO _MMACRO _MMB_DELET _MMB_GENER _MMB_GOPTS _MMB_INSBR _MMB_INSRT _MMB_MOPTS _MMB_PREVU _MMB_QUICK ' +
						'_MMB_SP100 _MMB_SP200 _MMB_SP300 _MMBLDR _MOUSEEVENTS _MOUSEEVENTSNODBL _MOUSEPOS _MOUSEPOSP _MPR_BEAUT _MPR_CANCL _MPR_COMPL ' +
						'_MPR_DO _MPR_DOCUM _MPR_FORMWZ _MPR_GENER _MPR_GRAPH _MPR_RESUM _MPR_SP100 _MPR_SP200 _MPR_SP300 _MPR_SUSPEND _MPROG ' +
						'_MPROJ _MRC_APPND _MRC_CHNGE _MRC_CONT _MRC_DELET _MRC_GOTO _MRC_LOCAT _MRC_RECAL _MRC_REPL _MRC_SEEK _MRC_SP100 ' +
						'_MRC_SP200 _MRECORD _MREPORT _MRQBE _MSCREEN _MSM_DATA _MSM_EDIT _MSM_FILE _MSM_FORMAT _MSM_PROG _MSM_RECRD ' +
						'_MSM_SYSTM _MSM_TEXT _MSM_TOOLS _MSM_VIEW _MSM_WINDO _MST_ABOUT _MST_ASCII _MST_CALCU _MST_CAPTR _MST_DBASE _MST_DIARY ' +
						'_MST_DOCUM _MST_FILER _MST_HELP _MST_HPHOW _MST_HPSCH _MST_MACRO _MST_MSDNC _MST_MSDNI _MST_MSDNS _MST_OFFICE _MST_PUZZL ' +
						'_MST_SAMP _MST_SP100 _MST_SP200 _MST_SP300 _MST_SPECL _MST_TECHS _MSYSMENU _MSYSTEM _MTABLE _MTB_APPND _MTB_CPART ' +
						'_MTB_DELET _MTB_DELRC _MTB_GOTO _MTB_LINK _MTB_MVFLD _MTB_MVPRT _MTB_PROPS _MTB_RECAL _MTB_SP100 _MTB_SP200 _MTB_SP300 ' +
						'_MTB_SP400 _MTB_SZFLD _MTI_CALLSTACK _MTI_DBGOUT _MTI_LOCALS _MTI_RUNACTIVEDOC _MTI_TRACE _MTI_WATCH _MTL_BROWSER _MTL_COVERAGE _MTL_DEBUGGER ' +
						'_MTL_GALLERY _MTL_MACRO _MTL_OPTNS _MTL_SP100 _MTL_SP200 _MTL_SP300 _MTL_SP400 _MTL_SPELL _MTL_WZRDS _MTOOLS _MVI_TOOLB ' +
						'_MVIEW _MWI_ARRAN _MWI_CLEAR _MWI_CMD _MWI_COLOR _MWI_DEBUG _MWI_HIDE _MWI_HIDEA _MWI_MIN _MWI_MOVE _MWI_ROTAT ' +
						'_MWI_SHOWA _MWI_SIZE _MWI_SP100 _MWI_SP200 _MWI_TOOLB _MWI_TRACE _MWI_VIEW _MWI_ZOOM _MWINDOW _MWIZARDS _MWZ_ALL ' +
						'_MWZ_APPLIC _MWZ_APPLICATION _MWZ_DATABASE _MWZ_FORM _MWZ_FOXDOC _MWZ_IMPORT _MWZ_LABEL _MWZ_MAIL _MWZ_PIVOT _MWZ_QUERY _MWZ_REPRT ' +
						'_MWZ_SETUP _MWZ_TABLE _MWZ_UPSIZING _MWZ_WEBPUBLISHING _NAMETABLEINDEX _NETWARE _NEWITEM _NEWMENU _NEWVAR _OBJECTBROWSER _OBJECTCMP ' +
						'_OBJECTREFERENCE _OBJECTRELEASE _OLEBASECONTROL _OLEDRAGDROP _ONSELECTION _ORACLE _PADVANCE _PAGENO _PAGETOTAL _PBPAGE _PCOLNO ' +
						'_PCOPIES _PDPARMS _PDRIVER _PDSETUP _PECODE _PEJECT _PEPAGE _PFORM _PLENGTH _PLINENO _PLOFFSET ' +
						'_PPITCH _PQUALITY _PRETEXT _PSCODE _PSPACING _PUTCHR _PUTSTR _PUTVALUE _PWAIT _RECTCLASS _RELEASE ' +
						'_REPORTBUILDER _REPORTOUTPUT _REPORTPREVIEW _RETCHAR _RETCURRENCY _RETDATESTR _RETDATETIMESTR _RETFLOAT _RETINT _RETLOGICAL _RETVAL ' +
						'_RMARGIN _RUNACTIVEDOC _SAMPLES _SCCTEXT _SCREEN _SETHANDSIZE _SETITEMCMDKEY _SETITEMSUBMENU _SETITEMTEXT _SETMENUPOINT _SETMENUPOINTP ' +
						'_SETOBJECTPROPERTY _SHELL _SPELLCHK _SQLSERVER _STARTUP _STORE _STRCMP _STRCPY _STRLEN _TABS _TALLY ' +
						'_TASKLIST _TASKPANE _TEXT _THROTTLE _TOOLBOX _TOOLTIPTIMEOUT _TRANSPORT _TRIGGERLEVEL _UNIX _USERERROR _VFP ' +
						'_VIEWPORT _VSBUILD _WATTR _WBOTTOM _WBOTTOMP _WCLEAR _WCLEARRECT _WCLEARRECTP _WCLOSE _WEBDEVONLY _WEBMENU ' +
						'_WEBMSFTHOMEPAGE _WEBVFPHOMEPAGE _WEBVFPONLINESUPPORT _WFINDTITLE _WGETCURSOR _WGETCURSORP _WGETOBJECTCLIENTWINDOW _WGETOBJECTWINDOW _WGETPORT _WHEIGHT _WHEIGHTP ' +
						'_WHIDE _WHTOHWND _WINDOWS _WIZARD _WLEFT _WLEFTP _WMAINWINDOW _WMOVE _WMOVEP _WONTOP _WOPEN ' +
						'_WOPENP _WPOSCURSOR _WPOSCURSORP _WPUTCHR _WPUTSTR _WRAP _WRIGHT _WRIGHTP _WSCROLL _WSCROLLP _WSELECT ' +
						'_WSENDBEHIND _WSETATTR _WSETPORT _WSETTITLE _WSHOW _WSIZE _WSIZEP _WTITLE _WTOP _WTOPP _WWIDTH ' +
						'_WWIDTHP _WZOOM';

		this.regexList = [
			{ regex: /^\s*\*.*$/gm,									css: 'comments' },			// one line comments
			{ regex: /&&(.*)$/gm,										css: 'comments' },			// inline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },			// strings
			{ regex: /^\s*#.*$/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),	css: 'keyword' }			// vb keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['foxpro'];

	SyntaxHighlighter.brushes.Foxpro = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
