package de.unistuttgart.ipvs.as.flexmash.BPMN;

import java.io.IOException;
import java.util.logging.Logger;

import javax.xml.soap.MessageFactory;
import javax.xml.soap.SOAPBody;
import javax.xml.soap.SOAPConnection;
import javax.xml.soap.SOAPConnectionFactory;
import javax.xml.soap.SOAPElement;
import javax.xml.soap.SOAPEnvelope;
import javax.xml.soap.SOAPException;
import javax.xml.soap.SOAPMessage;
import javax.xml.soap.SOAPPart;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;


public class NYTdsExe implements JavaDelegate {
	 private final Logger LOGGER = Logger.getLogger(NYTdsExe.class.getName());

	  public static boolean wasExecuted=false;

	  public void execute(DelegateExecution execution) throws Exception {
		  ExecutionHelper Helper = new ExecutionHelper();
		  try {
				// Create Connection
				SOAPConnectionFactory soapConnectionFactory = SOAPConnectionFactory.newInstance();
				SOAPConnection soapConnection = soapConnectionFactory.createConnection();

				// SOAP Message
				String url = Helper.getURLPath()+"NYTRSSExtractor";
				MessageFactory messageFactory = MessageFactory.newInstance();
				SOAPMessage soapMessage = messageFactory.createMessage();
				SOAPPart soapPart = soapMessage.getSOAPPart();

				// SOAP Envelope
				SOAPEnvelope envelope = soapPart.getEnvelope();
				envelope.addNamespaceDeclaration("sql", "http://sql.web_services.data_mashup.as.ipvs.uni_stuttgart.de");


				// SOAP Body
				SOAPBody soapBody = envelope.getBody();
				SOAPElement soapBodyElem = soapBody.addChildElement("extract", "sql");
				SOAPElement soapBodyElemA = soapBodyElem.addChildElement("address","sql");
				soapBodyElemA.addTextNode(Helper.getInput(execution).toString());
				soapMessage.saveChanges();

				/* Print the request message */
				System.out.print("Request SOAP Message:");
				try {
					soapMessage.writeTo(System.out);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				System.out.println();

				SOAPMessage soapResponse = soapConnection.call(soapMessage, url);
				
				// print SOAP Response
				System.out.print("Response SOAP Message:");
				try {
					soapResponse.writeTo(System.out);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

				soapConnection.close();
			} catch (SOAPException e) {
				e.printStackTrace();
			} 
		  
	  }
}