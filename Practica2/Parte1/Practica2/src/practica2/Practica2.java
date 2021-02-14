/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practica2;

/**
 *
 * @author Andrea
 */
import java.io.UnsupportedEncodingException;
import java.util.Arrays;
import java.util.Scanner;

import org.apache.commons.codec.binary.Base64;

public class Practica2 {

    /**
     * @param args
     */
    public static void main(String[] args) throws UnsupportedEncodingException {
        // ----- CODIFICAR
        String token = "";
        Base64 base64 = new Base64();

        String cadena1 = "{\n"
                + "  \"alg\": \"HS256\",\n"
                + "  \"typ\": \"JWT\"\n"
                + "}";
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter header: ");
        cadena1 = sc.nextLine();

        String cadenaHeader = "";
        cadenaHeader = base64.encodeToString(cadena1.getBytes());

        token = cadenaHeader;

        String cadena2 = "{\n"
                + "  \"name\": \"Andrea Maria Lopez Flores\",\n"
                + "  \"id\": 201404134\n"
                + "}";

        Scanner sc2 = new Scanner(System.in);
        System.out.print("Enter payload: ");
        cadena2 = sc2.nextLine();

        String cadenaPayload = "";
        cadenaPayload = base64.encodeToString(cadena2.getBytes());

        token += "." + cadenaPayload;

        String cadena3 = "al2onp0edz1frl4oer0eas4m1a3r4i12";

        Scanner sc3 = new Scanner(System.in);
        System.out.print("Enter secret: ");
        cadena3 = sc3.nextLine();

        String cadenaSecret;
        cadenaSecret = base64.encodeToString(cadena3.getBytes());

        token += "." + cadenaSecret;
        System.out.println(token);

        // ----- DECODIFICAR
        Scanner sc4 = new Scanner(System.in);
        System.out.print("Enter token: ");
        token = sc4.nextLine();

        String nueva = token.replace(".", "-");
        String[] partes = nueva.split("-");

        String deco_header = partes[0];
        String deco_payload = partes[1];
        String deco_secret = partes[2];

        byte[] decodedHeader = Base64.decodeBase64(deco_header);
        System.out.println(new String(decodedHeader, "UTF-8") + "\n");
        String cadena_header = new String(decodedHeader, "UTF-8");

        byte[] decodedPayload = Base64.decodeBase64(deco_payload);
        System.out.println(new String(decodedPayload, "UTF-8") + "\n");
        String cadena_payload = new String(decodedPayload, "UTF-8");

        byte[] decodedSecret = Base64.decodeBase64(deco_secret);
        System.out.println(new String(decodedSecret, "UTF-8") + "\n");
        String cadena_secret = new String(decodedSecret, "UTF-8");

        if (cadena_header.equals(cadena1) && cadena_payload.equals(cadena2) && cadena_secret.equals(cadena3)) {
            System.out.println("TOKEN VALIDO");
        } else {
            System.out.println("TOKEN NO VALIDO");
        }
    }
}
