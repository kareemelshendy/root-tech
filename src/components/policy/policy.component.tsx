import { Accordion } from '@/components';
import styles from './policy.module.scss';
import { Fragment } from 'react';
import Link from 'next/link';
interface Props {}

export const Policy = () => {
	const data = [
		{
			title: 'Geltungsbereich',
			desc: 'Mit Vertragsabschluss erkennt der Kunde die AGB von IROOT Technoligy GmbH, nachfolgend Auftragnehmer genannt, für die gesamte Geschäftsbeziehung an. Der Kunde hat diese zur Kenntnis genommen. Die AGB gelten somit und sind Vertragsbestandteil. Entgegenstehende oder von den AGB abweichende Bedingungen des Auftraggebers bedürfen der Schriftform und der ausdrücklichen Zustimmung des Auftragnehmers. 1.2 Im Rahmen der Kundenbetreuung und Auftragsbearbeitung werden Kundendaten gespeichert. Der Auftraggeber erklärt hiermit sein Einverständnis. 1.3 Der Auftragnehmer behält sich das Recht vor, diese Bedingungen zu ändern. Mit Bekanntgabe der Änderung bzw. Zustellung der neuen Bedingungen an den Auftraggeber werden diese sofort wirksam, sofern der Auftraggeber nicht innerhalb von 10 Tagen schriftlich widersprochen hat. ',
		},
		{
			title: 'Grundlagen des Vertrages',
			desc: 'Alle Angebote des Auftragnehmers sind freibleibend. Sie sind erst nach schriftlicher Bestätigung verbindlich. Vertragliche Vereinbarungen zwischen dem Auftraggeber und dem Auftragnehmer bedürfen der Schriftform. Auch eine E-Mail als Auftragsbestätigung ist rechtsverbindlich. Mit der schriftlichen Bestätigung ist der Vertrag geschlossen. 2.2 Mit der Auftragserteilung erklärt der Auftraggeber, dass er das vom Auftragnehmer erstellte Angebotskonzept und die dem Angebot zugrundeliegenden Tatsachen und Informationen als verbindliche Vertragsgrundlage annimmt. ',
		},
		{
			title: 'Leistungen',
			desc: 'Der Umfang der zu erbringenden Leistungen ergibt sich aus dem Angebot des Auftragnehmers, den mit dem Auftraggeber individuell vereinbarten Arbeiten und dem daraus resultierenden schriftlichen Vertrag oder der Auftragsbestätigung. 3.2 Vom Auftraggeber gewünschte Änderungen oder Ergänzungen der Leistung sind gesondert zu vereinbaren und werden nach Zeitaufwand zusätzlich in Rechnung gestellt. Der Auftragnehmer kann die Ausführung der Leistung verweigern, wenn nachträgliche Änderungen durch den Auftraggeber zu einer wesentlichen Änderung des Vertrages führen. Kommt eine Einigung über die Änderung der Leistung nicht zustande, so hat der Auftragnehmer den Auftrag entsprechend der getroffenen Vereinbarung auszuführen. 3.3 Soweit Leistungsfristen vereinbart sind, verlängern sich diese im Falle einer Änderung oder Ergänzung des Leistungsgegenstandes. ',
		},
		{
			title: 'Fristen',
			desc: 'Angaben über Leistungs- und Liefertermine sind unverbindlich, es sei denn, der Auftragnehmer hat einen Liefertermin schriftlich verbindlich zugesagt. Das Recht zur Selbstbelieferung bleibt stets vorbehalten; der Auftragnehmer haftet dem Auftraggeber nur für die ordnungsgemäße Ausführung von Aufträgen an Dritte. 4.2 Vereinbarte Leistungs- und Lieferfristen verlängern sich um den Zeitraum, in dem der Auftragnehmer durch Umstände, die er nicht zu vertreten hat (z.B. höhere Gewalt, unverschuldeter Ausfall von Mitarbeitern oder technischen Einrichtungen, Nichtbelieferung durch Zulieferer), an der Leistungserbringung gehindert ist, sowie um eine angemessene Anlaufzeit nach dem Hindernis. Dies gilt auch für die Zeit, in der der Auftragnehmer auf Informationen oder Mitwirkungshandlungen des Auftraggebers wartet. 4.3 Der Auftragnehmer gerät erst durch eine Mahnung in Verzug. Alle Mahnungen und Fristsetzungen des Auftraggebers bedürfen zu ihrer Wirksamkeit der Schriftform. Nachfristen müssen angemessen sein und mindestens 20 Arbeitstage betragen. § 5 Kooperationspflichten 5.1 Kooperationspflichten bestehen zwischen dem Auftraggeber und einem für das Projekt verantwortlichen Mitarbeiter, den der Auftragnehmer als Ansprechpartner für Auskünfte und die Entgegennahme von Weisungen benennt. 5.2 Der Auftraggeber stellt dem Auftragnehmer unentgeltlich alle für die vertragliche Leistungserbringung erforderlichen Informationen zur Verfügung. ',
		},
		{
			title: 'Abnahme',
			desc: 'Der Auftragnehmer ist berechtigt, bei Lieferung und Leistung eine schriftliche Erklärung des Auftraggebers zu verlangen, dass die Lieferung oder Leistung richtig, vollständig oder mangelfrei ist. 6.2 Wird diese Erklärung nicht bei der Lieferung/Leistung abgegeben, so hat sie innerhalb von drei Wochen nach der Lieferung/Leistung zu erfolgen. Die Erklärung kann vom Besteller nur dann verweigert werden, wenn die Lieferung oder Leistung mit wesentlichen Mängeln behaftet ist. Die vertragsgemäße Leistung oder Lieferung wird durch eine Funktionsprüfung erbracht. Diese Funktionsprüfung umfasst die Überprüfung sämtlicher vertraglich festgelegter Anforderungen in den wesentlichen Punkten. 6.3 Die Erklärung nach Absatz 1 gilt auch dann als abgegeben, wenn der Besteller die Lieferung oder Leistung länger als zwei Wochen nach Ablieferung beanstandet oder in sonstiger Weise, z.B. durch Schweigen auf eine Aufforderung zur Abnahme oder durch Zahlung der Vergütung, sein Einverständnis erklärt. 6.4 Der Besteller hat Mängel schriftlich unter genauer Beschreibung der Mängel und ihrer Symptome zu rügen. ',
		},
		{
			title: 'Preise/Vergütung',
			desc: 'Zu den vom Auftragnehmer genannten Preisen kommt die gesetzliche Mehrwertsteuer hinzu. 7.2 Wird auf Wunsch des Auftraggebers oder aus anderen Gründen, die in seinem Einflussbereich liegen, nicht oder nicht sofort nach Erledigung des Auftrages, sondern später geliefert bzw. fakturiert und haben sich die Preise des Auftragnehmers zwischenzeitlich geändert, so werden die am Tag der Lieferung gültigen Preise berechnet. 7.3 Teilbeträge des Endpreises, die bei langfristigen Aufträgen bereits während der Bearbeitung des Auftrages erbracht werden, sind auf den Endbetrag anzurechnen. 7.4 Zahlungen sind sofort nach Zustellung der Rechnung ohne Abzug zu leisten. 7.5 Anfallende Kosten, insbesondere Inkassospesen, Rücklastschriftkosten von Kreditinstituten bei Nichteinlösung von Einzugsermächtigungen, Kosten für Bargeldtransfer gehen zu Lasten des Auftraggebers.',
		},
		{
			title: 'Preise/Vergütung',
			desc: 'Die Forderungen des Auftragnehmers sind spätestens 10 Tage nach Rechnungsstellung zur Zahlung fällig. Bei Zahlungsverzug des Auftraggebers ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 8 % über dem Basiszinssatz gemäß §§ 247, 288 II BGB zu berechnen. Bei Verbrauchergeschäften 5 % über dem Basiszinssatz nach §§ 247, 288 I BGB zu verlangen. 7.7 Treten bei Lieferanten oder anderen Unternehmen Preisänderungen ein, die für den Auftragnehmer im Vorfeld nicht vorhersehbar waren, so werden diese dem Endpreis hinzugerechnet. 7.8 Der Auftragnehmer ist berechtigt, dem Auftraggeber für jede Mahnung eine angemessene Aufwandsentschädigung in Höhe von bis zu 15,00 € zu berechnen. 7.9 Vergütungen und Nebenkosten sind Nettobeträge (sofern nicht anders angegeben), die zuzüglich Mehrwertsteuer zu zahlen sind. 7.10. Für alle Leistungen kann der Auftragnehmer nach Absprache mit dem Auftraggeber eine Vorauszahlung in Höhe von bis zu 50% des Auftragswertes verlangen. Ist eine Vorauszahlung vereinbart, so beginnt der Auftragnehmer erst nach Erhalt der Gutschrift mit der Ausführung der Leistungen. Bis dahin ruht der Auftrag im gegenseitigen Einvernehmen. 7.11. Kosten für Dritte können als vollständige Vorauszahlung in Rechnung gestellt werden. 7.12. Die Zahlung für Änderungen oder Ergänzungen der Leistung ist nach Erbringung der Leistung fällig. Verauslagte Mehrkosten sind nach Aufwand zu vergüten. 7.13. Die Beauftragung von Fremdleistungen im Zuge der Durchführung der Nutzung (Druck, Lithografie, Medienplatzierung, Webhosting, Versand etc.) wird vom Auftragnehmer in Rechnung gestellt. 7.14. Ein Recht zur Aufrechnung steht dem Auftraggeber nur zu, wenn seine Gegenansprüche rechtskräftig festgestellt, unbestritten oder vom Auftragnehmer anerkannt sind. Zur Ausübung eines Zurückbehaltungsrechtes ist der Auftraggeber nur insoweit befugt, als sein Gegenanspruch auf dem gleichen Vertragsverhältnis beruht. ',
		},
		{
			title: 'Gewährleistung',
			desc: ' Ist das Geschäft für beide Seiten ein Handelsgeschäft, so ist der Besteller zur Geltendmachung von Gewährleistungspflichten verpflichtet, seinen Untersuchungs- und Rügeobliegenheiten gemäß §§ 343, 377 HGB nachzukommen. Handelt es sich bei dem Geschäft nicht um ein Handelsgeschäft im Sinne des § 343 HGB, so ist der Besteller gleichwohl zur Untersuchung und Rüge der Ware gemäß § 121 BGB verpflichtet. 8.2 Es wird ausdrücklich darauf hingewiesen, dass es nach dem Stand der Technik nicht möglich ist, Software und Internetanwendungen so zu entwickeln, dass sie unter allen Anwendungsbedingungen fehlerfrei arbeiten. Der Maßstab für die Fehlerfreiheit ist daher der Stand der Technik. Der Auftragnehmer leistet insoweit nur Gewähr dafür, dass die erbrachten Lieferungen und Leistungen den vereinbarten Anforderungen und unabdingbaren Leistungsmerkmalen entsprechen. 8.3 Die Gewährleistung erfolgt in Form der Nachbesserung. Der Auftraggeber hat dem Auftragnehmer eine angemessene Frist zur Nachbesserung zu gewähren. Die Leistungen können bis zu dreimal erbracht werden. Der Auftragnehmer kann nach seiner Wahl den Mangel dadurch beheben, dass er dem Auftraggeber eine neue Version der Anwendung zur Verfügung stellt oder ihm Möglichkeiten aufzeigt, die Auswirkungen des Mangels zu vermeiden. Eine vollständige Beseitigung des Mangels durch Nachbesserung ist nicht in jedem Fall möglich. Eine neue Version der Anwendung ist vom Auftraggeber auch dann zu akzeptieren, wenn dies zu einem für den Auftraggeber zumutbaren Anpassungsaufwand führt. 8.4 Schlägt die Nachbesserung endgültig fehl, hat der Besteller ein Recht auf Minderung des Kaufpreises. Die Vergütung ist in dem Umfang der Minderung angemessen herabzusetzen. Schadensersatzansprüche richten sich nach § 9. Andere Gewährleistungsrechte, insbesondere Ansprüche auf Ersatz von Aufwendungen für Nachbesserung durch Dritte, Neulieferung, vertragliche Quoten, sind ausgeschlossen. ',
		},
		{
			title: 'Haftung',
			desc: 'Der Auftragnehmer haftet nur für vorsätzlich oder grob fahrlässig verursachte und zum Zeitpunkt des Vertragsabschlusses vorhersehbare Schäden wie folgt: Im Falle des Vorsatzes haftet der Auftragnehmer in voller Höhe. Bei grober Fahrlässigkeit oder bei Fehlen einer zugesicherten Eigenschaft ist die Haftung auf das Doppelte der nach dem jeweiligen Vertrag geschuldeten Vergütung beschränkt. 9.2 Gerät der Auftragnehmer aus Gründen, die er zu vertreten hat, in Verzug, so ist die Schadensersatzhaftung des Auftragnehmers im Falle leichter Fahrlässigkeit auf den bei Vertragsschluss vorhersehbaren typischen Schaden, höchstens jedoch auf die Hälfte der vereinbarten Vergütung beschränkt. Weitergehende Schadensersatzansprüche setzen voraus, dass der Auftragnehmer die Verzögerung vorsätzlich oder grob fahrlässig zu vertreten hat. 9.3 Wird der Liefertermin aufgrund von Umständen, die dem Auftragnehmer von außen auferlegt werden, nicht eingehalten, so haftet der Auftragnehmer nicht. 9.4 Kommt der Auftraggeber in Annahmeverzug oder verletzt er sonstige Mitwirkungspflichten, so ist der Auftragnehmer berechtigt, den ihm entstehenden Schaden, einschließlich etwaiger Mehraufwendungen, vom Auftraggeber ersetzt zu verlangen. Die Gefahr der zufälligen Unbrauchbarkeit oder Verschlechterung der Ware geht in dem Zeitpunkt auf den Auftraggeber über, in dem dieser in Annahmeverzug gerät. 9.5 Der Auftraggeber stellt den Auftragnehmer von jeglicher Haftung für den Inhalt von Nachrichten, Websites oder Werbebannern frei und sorgt dafür, dass kein Material übermittelt wird, das die Rechte Dritter verletzt. Die Freigabe der Produktion und/oder Veröffentlichung obliegt dem Auftraggeber. Überträgt der Auftraggeber ausnahmsweise die Freigabe ganz oder in Teilen auf den Auftragnehmer, so stellt er den Auftragnehmer von der Haftung frei. Der Auftragnehmer haftet in keiner Weise für Bild- oder Textmaterial. 9.6 Der Auftraggeber hat dafür Sorge zu tragen, dass sämtliche Urheberrechte des Auftragnehmers auch Dritten eingeräumt werden. 9.7 Der Auftraggeber ist verpflichtet, dem Auftragnehmer jeden Schaden zu ersetzen, der dem Auftragnehmer durch Fahrlässigkeit des Auftraggebers entsteht. 9.8 Der Auftragnehmer haftet nicht für Schäden am Produkt, die durch Handlungen des Auftraggebers oder eines vom Auftraggeber beauftragten Dritten verursacht werden. 9.9 Der Auftragnehmer haftet nicht für Schäden, die durch Dritte verursacht werden. ',
		},
		{
			title: 'Urheberrechte und Rechteeinräumung',
			desc: 'Die vom Auftragnehmer erstellte oder gelieferte Anwendung unterliegt dem Urheberrecht. Alle Rechte hieran stehen im Verhältnis zwischen den Vertragspartnern ausschließlich dem Auftragnehmer zu. Soweit die Rechte Dritten zustehen, haben diese entsprechende Verwertungsrechte. 10.2 Dem Auftraggeber wird im Rahmen des Vertrages die umfassende und nicht ausschließliche Befugnis eingeräumt, eine Anwendung in der in den nachfolgenden Bestimmungen beschriebenen Weise zu nutzen. a) Der Besteller darf die Anwendung auf den Arbeitsspeicher und die Festplatten seines Internet-Rechners und ggf. der Rechner seines Providers laden und für eigene Zwecke nutzen. Er darf darüber hinaus die für den sicheren Betrieb erforderlichen Sicherungskopien erstellen. Eine Vervielfältigung der Anwendung und die Verbreitung über dieses Maß hinaus, ist ihm untersagt. Dem Kunden ist es jedoch gestattet, Textkorrekturen in der Anwendung vorzunehmen und ggf. Bilder und Inhalte auszutauschen. Die Anwendung darf jedoch nur für eigene Zwecke des Bestellers genutzt werden. b) Der Auftraggeber ist nur dann berechtigt, die Anwendungen zur Herstellung der Interoperabilität zu dekompilieren, wenn der Auftragnehmer die zur Herstellung der Interoperabilität erforderlichen Informationen und Unterlagen trotz schriftlicher Aufforderung durch den Auftraggeber nicht innerhalb einer angemessenen Frist und gegen eine angemessene Vergütung zur Verfügung gestellt hat. c) Alle anderen Formen der Verwertung der Anwendung, insbesondere die Übersetzung, Bearbeitung, das Arrangement und sonstige Umarbeitungen sind untersagt. Dem Kunden ist es nicht gestattet, die Anwendung zu verleihen oder zu vermieten. ',
		},
		{
			title: 'Urheberrechte und Rechteeinräumung',
			desc: 'Der Kunde hat keinen Anspruch auf Herausgabe des Quellcodes und der Entwicklungsdokumentation. 10.4 Stellt der Auftraggeber dem Auftragnehmer im Rahmen der Gestaltung der Anwendung Daten, Texte, Bilder, Fotos, Film- oder Tondokumente zur Verfügung, so hat der Auftraggeber dafür Sorge zu tragen, dass diese Beistellungen frei von Rechten Dritter sind und im Rahmen des vertraglich vorgesehenen Zwecks genutzt werden können. Insoweit stellt der Auftraggeber den Auftragnehmer von allen Ansprüchen Dritter frei. 10.5 Der Auftraggeber ist nur mit vorheriger schriftlicher Zustimmung des Auftragnehmers berechtigt, die von ihm erstellten Anwendungen ganz oder teilweise in eigene oder fremde Unterlagen einzubinden oder Dritten entgeltlich oder unentgeltlich zur Verfügung zu stellen. Der Auftragnehmer kann für die Nutzung von Leistungen durch ihn in einer anderen als der vertraglich vorgesehenen Form Lizenzgebühren erheben. Jede anderweitige Nutzung der Lieferung oder Leistung durch den Auftragnehmer bedarf der vorherigen schriftlichen Zustimmung des Auftragnehmers. 10.6 Der Auftragnehmer ist berechtigt, in allen von ihm erstellten Unterlagen, Programmen, Anwendungen usw. einen Urheberrechtsvermerk anzubringen, der ihn als Urheber ausweist. Dieser Urheberrechtsvermerk darf vom Auftraggeber nicht für andere Zwecke verwendet werden. ',
		},
		{
			title: 'Widerrufsvorbehalt',
			desc: 'Der Besteller ist bereits vor der vollständigen Zahlung zur Nutzung der Anwendung gemäß den vertraglichen Bestimmungen berechtigt. 11.2. Der Auftragnehmer kann die Nutzungsbefugnis aus wichtigem Grund widerrufen. Ein wichtiger Grund liegt insbesondere vor, wenn der Besteller in Zahlungsverzug gerät, die Nutzungsbeschränkungen für die Anwendung nicht einhält oder gegen die Geheimhaltungsverpflichtung verstößt und diese Verhaltensweise auch auf schriftliche Abmahnung hin nicht sofort unterlässt. 11.3. Bei Widerruf der Nutzungsbefugnis hat der Besteller alle Lieferungen und Leistungen herausgezogen und gespeicherte Anwendungen zu löschen. Die Löschung ist gegenüber dem Auftragnehmer schriftlich zu versichern. ',
		},
		{
			title: 'Geheimhaltung',
			desc: 'Die Vertragspartner verpflichten sich, alle im Rahmen der Vertragsdurchführung vom jeweils anderen Vertragspartner zugehenden oder bekannt werdenden Informationen und Unterlagen vertraulich zu behandeln. Die Vertragspartner verwahren und sichern diese Gegenstände so, dass ein Missbrauch durch Dritte ausgeschlossen ist. 12.2. Mitarbeiter der Vertragspartner und an der Durchführung beteiligte Dritte, die dienstlich Zugang zu den in Absatz 11.1. genannten Gegenständen haben, sind schriftlich über die Geheimhaltungsverpflichtung zu belehren. Für die Mitarbeiter des Bestellers gilt dies auch hinsichtlich der Rechtsverhältnisse an der Software und den Befugnissen des Bestellers gemäß § 10. § 13 Gerichtsstand und Erfüllungsort 13.1. Für diesen Vertrag und seine Bestandteile ist deutsches Recht maßgebend. Gerichtsstand und Erfüllungsort für beide Teile ist unser Firmensitz, sofern das Gesetz keinen anderen Gerichtstand ausdrücklich vorschreibt.',
		},
		{
			title: 'Salvatorische Klausel',
			desc: 'Die Unwirksamkeit einer oder mehrere der vorstehenden Bestimmungen lässt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die den mit ihr verfolgten wirtschaftlichen Zweck so weit wie möglich verwirklicht. Gleiches gilt für etwaige Vertragslücken  ',
		},
	];
	return (
		<section className={styles['policy']}>
			<h2 className={styles['policy__title']}>
				Our <span className='text-colorPrimary'>Privacy Policies</span>
			</h2>

			{/* <span className={styles['policy__last-update']}>
				Last update: 25.08.2022
			</span> */}

			<h3 className={styles['policy__subtitle']}>DATENSCHUTZ </h3>
			<p className={styles['policy__desc']}>
				Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
				Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
				vertraulich und entsprechend der gesetzlichen
				Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die
				Nutzung unserer Webseite ist in der Regel ohne Angabe
				personenbezogener Daten möglich. Soweitauf unseren Seiten
				personenbezogene Daten (beispielsweise Name, Anschrift oder
				E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
				stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
				ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir
				weisen darauf hin, dass die Datenübertragung im Internet (z.B.
				bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
				kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
				Dritte ist nicht möglich. COOKIES Die Internetseiten verwenden
				teilweise so genannte Cookies.
			</p>
			<h3 className={styles['policy__subtitle']}>Cookies</h3>
			<p className={styles['policy__desc']}>
				richten auf Ihrem Rechner keinen Schaden an und enthalten keine
				Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
				effektiver und sicherer zu machen. Cookies sind kleine
				Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr
				Browser speichert. Die meisten der von uns verwendeten Cookies
				sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres
				Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem
				Endgerät gespeichert, bis Sie diese löschen. Diese Cookies
				ermöglichen es uns, Ihren Browser beim nächsten Besuch
				wiederzuerkennen. Sie können Ihren Browser so einstellen, dass
				Sie über das Setzen von Cookies informiert werden und Cookies
				nur im Einzelfall erlauben, die Annahme von Cookies für
				bestimmte Fälle oder generell ausschließen sowie das
				automatische Löschen der Cookies beim Schließen des Browser
				aktivieren. Bei der Deaktivierung von Cookies kann die
				Funktionalität dieser Website eingeschränkt sein.
			</p>
			<h3 className={styles['policy__subtitle']}>KONTAKTFORMULAR </h3>
			<p className={styles['policy__desc']}>
				Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
				werden Ihre Angaben aus dem Anfrageformular inklusive der von
				Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
				Anfrage und für den Fall von Anschlussfragen bei uns
				gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
				weiter.
			</p>
			<h3 className={styles['policy__subtitle']}>NEWSLETTERDATEN</h3>
			<p className={styles['policy__desc']}>
				Wenn Sie den auf der Webseite angebotenen Newsletter beziehen
				möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
				Informationen, welche uns die Überprüfung gestatten, dass Sie
				der Inhaber der angegebenen E-Mail-Adresse sind und mit dem
				Empfang des Newsletters einverstanden sind. Weitere Daten werden
				nicht erhoben. Diese Daten verwenden wir ausschließlich für den
				Versand der angeforderten Informationen und geben sie nicht an
				Dritte weiter. Die erteilte Einwilligung zur Speicherung der
				Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des
				Newsletters können Sie jederzeit widerrufen, etwa über den
				„Austragen“-Link im Newsletter.
			</p>
			<h3 className={styles['policy__subtitle']}>GOOGLE ANALYTICS </h3>
			<p className={styles['policy__desc']}>
				Diese Website nutzt Funktionen des Webanalysedienstes Google
				Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre
				Parkway Mountain View, CA 94043, USA. Google Analytics verwendet
				so genannte „Cookies“. Das sind Textdateien, die auf Ihrem
				Computer gespeichert werden und die eine Analyse der Benutzung
				der Website durch Sie ermöglichen. Die durch den Cookie
				erzeugten Informationen über Ihre Benutzung dieser Website
				werden in der Regel an einen Server von Google in den USA
				übertragen und dort gespeichert.
			</p>

			<h3 className={styles['policy__subtitle']}>IP-Anonymisierung</h3>
			<p className={styles['policy__desc']}>
				Wir haben auf dieser Webseite die Funktion IP-Anonymisierung
				aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von
				Mitgliedstaaten der Europäischen Union oder in anderen
				Vertragsstaaten des Abkommens über den Europäischen
				Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in
				Ausnahmefällen wird die volle IP-Adresse an einen Server von
				Google in den USA übertragen und dort gekürzt. Im Auftrag des
				Betreibers dieser Website wird Google diese Informationen
				benutzen, um Ihre Nutzung der Website auszuwerten, um Reports
				über die Websiteaktivitäten zusammenzustellen und um weitere mit
				der Websitenutzung und der Internetnutzung verbundene
				Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
				Die im Rahmen von Google Analytics von Ihrem Browser
				übermittelte IPAdresse wird nicht mit anderen Daten von Google
				zusammengeführt.
			</p>

			<h3 className={styles['policy__subtitle']}>
				Auftragsdatenverarbeitung{' '}
			</h3>
			<p className={styles['policy__desc']}>
				Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung
				abgeschlossen und setzen die strengen Vorgaben der deutschen
				Datenschutzbehörden bei der Nutzung von Google Analytics
				vollständig um.
			</p>

			<h3 className={styles['policy__subtitle']}>Demografische </h3>
			<p className={styles['policy__desc']}>
				Merkmale bei Google Analytics Diese Website nutzt die Funktion
				“demografische Merkmale” von Google Analytics. Dadurch können
				Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und
				Interessen der Seitenbesucher enthalten. Diese Daten stammen aus
				interessenbezogener Werbung von Google sowie aus Besucherdaten
				von Drittanbietern. Diese Daten können keiner bestimmten Person
				zugeordnet werden. Sie können diese Funktion jederzeit über die
				Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder
				die Erfassung Ihrer Daten durch Google Analytics wie im Punkt
				“Widerspruch gegen Datenerfassung” dargestellt generell
				untersagen.
			</p>

			<h3 className={styles['policy__subtitle']}>
				FACEBOOK-PLUGINS (LIKE-BUTTON){' '}
			</h3>
			<p className={styles['policy__desc']}>
				Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook,
				Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California
				94025, USA, integriert. Die Facebook-Plugins erkennen Sie an dem
				Facebook-Logo oder dem „Like-Button“ („Gefällt mir“) auf unserer
				Seite. Wenn Sie unsere Seiten besuchen, wird über das Plugin
				eine direkte Verbindung zwischen Ihrem Browser und dem
				Facebook-Server hergestellt. Facebook erhält dadurch die
				Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht
				haben. Wenn Sie den Facebook „Like-Button“ anklicken während Sie
				in Ihrem Facebook-Account eingeloggt sind, können Sie die
				Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinken.
				Dadurch kann Facebook den Besuch unserer Seiten Ihrem
				Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als
				Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten
				Daten sowie deren Nutzung durch Facebook erhalten. Wenn Sie
				nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem
				Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus
				Ihrem Facebook-Benutzerkonto aus.
			</p>

			<h3 className={styles['policy__subtitle']}>TWITTER</h3>
			<p className={styles['policy__desc']}>
				Auf unseren Seiten sind Funktionen des Dienstes Twitter
				eingebunden. Diese Funktionen werden angeboten durch die Twitter
				Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103,
				USA. Durch das Benutzen von Twitter und der Funktion „Re-Tweet“
				werden die von Ihnen besuchten Webseiten mit Ihrem
				Twitter-Account verknüpft und anderen Nutzern bekannt gegeben.
				Dabei werden auch Daten an Twitter übertragen. Wir weisen darauf
				hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt
				der übermittelten Daten sowie deren Nutzung durch Twitter
				erhalten.
			</p>
			<h3 className={styles['policy__subtitle']}>GOOGLE+</h3>
			<p className={styles['policy__desc']}>
				Unsere Seiten nutzen Funktionen von Google+. Anbieter ist die
				Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043,
				USA. Erfassung und Weitergabe von Informationen: Mithilfe der
				Google+-Schaltfläche können Sie Informationen weltweit
				veröffentlichen. Über die Google+-Schaltfläche erhalten Sie und
				andere Nutzer personalisierte Inhalte von Google und unseren
				Partnern. Google speichert sowohl die Information, dass Sie für
				einen Inhalt +1 gegeben haben, als auch Informationen über die
				Seite, die Sie beim Klicken auf +1 angesehen haben. Ihre +1
				können als Hinweise zusammen mit Ihrem Profilnamen und Ihrem
				Foto in Google-Diensten, wie etwa in Suchergebnissen oder in
				Ihrem Google-Profil, oder an anderen Stellen auf Websites und
				Anzeigen im Internet eingeblendet werden. Google zeichnet
				Informationen über Ihre +1-Aktivitäten auf, um die
				Google-Dienste für Sie und andere zu verbessern. Um die
				Google+-Schaltfläche verwenden zu können, benötigen Sie ein
				weltweit sichtbares, öffentliches Google-Profil, das zumindest
				den für das Profil gewählten Namen enthalten muss. Dieser Name
				wird in allen Google-Diensten verwendet. In manchen Fällen kann
				dieser Name auch einen anderen Namen ersetzen, den Sie beim
				Teilen von Inhalten über Ihr Google-Konto verwendet haben. Die
				Identität Ihres Google-Profils kann Nutzern angezeigt werden,
				die Ihre E-Mail-Adresse kennen oder über andere identifizierende
				Informationen von Ihnen verfügen. Verwendung der erfassten
				Informationen: Neben den oben erläuterten Verwendungszwecken
				werden die von Ihnen bereitgestellten Informationen gemäß den
				geltenden Google-Datenschutzbestimmungen genutzt. Google
				veröffentlicht möglicherweise zusammengefasste Statistiken über
				die +1-Aktivitäten der Nutzer bzw. gibt diese an Nutzer und
				Partner weiter, wie etwa Publisher, Inserenten oder verbundene
				Websites.
			</p>
			<h3 className={styles['policy__subtitle']}>LINKEDIN</h3>
			<p className={styles['policy__desc']}>
				Unsere Website nutzt Funktionen des Netzwerks LinkedIn. Anbieter
				ist die LinkedIn Corporation, 2029 Stierlin Court, Mountain
				View, CA 94043, USA. Bei jedem Abruf einer unserer Seiten, die
				Funktionen von LinkedIn enthält, wird eine Verbindung zu Servern
				von LinkedIn aufbaut. LinkedIn wird darüber informiert, dass Sie
				unsere Internetseiten mit Ihrer IP-Adresse besucht haben. Wenn
				Sie den „Recommend-Button“ von LinkedIn anklicken und in Ihrem
				Account bei LinkedIn eingeloggt sind, ist es LinkedIn möglich,
				Ihren Besuch auf unserer Internetseite Ihnen und Ihrem
				Benutzerkonto zuzuordnen. Wir weisen darauf hin, dass wir als
				Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten
				Daten sowie deren Nutzung durch LinkedIn haben.
			</p>
			<h3 className={styles['policy__subtitle']}>XING </h3>
			<p className={styles['policy__desc']}>
				Unsere Webseite nutzt Funktionen des Netzwerks XING. Anbieter
				ist die XING AG, Dammtorstraße 29- 32, 20354 Hamburg,
				Deutschland. Bei jedem Abruf einer unserer Seiten, die
				Funktionen von XING enthält, wird eine Verbindung zu Servern von
				XING hergestellt. Eine Speicherung von personenbezogenen Daten
				erfolgt dabei nach unserer Kenntnis nicht. Insbesondere werden
				keine IPAdressen gespeichert oder das Nutzungsverhalten
				ausgewertet.
			</p>
			<h3 className={styles['policy__subtitle']}>SSL-VERSCHLÜSSELUNG</h3>
			<p className={styles['policy__desc']}>
				Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
				Übertragung vertraulicher Inhalte, wie zum Beispiel der
				Anfragen, die Sie an uns als Seitenbetreiber senden, eine
				SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
				daran, dass die Adresszeile des Browsers von „http://“ auf
				„https://“ wechselt und an dem Schloss-Symbol in Ihrer
				Browserzeile. Wenn die SSL Verschlüsselung aktiviert ist, können
				die Daten, die Sie an uns übermitteln, nicht von Dritten
				mitgelesen werden.
			</p>
			<h3 className={styles['policy__subtitle']}>
				WIDERSPRUCH WERBE-MAILS{' '}
			</h3>
			<p className={styles['policy__desc']}>
				Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
				Kontaktdaten zur Übersendung von nicht ausdrücklich
				angeforderter Werbung und Informationsmaterialien wird hiermit
				widersprochen. Die Betreiber der Seiten behalten sich
				ausdrücklich rechtliche Schritte im Falle der unverlangten
				Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
				Quelle:
				https://www.e-recht24.de/muster-datenschutzerklaerung.html
			</p>

			<h3 className={styles['policy__subtitle']}>Imperssum</h3>
			<p className={styles['policy__desc']}>
				Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
			</p>

			<h3 className={styles['policy__subtitle']}>
				IRoot Technology GmbH
			</h3>
			<p className={styles['policy__desc']}>
				Castroper-Straße 273 44791 Bochum, DE
			</p>

			<h3 className={styles['policy__subtitle']}>Geschäftsführer:</h3>

			<p className={styles['policy__desc']}>Hakam Hasoneh</p>
			<h3 className={styles['policy__subtitle']}>Sitz / Amtsgericht:</h3>
			<p className={styles['policy__desc']}>Bochum HRB 20492</p>

			<h3 className={styles['policy__subtitle']}>Kontaktdaten:</h3>
			<p className={styles['policy__desc']}>
				Telefon:{' '}
				<Link href={'tel:+4917648985373'}>(+49) 176 48985373</Link>
				<br />
				Telefax: beantragt
				<br />
				Email:{' '}
				<Link
					className='text-colorPrimary'
					href={'mailto:Sales@iroottech.com'}>
					Sales@iroottech.com
				</Link>
				<br />
				Web:
				<Link className='text-colorPrimary' href={'www.iroottech.com'}>
					www.iroottech.com
				</Link>{' '}
				/{' '}
				<Link className='text-colorPrimary' href={'www.iroottech.de'}>
					www.iroottech.de
				</Link>
			</p>

			<h3 className={styles['policy__subtitle']}>Umsatzsteuer-ID:</h3>
			<p className={styles['policy__desc']}>
				Umsatzsteuer-Identifikationsnummer gemäß §27 a
				Umsatzsteuergesetz: 36509761427
			</p>

			<h3 className={styles['policy__subtitle']}>
				Angaben zur Betriebshaftpflicht:
			</h3>
			<p className={styles['policy__desc']}>
				Zertifikat und weitere Informationen: Haftpflichtversicherung -
				beantragt
				<br />
				Geltungsbereich: weltweit
			</p>

			<h3 className={styles['policy__subtitle']}>Haftungshinweis</h3>
			<p className={styles['policy__desc']}>
				Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
				Haftung für die Inhalte externer Links. Für den Inhalt der
				verlinkten Seiten sind ausschließlich deren Betreiber
				verantwortlich.
			</p>

			<h3 className={styles['policy__subtitle']}>Haftung für Inhalte:</h3>

			<p className={styles['policy__desc']}>
				Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
				Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
				können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
				sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
				Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
				bis 10 TMG sind wir als Diensteanbieter jedoch nicht
				verpflichtet, übermittelte oder gespeicherte fremde
				Informationen zu überwachen oder nach Umständen zu forschen, die
				auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
				Entfernung oder Sperrung der Nutzung von Informationen nach den
				allgemeinen Gesetzen bleiben hiervon unberührt. Eine
				diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
				Kenntnis einer konkreten Rechtsverletzung möglich. Bei
				Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
				diese Inhalte umgehend entfernen.
			</p>

			<h3 className={styles['policy__subtitle']}>Haftung für Links:</h3>

			<p className={styles['policy__desc']}>
				Unser Angebot enthält Links zu externen Webseiten Dritter, auf
				deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
				diese fremden Inhalte auch keine Gewähr übernehmen. Für die
				Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
				oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
				wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
				überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
				Verlinkung nicht erkennbar. Eine permanente inhaltliche
				Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
				Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
				Bekanntwerden von Rechtsverletzungen werden wir derartige Links
				umgehend entfernen.
			</p>

			<h3 className={styles['policy__subtitle']}>Urheberrecht:</h3>
			<p className={styles['policy__desc']}>
				Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
				diesen Seiten unterliegen dem deutschen Urheberrecht. Die
				Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
				Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
				schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
				Downloads und Kopien dieser Seite sind nur für den privaten,
				nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
				dieser Seite nicht vom Betreiber erstellt wurden, werden die
				Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
				Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
				Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
				entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
				werden wir derartige Inhalte umgehend entfernen.
			</p>
			{data.map((item, index) => (
				<Fragment key={index}>
					<Accordion title={`${index + 1}.${item.title}`}>
						{item.desc}
					</Accordion>
				</Fragment>
			))}
		</section>
	);
};
